window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	/*
	|--------------------------------------------------------------------------
	| Base Container MODEL
	|--------------------------------------------------------------------------
	|
	| This class represents the default model for a container.
	| The app will fallback to this class if a container has no dedicated model.
	|
	| A model is responsible for holding the containers current state (data).
	| It also holds all the logic surrounding the data management, like: 
	|  - conversion
	|  - validation
	|  - access control
	|
	*/
	carbon.containers.Model = Backbone.Model.extend({
		defaults: {
			'error': false,
			'visible': true,
			'has_changes': false,
			'classes': ''
		},

		initialize: function() {
			this.setClasses(['carbon-container', 'carbon-container-' + this.get('type')]);
		},

		setClasses: function(classes) {
			for (var i = 0; i < classes.length; i++) {
				this.addClass(classes[i]);
			}
		},

		addClass: function(newClass) {
			var classes = this.get('classes') || '';
			classes = classes ? classes.split(' ') : [];

			if ($.inArray(newClass, classes) === -1) {
				classes.push(newClass);
			}

			this.set('classes', classes.join(' '));
		},

		/*
		 * The validate method is an internal Backbone method.
		 * @see http://backbonejs.org/#Model-validate
		 */
		validate: function(attrs, options) {
			if (attrs.visible === false) {
				return false;
			}

			var hasErrors = false;
			var view = carbon.views[this.get('id')];

			_.each(view.fieldsCollection.models, function(field) {
				if (!field.isRequired()) {
					return;
				}

				if (field.isValid()) {
					field.set('error', false);
				} else {
					field.set('error', true);
					hasErrors = true;
					return;
				}
			});

			this.set('error', hasErrors);

			if (hasErrors) {
				return carbon_containers_l10n.please_fill_the_required_fields;
			}
		}
	});

	/*
	|--------------------------------------------------------------------------
	| Base Container VIEW
	|--------------------------------------------------------------------------
	|
	| Responsible for fields initialization and rendering.
	| Updates the container DOM (visibility, errors, etc..).
	| The app will fallback to this class if a container has no dedicated view.
	|
	| Views reflect what the applications data models look like.
	| They also listen to events and react accordingly.
	|
	| @element: .container-[id]
	| @holder:  carbon.views[id]
	|
	*/
	carbon.containers.View = Backbone.View.extend({
		/*
		 * Set the view DOM events
		 */
		events: {},

		/*
		 * Used to include additional variables that can be used inside the template
		 * Can be extended on the "field:beforeRender" event.
		 */
		templateVariables: {},

		initialize: function() {
			this.fieldsCollection = new carbon.fields.Collection(this.model.get('fields'));

			// Listen for adding fields in the collection and render them
			this.listenTo(this.fieldsCollection, 'add', this.renderField);

			// Listen for model changes in the fields collection.
			this.listenToOnce(this.fieldsCollection, 'change:value', this.changeListener);

			// Check the container visibility before it's rendered.
			// Containers are visible by default. Overwrite the checkVisibility method for custom logic.
			this.on('container:beforeRender', this.checkVisibility);

			// Repopulate the fields collection after the container is rendered
			this.on('container:rendered', this.setFields);

			// Check for not saved changes on "onbeforeunload"
			this.on('container:rendered form:invalid', this.onSaveAlert);
			this.on('form:valid', this.resetOnBeforeUnload);

			// Listen to visibility change
			this.listenTo(this.model, 'change:visible', this.toggleVisibility);
		},

		changeListener: function(model, collection) {
			this.model.set('has_changes', true);
		},

		checkVisibility: function() {
			this.model.set('visible', true);
		},

		toggleVisibility: function(model) {
			var id = model.get('id');
			var visible = model.get('visible');
			var $holder = carbon.views.main.$body.find('#' + id);

			$holder.toggle(visible);
		},

		onSaveAlert: function() {
			var _this = this;
			var oldCallback = window.onbeforeunload || $.noop;

			window.onbeforeunload = function() {
				var hasChanges = _this.model.get('has_changes');
				var postL10n = postL10n || {};
				var alert = postL10n.saveAlert ? postL10n.saveAlert : carbon_containers_l10n.changes_made_save_alert

				if (hasChanges && alert) {
					return alert;
				}

				return oldCallback();
			}
		},

		resetOnBeforeUnload: function() {
			window.onbeforeunload = null;
		},

		render: function() {
			var type = this.model.get('type');
			var template = carbon.template(type);

			this.templateVariables = _.extend(this.templateVariables, this.model.attributes, {
				container: this.model,
				fields: this.fieldsCollection.toJSON()
			});

			this.trigger('container:beforeRender');

			var containerHTML = template(this.templateVariables);

			this.$el.html(containerHTML)
			this.trigger('container:rendered');

			return this;
		},

		setFields: function() {
			this.fieldsCollection.reset(); // Need to clear the collection, otherwise no events will trigger
			this.fieldsCollection.set(this.model.get('fields')); // This will emit the "add" event
		},

		// Render a field when its added in the fieldsCollection
		renderField: function(model, collection) {
			var type = model.get('type');
			var id = model.get('id');

			var FieldView = carbon.fields.View[type];
			if (typeof FieldView === 'undefined') {
				FieldView = carbon.fields.View; // Fallback to the base view
			}

			carbon.views[id] = new FieldView({
				el: '.' + id,
				model: model
			});

			carbon.views[id].render();
		},

		validateForm: function(event) {
			var _this = event.data; 			// the view object
			var $target = $(event.currentTarget);
			var $errorHolder = $('.carbon-error-required');
			var valid = _this.model.isValid(); 	// this method will also set the validationError
			var errorText = _this.model.validationError;

			if (valid) { 						// valid
				_this.trigger('form:valid');

				if (event.type === 'click') {
					$errorHolder.slideUp(function() {
						$(this).remove();
					});
				}
			} else { 							// invalid
				_this.trigger('form:invalid');

				if (errorText) {
					if ($errorHolder.length) {
						$errorHolder.find('strong').text(errorText);
					} else {
						$errorHolder = $('<div class="settings-error error hidden below-h2 carbon-error-required"><p><strong>' + errorText + '</strong></p></div>');
						$errorHolder.insertAfter('#wpbody-content > .wrap > h2').slideDown();
					}
				}

				if ($target.is('#post')) {
					$target.find('#publish').removeClass('button-primary-disabled disabled');
					$target.find('#ajax-loading, #publishing-action .spinner').attr('style','');
				}

				if (event.type === 'click') {
					event.stopImmediatePropagation();
				}

				event.preventDefault();
			}
		}
	});

	/*
	|--------------------------------------------------------------------------
	| Base Container COLLECTION
	|--------------------------------------------------------------------------
	|
	| Holds a set of container models.
	| Also includes model class initialization logic.
	| 
	*/
	carbon.containers.Collection = Backbone.Collection.extend({
		model: function(attrs, options) {
			var ContainerModel = carbon.containers.Model[attrs.type];

			// Set the container model. If the model is not found, fallback to the base model
			if (typeof ContainerModel === 'undefined') {
				ContainerModel = carbon.containers.Model; // Fallback to the base model
			}

			return new ContainerModel(attrs, options);
		}
	});

	/******************************** BASE END ********************************/



	/*--------------------------------------------------------------------------
	 * CUSTOM FIELDS
	 *------------------------------------------------------------------------*/

	// CustomFields MODEL
	carbon.containers.Model.CustomFields = carbon.containers.Model.extend({
		defaults: {
			'page_template': 'default',
			'level': 1,
			'parent_id': null,
			'post_format': null,
			'terms': []
		}
	});

	// CustomFields VIEW
	carbon.containers.View.CustomFields = carbon.containers.View.extend({
		initialize: function() {
			carbon.containers.View.prototype.initialize.apply(this);

			this.$form = this.$el.closest('form#post');
			this.$form.on('submit', null, this, this.validateForm);

			this.syncTemplate();
			this.syncParent();
			this.syncLevel();
			this.syncPostFormat();
			this.syncTaxonomy();

			this.listenTo(this.model, 'change:page_template change:parent_id change:level change:post_format change:terms', this.checkVisibility);
		},

		syncTemplate: function() {
			var _this = this;
			var $select = $('select#page_template');

			$select
				.on('change', function(event) {
					var template = $(this).val();

					_this.model.set('page_template', template);
				})
				.trigger('change');
		},

		syncParent: function() {
			var _this = this;
			var $select = $('select#parent_id');

			$select
				.on('change', function(event) {
					var parentId = parseInt($(this).val());

					_this.model.set('parent_id', parentId);
				})
				.trigger('change');
		},

		syncLevel: function() {
			var _this = this;
			var $select = $('select#parent_id');

			$select
				.on('change', function(event) {
					var levelClass = $(this).find('option:checked').attr('class');
					var level = levelClass ? parseInt(levelClass.match(/^level-(\d+)/)[1]) + 1: 1;

					_this.model.set('level', level);
				})
				.trigger('change');
		},

		syncPostFormat: function() {
			var _this = this;
			var $radio = $('input[name="post_format"]');

			$radio
				.on('change', function(event) {
					var checked = $(this).is(':checked');
					var postFormat = $(this).val();

					if (checked) {
						_this.model.set('post_format', postFormat);
					}
				})
				.trigger('change');
		},

		syncTaxonomy: function() {
			var _this = this;
			var settings = this.model.get('settings');
			var taxonomy = settings.show_on.tax_slug;
			var termId = settings.show_on.tax_term_id;
			var $holder = $('#taxonomy-' + taxonomy);
			var $input = $('.' + taxonomy + 'checklist input');

			if (!taxonomy || !termId || !$holder.length) {
				return false;
			}

			$holder.on('change', $input.selector, function(event) {
				var checked = $(this).is(':checked');
				var termId = parseInt($(this).val());
				var terms = _this.model.get('terms');

				if (checked) {
					terms.push(termId);
				} else {
					var index = terms.indexOf(termId);

					if (index !== -1) {
						terms.splice(index, 1);
					}
				}

				terms = _.uniq(terms);

				_this.model.set('terms', terms);
				_this.model.trigger('change:terms');
			});

			$input.trigger('change')
		},

		checkVisibility: function(model) {
			var _this = this;
			var settings = this.model.get('settings');
			var visible = true;

			_.each(settings.show_on, function(req, type) {
				if ( !req || ( _.isArray(req) && _.isEmpty(req) ) ) {
					return;
				}

				switch(type) {
					case 'template_names':
						var template = _this.model.get('page_template');

						if ($.inArray(template, req) === -1) {
							visible = false;
						}
					break;

					case 'not_in_template_names':
						var template = _this.model.get('page_template');
						
						if ($.inArray(template, req) !== -1) {
							visible = false;
						}
					break;

					case 'parent_page_id':
						var parentId = _this.model.get('parent_id');

						if (parentId != req) {
							visible = false;
						}
					break;

					case 'level_limit':
						var level = _this.model.get('level');


						if (level != req) {
							visible = false;
						}
					break;

					case 'post_formats':
						var post_format = _this.model.get('post_format');

						if ($.inArray(post_format, req) === -1) {
							visible = false;
						}
					break;

					case 'tax_slug':
						var terms = _this.model.get('terms');
						var termId = settings.show_on.tax_term_id;

						if ($.inArray(termId, terms) === -1) {
							visible = false;
						}
					break;
				}
			});

			this.model.set('visible', visible);
		}
	});


	/*--------------------------------------------------------------------------
	 * THEME OPTIONS
	 *------------------------------------------------------------------------*/

	// ThemeOptions VIEW
	carbon.containers.View.ThemeOptions = carbon.containers.View.extend({
		initialize: function() {
			carbon.containers.View.prototype.initialize.apply(this);

			this.$form = this.$el.closest('form#theme-options-form');
			this.$form.on('submit', null, this, this.validateForm);
		}
	});


	/*--------------------------------------------------------------------------
	 * TERM META
	 *------------------------------------------------------------------------*/

	// TermMeta VIEW
	carbon.containers.View.TermMeta = carbon.containers.View.extend({
		initialize: function() {
			carbon.containers.View.prototype.initialize.apply(this);

			var _this = this;

			/* Edit Form */
			this.$editForm = this.$el.closest('form#edittag');
			this.$editForm.on('submit', null, this, this.validateForm);

			/* Add Form */
			this.$addForm = this.$el.closest('form#addtag');
			this.$submitButton = this.$addForm.find('#submit');

			// Fields validation should run before WP validation.
			// The 'bindFirst'custom method is used to move our event at the top of the events stack.
			// This is required because WP stops the click event propagation.
			this.$submitButton.bindFirst('click', this, this.validateForm);

			/* Ajax Monitor */
			carbon.views.main.$el.ajaxSuccess(function() {
				_this.initMonitor.apply(_this, arguments);
			});
		},

		initMonitor: function(event, jqXHR, ajaxOptions) {
			if (jqXHR.status != 200 || !ajaxOptions.data.length) {
				return;
			}

			var id = this.model.get('id');
			if (ajaxOptions.data.indexOf('carbon_panel_' + id) !== -1) {
				carbon.collections.containers.reset();
			}
		}
	});


	/*--------------------------------------------------------------------------
	 * USER META
	 *------------------------------------------------------------------------*/

	// UserMeta MODEL
	carbon.containers.Model.UserMeta = carbon.containers.Model.extend({
		defaults: {
			'role': null
		}
	});

	// UserMeta VIEW
	carbon.containers.View.UserMeta = carbon.containers.View.extend({
		initialize: function() {
			carbon.containers.View.prototype.initialize.apply(this);

			this.$form = this.$el.closest('form#your-profile, form#createuser');
			this.$form.on('submit', null, this, this.validateForm);

			this.syncRole();

			this.listenTo(this.model, 'change:role', this.checkVisibility);
		},

		syncRole: function() {
			var _this = this;
			var $select = $('select#role');
			var profileRole = this.$el.data('profile-role');

			this.model.set('role', profileRole);

			$select.on('change', function(event) {
				var role = $(this).val();

				_this.model.set('role', role);
			});

		},

		checkVisibility: function(model) {
			var _this = this;
			var settings = this.model.get('settings');
			var profileRole = this.model.get('role');
			var roles = settings.show_on.role || [];
			var visible = true;

			if (roles.length && $.inArray(profileRole, roles) === -1) {
				visible = false;
			}

			this.model.set('visible', visible);
		}
	});


	/*--------------------------------------------------------------------------
	 * WIDGETS
	 *------------------------------------------------------------------------*/

	// Widget MODEL
	carbon.containers.Model.Widget = carbon.containers.Model.extend({
		initialize: function() {
			carbon.containers.Model.prototype.initialize.apply(this);

			var cid = this.cid;
			var fields = this.get('fields');

			_.each(fields, function(field) {
				field.id = field.id + '-' + cid;
				field.lazyload = false; // disable lazyloading in widgets
			});

			this.set('fields', fields);
		}
	});

	// Widget VIEW
	carbon.containers.View.Widget = carbon.containers.View.extend({
		initialize: function() {
			carbon.containers.View.prototype.initialize.apply(this);

			this.$submitButton = this.$el.closest('form').find('input[type="submit"]');
			this.$submitButton
				.off('click', this.validateForm)
				.on('click', null, this, this.validateForm);
		}
	});

}(jQuery));