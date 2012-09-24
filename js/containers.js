jQuery(function($) {
	function init (context) {
		var containers;

		if ( !context ) {
			context = $('body');
		};

		containers = $('.carbon-container', context);

		containers.each(function() {
			var th = $(this),
				type = th.data('type'),
				container;

			container = carbon_container(th);

			if ( typeof carbon_container[type] != 'undefined' ) {
				carbon_container[type](th, container);
			};
		});
	}

	// Parse the DOM element and create container object for ease of use
	function carbon_container(node) {
		var container = {}
		if ( node.data('carbon_container') ) {
			$.error('Container already parsed');
		};

		node.data('carbon_container', container);
		container.node = node;

		container.options = container.node.data('options');
		if ( typeof container.options != 'object' ) {
			container.options = {};
		};

		return container;
	}

	/* Custom Fields */
	carbon_container.CustomFields = function (element, container_obj) {
		container_obj.initCheckVisible = true;
		custom_fields_check_visible(container_obj);
		container_obj.initCheckVisible = false;
	}

	function custom_fields_check_visible(container) {
		var show_on,
			show = true;

		if ( typeof container.options['show_on'] == 'undefined' ) {
			return true;
		};

		show_on = container.options['show_on'];

		// Check page template
		if ( typeof show_on['template_names'] != 'undefined' && show_on['template_names'].length > 0 ) {
			var current_template = $('select#page_template').val();

			if ( $.inArray(current_template, show_on['template_names']) < 0 ) {
				show = false;
			};

			if ( container.initCheckVisible ) {
				$('select#page_template').change(function() {
					custom_fields_check_visible(container);
				});
			};
		};

		// Check hierarchy level
		if ( typeof show_on['level_limit'] != 'undefined' && show_on['level_limit'] != null  ) {
			var level = $('select#parent_id option:checked').attr('class');

			level = level ? parseInt(level.match(/^level-(\d+)/)[1]) + 2: 1;

			if ( level != show_on['level_limit'] ) {
				show = false;
			};
			
			if ( container.initCheckVisible ) {
				$('select#parent_id').change(function() {
					custom_fields_check_visible(container);
				});
			};
		};

		// Check term/taxonomy
		if ( typeof show_on['tax_slug'] != 'undefined' ) {
			if (! $('#' + show_on['tax_slug'] + 'checklist input[value=' + show_on['tax_term_id'] + '], #' + show_on['tax_slug'] + '-pop input[value=' + show_on['tax_term_id'] + ']').is(':checked')) {
				show = false;
			};

			if ( container.initCheckVisible ) {
				$('#' + show_on['tax_slug'] + 'checklist input, #' + show_on['tax_slug'] + '-pop input').change(function() {
					setTimeout(function() {
						custom_fields_check_visible(container);
					}, 0);
				});
			};
		};

		// Check post format
		if ( typeof show_on['post_formats'] != 'undefined' && show_on['post_formats'].length > 0 ) {
			if ( $('#post-format-' + show_on['post_formats'].join(':checked, #post-format-') + ':checked').length == 0 ) {
				show = false;
			};

			if ( container.initCheckVisible ) {
				$('#post-formats-select input[name=post_format]').change(function() {
					custom_fields_check_visible(container);
				});
			};
		};

		// Check page parent
		if ( typeof show_on['parent_page_id'] != 'undefined' && show_on['parent_page_id'] != null ) {
			if ( show_on['parent_page_id'] != $('select#parent_id').val() ) {
				show = false;
			};

			if ( container.initCheckVisible ) {
				$('select#parent_id').change(function() {
					custom_fields_check_visible(container);
				});
			};
		};

		container.node.closest('.postbox').toggle(show);
	}


	/* Widgets */
	carbon_container.Widget = function (element, container_obj) {
		widget_init_monitor(container_obj);
	}
	carbon_container.Widget.initMonitorReady = false;

	function widget_init_monitor(container) {
		// monitor for new containers
		if ( carbon_container.Widget.initMonitorReady ) {
			return;
		};

		carbon_container.Widget.initMonitorReady = true;

		/* Monitor for ajax requests that reload the container node */
		$(document).ajaxSuccess(function(event, jqXHR, ajaxOptions) {
			if ( jqXHR.status != 200 || ajaxOptions.data.indexOf('carbon_') == -1 ) {
				return;
			};

			setTimeout(carbon_field_init, 1);
		});
	}
	

	// Abracadabra! Poof! Containers everywhere ...
	init();
});