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

			try {
				container = carbon_container(th);
				carbon_container[type](th, container);
			} catch (e) {
				carbon_log_error("Couldn't render container: " + e.message);
			}

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

	function check_required() {
		var has_errors = false;

		$('.carbon-highlight').removeClass('carbon-highlight');

		// Find required fields
		$('input[type="text"][data-carbon-required=true], textarea[data-carbon-required=true]').each(function() {
			var th = $(this);

			if ( th.val() != '' || th.closest('.carbon-group-preview, .carbon-skip-validation').length > 0 ) {
				return;
			};

			th.closest('td').addClass('carbon-highlight');
			has_errors = true;
		})
		$('.carbon-radio-list[data-carbon-required=true], .carbon-set-list[data-carbon-required=true]').each(function() {
			var th = $(this);

			if ( th.find('input[type=radio]:checked, input[type=checkbox]:checked').length > 0 || th.closest('.carbon-group-preview, .carbon-skip-validation').length > 0 ) {
				return;
			};

			th.closest('td').addClass('carbon-highlight');
			has_errors = true;
		});

		return has_errors;
	}

	/* Theme Options */
	carbon_container.ThemeOptions = function (element, container_obj) {
		theme_options_attach_save_alert();
		theme_options_attach_validation_hook();
	}
	carbon_container.ThemeOptions.attachedSaveAlert = false;
	carbon_container.ThemeOptions.attachedValidationHook = false;
	carbon_container.ThemeOptions.hasChanges = false;

	function theme_options_attach_validation_hook() {
		if ( carbon_container.ThemeOptions.attachedValidationHook ) {
			return;
		};
		carbon_container.ThemeOptions.attachedValidationHook = true;

		$('.Carbon_Container_ThemeOptions:first > form').live("submit", function(){
			var form = $(this),
				has_errors = check_required();

			if ( !has_errors ) {
				return;
			};
			
			$('body, html').animate({scrollTop: 0});

			form.siblings('.carbon-error-required').remove();
			form.before($('<div class="settings-error error below-h2 carbon-error-required"><p><strong>Please fill out all required fields highlighted below.</strong></p></div>'));

			return false;
		});
	}

	function theme_options_attach_save_alert() {
		if ( carbon_container.ThemeOptions.attachedSaveAlert ) {
			return;
		};
		carbon_container.ThemeOptions.attachedSaveAlert = true;

		setTimeout(function() {
			var old_callback = window.onbeforeunload;

			window.onbeforeunload = function (){
				if ( carbon_container.ThemeOptions.hasChanges ) {
					return (typeof autosaveL10n != 'undefined' ? autosaveL10n.saveAlert: 'The changes you made will be lost if you navigate away from this page.');
				};

				if ( old_callback ) {
					return old_callback();
				};
			};

			$('.carbon-container .carbon-field input, .carbon-container .carbon-field select, .carbon-container .carbon-field textarea').live('change', function() {
				carbon_container.ThemeOptions.hasChanges = true;
			});

			$('body').on('remove_fields.carbon reorder_groups.carbon', function() {
				carbon_container.ThemeOptions.hasChanges = true;
			});

			$('.carbon-container input[type="submit"]').click(function(){
				window.onbeforeunload = null;
			});
		});
	}


	/* Custom Fields */
	carbon_container.CustomFields = function (element, container_obj) {
		container_obj.initCheckVisible = true;
		custom_fields_check_visible(container_obj);
		container_obj.initCheckVisible = false;

		custom_fields_attach_save_alert();
		custom_fields_attach_validation_hook();
	}
	carbon_container.CustomFields.attachedValidationHook = false;
	carbon_container.CustomFields.attachedSaveAlert = false;
	carbon_container.CustomFields.hasChanges = false;

	function custom_fields_attach_save_alert() {
		if ( carbon_container.CustomFields.attachedSaveAlert ) {
			return;
		};
		carbon_container.CustomFields.attachedSaveAlert = true;

		setTimeout(function() {
			var old_callback = window.onbeforeunload;

			window.onbeforeunload = function (){
				if ( carbon_container.CustomFields.hasChanges ) {
					return (autosaveL10n && autosaveL10n.saveAlert ? autosaveL10n.saveAlert: 'The changes you made will be lost if you navigate away from this page.');
				};

				return old_callback();
			};

			$('.carbon-container .carbon-field input, .carbon-container .carbon-field select, .carbon-container .carbon-field textarea').live('change', function() {
				carbon_container.CustomFields.hasChanges = true;
			});

			$('body').on('remove_fields.carbon reorder_groups.carbon', function() {
				carbon_container.CustomFields.hasChanges = true;
			});
		});
	}

	function custom_fields_attach_validation_hook() {
		if ( carbon_container.CustomFields.attachedValidationHook ) {
			return;
		};
		carbon_container.CustomFields.attachedValidationHook = true;

		$('form#post').live("submit", function(){
			var form = $(this),
				has_errors = check_required();

			if ( !has_errors ) {
				return;
			};

			// reset submit button and hide spiner
			$('#publish').removeClass('button-primary-disabled');
			$('#ajax-loading, #publishing-action .spinner').attr('style','');

			$('body, html').animate({scrollTop: 0});

			form.siblings('.carbon-error-required').remove();
			form.before($('<div class="settings-error error below-h2 carbon-error-required"><p><strong>Please fill out all required fields highlighted below.</strong></p></div>'));

			return false;
		});
	}

	function custom_fields_check_visible(container) {
		var show_on,
			show = true;

		if ( typeof container.options['show_on'] == 'undefined' ) {
			return true;
		};

		show_on = container.options['show_on'];

		// Page-only options
		if ( $('#post input[name=post_type]').val() == 'page' ) {
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

			// Check hide on page template
			if ( typeof show_on['not_in_template_names'] != 'undefined' && show_on['not_in_template_names'].length > 0 ) {
				var current_template = $('select#page_template').val();

				if ( $.inArray(current_template, show_on['not_in_template_names']) >= 0 ) {
					show = false;
				};

				if ( container.initCheckVisible ) {
					$('select#page_template').change(function() {
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

		// Post-only options
		if ( $('#post input[name=post_type]').val() == 'post' ) {
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
		};

		container.node.toggleClass('carbon-skip-validation', !show);
		container.node.closest('.postbox').toggle(show);
	}


	/* Widgets */
	carbon_container.Widget = function (element, container_obj) {
		var is_template_widget = element.closest('#widgets-left').length;
		container_obj.classname = element.data('classname');

		carbon_container.Widget.widgets_uid ++;

		widget_init_monitor(container_obj);

		// Set new id
		if (is_template_widget) {
			element.find('.carbon-field').addClass('carbon-field-skip');
		} else {
			element.find('.carbon-field').removeClass('carbon-field-skip');
			element.find('label[for]').each(function() {
				var label = $(this),
					id = label.attr('for'),
					input = element.find('#' + id);

				id = id + '-c' + carbon_container.Widget.widgets_uid;
				label.attr('for', id);
				input.attr('id', id);
			});
		};
	}
	carbon_container.Widget.initMonitorReady = false;
	carbon_container.Widget.monitored_keywords = [];
	carbon_container.Widget.widgets_uid = 0;

	function widget_init_monitor(container) {
		var keyword_found = false,
			keywords = carbon_container.Widget.monitored_keywords;

		if ( $.inArray(container.classname, keywords) == -1 ) {
			keywords.push(container.classname);
		};
		// monitor for new containers
		if ( carbon_container.Widget.initMonitorReady ) {
			return;
		};

		carbon_container.Widget.initMonitorReady = true;

		/* Monitor for ajax requests that reload the container node */
		$(document).ajaxSuccess(function(event, jqXHR, ajaxOptions) {
			if ( jqXHR.status != 200 ) {
				return;
			};

			for (var i = keywords.length - 1; i >= 0; i--) {
				if ( ajaxOptions.data.indexOf(keywords[i]) == -1 ) {
					continue;
				};
				keyword_found = true;
				break;
			};

			if ( !keyword_found ) {
				return;
			};

			setTimeout(function() {
				carbon_container_init();
				carbon_field_init();
			}, 1);
		});
	}


	/* User Meta */
	carbon_container.UserMeta = function (element, container_obj) {
		container_obj.initCheckVisible = true;
		user_meta_check_visible(container_obj);
		container_obj.initCheckVisible = false;

		user_meta_attach_save_alert();
		user_meta_attach_validation_hook();
	}
	carbon_container.UserMeta.attachedValidationHook = false;
	carbon_container.UserMeta.attachedSaveAlert = false;
	carbon_container.UserMeta.hasChanges = false;

	function user_meta_attach_save_alert() {
		if ( carbon_container.UserMeta.attachedSaveAlert ) {
			return;
		};
		carbon_container.UserMeta.attachedSaveAlert = true;

		setTimeout(function() {
			var old_callback = window.onbeforeunload || $.noop;

			window.onbeforeunload = function (){
				if ( carbon_container.UserMeta.hasChanges ) {
					return (typeof autosaveL10n != 'undefined' && autosaveL10n.saveAlert ? autosaveL10n.saveAlert: 'The changes you made will be lost if you navigate away from this page.');
				};

				return old_callback();
			};

			$('.carbon-container .carbon-field input, .carbon-container .carbon-field select, .carbon-container .carbon-field textarea').live('change', function() {
				carbon_container.UserMeta.hasChanges = true;
			});

			$('body').on('remove_fields.carbon reorder_groups.carbon', function() {
				carbon_container.UserMeta.hasChanges = true;
			});

			$('form#your-profile input[type="submit"]').click(function(){
				window.onbeforeunload = null;
			});
		});
	}

	function user_meta_attach_validation_hook() {
		if ( carbon_container.UserMeta.attachedValidationHook ) {
			return;
		};
		carbon_container.UserMeta.attachedValidationHook = true;

		$('form#your-profile').live("submit", function(){
			var form = $(this),
				has_errors = check_required();

			if ( !has_errors ) {
				return;
			};

			$('body, html').animate({scrollTop: 0});

			form.siblings('.carbon-error-required').remove();
			form.before($('<div class="settings-error error below-h2 carbon-error-required"><p><strong>Please fill out all required fields highlighted below.</strong></p></div>'));

			return false;
		});
	}

	function user_meta_check_visible(container) {
		var show_on,
			show = true;

		if ( typeof container.options['show_on'] == 'undefined' ) {
			return true;
		};

		show_on = container.options['show_on'];

		// Check page template
		if ( typeof show_on['role'] != 'undefined' && show_on['role'].length > 0 ) {
			var current_role = $('select#role').length > 0 ? $('select#role').val(): container.node.data('profile-role');

			if ( $.inArray(current_role, show_on['role']) < 0 ) {
				show = false;
			};

			if ( container.initCheckVisible ) {
				$('select#role').change(function() {
					user_meta_check_visible(container);
				});
			};
		};

		container.node.toggle(show);
	}

	window.carbon_container_init = init;

	// Abracadabra! Poof! Containers everywhere ...
	init();

	// Fix for mobile devices
	if ( !$('body').is('.mobile') ) {
		$('body').addClass('carbon-desktop');
	};
});