window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	// Main app holder
	carbon.main = {};

	// Views holder
	carbon.views = {};

	// Lazyload views holder
	carbon.lazyload = {};

	// Collections holder
	carbon.collections = {};

	// Containers holder
	carbon.containers = {};

	// Fields holder
	carbon.fields = {};

	/*
	|--------------------------------------------------------------------------
	| Main App VIEW
	|--------------------------------------------------------------------------
	|
	| Responsible for initializing all the containers, including widgets.
	|
	| Views reflect what the applications data models look like.
	| They also listen to events and react accordingly.
	|
	| @element: document
	| @holder:  carbon.views.main
	|
	*/
	carbon.main.View = Backbone.View.extend({
		el: document,

		/*
		 * Hooks up all the needed events and prepares the container collection.
		 */
		initialize: function() {
			var _this = this;

			this.$body = this.$('body');
			this.$body.addClass('carbon-fields');

			if ( !this.$body.is('.mobile') ) {
				this.$body.addClass('carbon-desktop');
			}

			if ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ) {
				this.$body.addClass('touchscreen');
			}

			// Define an empty containers collection, that should be populated by the setContainers method after events are hooked.
			this.containersCollection = carbon.collections.containers = new carbon.containers.Collection;

			// Listen for a collection reset and re-populate the containers. Useful for reinitialization.
			this.listenTo(this.containersCollection, 'reset', this.setContainers);

			// Render each container when it's added to the collection
			this.listenTo(this.containersCollection, 'add', this.renderContainer);

			// Create the sidebars collection and populate it.
			this.sidebarsCollection = carbon.collections.sidebars = new Backbone.Collection(carbon_json.sidebars);

			// Pass the sidebars collection event to the sidebar manager.
			this.listenTo(this.sidebarsCollection, 'add remove', function(model, collection, event) {
				var action = event.add ? 'add' : 'remove';
				var name = model.get('name');
				carbon.sidebarManager(name, action);
			});

			// When a container is sorted (using ui-sortable), send the event to all fields using our custom "propagate" event
			this.$('div.widgets-sortables, .meta-box-sortables').on('sortstart sortstop', function(event, ui) {
				var containerID = $(ui.item).attr('id') || '';

				if ( containerID.indexOf('widget-') === 0 ) {
					var containerID = containerID.replace(/widget-\d+_/, '');
				}

				if ( containerID && !_.isUndefined( carbon.views[containerID] ) ) {
					carbon.views[containerID].trigger('propagate', event);
				}
			});

			// Listen for the WordPress widget events and handle the widget initialization/update
			this.$el.on('widget-added widget-updated', function() { 
				_this.widgetsHandler.apply(_this, arguments);
			});

			// Listen for menu item expanding, to inject new fields
			this.$('#update-nav-menu').on('click', '.menu-item-edit-inactive .item-edit', function(e) { 
				_this.navMenuHandler.apply(_this, arguments);
			});

			// Initialize the Lazyload interval
			this.on('app:rendered', function() {
				setTimeout(this.lazyload, 0);
				setInterval(this.lazyload, 1000);
			});
		},

		/*
		 * Populate the containers collection from carbon_json
		 */
		setContainers: function() {
			this.containersCollection.set(carbon_json.containers);
			this.trigger('app:rendered');
		},

		/*
		 * Renders a container. Fired when a container is added to the collection.
		 */
		renderContainer: function(model) {
			var type = model.get('type');
			var id = model.get('id');

			// Set the container view. If the view is not found, fallback to the base view
			var ContainerView = carbon.containers.View[type];
			if ( _.isUndefined(ContainerView) ) {
				ContainerView = carbon.containers.View; // fallback to the base view
			}

			// Initialize the view and store it in the views holder
			carbon.views[id] = new ContainerView({
				el: '.container-' + id,
				model: model
			});

			// Render the container
			carbon.views[id].render();
		},

		/*
		 * Handles the initialization/update of a Carbon widgets.
		 * Hooked to the "widget-added" and "widget-updated" WordPress events.
		 */
		widgetsHandler: function(event, widget) {
			var widgetID = $(widget).attr('id')
			var containerID = widgetID.replace(/widget-\d+_/, '');
			var containerData = $(widget).find('.container-' + containerID).data('json');

			if (!containerData) {
				return;
			}

			var containerJSON = $.parseJSON(carbon.urldecode(containerData));

			if (event.type === 'widget-updated') {
				var containerView = carbon.views[containerID];
				var containerModel = containerView.model;

				// Completely unbind the old widget view
				containerView.undelegateEvents();
				containerView.$el.removeData().unbind(); 

				// Remove the old widget model from the collection
				this.containersCollection.remove(containerModel);

				// Remove the view from the DOM
				containerView.remove();
			}

			// Add the new/updated model to the collection, this will also render the widget
			this.containersCollection.add(containerJSON);
		},

		/*
		 * Handles the adding a new item to menu.
		 * Hooked to the "click" on the arrow for expanding the menu item.
		 */
		navMenuHandler: function(event) {
			var $menuItem = $(event.target).closest('.menu-item');
			var _this = this;

			$menuItem.find('.carbon-nav-menu-container').each(function() {
				var $container = $(this);

				// Skip already initialized Containers
				if ( $container.find('.carbon-container').length > 0 ) {
					return true;
				};

				var containerData = $container.data('json');
				var containerJSON = $.parseJSON(carbon.urldecode(containerData));

				// Add the new/updated model to the collection, this will also render the widget
				_this.containersCollection.add(containerJSON);
			});
		},

		/*
		 * Handles the initialization of fields that should be rendered when they are in the viewport.
		 */
		lazyload: function() {
			if (_.isEmpty(carbon.lazyload)) {
				return;
			}

			for (var id in carbon.lazyload) {
				var view = carbon.lazyload[id];

				if (!view.rendered && carbon.isElementInViewport(view.$el)) {
					view.trigger('field:rendered');
				}
			}
		}
	});

	/**
	 * carbon.template( id )
	 *
	 * Fetches a template by id.
	 *
	 * @param  {string} id   A string that corresponds to a DOM element with an id prefixed with "crb-tmpl-".
	 *                       For example, "attachment" maps to "crb-tmpl-attachment".
	 * @return {function}    A function that lazily-compiles the template requested.
	 */
	carbon.template = _.memoize(function(id) {
		var compiled;
		var options = {
			evaluate:    /<#([\s\S]+?)#>/g,
			interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
			escape:      /\{\{([^\}]+?)\}\}(?!\})/g
		};

		return function(data) {
			var $template = $( '#crb-tmpl-' + id );
			var html = $template.html() || '';
			html = $.trim(html);

			if (!$template.length || !html) {
				$.error('Cannot find the Backbone template for the following element: "' + id + '"');
			}

			compiled = compiled || _.template(html, null, options);
			return compiled(data);
		};
	});

	/**
	 * carbon.isElementInViewport( $el )
	 *
	 * Checks if the element is in the viewport (visible)
	 *
	 * @param  {object} $el   jQuery DOM element
	 *
	 * @return bool
	 */
	carbon.isElementInViewport = function($el) {
		if (!$el.is(':visible')) {
			return false;
		}

		var rect = $el[0].getBoundingClientRect();

		return (
			rect.bottom >= 0 && 
			rect.right >= 0 && 
			rect.top <= $(window).height() && 
			rect.left <= $(window).width()
		);
	}

	/**
	 * carbon.urldecode( str )
	 *
	 * A JavaScript equivalent of PHP's urldecode
	 *
	 * @param  {string} str
	 *
	 * @return {string}
	 */
	carbon.urldecode = function(str) {
		return decodeURIComponent((str + '')
			.replace(/%(?![\da-f]{2})/gi, function() {
				// PHP tolerates poorly formed escape sequences
				return '%25';
			})
			.replace(/\+/g, '%20'));
	}

	/**
	 * Handles sidebar requests
	 *
	 * @param  {string} name
	 * @param  {string} action
	 *
	 * @return {promise}
	 */
	carbon.sidebarManager = function(name, action, reload) {
		var request = $.ajax({
			url: ajaxurl,
			method: 'POST',
			dataType: 'json',
			data: {
				action: 'carbon_' + action + '_sidebar',
				name: name
			}
		});

		request.done(function( response ) {
			if ( !response || !response.success ) {
				alert( response.error || 'An error occurred while trying to ' + action + ' the sidebar.' );
			}
		});

		request.fail(function( jqXHR, textStatus ) {
			alert( 'Request failed: ' + textStatus );
		});

		if (reload) {
			request.always(function() {
				window.location.reload();
			});
		}

		return request;
	}

	/**
	 * Initializes the main view
	 */
	carbon.init = function() {
		if ( _.isUndefined(carbon_json) || _.isEmpty(carbon_json.containers) ) {
			return false;
		}

		// Hook up the events and prepare the containers collection
		carbon.views.main = new carbon.main.View();

		// Populate the containers
		carbon.views.main.setContainers();
	}

	/**
	 *	Run the app when the dom is ready
	 */
	$(document).ready(function() {
		carbon.init(); // Abracadabra! Poof! Containers everywhere ...
	});

}(jQuery));