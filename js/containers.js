jQuery(function($) {

	function EECF_Container (node) {
		if ( node.data('eecf_container') ) {
			$.error('Container already parsed');
		};

		node.data('eecf_container', this);
		this.node = node;

		this.options = this.node.data('options');
		if ( typeof this.options != 'object' ) {
			this.options = {};
		};
	}

	$.extend(EECF_Container, {
		init: function(context) {
			var containers;

			if ( !context ) {
				context = $('body');
			};

			containers = $('.eecf-container', context);

			containers.each(function() {
				var th = $(this),
					type = th.data('type'),
					container;

				if ( typeof EECF_Container[type] == 'undefined' ) {
					return;
				};

				container = new EECF_Container[type](th);
				container.init();
			});
		}
	});

	/* Custom Fields Container */
	EECF_Container.CustomFields = function() {
		EECF_Container.apply(this, arguments);
	}

	$.extend(EECF_Container.CustomFields.prototype, {
		initCheckVisible: true,
		init: function() {
			this.checkVisible();
			this.initCheckVisible = false;
		},

		checkVisible: function() {
			var th = this,
				show_on,
				show = true;

			if ( typeof this.options['show_on'] == 'undefined' ) {
				return true;
			};

			show_on = this.options['show_on'];

			// Check page template
			if ( typeof show_on['template_names'] != 'undefined' && show_on['template_names'].length > 0 ) {
				var current_template = $('select#page_template').val();

				if ( $.inArray(current_template, show_on['template_names']) < 0 ) {
					show = false;
				};

				if ( th.initCheckVisible ) {
					$('select#page_template').change(function() {
						th.checkVisible();
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
				
				if ( th.initCheckVisible ) {
					$('select#parent_id').change(function() {
						th.checkVisible();
					});
				};
			};

			// Check term/taxonomy
			if ( typeof show_on['tax_slug'] != 'undefined' ) {
				if (! $('#' + show_on['tax_slug'] + 'checklist input[value=' + show_on['tax_term_id'] + '], #' + show_on['tax_slug'] + '-pop input[value=' + show_on['tax_term_id'] + ']').is(':checked')) {
					show = false;
				};

				if ( th.initCheckVisible ) {
					$('#' + show_on['tax_slug'] + 'checklist input, #' + show_on['tax_slug'] + '-pop input').change(function() {
						setTimeout(function() {
							th.checkVisible();
						}, 0);
					});
				};
			};

			// Check post format
			if ( typeof show_on['post_formats'] != 'undefined' && show_on['post_formats'].length > 0 ) {
				if ( $('#post-format-' + show_on['post_formats'].join(':checked, #post-format-') + ':checked').length == 0 ) {
					show = false;
				};

				if ( th.initCheckVisible ) {
					$('#post-formats-select input[name=post_format]').change(function() {
						th.checkVisible();
					});
				};
			};

			// Check page parent
			if ( typeof show_on['parent_page_id'] != 'undefined' && show_on['parent_page_id'] != null ) {
				if ( show_on['parent_page_id'] != $('select#parent_id').val() ) {
					show = false;
				};

				if ( th.initCheckVisible ) {
					$('select#parent_id').change(function() {
						th.checkVisible();
					});
				};
			};

			this.node.closest('.postbox').toggle(show);
		}
	});


	/* Widget Container */
	EECF_Container.Widget = function() {
		EECF_Container.apply(this, arguments);
	}

	$.extend(EECF_Container.Widget, {
		initMonitorReady: false,
		initMonitor: function() {
			// monitor for new containers

			if ( this.initMonitorReady ) {
				return;
			};

			this.initMonitorReady = true;

			/* Monitor for ajax requests that reload the container node */
			$(document).ajaxSuccess(function(event, jqXHR, ajaxOptions) {
				if ( jqXHR.status != 200 || ajaxOptions.data.indexOf('eecf_') == -1 ) {
					return;
				};

				EECF_Field.init();
			});
		},
		checkNew: function() {

		}
	});

	$.extend(EECF_Container.Widget.prototype, {
		init: function() {
			EECF_Container.Widget.initMonitor();
		}
	});


	EECF_Container.init();
});