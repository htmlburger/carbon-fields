window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	/*
	|--------------------------------------------------------------------------
	| Base Field MODEL
	|--------------------------------------------------------------------------
	|
	| This class represents the default model for a field.
	| The app will fallback to this class if a field has no dedicated model.
	|
	| A model is responsible for holding the fields current state (data).
	| It also has all the logic surrounding the data management, like: 
	|  - conversion
	|  - validation
	|  - access control
	|
	*/
	carbon.fields.Model = Backbone.Model.extend({
		defaults: {
			'error': false,
			'visible': true,
			'force_required': false
		},

		initialize: function() {
			var classes = ['carbon-field', 'carbon-' + this.get('type')]
			var width = this.get('width');

			if (this.get('lazyload')) {
				classes.push('carbon-lazyload');
			}

			if (width && _.isNumber(width)) {
				classes.push('has-width');
				classes.push('width-' + width);
			}

			this.addClass(classes);
		},

		addClass: function(newClass) {
			if (!_.isArray(newClass)) {
				newClass = [newClass];
			}

			var oldClasses = this.get('classes') || [];
			var classes = _.union(oldClasses, newClass);

			if (classes.length !== oldClasses.length) {
				this.set('classes', classes);
			}
		},

		isRequired: function() {
			return !! this.get('visible') && ( this.get('required') || this.get('force_required') );
		},

		/*
		 * The validate method is an internal Backbone method.
		 * It will check if the field model data is valid.
		 *
		 * @see http://backbonejs.org/#Model-validate
		 */
		validate: function(attrs, options) {
			if (this.isRequired() && !attrs.value) {
				return crbl10n.message_required_field;
			}
		}
	});

	/*
	|--------------------------------------------------------------------------
	| Base Field VIEW
	|--------------------------------------------------------------------------
	|
	| Holds the field DOM interactions (rendering, error state, etc..).
	| The field view also SYNCs the user entered data with the model.
	| The app will fallback to this class if a field has no dedicated view.
	|
	| Views reflect what the applications data models look like.
	| They also listen to events and react accordingly.
	|
	| @element: .[id]
	| @holder:  carbon.views[id]
	|
	*/
	carbon.fields.View = Backbone.View.extend({
		/*
		 * Set the view DOM events
		 */
		events: {
			'change :input': 'sync'
		},

		/*
		 * Used to include additional variables that can be used inside the template
		 * Can be extended on the "field:beforeRender" event.
		 */
		templateVariables: {}, 

		/*
		 * Whether there was validation error at some point
		 */
		hadErrors: false,

		initialize: function() {
			this.rendered = false;

			this.on('field:rendered', function() {
				this.rendered = true;
			});

			this.listenTo(this.model, 'change:height', this.equalizeHeight);

			// Listen for field class updates
			this.listenTo(this.model, 'change:classes', this.updateClass);

			// Listen for an error change and toggle the error class on the holder
			this.listenTo(this.model, 'change:error', this.toggleError);

			// Listen for value change and revalidate the model
			this.listenTo(this.model, 'change:value', this.revalidate);

			// Listen to visibility change and hide/show the field
			this.listenTo(this.model, 'change:visible', this.toggleVisibility);

			// Set initial states
			this.on('field:rendered', this.setWidth);
			this.on('field:rendered', this.toggleError);
			this.on('field:rendered', this.toggleVisibility);

			// Initialize conditional logic
			this.conditionalLogicInit();
		},

		conditionalLogicInit: function() {
			var conditionalLogicRules = this.model.get('conditional_logic');

			// Bail if there are no conditional logic rules
			if (_.isEmpty(conditionalLogicRules)) {
				return;
			}

			// The field should be invisible until the rules are met
			this.model.set('visible', false);

			// Initialize the conditional logic model
			var conditionalLogic = new carbon.fields.ConditionalLogic({
				'targetCollection': this.model.collection,
				'rules': conditionalLogicRules.rules,
				'relation': conditionalLogicRules.relation
			});

			// Bind the conditional logic validation state to the field visibility
			this.listenTo(conditionalLogic, 'change:valid', function(model) {
				this.model.set('visible', model.get('valid'));
			});

			// Initial rules check
			conditionalLogic.validate();
		},

		toggleVisibility: function() {
			var id = this.model.get('id');
			var visible = this.model.get('visible');
			var $holder = this.$el.closest('.carbon-field');

			// Disable all inputs if not visible
			$holder.find(':input').attr('disabled', function() {
				return !visible;
			});

			$holder.toggle(visible);
		},

		render: function() {
			var id = this.model.get('id');
			var type = this.model.get('type');
			var lazyload = this.model.get('lazyload');
			var template = carbon.template(type);

			_.extend(this.templateVariables, this.model.attributes, {
				model: this.model
			});

			this.trigger('field:beforeRender');

			var fieldHTML = template(this.templateVariables);

			this.$el.html(fieldHTML);

			if (lazyload) {
				carbon.lazyload[id] = this;
			} else {
				this.trigger('field:rendered');
			}

			return this;
		},

		/*
		 * Syncs the user entered value with the model value. 
		 * By default this method is fired when the input value has changed.
		 *
		 * If the field has more then one input, this method should be overwritten!
		 */
		sync: function(event) {
			var $input = $(event.currentTarget);
			var value = $input.val();

			this.model.set('value', value);
		},

		/* 
		 * If the field has had validation error (after form submission), 
		 * re-validate it after each value change. 
		 */
		revalidate: function() {
			if (this.model.isRequired() && this.hadErrors) {
				this.model.isValid();
				this.toggleError();
			}
		},

		toggleError: function() {
			var errorText = this.model.validationError;
			var $holder = this.$el.closest('.carbon-field');
			var $errorHolder = $holder.find('> .carbon-error');
			var hasError = !!errorText;

			$holder.toggleClass('carbon-highlight', hasError);

			$errorHolder.html(errorText);

			if (hasError) {
				this.hadErrors = true;
			}
		},

		setWidth: function() {
			var width = this.model.get('width');

			if (width && _.isNumber(width)) {
				this.$el.closest('.carbon-field').css('width', width + '%');
			}
		},

		updateClass: function(model) {
			var classes = model.get('classes');

			this.$el.closest('.carbon-field').addClass(classes.join(' '));
		},

		layoutUpdated: function() {
			this.trigger('layoutUpdated');
		}

	});

	/*
	|--------------------------------------------------------------------------
	| Base Field COLLECTION
	|--------------------------------------------------------------------------
	|
	| Holds a set of field models.
	| Also includes model class initialization logic.
	| 
	*/
	carbon.fields.Collection = Backbone.Collection.extend({
		model: function(attrs, options) {
			var FieldModel = carbon.fields.Model[attrs.type];

			// Set the field model. If the model is not found, fallback to the base model
			if ( _.isUndefined(FieldModel) ) {
				FieldModel = carbon.fields.Model; // Fallback to the base model
			}

			return new FieldModel(attrs, options);
		}
	});

	/*
	|--------------------------------------------------------------------------
	| Conditional Logic MODEL
	|--------------------------------------------------------------------------
	|
	| A model that handles the field conditional logic rules.
	|
	| It listens on the target fields collection and validates the rules
	| every time the values are changed. 
	|
	| The "valid" model attribute is "true" if the rule conditions are met.
	|
	*/
	carbon.fields.ConditionalLogic = Backbone.Model.extend({
		defaults: {
			'targetCollection': new Backbone.Collection(),
			'rules': [],
			'relation': 'AND',
			'valid': false
		},

		initialize: function() {
			var fields = this.getFields();

			// Check the rules when a field value has changed
			this.listenTo(fields, 'change:value', this.validate);
		},

		validate: function() {
			var rules = this.get('rules');
			var fields = this.getFields();
			var relation = this.get('relation');

			for (var i in rules) {
				var rule = rules[i];
				var fieldModel = this.getFieldByName(rule.field);
				var fieldValue = fieldModel.get('value');

				rule.valid = this.compare(fieldValue, rule.value, rule.compare);
			}

			var rulesStates = _.pluck(rules, 'valid');

			if (relation === 'AND') {
				valid = _.every(rulesStates);
			}

			if (relation === 'OR') {
				valid = _.some(rulesStates);
			}

			this.set('valid', valid);
		},

		getFields: function() {
			var rules = this.get('rules');

			var targetCollection = this.get('targetCollection');
			var collection = new Backbone.Collection();

			// Loop the rules and get the fields from the target collection based on the field name
			_.each(rules, function(rule) {
				var fieldModel = targetCollection.findWhere({base_name: rule.field});

				if (!fieldModel) {
					$.error('ConditionalLogic: Field name "' + rule.field + '" not found.');
				}

				collection.add(fieldModel);
			});

			return collection;
		},

		getFieldByName: function(name) {
			var fields = this.getFields();

			return fields.findWhere({base_name: name});
		},

		compare: function(value1, value2, oparator) {
			switch (oparator) {
				case '='  : return value1 == value2;
				case '!=' : return value1 != value2;
				case '>'  : return value1 >  value2;
				case '<'  : return value1 <  value2;
				case '>=' : return value1 >= value2;
				case '<=' : return value1 <= value2;
				case 'IN' : return _.some(value2, function(value) { return value == value1; });
				case 'NOT IN' : return _.every(value2, function(value) { return value != value1; });
			}
		}
	});

	/******************************** BASE END ********************************/



	/*--------------------------------------------------------------------------
	 * MAP
	 *------------------------------------------------------------------------*/

	// Map VIEW
	carbon.fields.View.Map = carbon.fields.View.extend({
		events: {
			'update:marker': 'updateMarker',
			'keypress input.address': 'updateAddress',
			'click .address-search-btn': 'updateAddress'
		},

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.map = null;
			this.marker = null;

			this.listenTo(this.model, 'change:address', this.geocodeAddress);
			this.listenTo(this.model, 'change:lat change:lng', this.sync);
			this.listenTo(this.model, 'change:lat change:lng change:zoom', this.updateInput);

			this.on('field:rendered', this.initMap);
		},

		initMap: function() {
			var _this = this;
			var model = this.model;
			var map = this.map;
			var marker = this.marker;
			var zoom = model.get('zoom');
			var lat = model.get('lat');
			var lng = model.get('lng');
			var latLng = new google.maps.LatLng(lat, lng);
			var $element = this.$el;
			var $mapContainer = $element.find('.carbon-map-canvas');

			// draw a map
			map = this.map = new google.maps.Map($mapContainer.get(0), {
				zoom: zoom,
				center: latLng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			});

			// add the marker
			marker = this.marker = new google.maps.Marker({
				position: latLng,
				map: map,
				draggable: true
			});

			// enable the scrollwheel zoom when the user interacts with the map
			google.maps.event.addListenerOnce(map, 'click', this.enableScrollZoom);
			google.maps.event.addListenerOnce(map, 'dragend', this.enableScrollZoom);

			// on marker drag, set the new position in the model
			google.maps.event.addListener(marker, "dragend", function (mEvent) { 
				_this.model.set({
					lat: marker.getPosition().lat(),
					lng: marker.getPosition().lng()
				});
			});

			// on zoom change, set the new zoom level
			google.maps.event.addListener(map, 'zoom_changed', function() {
				_this.model.set('zoom', map.getZoom());
			});

			// If we are in a widget container, resize the map when the widget is revealed.
			// This is a workaround since maps don't initialize in a hidden div (widget)
			$mapContainer.closest('div.widget').on('click.widgets-toggle', function(event){
				if ( $(event.target).parents('.widget-inside').length > 0 ) {
					return;
				};

				setTimeout(function() {
					google.maps.event.trigger(map, 'resize');
					_this.$el.trigger('update:marker');
				}, 1);
			});
		},

		sync: function(model) {
			var lat = model.get('lat');
			var lng = model.get('lng');

			if (lat && lng) {
				model.set('value', lat + ',' + lng);
			}
		},

		updateMarker: function(event) {
			var lat = this.model.get('lat');
			var lng = this.model.get('lng');
			var latLng = new google.maps.LatLng(lat, lng);

			if (this.marker) {
				this.marker.setPosition(latLng);
				this.map.setCenter(latLng);

				// Sync the current zoom level by triggering the zoom_changed event
				google.maps.event.trigger(this.map, 'zoom_changed');
			}
		},

		updateAddress: function(event) {
			var enterKey = 13;

			if (event.type === 'keypress' && event.keyCode !== enterKey) {
				return;
			}

			var name = this.model.get('name');
			var $input = this.$(':input[name="' + name + '[address]"]');
			var address = $input.val();

			this.model.set('address', address);

			event.preventDefault();
		},

		updateInput: function(model) {
			var name = model.get('name');

			for (var key in model.changed) {
				if (!model.changed.hasOwnProperty(key)) {
					continue;
				}

				var $input = this.$(':input[name="' + name + '[' + key + ']"]');
				var value = model.changed[key];

				if ($input.length) {
					$input.val(value);
				}
			}
		},

		geocodeAddress: function(model) {
			var _this = this;
			var address = model.get('address');
			var geocoder = new google.maps.Geocoder();

			if (!address) {
				return false;
			}

			if (coords = address.match(/^(-?\d{1,3}\.\d+),\s?(-?\d{1,3}\.\d+)$/)) {
				model.set({
					lat: parseFloat(coords[1]),
					lng: parseFloat(coords[2])
				});

				this.$el.trigger('update:marker');

				return true;
			}

			geocoder.geocode( { 'address': address }, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var latLng = results[0].geometry.location;

					model.set({
						lat: latLng.lat(),
						lng: latLng.lng()
					});

					_this.$el.trigger('update:marker');
				} else if(status === 'ZERO_RESULTS') {
					alert(crbl10n.geocode_zero_results);
				} else {
					alert(crbl10n.geocode_not_successful + status);
				}
			});
		},

		enableScrollZoom: function() {
			this.setOptions({
				scrollwheel: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE
				}
			});
		}
	});


	/*--------------------------------------------------------------------------
	 * RICH TEXT
	 *------------------------------------------------------------------------*/

	// RichText VIEW
	carbon.fields.View.RichText = carbon.fields.View.extend({
		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.active = false;

			this.on('field:rendered', this.initEditor);
			this.on('sortstart', this.disableEditor);
			this.on('sortstop', this.enableEditor);
		},

		initEditor: function() {
			if( _.isUndefined(tinyMCEPreInit) || _.isUndefined(tinymce) ) {
				return false;
			}

			var $textarea = this.$('textarea.wp-editor-area');
			var mceInit = this.get_mceInit();
			var qtInit = this.get_qtInit();
			var value = this.model.get('value');

			tinyMCEPreInit.mceInit[ mceInit.id ] = mceInit;
			tinyMCEPreInit.qtInit[ qtInit.id ] = qtInit;

			if ( !this.active ) {
				try {
					// Wpautop the value before the initialization
					if ( value ) {
						value = switchEditors.pre_wpautop( value );
						value = switchEditors.wpautop( value );
						$textarea.val( value );
					}

					// Set the editor ID on media buttons
					this.mediaButtonsInit();

					// Initialize mceInit
					tinymce.init(mceInit);

					// Initialize qtInit (quicktags)
					var qtag = quicktags( qtInit );
					this.textButtonsInit( qtag );

					this.active = true;
				} catch(e) {
					console.log(e);
				}
			}
		},

		get_mceInit: function(){
			var $field = this.$el;
			var id = this.model.get('id');
			var mceInit = $.extend({}, tinyMCEPreInit.mceInit.carbon_settings);
			var isTouchscreen = carbon.views.main.$body.hasClass('touchscreen');

			// set selector
			mceInit.selector = '#' + id;

			// set id
			mceInit.id = id; // tinymce v4
			mceInit.elements = id; // tinymce v3

			// events
			if(tinymce.majorVersion < 4) {
				mceInit.setup = function(ed){
					ed.onInit.add(function(ed, event) {
						$(ed.getBody()).on('blur', function(){
							// save to textarea
							ed.save();

							// trigger change on textarea
							$field.find('textarea').trigger('change');
						});
					});
				};
			} else {
				mceInit.setup = function(ed){
					ed.on('blur', function(e) {
						// save to textarea
						ed.save();

						// trigger change on textarea
						$field.find('textarea').trigger('change');
					});
					
				};
			}

			mceInit.wp_autoresize_on = isTouchscreen ? false : true;

			return mceInit;
		},

		get_qtInit: function(){
			var qtInit = $.extend({}, tinyMCEPreInit.qtInit.carbon_settings);

			qtInit.id = this.model.get('id');

			return qtInit;
		},

		mediaButtonsInit: function() {
			var id = this.model.get('id');

			this.$('.wp-media-buttons .button:not([data-editor])').each(function() {
				$(this).attr('data-editor', id);
			});
		},

		textButtonsInit: function(ed) {
			var defaults = ',strong,em,link,block,del,ins,img,ul,ol,li,code,more,close,';

			var canvas = ed.canvas;
			var name = ed.name;
			var settings = ed.settings;
			var theButtons = {};
			var html = '';
			var use = '';

			// set buttons
			if ( settings.buttons ) {
				use = ','+settings.buttons+',';
			}

			for ( i in edButtons ) {
				if ( !edButtons[i] ) {
					continue;
				}

				id = edButtons[i].id;
				if ( use && defaults.indexOf( ',' + id + ',' ) !== -1 && use.indexOf( ',' + id + ',' ) === -1 ) {
					continue;
				}

				if ( !edButtons[i].instance || edButtons[i].instance === inst ) {
					theButtons[id] = edButtons[i];

					if ( edButtons[i].html ) {
						html += edButtons[i].html(name + '_');
					}
				}
			}

			if ( use && use.indexOf(',fullscreen,') !== -1 ) {
				theButtons.fullscreen = new qt.FullscreenButton();
				html += theButtons.fullscreen.html(name + '_');
			}

			if ( 'rtl' === document.getElementsByTagName('html')[0].dir ) {
				theButtons.textdirection = new qt.TextDirectionButton();
				html += theButtons.textdirection.html(name + '_');
			}

			ed.toolbar.innerHTML = html;
			ed.theButtons = theButtons;
		},

		disableEditor: function() {
			if (!this.active) {
				return false;
			}

			try {
				var id = this.model.get('id');
				var ed = tinyMCE.get(id);

				if (!ed) {
					$.error('RichText Field - tinyMCE editor not found.');
				}
				
				// save
				ed.save();
				
				// destroy editor
				ed.destroy();
			} catch(e) {
				console.log(e);
			}
		},
		
		enableEditor: function() {
			if (!this.active) {
				return false;
			}

			var $editor = this.$('.carbon-wysiwyg');

			if($editor.hasClass('tmce-active') && window.switchEditors ) {
				var id = this.model.get('id');
				switchEditors.go(id, 'tmce');
			}
		}
	});


	/*--------------------------------------------------------------------------
	 * DATE
	 *------------------------------------------------------------------------*/

	// Date VIEW
	carbon.fields.View.Date = carbon.fields.View.extend({
		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.on('field:rendered', this.initDatePicker);
		},

		initDatePicker: function() {
			var $field = this.$('.carbon-datepicker');
			var $trigger = this.$('.carbon-datepicker-trigger');
			var options = this.model.get('options');
			var args = {
				dateFormat: 'yy-mm-dd',
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				hideIfNoPrevNext: true,
				beforeShow: function(input, inst) {
					$('#ui-datepicker-div').addClass('carbon-jquery-ui');
				}
			};

			$.extend(args, options);

			$field.datepicker(args);

			$trigger.on('click', function(e) {
				$field.focus();
				
				e.preventDefault();
			});
		}
	});


	/*--------------------------------------------------------------------------
	 * COLOR PICKER
	 *------------------------------------------------------------------------*/

	// Color VIEW
	carbon.fields.View.Color = carbon.fields.View.extend({
		events: _.extend({}, carbon.fields.View.prototype.events, {
			'click .pickcolor.button': 'focusField',
			'focus input.carbon-color': 'showColorPicker',
			'blur input.carbon-color': 'hideColorPicker'
		}),

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.on('field:rendered', this.initColorPicker);
		},

		initColorPicker: function() {
			var _this = this;
			var $field = this.$field = this.$('input.carbon-color');
			var color = this.model.get('value');

			_this.setColor(color);

			$field.iris({
				palettes: true,
				change: function(event, ui) {
					_this.setColor( ui.color.toString() );
				}
			});

			$field.on('change', function() {
				_this.setColor( $(this).val() );
			});
		},

		setColor: function(color) {
			var _this = this;
			var isValidColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

			if ( color && !isValidColor ) {

				this.$field
					.addClass('error')
					.val( this.$field.iris('color') )

				setTimeout(function() {
					_this.$field.removeClass('error');
				}, 100);

			}

			this.$('.button')
				.css('background-color', color)
				.toggleClass('has-color', !!color);
		},

		focusField: function() {
			this.$field.focus();
		},

		showColorPicker: function() {
			this.$field.iris('show');
		},

		hideColorPicker: function() {
			var $field = this.$field;

			setTimeout(function() {
				if ( !$(document.activeElement).closest('.iris-picker').length ) {
					$field.iris('hide');
					$field.trigger('change');
				} else {
					$field.focus();
				}
			});
		}
	});

	/*--------------------------------------------------------------------------
	 * SELECT
	 *------------------------------------------------------------------------*/

	// Select MODEL
	carbon.fields.Model.Select = carbon.fields.Model.extend({
		initialize: function() {
			carbon.fields.Model.prototype.initialize.apply(this);

			var _this = this;
			var value = this.get('value');
			var options = this.get('options') || [];

			// If no value, set the first option as value
			if (!value) {
				$.each(options, function(i, option) {
					_this.set('value', option.value);
					return false;
				});
			}
		},

		validate: function(attrs, options) {
			var value = attrs.value;

			if (this.isRequired() && (!value || value === '0')) {
				return crbl10n.message_choose_option;
			}
		}
	});


	/*--------------------------------------------------------------------------
	 * GRAVITY FORM
	 *------------------------------------------------------------------------*/

	// Gravity Form MODEL
	carbon.fields.Model.GravityForm = carbon.fields.Model.Select.extend();

	/*--------------------------------------------------------------------------
	 * SIDEBAR
	 *------------------------------------------------------------------------*/

	// Sidebar MODEL
	carbon.fields.Model.Sidebar = carbon.fields.Model.Select.extend({
		initialize: function() {
			this.setSidebarOptions();
			carbon.fields.Model.Select.prototype.initialize.apply(this);
		},

		setSidebarOptions: function() {

			var options  = this.get('options');
			var excluded_sidebars = this.get('excluded_sidebars');
			var sidebars = [];

			carbon.collections.sidebars.each(function(model) {

				var sidebarName = model.get('name');
				var sidebarId   = model.get('id');
				var sidebar = {
					name: sidebarName,
					value: sidebarName
				};

				// If this sidebar is excluded ( by name or by ID), do not add it to the options. 
				if ( typeof(excluded_sidebars) !== 'undefined' && ( excluded_sidebars.indexOf(sidebarName) > -1 || excluded_sidebars.indexOf(sidebarId) > -1 ) ) {
					return;
				}

				if (!!_.findWhere(options, sidebar)) {
					return; // sidebar already added, continue
				}

				sidebars.push(sidebar);
			});

			this.set('options', _.union(sidebars, options));

		},

		validate: function(attrs, options) {
			return carbon.fields.Model.prototype.validate.apply(this, arguments);
		}
	});

	// Sidebar VIEW
	carbon.fields.View.Sidebar = carbon.fields.View.extend({
		events: _.extend({}, carbon.fields.View.prototype.events, {
			'change select': 'addNewSidebar'
		}),

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);
			this.listenTo(carbon.collections.sidebars, 'add', this.addSidebarOption);
		},

		addSidebarOption: function(model) {
			var sidebarName = model.get('name');
			var $select = this.$('select');

			if (!sidebarName) {
				return;
			}

			$('<option value="' + _.escape(sidebarName) + '">' + sidebarName + '</option>').insertBefore($select.find('option:last'));
		},

		addNewSidebar: function(event) {
			var $select = this.$('select');

			if ($select.val() !== 'new') {
				return true;
			}

			var sidebarName = $.trim( window.prompt( crbl10n.enter_name_of_new_sidebar ) );

			if (sidebarName) {
				var sidebarExists = carbon.collections.sidebars.findWhere({
					name: sidebarName
				});

				if (!sidebarExists) {
					// Add the new sidebar to the sidebars collection
					carbon.collections.sidebars.add({
						name: sidebarName
					});
				}

				$select.find('option[value="' + _.escape(sidebarName) + '"]').prop('selected', true);
			} else {
				$select.find('option:first').prop('selected', true);
			}

			$select.trigger('change');
		}
	});


	/*--------------------------------------------------------------------------
	 * CHOOSE SIDEBAR
	 *------------------------------------------------------------------------*/

	// Choose Sidebar MODEL
	carbon.fields.Model.ChooseSidebar = carbon.fields.Model.Sidebar.extend({
		setSidebarOptions: function() {}
	});

	// Choose Sidebar VIEW
	carbon.fields.View.ChooseSidebar = carbon.fields.View.Sidebar.extend({
		initialize: function() {
			carbon.fields.View.Sidebar.prototype.initialize.apply(this);

			// Remove the addSidebarOption listener, we are not using the sidebars collection for this field.
			this.stopListening(carbon.collections.sidebars, 'add', this.addSidebarOption);
		},

		addNewSidebar: function(event) {
			var $select = $(event.target);

			if ($select.val() !== 'new') {
				return true;
			}

			var sidebarName = $.trim( window.prompt( crbl10n.enter_name_of_new_sidebar ) );

			if (sidebarName) {
				var $option = $('<option value="' + _.escape(sidebarName) + '">' + sidebarName + '</option>').insertBefore($select.find('option:last'));
				
				$select.find('option').prop('selected', false);
				$option.prop('selected', true);
			} else {
				$select.find('option:first').prop('selected', true);
			}

			$select.trigger('change');
		}
	});


	/*--------------------------------------------------------------------------
	 * FILE
	 *------------------------------------------------------------------------*/

	// File VIEW
	carbon.fields.View.File = carbon.fields.View.extend({
		events: _.extend({}, carbon.fields.View.prototype.events, {
			'click .c2_open_media': 'openMedia'
		}),

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.on('field:beforeRender', this.loadDescriptionTemplate);

			this.listenTo(this.model, 'change:value', this.updateInput);
			this.listenTo(this.model, 'change:url', this.updateView);
		},

		/**
		 * Loads the description template and sets it as a variable ("description") for the base template
		 */
		loadDescriptionTemplate: function() {
			var type = this.model.get('type');
			var descTemplate = carbon.template(type + '-Description');

			_.extend(this.templateVariables, {
				description: descTemplate(this.templateVariables)
			});
		},

		openMedia: function(event) {
			var _this = this;
			var type = this.model.get('type');
			var buttonLabel = this.model.get('window_button_label');
			var windowLabel = this.model.get('window_label');
			var typeFilter = this.model.get('type_filter');
			var valueType = this.model.get('value_type');
			var mediaTypes = {};

			var getAttachmentThumb = function(attachment) {
				var thumbUrl = '';

				// Get the thumbnail (if any)
				if (attachment.type === 'image' && attachment.sizes) {
					var size = attachment.sizes.thumbnail || attachment.sizes.full;
					thumbUrl = size.url;
				}

				return thumbUrl;
			};

			mediaTypes[type] = wp.media.frames.crbMediaField = wp.media({
				title: windowLabel ? windowLabel : crbl10n.title,
				library: { type: typeFilter }, // audio, video, image
				button: { text: buttonLabel },
				multiple: true
			});

			var mediaField = mediaTypes[type];

			// Runs when an image is selected.
			mediaField.on('select', function () {
				// Grabs the attachment selection and creates a JSON representation of the model.
				var mediaAttachments = mediaField.state().get('selection').toJSON();

				// Get the first attachment and remove it from the array
				var mediaAttachment = mediaAttachments.shift();

				// If multiple attachments, multiply the field
				_.each(mediaAttachments, function(att) {
					var thumbUrl = getAttachmentThumb(att);
					if ( ! thumbUrl ) {
						thumbUrl = _this.model.get('default_thumb_url')
					}
					_this.model.set('multiply', {
						'value': att[valueType],
						'file_type': att.type,
						'url': att.url,
						'thumb_url': thumbUrl
					});
				});

				var mediaValue = mediaAttachment[valueType];
				var thumbUrl = getAttachmentThumb(mediaAttachment);
				if ( ! thumbUrl ) {
					thumbUrl = _this.model.get('default_thumb_url');
				}

				// Update the model
				this.model.set('file_type', mediaAttachment.type);
				this.model.set('value', mediaValue);
				this.model.set('url', mediaAttachment.url);
				this.model.set('thumb_url', thumbUrl);

				// Trigger an event that notifies that a media file is selected
				this.trigger('media:updated', mediaAttachment);
			}, this);

			// Opens the media library frame
			mediaField.open();

			event.preventDefault();
		},

		updateInput: function(model) {
			var $input = this.$('input.carbon-file-field');
			var value = model.get('value');

			if (!value) {
				model.set('url', '')
			}

			$input.val(value).trigger('change');
		},

		updateView: function(model) {
			var url = model.get('url');

			this.$('.attachment-url').html(url);
			this.$('.carbon-view_file').attr('href', url);
			this.$('.carbon-description').toggleClass('hidden', !url);
		}
	});

	
	/*--------------------------------------------------------------------------
	 * ATTACHMENT
	 *------------------------------------------------------------------------*/

	// Attachment VIEW
	carbon.fields.View.Attachment = carbon.fields.View.File.extend({
		events: _.extend({}, carbon.fields.View.File.prototype.events, {
			'click .carbon-file-remove': 'removeFile'
		}),

		initialize: function() {
			carbon.fields.View.File.prototype.initialize.apply(this);

			this.listenTo(this.model, 'change:thumb_url', this.updateThumb);
		},

		updateThumb: function(model) {
			var thumbUrl = model.get('thumb_url');

			this.$('img.thumbnail-image').attr('src', thumbUrl);
			this.$('.carbon-attachment-preview').toggleClass('hidden', !thumbUrl);
		},

		removeFile: function(event) {
			this.$('.carbon-description').addClass('hidden');
			this.$('.carbon-attachment-preview').addClass('hidden');
			this.$('input.carbon-file-field').attr('value', '').trigger('change');
			this.$('.attachment-url').html('');

			this.model.set('url', '');
			this.model.set('thumb_url', '');
		}
	});


	/*--------------------------------------------------------------------------
	 * IMAGE
	 *------------------------------------------------------------------------*/

	// Image VIEW
	carbon.fields.View.Image = carbon.fields.View.Attachment.extend();


	/*--------------------------------------------------------------------------
	 * CHECKBOX
	 *------------------------------------------------------------------------*/

	// Checkbox VIEW
	carbon.fields.View.Checkbox = carbon.fields.View.extend({
		sync: function(event) {
			var value = this.$('input[type="checkbox"]:checked').val() || '';

			this.model.set('value', value);
		}
	});


	/*--------------------------------------------------------------------------
	 * SET
	 *------------------------------------------------------------------------*/

	// Set MODEL
	carbon.fields.Model.Set = carbon.fields.Model.extend({
		validate: function(attrs, options) {
			if (this.isRequired() && _.isEmpty(attrs.value)) {
				return crbl10n.message_required_field;
			}
		}
	});

	// Set VIEW
	carbon.fields.View.Set = carbon.fields.View.extend({
		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.on('field:rendered', this.showAll);
		},

		showAll: function() {
			this.$('a.carbon-set-showall').one('click', function (event) {
				$(this).parent().hide().siblings().show();

				event.preventDefault();
			});
		},

		sync: function(event) {
			var value = [];

			this.$('input[type="checkbox"]:checked').each(function() {
				value.push($(this).val());
			});

			this.model.set('value', value);
		}
	});


	/*--------------------------------------------------------------------------
	 * RELATIONSHIP
	 *------------------------------------------------------------------------*/

	// Relationship MODEL
	carbon.fields.Model.Relationship = carbon.fields.Model.extend({
		validate: function(attrs, options) {
			if (this.isRequired() && _.isEmpty(attrs.value)) {
				return crbl10n.message_required_field;
			}
		}
	});

	// Relationship VIEW
	carbon.fields.View.Relationship = carbon.fields.View.extend({
		disabledClass: 'inactive',

		events: {
			'click .relationship-left .relationship-list a': 'addItem',
			'click .relationship-right .relationship-list a': 'removeItem',
			'keypress .relationship-left .search-field': 'searchFieldKeyPress',
			'keyup .relationship-left .search-field': 'searchFilter',
			'click a .edit-link' : 'editLink'
		},

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.selectedItems = [];

			this.on('field:rendered', this.initRelationship);
			this.on('field:relationship:afterAdd field:relationship:afterRemove field:relationship:afterSort', this.sync);
		},

		initRelationship: function() {
			var _this = this;
			var allowDuplicates = this.model.get('allow_duplicates');
			var name = this.model.get('name');
			var isTouchscreen = carbon.views.main.$body.hasClass('touchscreen');

			this.$leftList = this.$('.relationship-left .relationship-list');
			this.$rightList = this.$('.relationship-right .relationship-list');
			this.$searchBox = this.$('.relationship-left .search-field');

			// Fetch the selected items and deactivate them 
			// in the left list (if duplicate items are not allowed)
			this.$rightList.find('input[name="' + name + '[]"]').each(function() {
				_this.selectedItems.push(this.value);
				if (!allowDuplicates) {
					_this.$leftList.find('a[data-value="' + this.value + '"]').parent().addClass(_this.disabledClass);
				}
			});

			var sortableOptions = {
				axis: "y",
				items: '> li',
				forceHelperSize: true,
				forcePlaceholderSize: true,
				placeholder: 'ui-placeholder-highlight',
				scroll: true,
				update: function() {
					_this.trigger('field:relationship:afterSort');
				}
			};

			if (isTouchscreen) {
				sortableOptions.handle = '.mobile-handle';
			}

			this.$rightList.sortable(sortableOptions);

			this.trigger('field:initialized');
		},

		sync: function() {
			var _this = this;
			var value = [];

			this.$rightList.find('> li > a').each(function() {
				var link = $(this);
				var item = _this.buildItem(
					link.data('item-id'), 
					link.data('item-title'), 
					link.data('item-type'), 
					link.data('item-subtype'),
					link.data('item-label')
				);
				value.push(item);
			});

			this.model.set('value', value);
		},

		addItem: function(event) {
			var $element = $(event.target);
			if (!$element.is('a')) {
				$element = $element.closest('a');
			}

			var allowDuplicates = this.model.get('allow_duplicates');
			var max = this.model.get('max');
			var id = $element.data('item-id');
			var type = $element.data('item-type');
			var subtype = $element.data('item-subtype');
			var label = $element.data('item-label');
			var title = $element.data('item-title');
			var value = this.buildItemValue(id, type, subtype);
			var liTemplate = carbon.template(this.model.get('type') + '_item');
			var newLi;

			// Prevent adding duplicate items (if not allowed)
			if ( !allowDuplicates && $.inArray(value, this.selectedItems) > -1 ) {
				return false;
			};

			// Prevent adding more items than the maximum (if any)
			if ( max > 0 && this.selectedItems.length >= max ) {
				alert(crbl10n.max_num_items_reached.replace('%s', max));
				return false;
			};

			this.setSelectedItemsLabel($element, this.selectedItems.length, 'add');

			this.trigger('field:relationship:beforeAdd');

			if (!allowDuplicates) {
				$element.parent().addClass(this.disabledClass);
			}

			// Build the new <li> item to append in the right list
			newLi = liTemplate({
				name: this.model.get('name'),
				item: this.buildItem(id, title, type, subtype, label)
			});

			this.$rightList.append(newLi);
			this.selectedItems.push(value);

			this.trigger('field:relationship:afterAdd');

			event.preventDefault();
		},

		removeItem: function(event) {
			var $element = $(event.target);
			if (!$element.is('a')) {
				$element = $element.closest('a');
			}

			var value = $element.siblings('input').val();
			var position = $.inArray(value, this.selectedItems);
			var allowDuplicates = this.model.get('allow_duplicates');

			// Only existing items can be removed
			if ( position < 0 ) {
				return false;
			};

			this.trigger('field:relationship:beforeRemove');
			this.setSelectedItemsLabel($element, this.selectedItems.length, 'remove');

			this.selectedItems.splice(position, 1);
			$element.parent().remove();

			if (!allowDuplicates) {
				this.$leftList.find('a[data-value="' + value + '"]').parent().removeClass(this.disabledClass);
			}

			this.trigger('field:relationship:afterRemove');
			
			event.preventDefault();
		},

		setSelectedItemsLabel: function(element, items_number, action) {

			var selected_items_container = element.parents('.relationship-container').find('.selected-items-container .selected-counter');
			var selected_items_label_element = selected_items_container.siblings('.selected-label');
			var selected_label;

			if ( action === 'add' ) {
				items_number++;
			} else {
				items_number--;
			}

			if ( items_number == 1) {
				selected_label = selected_items_label_element.data('single-label');
			} else {
				selected_label = selected_items_label_element.data('plural-label');
			}

			selected_items_label_element.html(selected_label);
			selected_items_container.html(items_number);


		},

		editLink: function(event) {
			var href = $(event.target).data('href');
			if ( typeof href != 'undefined' ) {
				event.preventDefault();
				event.stopPropagation();
				window.open($(event.target).data('href'), '_blank');
			}
		},

		searchFieldKeyPress: function(event) {
			if( event.which == 13 ) {
				event.preventDefault();
			}
		},

		searchFilter: function(event) {
			var $element = $(event.target);
			var val = $element.val();

			this.trigger('field:relationship:beforeFilter');

			this.$leftList.find('li a:containsInsensitive("' + val + '")').show();
			this.$leftList.find('li a:not(:containsInsensitive("' + val + '"))').hide();

			this.trigger('field:relationship:afterFilter');

			event.preventDefault();
		},

		buildItem: function(id, title, type, subtype, label) {
			return {
				id: id,
				title: title,
				type: type,
				subtype: subtype,
				label: label
			};
		},

		buildItemValue: function(id, type, subtype) {
			return id + "";
		}
	});

	/*--------------------------------------------------------------------------
	 * ASSOCIATION
	 *------------------------------------------------------------------------*/

	// Association MODEL
	carbon.fields.Model.Association = carbon.fields.Model.Relationship.extend({
		initialize: function() {
			carbon.fields.Model.Relationship.prototype.initialize.apply(this);

			this.addClass('carbon-Relationship');
		}
	});

	// Association VIEW
	carbon.fields.View.Association = carbon.fields.View.Relationship.extend({
		buildItemValue: function(id, type, subtype) {
			var sep = ':';
			return type + sep + subtype + sep + id;
		}
	});

	/*--------------------------------------------------------------------------
	 * COMPLEX
	 *------------------------------------------------------------------------*/

	// Complex MODEL
	carbon.fields.Model.Complex = carbon.fields.Model.extend({
		defaults: _.extend({}, carbon.fields.Model.prototype.defaults, {
			'index': 0,
			'force_required': true
		}),

		getGroupByName: function(name) {
			var groups = this.get('groups') || [];
			var group = null;

			for (var i = 0; i < groups.length; i++) {
				var grp = groups[i];

				if (grp.hasOwnProperty('name') && grp.name == name) {
					group = grp;
					break;
				}
			}

			return group;
		},

		validate: function(attrs, options) {
			var view = carbon.views[this.get('id')];

			if ( _.isUndefined(view) ) {
				return;
			}

			var min = this.get('min');
			var groupsCount = view.groupsCollection.length;
			var minValid = min <= 0 || !groupsCount || min <= groupsCount;
			var groupsValid = true;

			// Validate each group
			_.each(view.groupsCollection.models, function(group) {
				if ( !group.isValid() ) {
					groupsValid = false;
					return; // we have an error, break the loop
				}
			});

			// If the groups are invalid, return a validation error
			if ( !groupsValid ) {
				return crbl10n.message_form_validation_failed;
			}

			// Check if the field is required
			if ( !groupsCount && this.get('required') ) {
				return crbl10n.message_required_field;
			}

			// Check if the minimum group count is reached
			if ( !minValid ) {
				var rowLabels = this.get('labels');
				var rowLabel = min == 1 ? rowLabels.singular_name : rowLabels.plural_name;

				return crbl10n.complex_min_num_rows_not_reached
					.replace( '%d', min )
					.replace( '%s', rowLabel.toLowerCase() );
			}
		}
	});

	// Complex VIEW
	carbon.fields.View.Complex = carbon.fields.View.extend({
		events: {
			'click > .carbon-subcontainer > .carbon-actions a': 'buttonAction',
			'click > .carbon-subcontainer > .carbon-empty-row a': 'buttonAction'
		},

		initialize: function() {
			carbon.fields.View.prototype.initialize.apply(this);

			this.multipleGroups = this.model.get('multiple_groups');

			/*
			 * Groups Collection
			 */

			this.groupsCollection = new carbon.fields.Collection.Group;
			this.groupsCollection.limit = this.model.get('max');

			// Set the model attribute on which the collection will be sorted. Think of it as "orderBy".
			this.groupsCollection.comparator = 'order'; 

			// Groups collection events (order matters)
			this.listenTo(this.groupsCollection, 'add',        this.setGroupOrder);  // Set the initial group order
			this.listenTo(this.groupsCollection, 'add',        this.setGroupIndex);  // Set the group index, the index should be unique for each group
			this.listenTo(this.groupsCollection, 'remove',     this.revalidate);     // Revalidate the field if a group is removed
			this.listenTo(this.groupsCollection, 'add remove', this.checkMax);       // Checks the maximum number of rows
			this.listenTo(this.groupsCollection, 'add remove', this.toggleIntroRow); // Show/Hide the "There are no Entries" row
			this.listenTo(this.groupsCollection, 'add remove', this.sortGroups);     // Forces group sorting while they are added/removed and not after that
			this.listenTo(this.groupsCollection, 'sort',       this.reorderGroups);  // Sort event is trigger after the "add" event
			this.listenTo(this.groupsCollection, 'add',        this.setGroupID);     // Sets an unique ID for each group
			this.listenTo(this.groupsCollection, 'add',        this.renderGroup);    // Render the added group

			/*
			 * View Events
			 */

			// Propagate the event to all groups
			this.on('propagate', function(event) {
				carbon.containers.View.prototype.eventPropagator.apply(this, [this.groupsCollection, event]);
			});

			// Set some jQuery variables.
			// This should be done before the groups population (to avoid getting elements from inner views) and after the template has rendered
			this.on('field:rendered', this.setDOMVariables);

			// Populate the groups collection using the database data
			this.on('field:rendered', this.setGroups);

			// Syncs the data from the groups to the complex field model (after the initial population)
			this.on('field:rendered', function() {
				this.listenTo(this.groupsCollection, 'change', this.sync);
			});

			// Enable jQuery Sortable after the groups are populated
			this.on('field:rendered', this.sortable);

			// Add a listener that will hide the groups list when the body is clicked
			if (this.multipleGroups) {
				this.on('field:rendered', this.hideGroupsListListener);
			}
		},

		sync: function(model, collection) {
			var ignored = ['collapsed'];

			for (var i = 0; i < ignored.length; i++) {
				if (model.changed.hasOwnProperty(ignored[i])) {
					return false;
				}
			}

			this.model.set('value', this.groupsCollection.toJSON());
		},

		setGroupOrder: function(model, collection) {
			var order = model.get('order');

			if (order === null) {
				order = Math.max(0, collection.length - 1);
			}

			model.set('order', order);
		},

		checkMax: function(model, collection) {
			var max = this.model.get('max');
			var maxReached = collection.length >= max;

			if (max <= 0) {
				return false;
			}

			this.$el.toggleClass('max-reached', maxReached);
			this.$actions.toggle(!maxReached);
		},

		setGroupIndex: function(model, collection) {
			var index = this.model.get('index');

			model.set('index', index);

			this.model.set('index', index + 1);
		},

		toggleIntroRow: function() {
			this.$introRow.toggle(this.groupsCollection.length === 0);
		},

		sortGroups: function() {
			this.groupsCollection.sort(); // also triggers the "sort" event on the collection
		},

		reorderGroups: function(collection) {
			_.each(this.groupsCollection.models, function(model, i) {
				model.set('order', i)
			});
		},

		setDOMVariables: function() {
			this.$actions = this.$('.carbon-actions');
			this.$introRow = this.$('.carbon-empty-row');
			this.$groupsList = this.$actions.find('ul');
			this.$groupsHolder = this.$('.carbon-groups-holder');
		},

		setGroups: function() {
			var _this = this;
			var groups = this.model.get('value');

			_.each(groups, function(group) {
				_this.groupsCollection.add(group, {
					sort: false
				});
			});
		},

		sortable: function() {
			var _this = this;

			this.$groupsHolder.sortable({
				items : '> .carbon-group-row',
				handle: '.carbon-drag-handle',
				placeholder: 'carbon-group-row ui-placeholder-highlight',
				start: function(event, ui) {
					_this.$groupsHolder.addClass('carbon-container-shrank');

					ui.item.groupID = ui.item.data('group-id');
					ui.item.groupView = carbon.views[ui.item.groupID];
					ui.item.groupModel = ui.item.groupView.model;
					ui.item.groupsCollection = ui.item.groupModel.collection;
					ui.item.groupCollapsedState = ui.item.groupModel.get('collapsed');

					ui.item.groupModel.set('collapsed', true);
					ui.item.groupView.trigger('sortable', event);

					$(this).sortable('refresh');
				},
				stop: function(event, ui) {
					_this.$groupsHolder.removeClass('carbon-container-shrank');

					ui.item.groupModel.set('collapsed', ui.item.groupCollapsedState);
					ui.item.groupView.trigger('sortable', event);
				},
				update: function(event, ui) {
					var newOrder = ui.item.index();
					var oldOrder = ui.item.groupModel.get('order');

					ui.item.groupModel.set('order', newOrder);

					ui.item.groupsCollection
						.moveTo(oldOrder, newOrder)
						.sort();

					ui.item.groupView.trigger('sortable', event);
				}
			});
		},

		buttonAction: function(event) {
			var $element = $(event.target);
			var groupName = $element.data('group');

			if (groupName) {
				this.addNewGroup(groupName);
			} else if (this.multipleGroups) {
				this.$groupsList.toggle();
			} else {
				this.$actions.find('a.button').trigger('click');
			}

			event.preventDefault();
		},

		hideGroupsListListener: function() {
			var _this = this;
			var $actionButton = this.$actions.find('a.button');
			var $introButton = this.$introRow.find('a');

			carbon.views.main.$body.on('click', function(event) {
				if (event.target !== $actionButton[0] && event.target !== $introButton[0]) {
					_this.$groupsList.hide();
				}
			});
		},

		addNewGroup: function(group) {
			if (_.isString(group)) {
				group = this.model.getGroupByName(group);
			}

			this.groupsCollection.add(group, {
				sort: false
			});
		},

		setGroupID: function(model) {
			var index = model.get('index');
			var complexID = this.model.get('id');
			var id = complexID + '-' + index;

			model.set('id', id);
		},

		renderGroup: function(model) {
			var _this = this;
			var id = model.get('id');

			carbon.views[id] = new carbon.fields.View.Complex.Group({
				el: this.$groupsHolder,
				model: model
			});

			carbon.views[id].on('layoutUpdated', function() {
				_this.trigger('layoutUpdated');
			});

			carbon.views[id].render(this.model);

			return this;
		}
	});

	/*--------------------------------------------------------------------------
	 * COMPLEX GROUP
	 *------------------------------------------------------------------------*/

	// Group MODEL
	carbon.fields.Model.Complex.Group = Backbone.Model.extend({
		defaults: {
			'order': null,
			'index': null,
			'collapsed': false
		},

		initialize: function() {
			var fields = this.get('fields');

			_.each(fields, function(field) {
				if (field.hasOwnProperty('old_id') && field.hasOwnProperty('old_name')) {
					field.id = field.old_id;
					field.name = field.old_name;

					delete field.old_id;
					delete field.old_name;
				}
			});

			this.set('fields', fields);
		},

		validate: function(attrs, options) {
			return carbon.containers.Model.prototype.validate.apply(this, arguments);
		}
	});

	// Group VIEW
	carbon.fields.View.Complex.Group = Backbone.View.extend({
		events: {
			'click .carbon-group-actions:first a.carbon-btn-remove': 'removeGroup',
			'click .carbon-group-actions:first a.carbon-btn-collapse': 'collapseGroup',
			'click .carbon-group-actions:first a.carbon-btn-duplicate': 'duplicateGroup'
		},

		templateVariables: {},

		initialize: function() {
			this.on('group:rendered', this.afterRenderInit);

			// Updates the order number in the DOM
			this.listenTo(this.model, 'change:order', this.updateOrderNumber);

			// Triggers the "sortstart", "sortstop" or "sortupdate" event on each field/group view
			this.on('sortable', this.eventPropagator);

			// Propagate an event to all fields
			this.on('propagate', function(event) {
				carbon.containers.View.prototype.eventPropagator.apply(this, [this.fieldsCollection, event]);
			});

			this.listenTo(this.model, 'change:collapsed', this.toggleCollapse);

			/*
			 * Fields Collection
			 */
			this.fieldsCollection = new carbon.fields.Collection(this.model.get('fields'));

			this.listenTo(this.fieldsCollection, 'add', this.updateFieldNameID);
			this.listenTo(this.fieldsCollection, 'add', this.renderField);
			this.listenTo(this.fieldsCollection, 'change', this.sync);

			// Listen for fields that want to multiply and create new groups with them
			this.listenTo(this.fieldsCollection, 'change:multiply', this.multiplier);
		},

		multiplier: function(model) {
			var fieldData = model.get('multiply');
			var fieldID = model.get('old_id');
			var groupsCollection = this.model.collection;
			var groupName = this.model.get('name');
			var group = $.extend(true, {}, this.complexModel.getGroupByName(groupName));

			// loop the group fields and set the new model data
			_.each(group.fields, function(field) {
				// check if this is the right field
				if (fieldID !== field.id) {
					return; // continue
				}

				// update the field data
				_.each(_.keys(fieldData), function(key) {
					field[key] = fieldData[key];
				});
			});

			// Add the new group with the proper field data
			groupsCollection.add(group, {
				sort: false
			});
		},

		toggleCollapse: function(model) {
			var collapsed = model.get('collapsed');

			this.$el.toggleClass('collapsed', collapsed);
		},

		eventPropagator: function(event) {
			_.each(this.fieldsCollection.models, function(model) {
				var view = carbon.views[model.get('id')];

				if (view.hasOwnProperty('groupsCollection')) {
					_.each(view.groupsCollection.models, function(groupModel) {
						var groupView = carbon.views[groupModel.get('id')];

						groupView.trigger('sortable', event);
					});
				}

				// Trigger the event on the field view
				view.trigger(event.type);
			});
		},

		sync: function() {
			this.model.set('fields', this.fieldsCollection.toJSON());
		},

		updateFieldNameID: function(model) {
			var id = model.get('id');
			var name = model.get('name');

			var index = this.model.get('index');
			var complexName = this.complexModel.get('name');
			var complexID = this.complexModel.get('id');

			var newID = complexID + '-' + id + '-' + index;
			var newName = complexName + '[' + index + '][' + name + ']';

			// store the original ID/Name for the field, useful for reinitialization
			model.set('old_id', id);
			model.set('old_name', name);

			// set the new ID/Name for the field
			model.set('id', newID);
			model.set('name', newName);
		},

		updateOrderNumber: function(model) {
			var groupOrder = model.get('order');

			this.$('> .carbon-drag-handle .group-number').text(groupOrder + 1);
		},

		render: function(complexModel) {
			this.complexModel = complexModel;

			var groupOrder = this.model.get('order');
			var template = carbon.template('Complex-Group');

			_.extend(this.templateVariables, this.model.attributes, {
				complex_id: this.complexModel.get('id'),
				complex_name: this.complexModel.get('name'),
				layout: this.complexModel.get('layout'),
				fields: this.fieldsCollection.toJSON()
			});

			this.trigger('group:beforeRender');

			var groupHTML = template(this.templateVariables);

			// At this moment this.$el points to the groups holder ( .carbon-groups-holder )
			var $holder = this.$el;
			var $children = $holder.children();

			// We need to separate the group itself from the groups holder,
			// this will also rebind all events from the holder to the group.
			this.setElement(groupHTML);

			this.$el.hide();

			// Append the group in the correct position
			if ($children.length) {
				$children.eq(groupOrder - 1).after(this.$el);
			} else {
				$holder.append(this.$el);
			}

			// Show the group
			this.$el.fadeIn();

			this.trigger('group:rendered');
		},

		removeGroup: function(event) {
			var _this = this;

			// Completely unbind the view
			this.undelegateEvents();
			this.$el.removeData().unbind(); 

			this.$el.addClass('removed').fadeOut(function() {
				// Remove view from the DOM
				_this.remove();

				// Remove the group from the groupsCollection, this will trigger the "remove" event on the collection
				_this.model.collection.remove(_this.model);
			});

			event.preventDefault();
		},

		collapseGroup: function(event) {
			var collapsed = this.model.get('collapsed');

			this.model.set('collapsed', !collapsed);

			event.preventDefault();
		},

		syncBeforeDuplicate: function(event) {
			var $focused = $(':focus');

			if ($focused.length) {
				$focused.trigger('change');
			}
		},

		duplicateGroup: function(event) {
			this.syncBeforeDuplicate(event);

			var groupsCollection = this.model.collection;

			var attributes = $.extend(true, {}, this.model.attributes);
			attributes.id = null;
			attributes.collapsed = false;

			if (attributes.hasOwnProperty('fields')) {
				attributes.fields = this.fieldsCollection.toJSON();
			}

			var newModel = new this.model.constructor(attributes);

			groupsCollection.add(newModel);

			event.preventDefault();
		},

		afterRenderInit: function() {
			var _this = this;

			// Trigger the add event on the collection, this should initialize the fields rendering
			this.fieldsCollection.each(function(model) {
				_this.fieldsCollection.trigger('add', model);
			});
		},

		setHelperClasses: function(model) {
			var type = model.get('type');

			// Add "odd", "even" classes on complex fields
			if (type === 'Complex') {
				var complexClasses = this.complexModel.get('classes');

				var isEven = $.inArray('even', complexClasses) !== -1;
				var isOdd = $.inArray('odd', complexClasses) !== -1;

				if (!isEven && !isOdd) {
					this.complexModel.addClass('odd');
					isOdd = true;
				}

				if (isEven) {
					model.addClass('odd');
				} else if (isOdd) {
					model.addClass('even');
				}
			}
		},

		renderField: function(model) {
			carbon.containers.View.prototype.renderField.apply(this, arguments);

			this.setHelperClasses(model);
		}
	});

	// Complex Group COLLECTION
	carbon.fields.Collection.Group = Backbone.Collection.extend({
		model: carbon.fields.Model.Complex.Group,

		add: function() {
			// Check if the collection limit is reached
			if (this.limit > 0 && this.length >= this.limit) {
				return;
			}

			Backbone.Collection.prototype.add.apply(this, arguments);
		},

		moveTo: function(oldIndex, newIndex) {
			var spliced = this.models.splice(oldIndex, 1);
			this.models.splice(newIndex, 0, spliced[0]);
			this.trigger('move', [oldIndex,newIndex]);

			return this;
		}
	});

}(jQuery));