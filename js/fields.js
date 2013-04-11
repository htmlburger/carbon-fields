jQuery(function($) {
	function init(context) {
		var fields;

		if ( !context ) {
			context = $('body');
		};

		fields = $('.carbon-field:not(.carbon-field-skip)', context);

		fields.each(function() {
			var th = $(this),
				type = th.data('type'),
				field;

			if ( typeof carbon_field[type] == 'undefined' ) {
				return;
			};

			try {
				field = carbon_field(th);
				carbon_field[type](th, field);
			} catch (e) {
				carbon_log_error("Couldn't render a field: " + e.message);
			}
		});
	}
	function remove_fields(context) {
		if ( !context ) {
			return;
		};

		$('.carbon-field:not(.carbon-field-skip)', context).trigger('remove_fields.carbon');
	}

	function carbon_field(node) {
		var field = {};

		if ( node.data('carbon_field') ) {
			node.trigger('reinit_field.carbon');
			$.error('Field already parsed');
		};

		node.data('carbon_field', field);
		field.node = node;
		field.type = node.data('type')

		return field;
	}

	/* File and Image */
	carbon_field.File = function(element, field_obj) {
		element.find('.button').click(function() {
			window.carbon_active_field = element;
			tb_show('','media-upload.php?post_id=0&carbon_type=file&TB_iframe=true');
		});
	}

	carbon_field.Image = function(element, field_obj) {
		element.find('.button:not(.carbon-file-remove)').click(function() {
			window.carbon_active_field = element;
			tb_show('','media-upload.php?post_id=0&type=image&carbon_type=image&TB_iframe=true');
		});

		element.find('.carbon-file-remove').click(function() {
			element.find('img').addClass('blank').attr('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
			element.find('.carbon-image-field').val('');
			$(this).hide();
			return false;
		});
	}

	/* Attachment */
	carbon_field.Attachment = function(element, field_obj) {
		element.find('.button:not(.carbon-file-remove)').click(function() {
			window.carbon_active_field = element;
			tb_show('','media-upload.php?post_id=0&type=file&carbon_type=image&TB_iframe=true');
		});

		element.find('.carbon-file-remove').click(function() {
			element.find('img').addClass('blank').attr('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
			element.find('.button:not(.carbon-file-remove)').show();
			element.find('.carbon-image-field').val('');
			element.find('.carbon-attachment-title, .carbon-attachment-url').html('');
			$(this).hide();
			return false;
		});
	}

	/* Date picker */
	carbon_field.Date = function(element, field_obj) {
		var text_field = element.find('.carbon-datepicker');

		text_field.datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			hideIfNoPrevNext: true
		});

		element.find('.carbon-datepicker-trigger').click(function() {
			text_field.focus();
			return false;
		});
	}

	/* Color picker */
	carbon_field.Color = function(element, field_obj) {
		var color_container = element.find('.carbon-color-container'),
			color_preview = element.find('.carbon-color-preview'),
			color_button = element.find('.button'),
			color_field = element.find('.carbon-color'),
			farbtastic_obj;

		farbtastic_obj = $.farbtastic(color_container, function(color) {
			color_preview.css('background-color', color);
			color_field.val(color);
		});

		farbtastic_obj.setColor(color_field.val());

		color_preview.add(color_button).click(function() {
			color_container.toggle();
			return false;
		});

		$('body').click(function(e) {
			var $target = $(e.target);

			if ( $target.is(color_preview) || $target.is(color_button) ) {
				return false;
			};

			color_container.hide();
		});
	}

	/* Choose Sidebar */
	carbon_field.Choose_Sidebar = function(element, field_obj) {
	    element.find('select').change(function () {
	        if ( $(this).val() == 'new' ) {
	        	var new_sidebar, opt;

	        	new_sidebar = window.prompt("Please enter the name of the new sidebar: ");

	        	if ( new_sidebar == null || new_sidebar == '') {
	        		$(this).find('option:first').attr('selected', true);
	        		return false;
	        	}

	        	opt = $('<option value="' + new_sidebar + '">' + new_sidebar + '</option>').insertBefore($(this).find('option:last'));
	        	
	        	$(this).find('option').attr('selected', false);
	        	opt.attr('selected', true);
	        }
	    });
	}

	/* Map */
	carbon_field.Map = function(element, field_obj) {
		var field = element.find('.carbon-map-field'),
			map_container = element.find('.carbon-map'),
			exists = 0,
			marker = false,
			zoom = field.data('zoom'),
			coords = field.val();

		if (coords !== '' || coords.split(',').length == 2) {
			temp = coords.split(',');
			lat = parseFloat(temp[0]);
			lng = parseFloat(temp[1]);

			exists = temp[0] !== '0' && temp[1] !== '0';
		}

		if ( !exists || isNaN(lat) ||isNaN(lng)  ) {
			lat = field.data('default-lat');
			lng = field.data('default-lng');
		};


		//draw a map
		var map = new google.maps.Map(map_container.get(0), {
			zoom: zoom,
			center: new google.maps.LatLng(lat, lng),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		// export the map object
		field_obj.update_marker_position = function(point) {
			var latLng = point.latLng || point;
			if ( marker ) {
				marker.setPosition(latLng);
				map.setCenter(latLng)
			} else {
				marker = new google.maps.Marker({
					position: latLng,
					map: map,
					draggable: true
				});

				google.maps.event.addListener(marker, "dragend", function (mEvent) { 
					update_value();
				});
			}
			update_value();
		}

		// if we had coords in input field, put a marker on that spot
		if(exists == 1) {
			field_obj.update_marker_position(new google.maps.LatLng(lat, lng))
		}

		// on click move marker and set new position
		google.maps.event.addListener(map, 'click', function(point) {
			lat = point.latLng.lat();
			lng = point.latLng.lng();
			field_obj.update_marker_position(point);
		});

		function update_value() {
			field.val(marker.getPosition().lat() + ',' + marker.getPosition().lng());
		}

		// If we are in a widget container, resize the map when the widget is revealed.
		// This is a workaround since maps don't initialize in a hidden div (widget)
		map_container.closest('div.widget').bind('click.widgets-toggle', function(e){
			if ( $(e.target).parents('.widget-inside').length > 0 ) {
				return;
			};

			setTimeout(function() {
				google.maps.event.trigger(map, 'resize');
				field_obj.update_marker_position(new google.maps.LatLng(lat, lng))
			}, 1);
		});
	}
	carbon_field.Map_With_Address = function(element, field_obj) {
		var search_field = element.find('.address'),
			geocoder = new google.maps.Geocoder();

		// Initialize the base map field
		carbon_field.Map(element, field_obj);

		// Decorate the base field with a geo coder
		element.find('.address-search-btn').on('click', geocode_address);

		// Disable the form submission with enter key; instead, initiate address geocoding
		search_field.on('keypress', function (e) {
			var enter_keycode = 13;
			if (e.keyCode == enter_keycode) {
				geocode_address();
				return false;
			}
		})


		function geocode_address() {
			var address = search_field.val();
			search_field.attr('disabled', true);

			geocoder.geocode( { 'address': address}, function(results, status) {
				search_field.attr('disabled', false);
				if (status == google.maps.GeocoderStatus.OK) {
					field_obj.update_marker_position(results[0].geometry.location);
				} else {
					alert("Geocode was not successful for the following reason: " + status);
				}
			});
		}
	};

	/* Rich text */
	carbon_field.Rich_Text = function(element, field_obj) {
		var textarea = element.find('.carbon-wysiwyg textarea');

		if( typeof tinyMCE == 'undefined' || typeof tinyMCE['settings'] == undefined ) {
			return;
		}

		tinyMCE.settings.theme_advanced_buttons1 = 'bold,italic,strikethrough,|,bullist,numlist,blockquote,|,justifyleft,justifycenter,justifyright,|,link,unlink,wp_more,|,spellchecker,fullscreen,wp_adv';
		tinyMCE.settings.theme_advanced_buttons2 = 'formatselect,underline,justifyfull,forecolor,|,pastetext,pasteword,removeformat,|,charmap,|,outdent,indent,|,undo,redo,wp_help,code';

		wpActiveEditor = null;
		tinyMCE.execCommand('mceRemoveControl', false, textarea.attr('id'));
		tinyMCE.execCommand('mceAddControl', false, textarea.attr('id'));

		// remove editor before removing the node from DOM
		element.bind('remove_fields.carbon', function() {
			var textarea_width = element.outerWidth(),
				field_height = Math.max(180, element.outerHeight()),
				textarea_height = field_height - 4 - 20 - element.find('.wp-editor-tools').height(); // 20 padding, 4 borders and stuff

			element.width(textarea_width).height(field_height);
			textarea.width(textarea_width - 4).height(textarea_height);

			wpActiveEditor = null;
			tinyMCE.execCommand("mceRemoveControl", false, textarea.attr('id'));
		});

		element.bind('reinit_field.carbon', function() {
			tinyMCE.execCommand('mceAddControl', false, textarea.attr('id'));
			element.height('auto').width('auto');
			textarea.height('auto').width('auto');
		});

		element.closest('div.widget').bind('click.widgets-toggle', function(e){
			var target = $(e.target), css = {}, widget, inside, w;

			if ( target.parents('.widget-top').length && ! target.parents('#available-widgets').length ) {
				// pass
			} else if ( target.hasClass('widget-control-save') ) {
				tinyMCE.triggerSave();
			}
		});

		element.closest('.widgets-sortables').on( "sortstart", function( event, ui ) {
			if ( ui.item.get(0) != element.closest('.widget').get(0) ) {
				return;
			}
			remove_fields(ui.item);
		});
	}

	/* Relationship */
	carbon_field.Relationship = function(element, field_obj) {
		var container = element.find('.carbon-relationship'),
			name = container.data('name'),
			values = [];

		// TODO:
		// keep local array of values
		// gray out left list values
		// sortable values list
		// dynamically populate list of posts
		// search (ajax powered)
	}

	/* Complex Field */
	carbon_field.Complex = function(element, field_obj) {
		// prepare object
		field_obj.group_selector = element.find('select[name$="[group]"]:last');
		field_obj.btn_add = element.find('> .carbon-subcontainer > tbody > tr.carbon-actions a[data-action=add]:first');
		field_obj.empty_field_text = element.find('> .carbon-subcontainer > tbody > tr.carbon-empty-row');
		field_obj.num_rows = element.find('.carbon-group-row').length;
		field_obj.row_uid = field_obj.num_rows;
		field_obj.table = element.children('.carbon-subcontainer:first');
		field_obj.min_rows = element.children('.carbon-subcontainer').data('min-values');
		field_obj.max_rows = element.children('.carbon-subcontainer').data('max-values');

		field_obj.name = element.data('name');

		field_obj.new_row_type = field_obj.group_selector.val();

		// init
		if ( field_obj.max_rows > 0 && field_obj.num_rows >= field_obj.max_rows ) {
			field_obj.btn_add.hide();
		};

		if ( field_obj.num_rows == 0 ) {
			field_obj.empty_field_text.show();
		};

		// Hook events

		field_obj.btn_add.click(function(e) {
			complex_add_row(field_obj);
			return false;
		});

		field_obj.node.find('a[data-action=remove]').live('click', function() {
			complex_remove_row(field_obj, $(this).closest('.carbon-group-row'));
			return false;
		});

		field_obj.group_selector.change(function() {
			field_obj.new_row_type = $(this).val();
		});

		field_obj.empty_field_text.find('a:first').click(function() {
			setTimeout(function() {
				field_obj.btn_add.click();
			}, 1);
			return false;
		});

		// Sortable
		field_obj.table.children('tbody').sortable({
			items : '> tr.carbon-group-row',
			handle: '.carbon-drag-handle',
			forceHelperSize: true,
			forcePlaceholderSize: true,
			scroll: true,
			helper: function(e, ui) {
				ui.children().each(function() {
					$(this).width($(this).width());
				});
				return ui;
			},
			update: function() {
				complex_on_update_rows(field_obj);
				field_obj.node.trigger('reorder_groups.carbon');
			},
			start: function( ev, ui) {
				field_obj.table.addClass('carbon-container-shrank')
				remove_fields(ui.item);
			},
			stop: function( ev, ui) {
				field_obj.table.removeClass('carbon-container-shrank')
				init(ui.item);
			}
		});
	}

	function complex_add_row(field) {
		var sample_row, new_row, field_name_regex;

		if ( field.max_rows > 0 && field.max_rows <= field.num_rows ) {
			alert('Maximum number of rows reached (' + field.num_rows + ')');
			return;
		};

		sample_row = field.node.find('> .carbon-subcontainer > tbody > .carbon-group-preview.carbon-group-' + field.new_row_type);
		new_row = sample_row.clone();

		field.num_rows++;
		field.row_uid++;

		new_row.find('.carbon-field-skip').removeClass('carbon-field-skip');

		// Set new row_uid
		new_row.find('input[name$="[__ei__][group]"]:first').val(field.new_row_type);

		field_name_regex = new RegExp("" + field.name.replace(/\[/g, '\\[').replace(/\]/g, '\\]') + "(\\])?\\[__ei__\\]", "g")
		new_row.html( new_row.html().replace(field_name_regex, field.name + '$1[' + field.row_uid + ']') );

		// Set new id
		new_row.find('label[for]').each(function() {
			var label = $(this),
				id = label.attr('for'),
				input = new_row.find('#' + id);

			id = id + '-c' + field.row_uid;
			label.attr('for', id);
			input.attr('id', id);
		});

		new_row.removeClass('carbon-group-preview').addClass('carbon-group-row').insertBefore( field.node.find('> .carbon-subcontainer > tbody > .carbon-group-preview:first') );
		init(new_row);

		new_row.find('.carbon-drag-handle span').text(field.num_rows)

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};

		complex_on_update_rows(field);
	}

	function complex_remove_row(field, row) {
		row.addClass('removed').fadeOut(500, function() {
			remove_fields(row);
			row.remove();
			complex_on_update_rows(field);

			if ( field.min_rows > field.num_rows ) {
				field.btn_add.click();
			};

			if ( field.max_rows > 0 && field.num_rows <= field.max_rows ) {
				field.btn_add.show();
			};
		});		
	}

	function complex_on_update_rows(field) {
		var fields = field.node.find('.carbon-group-row'),
			row_index = 0;
		field.num_rows = fields.length;

		for (var i = field.num_rows; i >= 0; i--) {
			fields.eq(i).find('.carbon-drag-handle span').text(i+1);
		};

		if ( field.num_rows == 0 ) {
			field.empty_field_text.show();
		} else {
			field.empty_field_text.hide();
		}
	}

	var current_editor = getUserSetting('editor');
	$('#carbon_settings-tmce').trigger('click');

	setTimeout(function() {
		init();
		setUserSetting('editor', current_editor);
	}, 1);

	window.carbon_field_init = init;

	/**/
	window.carbon_log_error = carbon_log_error;
	function carbon_log_error(error_message) {
		if (typeof console != "undefined") {
			console.log("*Carbon Error:* " + error_message);
		}
	}
});