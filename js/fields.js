jQuery(function($) {
	if ('ontouchstart' in document.documentElement) {
		$('body').addClass('touchscreen');
	}
	
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
				carbon_log_error("Couldn't render a field: " + (e.message || e) );
			}
		});
		
		$('table.layout-table em.help-text', context).each(function () {
			var fileField = $(this).closest('tr').find('td div.carbon-file');
			
			if (fileField.length) {
				$(this).insertBefore(fileField.find('div.carbon-description')).wrap('<div class="help-text" />');
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

	/*File*/
	carbon_field.File = function(element, field_obj) {
		if (typeof(crb_media_types) == 'undefined') {
			var crb_media_types = {};
		}

		// Runs when the image button is clicked.
		$(element).find('.c2_open_media').click(function (e) {
			e.preventDefault();
			
			var row = $(this).closest('.carbon-field'),
				input_field = row.find('input.carbon-file-field'),
				button_label = $(this).attr('data-window-button-label'),
				window_label = $(this).attr('data-window-label'),
				value_type = $(this).attr('data-value-type'),
				file_type = $(this).attr('data-type'); // audio, video, image
			
			if (typeof(crb_media_types[element.data('type')] == 'undefined')) {
				crb_media_types[element.data('type')] = wp.media.frames.crb_media_field = wp.media({
					title: window_label ? window_label : crbl10n.title,
					library: { type: file_type }, // autio, video, image
					button: { text: button_label },
					multiple: false
				});
				
				var crb_media_field = crb_media_types[element.data('type')];
				
				// Runs when an image is selected.
				crb_media_field.on('select', function () {
					// Grabs the attachment selection and creates a JSON representation of the model.
					var media_attachment = crb_media_field.state().get('selection').first().toJSON();
					//Object:
					// alt, author, caption, dateFormatted, description, editLink, filename, height, icon, id, link, menuOrder, mime, name, status, subtype, title, type, uploadedTo, url, width
					
					// Sends the attachment URL to our custom image input field.
					var media_value = media_attachment[value_type];

					input_field.val(media_value);

					switch (file_type) {
						case 'image':
							// image field type
							row.find('.carbon-view_image').attr( 'src', media_value ).removeClass('blank');
							row.find('.carbon-view_file').attr( 'href', media_value );
							row.find('.carbon-description, img').show();
							if (!row.find('.carbon-file-remove').length) {
								row.find('.carbon-preview').append('<span class="carbon-file-remove"></span>');
							}
							break;
						case 'audio':
						case 'video':
						default:
							if (parseInt(media_value)==media_value) {
								// attachment field type
								if (media_attachment.type=='image') {
									row.find('.carbon-view_image').attr( 'src', media_attachment.url ).removeClass('blank');
									row.find('.carbon-description, img').show();
								}else{
									// all other file types
									row.find('.carbon-description, img').hide();
									row.find('img').addClass('blank');
								};
								
								if (!row.find('.carbon-file-remove').length) {
									row.find('.carbon-preview').append('<span class="carbon-file-remove"></span>');
								}
							}else{
								// file field type
							};
							row.find('span.attachment_url').html( media_attachment.url );
							row.find('.carbon-view_file').attr('href', media_attachment.url);
							row.find('.carbon-description').show();
					}
				});
			}
			
			var crb_media_field = crb_media_types[element.data('type')];
			
			// Opens the media library frame
			crb_media_field.open();
		});

		$(element).on('click', '.carbon-file-remove', function (e) {
			var fieldContainer = $(this).closest('.carbon-field');
			
			fieldContainer.find('.carbon-description').hide();
			fieldContainer.find('input.carbon-file-field').attr('value', '');
			fieldContainer.find('span.attachment_url').html('');
			fieldContainer.find('img').hide().addClass('blank');
		});
	}
	
	/* Attachment */
	carbon_field.Attachment = carbon_field.File;
	
	/* Image */
	carbon_field.Image = carbon_field.File;

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

			// Fix IE bug - rgb() values for color not redrawing automatically
			color_preview.hide(0, function() {
				color_preview.css('display', 'inline');
			});
			
			color_field.val(color);
		});

		farbtastic_obj.setColor(color_field.val());

		color_preview.add(color_button).click(function() {
			color_container.toggle();
			return false;
		});

		$('body').click(function(e) {
			var $target = $(e.target);

			if ( $target.closest('.carbon-color-container').length > 0 ) {
				return false;
			};
			
			color_container.hide();
		});

		// Update Color field after changing the value manually
		color_field.on('blur', function(e) {
			var new_color = color_field.val();

			new_color = $.trim(new_color);
			if ( new_color.length === 0 ) {
				farbtastic_obj.setColor('#000');
				color_preview.css('background-color', '#fff');
				color_field.val('');
				return;
			};

			if ( new_color[0] !== '#' ) {
				new_color = '#' + new_color;
			};

			if ( /^#([0-9A-F]{3}){1,2}$/i.test(new_color) ) {
				farbtastic_obj.setColor(new_color);
			} else {
				color_field
					.val(farbtastic_obj.color)
					.css({'background-color': '#e74444'})
					.animate({'background-color': '#fff'});
			}
		});
	}

	/* Choose Sidebar */
	carbon_field.Choose_Sidebar = function(element, field_obj) {
		element.find('select').change(function () {
			if ( $(this).val() == 'new' ) {
				var new_sidebar, opt;

				new_sidebar = window.prompt( crbl10n.enter_name_of_new_sidebar );

				if ( new_sidebar == null || new_sidebar == '') {
					$(this).find('option:first').attr('selected', true);
					return false;
				}

				opt = $('<option value="' + esc_attr(new_sidebar) + '">' + new_sidebar + '</option>').insertBefore($(this).find('option:last'));
				
				$(this).find('option').attr('selected', false);
				opt.attr('selected', true);
			}
		});
	}

	/* Map */
	carbon_field.Map = function(element, field_obj) {
		var field = element.find('.carbon-map-field'),
			map_container = element.find('.carbon-map-canvas'),
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
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDoubleClickZoom: true
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
		google.maps.event.addListener(map, 'dblclick', function(point) {
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

	/* Map With Address */
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
		});

		function geocode_address() {
			var address = search_field.val();
			search_field.attr('disabled', true);

			geocoder.geocode( { 'address': address}, function(results, status) {
				search_field.attr('disabled', false);
				if (status == google.maps.GeocoderStatus.OK) {
					field_obj.update_marker_position(results[0].geometry.location);
				} else {
					alert(crbl10n.geocode_not_successful + status);
				}
			});
		};
	};

	/* Rich text */
	carbon_field.Rich_Text = function(element, field_obj) {
		var textarea = element.find('.carbon-wysiwyg textarea'),
			editor_wrap = element.find('.wp-editor-wrap'),
			visual_button = element.find('.wp-switch-editor.switch-tmce'),
			text_button = element.find('.wp-switch-editor.switch-html'),
			command_remove_editor, command_add_editor,
			init_info = {},
			editor;

		if( typeof tinyMCE == 'undefined' || typeof tinyMCE['settings'] == undefined ) {
			return;
		}

		if ( textarea.attr('id').indexOf('__ei__') >= 0 ) {
			// textareas containing '__ei__' in their name are part of a complex field template.
			// they should not be initialized
			throw 'field is a template';
		};

		// WP 3.9 comes with TinyMCE 4
		if ( tinymce.majorVersion == 4 ) {
			command_remove_editor = 'mceRemoveEditor';
			command_add_editor = 'mceAddEditor';
		} else {
			command_remove_editor = 'mceRemoveControl';
			command_add_editor = 'mceAddControl';
		}

		tinyMCE.settings.theme_advanced_buttons1 = 'bold,italic,strikethrough,|,bullist,numlist,blockquote,|,justifyleft,justifycenter,justifyright,|,link,unlink,wp_more,|,fullscreen,wp_adv';
		tinyMCE.settings.theme_advanced_buttons2 = 'formatselect,underline,justifyfull,forecolor,|,pastetext,pasteword,removeformat,|,charmap,|,outdent,indent,|,undo,redo,wp_help';
		tinyMCE.settings.setup = function(ed) {
			// This is called for every editor that is setup on the page, 
			// not only the current carbon field. 
			// Thus we need to trigger a setup_tinymce.carbon event to update
			// the current editor instance for the particular textarea
			var local_editor = ed;
			var editor_element = $( local_editor.getElement() );

			if ( tinymce.majorVersion == 4 ) {
				local_editor.on("blur", function(){
					editor_element.text(local_editor.save());
				});
			} else {
				tinyMCE.dom.Event.add(local_editor.getWin(), "blur", function(){
					editor_element.text(local_editor.save());
				});
			}

			editor_element.trigger('setup_tinymce.carbon', local_editor);
		};

		textarea.bind('setup_tinymce.carbon', function(e, tinymce_editor) {
			editor = tinymce_editor;
		});

		wpActiveEditor = null;
		tinyMCE.execCommand(command_remove_editor, false, textarea.attr('id'));
		tinyMCE.execCommand(command_add_editor, false, textarea.attr('id'));

		visual_button.on('click', function() {
			editor_wrap.removeClass('html-active').addClass('tmce-active');
			rich_text_save_textarea_content_to_editor(textarea, editor);
			editor.show();
		});

		text_button.on('click', function() {
			var editor_height = editor_wrap.find('.wp-editor-container').innerHeight();

			editor_wrap.removeClass('tmce-active').addClass('html-active');
			editor.hide();

			editor_height -= parseInt(textarea.css('padding-top'));
			editor_height -= parseInt(textarea.css('padding-bottom'));
			textarea.height(editor_height);
		});

		// remove editor before removing the node from DOM
		element.bind('remove_fields.carbon', function() {
			if ( editor_wrap.is('.html-active') ) {
				rich_text_save_textarea_content_to_editor(textarea, editor);
			}

			wpActiveEditor = null;
			tinyMCE.execCommand(command_remove_editor, false, textarea.attr('id'));

			textarea.height('auto');
			editor_wrap.removeClass('html-active').addClass('tmce-active');
		});

		element.bind('reinit_field.carbon', function() {
			tinyMCE.execCommand(command_add_editor, false, textarea.attr('id'));
			editor = tinyMCE.get( textarea.attr('id') );

			// save content to textarea on blur
			if ( tinymce.majorVersion == 4 ) {
				editor.on("blur", function(){
					textarea.text(editor.save());
				});
			} else {
				tinyMCE.dom.Event.add(editor.getWin(), "blur", function(){
					textarea.text(editor.save());
				});
			}
		});

		element.closest('div.widget').bind('click.widgets-toggle', function(e){
			var target = $(e.target), css = {}, widget, inside, w;

			if ( target.parents('.widget-top').length && ! target.parents('#available-widgets').length ) {
				// pass
			} else if ( target.hasClass('widget-control-save') ) {
				if ( editor_wrap.is('.html-active') ) {
					rich_text_save_textarea_content_to_editor(textarea, editor);
				}

				tinyMCE.triggerSave();

				wpActiveEditor = null;
				tinyMCE.execCommand(command_remove_editor, false, textarea.attr('id'));

				$( this ).unbind( e );
			}
		});

		element.closest('.widgets-sortables').on( "sortstart", function( event, ui ) {
			if ( ui.item.get(0) != element.closest('.widget').get(0) ) {
				return;
			}
			
			remove_fields(ui.item);
		});
	}

	function rich_text_save_textarea_content_to_editor(textarea, editor) {
		textarea.get(0).value = switchEditors.wpautop( textarea.get(0).value );
		editor.load();
	}

	/* Relationship */
	carbon_field.Relationship = function(element, field_obj) {
		var container = element.find('.carbon-relationship'),
			name = container.data('name'),
			post_type = container.data('post_type'),
			max_values = container.data('max-values'),
			left_list = container.find('.relationship-left .relationship-list'),
			left_list_last_item = left_list.find('li:not(.load-more):last'),
			right_list = container.find('.relationship-right .relationship-list'),
			search_box = container.find('.relationship-left thead input'),
			values = [], // list of post IDs selected in the right pane
			search_timeout = false;

		right_list.find('input[name="' + name + '"]').each(function() {
			values.push(parseInt(this.value));
		});

		left_list.find('a').live('click', function() {
			var th = $(this),
				id = th.data('post_id'),
				title = th.html(),
				new_li;

			if ( $.inArray(id, values) > -1 ) {
				return false;
			};

			if ( max_values > 0 && values.length == max_values ) {
				alert(crbl10n.max_num_items_reached.replace('%s', max_values));
				return false;
			};

			th.parent().addClass('inactive');

			new_li = '<li><a href="#" data-post_id="' + id + '">' + title + '</a><input type="hidden" name="' + name + '" value="' + id + '" /></li>';

			right_list.append(new_li);
			values.push(id);

			return false;
		});

		right_list.find('a').live('click', function() {
			var th = $(this),
				id = parseInt(th.siblings('input').val()),
				position = $.inArray(id, values);

			// check if in array of values
			if ( position <= -1 ) {
				return false;
			};

			values.splice(position, 1);

			th.parent().remove();

			left_list.find('a[data-post_id="' + id + '"]').parent().removeClass('inactive');
			
			return false;
		});

		search_box.keypress(function( e ) {
			// don't submit form
			if( e.which == 13 ) {
				return false;
			}
		}).keyup(function() {
			var val = $(this).val();
			
			container.attr('data-s', val);
			container.attr('data-paged', 1);
			
			if ( search_timeout ) {
				clearTimeout( search_timeout );	
			};
			search_timeout = setTimeout(function(){
				left_list.scrollTop(0);
				update_results();
			}, 250);
			
			return false;
		});

		left_list.scrollTop( 0 ).scroll( function(){
			var th = $(this);

			if( container.is('.loading, .no-results')  ) {
				return;
			}

			// Scrolled to bottom
			if( th.scrollTop() + th.innerHeight() >= th.get(0).scrollHeight - left_list_last_item.height() ) {
				var paged = parseInt( container.attr('data-paged') );
				
				container.attr('data-paged', (paged + 1) );
				
				update_results();
			}
		});

		right_list.sortable({
			axis: "y",
			items: '> li',
			forceHelperSize: true,
			forcePlaceholderSize: true,
			scroll: true
		});

		function update_results(){
			var attributes = {
				action: 'carbon_relationship_load_posts',
				post_type: post_type
			}; 

			// add loading class, stops scroll loading
			container.addClass('loading');
			
			// find attributes
			$.each( container[0].attributes, function( index, attr ) {
				if( attr.name.substr(0, 5) != 'data-' ) {
					return;
				}
				
				attributes[ attr.name.replace('data-', '') ] = attr.value;
			});
			
			// get results
			$.ajax({
				url: ajaxurl,
				type: 'post',
				dataType: 'html',
				data: attributes,
				success: function( html ){
					// new search?
					if( attributes.paged == 1 ) {
						left_list.find('li:not(.load-more)').remove();
					}

					if( !html ) {
						container.removeClass('loading').addClass('no-results');
						return;
					}

					html = $(html);
					html.find('a').each(function(){
						var id = $(this).attr('data-post_id');

						id = parseInt(id);
						
						if( $.inArray(id, values) > -1 ) {
							$(this).parent().addClass('inactive');
						}
					});
					
					left_list.find('.load-more').before( html );
					left_list_last_item = left_list.find('li:not(.load-more):last');
					
					// less than 10 results?
					if( html.length < 10 ) {
						container.addClass('no-results');
					} else {
						container.removeClass('no-results');
					}

					container.removeClass('loading');
				}
			});
		};
	}
	
	carbon_field.Set = function (element, field_obj) {
		element.find('a.carbon-set-showall').click(function (e) {
			e.preventDefault();
			
			$(this).parent().hide().siblings().show();
		});
	}

	/* Complex Field */
	carbon_field.Complex = function(element, field_obj) {
		// prepare object
		field_obj.btn_add = element.find('> .carbon-subcontainer > tbody > tr.carbon-actions a[data-action=add]:first').parent();
		field_obj.group_selector = field_obj.btn_add.find('ul');
		field_obj.empty_field_text = element.find('> .carbon-subcontainer > tbody > tr.carbon-empty-row');
		field_obj.num_rows = element.find('> .carbon-subcontainer > tbody > tr.carbon-group-row').length;
		field_obj.row_uid = field_obj.num_rows;
		field_obj.table = element.children('.carbon-subcontainer:first');
		field_obj.min_rows = element.children('.carbon-subcontainer').data('min-values');
		field_obj.max_rows = element.children('.carbon-subcontainer').data('max-values');

		field_obj.name = element.data('name');

		field_obj.new_row_type = field_obj.group_selector.find('a:first').data('group');

		// init
		if ( field_obj.max_rows > 0 && field_obj.num_rows >= field_obj.max_rows ) {
			field_obj.btn_add.hide();
		};

		if ( field_obj.num_rows == 0 ) {
			field_obj.empty_field_text.show();
		};
		
		$('tr.carbon-group-row[id]').each(function () {
			if (getUserSetting($(this).attr('id').replace(/[^a-zA-Z0-9_]/, '')) == 'minimized') {
				$(this).addClass('minimized');
			}
		});

		// Hook events

		field_obj.btn_add.children('a').click(function(e) {
			if ( field_obj.group_selector.children().length > 1 ) {
				field_obj.group_selector.show();
			} else {
				field_obj.group_selector.find('a:first').click();
			}
			
			return false;
		});
		
		field_obj.node.find('a[data-action="toggle-minimize"]').live('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			
			var groupRow = $(this).closest('.carbon-group-row');
			groupRow.toggleClass('minimized');
			if (groupRow.attr('id')) {
				if (groupRow.hasClass('minimized')) {
					setUserSetting(groupRow.attr('id'), 'minimized');
				} else {
					deleteUserSetting(groupRow.attr('id'));
				}
			}
		});

		field_obj.node.find('a[data-action="remove"]').live('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			complex_remove_row(field_obj, $(this).closest('.carbon-group-row'));
		});

		field_obj.node.find('a[data-action="duplicate"]').live('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			complex_duplicate_row(field_obj, $(this).closest('.carbon-group-row'));
		});

		field_obj.group_selector.find('a').click(function(e) {
			field_obj.new_row_type = $(this).data('group');
			complex_add_row(field_obj);

			e.preventDefault();
		});

		field_obj.empty_field_text.find('a:first').click(function() {
			setTimeout(function() {
				field_obj.group_selector.find('a:first').click();
			}, 1);
			return false;
		});

		field_obj.node.on('change', 'input:text', function() {
			$(this).attr('value', $(this).val());
			return false;
		});

		field_obj.node.on('change', 'textarea', function() {
			$(this).text($(this).val());
			return false;
		});

		$('body').click(function(e) {
			var $target = $(e.target);

			if ( $target.is(field_obj.btn_add) ) {
				return false;
			};

			field_obj.group_selector.hide();
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
			alert(crbl10n.max_num_rows_reached.replace('%s', field.num_rows));
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

		new_row.find('.carbon-drag-handle:first span').text(field.num_rows)

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
				field.group_selector.find('a:first').click();
			};

			if ( field.max_rows > 0 && field.num_rows <= field.max_rows ) {
				field.btn_add.show();
			};
		});		
	}

	function complex_duplicate_row(field, row) {
		if ( field.max_rows > 0 && field.max_rows <= field.num_rows ) {
			alert(crbl10n.cannot_create_more_rows.replace('%s', field.num_rows));
			return;
		};

		// Remove fields because we want to clone a pure version of the original row
		remove_fields(row);

		// Touch all input/textarea values to make sure the input DOM nodes are updated
		row.find('input:text, textarea').each(function() {
			$(this).attr('value', $(this).val());
		});

		// Touch all checkbox & radio checked states to update the DOM nodes
		row.find('input:checkbox, input:radio').each(function() {
			if ($(this).is(':checked')) {
				$(this).attr('checked', 'checked');
			} else {
				$(this).removeAttr('checked');
			}
		});

		// Touch all select fields to update the DOM nodes
		row.find('select option').each(function() {
			if (!$(this).is(':selected')) {
				$(this).removeAttr('selected');
			} else {
				$(this).attr('selected', 'selected');
			}
		});

		new_row = row.clone();

		init(row);

		field.num_rows++;
		field.row_uid++;

		new_row.find('.carbon-field-skip').removeClass('carbon-field-skip');

		// Set new row_uid
		field_name_regex = new RegExp("" + field.name.replace(/\[/g, '\\[').replace(/\]/g, '\\]') + "(\\])?\\[\\d+\\]", "g")
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

		new_row.removeClass('carbon-group-preview').addClass('carbon-group-row').insertAfter( row );
		init(new_row);

		new_row.find('.carbon-drag-handle:first span').text(field.num_rows)

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};

		complex_on_update_rows(field);

		new_row.hide().addClass('duplicated').fadeIn(function() {
			$(this).removeClass('duplicated')
		});
	}

	function complex_on_update_rows(field) {
		var fields = field.node.find('.ui-sortable:first').children('.carbon-group-row'),
			row_index = 0;
		field.num_rows = fields.length;

		for (var i = field.num_rows; i >= 0; i--) {
			fields.eq(i).find('.carbon-drag-handle:first span').text(i+1);
		};

		if ( field.num_rows == 0 ) {
			field.empty_field_text.show();
		} else {
			field.empty_field_text.hide();
		}
	}

	// reset a field to its initial state
	function reset_field(field) {
		var type = field.data('type');
		var default_value = field.data('default-value');

		switch(type) {
			case 'Text':
			case 'Date':
			case 'File':
				field.find('input:eq(0)').val(default_value);
				break;

			case 'Textarea':
				field.find('textarea:eq(0)').val(default_value);
				break;

			case 'Color':
				var input = field.find('input:eq(0)');

				// reset farbtastic
				input.val('#ffffff').trigger('blur');

				// apply default value, if any
				input.val(default_value).trigger('blur');
				
				break;

			case 'Checkbox':
			case 'Set':
			case 'Radio':
				var inputs = field.find(':checkbox, :radio');

				inputs.each(function() {
					var input = $(this);

					// uncheck all fields
					input.removeAttr('checked');

					// check all fields that are set as default value (if any)
					if (default_value) {
						default_values = default_value.split(',');

						$(default_values).each(function() {
							if (input.val() == this) {
								input.attr('checked', 'checked');
							}
						});
					}
				});
				break;

			case 'Select':
			case 'Choose_Sidebar':
			case 'Gravity_Form':
				var new_val,
					select = field.find('select:eq(0)');

				// select either the default value, or the first option
				if (default_value) {
					new_val = default_value;
				} else {
					new_val = select.find('option:eq(0)').attr('value');
				}
				select.val(new_val);

				break;

			case 'Rich_Text':
				var editor_id = 'wysiwyg-' + field.data('name'),
					editor = tinymce.get(editor_id);

				editor.setContent(default_value);

				break;

			case 'Relationship':
				// remove the falue from the Search field
				field.find('.relationship-left input:text').val('');

				// unselect current posts
				field.find('.relationship-right .relationship-list a').trigger('click');

				// if there is a default value, select the corresponding entry (or entries)
				if (default_value) {
					var default_values = default_value.split(',');
					$(default_values).each(function() {
						field.find('.relationship-left .relationship-list a[data-post_id="' + this + '"]').trigger('click');
					});
				}

				break;

			case 'Image':
			case 'Attachment':
				// reset field value
				field.find('input:text').val(default_value);

				// remove & hide the preview image
				field.find('.carbon-file-remove').trigger('click');

				break;

			case 'Map_With_Address':
				// reset the address text field
				field.find('input:text').val('');

			case 'Map':
				var field_object = field.data('carbon_field')
					map_field = field.find('.carbon-map-field:eq(0)'),
					lat = map_field.data('default-lat'),
					lng = map_field.data('default-lng');

				// reset and redraw map
				field_object.update_marker_position( new google.maps.LatLng(lat, lng) );

				break;

			case 'Complex': 

				// remove all complex entries
				field.find('.carbon-btn-remove').trigger('click');

				break;
		}
	}

	function esc_attr(s, preserveCR) {
		preserveCR = preserveCR ? '&#13;' : '\n';
		return ('' + s) /* Forces the conversion to string. */
			.replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
			.replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
			.replace(/"/g, '&quot;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
			.replace(/[\r\n]/g, preserveCR);
			;
	}

	var current_editor = getUserSetting('editor');
	$('#carbon_settings-tmce').trigger('click');

	setTimeout(function() {
		init();
		setUserSetting('editor', current_editor);
	}, 1);

	window.carbon_field_init = init;
	window.carbon_field = carbon_field;
	window.reset_field = reset_field;

	/**/
	window.carbon_log_error = carbon_log_error;
	function carbon_log_error(error_message) {
		if (typeof console != "undefined") {
			console.log("*Carbon Error:* " + error_message);
		}
	}
});