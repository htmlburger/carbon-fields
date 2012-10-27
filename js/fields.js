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

				if ( typeof carbon_field[type] != 'undefined' ) {
					carbon_field[type](th, field);
				};
			} catch (e) {}
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
			$.error('Field already parsed');
		};

		node.data('carbon_field', field);
		field.node = node;
		field.type = node.data('type')

		return field;
	}

	/* File and Image */
	carbon_field.File = function(element, field_obj) {
		element.find('.button-primary').click(function() {
			window.carbon_active_field = element;
			tb_show('','media-upload.php?TB_iframe=true');
		});
	}

	carbon_field.Image = function(element, field_obj) {
		element.find('.button-primary').click(function() {
			window.carbon_active_field = element;
			tb_show('','media-upload.php?type=image&amp;TB_iframe=true');
		});
	}

	/* Date picker */
	carbon_field.Date = function(element, field_obj) {
		element.find('.carbon-datepicker').datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			hideIfNoPrevNext: true
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
			color_container.show();
		});

		$('body').click(function(e) {
			var $target = $(e.target);

			if ( $target.is(color_preview) || $target.is(color_button) ) {
				return false;
			};

			color_container.hide();
		});
	}

	/* Map */
	carbon_field.Map = function(element, field_obj) {
		var field = element.find('.regular-text'),
			map_container = element.find('.carbon-map'),
			exists = 0,
			marker = false,
			zoom = field.data('zoom'),
			coords = field.val();

		if (coords === '' || coords.split(',').length != 2) {
			lat = field.data('default-lat'); 
			lng = field.data('default-lng');
			zoom = 8;
		} else {
			temp = coords.split(',');
			lat = parseFloat(temp[0]);
			lng = parseFloat(temp[1]);
			exists = 1;
		}

		//draw a map
		var map = new google.maps.Map(map_container.get(0), {
			zoom: zoom,
			center: new google.maps.LatLng(lat, lng),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		
		// if we had coords in input field, put a marker on that spot
		if(exists == 1) {
			marker = new google.maps.Marker({
				position: map.getCenter(),
				map: map,
				draggable: true
			});

			google.maps.event.addListener(marker, "dragend", function (mEvent) { 
				update_value();
			});
		}

		// on click move marker and set new position
		google.maps.event.addListener(map, 'click', function(point) {
			if ( marker ) {
				marker.setPosition(point.latLng);
			} else {
				marker = new google.maps.Marker({
					position: point.latLng,
					map: map,
					draggable: true
				});

				google.maps.event.addListener(marker, "dragend", function (mEvent) { 
					update_value();
				});
			}

			update_value();
		});

		function update_value() {
			field.val(marker.getPosition().lat() + ',' + marker.getPosition().lng());
		}
	}

	/* Rich text */
	carbon_field.Rich_Text = function(element, field_obj) {
		var textarea = element.find('.carbon-wysiwyg textarea');

		if( typeof tinyMCE == 'undefined' ) {
			return;
		}

		wpActiveEditor = null;
		tinyMCE.execCommand('mceAddControl', false, textarea.attr('id'));

		// remove editor before removing the node from DOM
		element.bind('remove_fields.carbon', function() {
			wpActiveEditor = null;
			tinyMCE.execCommand("mceRemoveControl", false, textarea.attr('id'));
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

	/* Compound Field */
	carbon_field.Compound = function(element, field_obj) {
		// prepare object
		field_obj.btn_add = element.find('a[data-action=add]');
		field_obj.num_rows = element.find('.carbon-compound-row').length;
		field_obj.row_uid = field_obj.num_rows;
		field_obj.min_rows = element.children('.carbon-container').data('min-values');
		field_obj.max_rows = element.children('.carbon-container').data('max-values');

		field_obj.name = element.data('name');

		// init
		while( field_obj.num_rows < field_obj.min_rows ) {
			compound_add_row(field_obj);
		}

		if ( field_obj.max_rows > 0 && field_obj.num_rows >= field_obj.max_rows ) {
			field_obj.btn_add.hide();
		};

		// Hook events

		field_obj.btn_add.click(function() {
			compound_add_row(field_obj);
			return false;
		});

		field_obj.node.find('a[data-action=remove]').live('click', function() {
			compound_remove_row(field_obj, $(this).closest('.carbon-compound-row'));
			return false;
		});
	}

	function compound_add_row(field) {
		var sample_row, new_row;

		if ( field.max_rows > 0 && field.max_rows <= field.num_rows ) {
			alert('Maximum number of rows reached (' + field.num_rows + ')');
			return;
		};

		sample_row = field.node.find('.carbon-compound-preview');
		new_row = sample_row.clone();

		field.num_rows++;
		field.row_uid++;

		new_row.find('.carbon-field-skip').removeClass('carbon-field-skip');

		new_row.html( new_row.html().replace(/\[__ei__\]/g, '[' + field.row_uid + ']') );

		new_row.removeClass('carbon-compound-preview').addClass('carbon-compound-row').insertBefore(sample_row);
		init(new_row);

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};
	}

	function compound_remove_row (field, row) {
		remove_fields(row);
		row.remove();
		compound_on_update_rows(field);

		if ( field.min_rows > field.num_rows ) {
			setTimeout(function() {
				compound_add_row(field);
			}, 0);
		};

		if ( field.max_rows > 0 && field.num_rows <= field.max_rows ) {
			field.btn_add.show();
		};
	};

	function compound_on_update_rows (field) {
		field.num_rows = field.node.find('.carbon-compound-row').length;
	}


	/* Complex Field */
	carbon_field.Complex = function(element, field_obj) {
		// prepare object
		field_obj.group_selector = element.find('select[name$="[group]"]');
		field_obj.btn_add = element.find('a[data-action=add]');
		field_obj.num_rows = element.find('.carbon-group-row').length;
		field_obj.row_uid = field_obj.num_rows;
		field_obj.min_rows = element.children('.carbon-container').data('min-values');
		field_obj.max_rows = element.children('.carbon-container').data('max-values');

		field_obj.name = element.data('name');

		field_obj.new_row_type = field_obj.group_selector.val();

		// init
		if ( field_obj.max_rows > 0 && field_obj.num_rows >= field_obj.max_rows ) {
			field_obj.btn_add.hide();
		};

		// Hook events

		field_obj.btn_add.click(function() {
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
	}

	function complex_add_row(field) {
		var sample_row, new_row;

		if ( field.max_rows > 0 && field.max_rows <= field.num_rows ) {
			alert('Maximum number of rows reached (' + field.num_rows + ')');
			return;
		};

		sample_row = field.node.find('.carbon-group-preview.carbon-group-' + field.new_row_type);
		new_row = sample_row.clone();

		field.num_rows++;
		field.row_uid++;

		new_row.find('.carbon-field-skip').removeClass('carbon-field-skip');

		new_row.find('input[name$="[__ei__][group]"]').val(field.new_row_type);

		new_row.html( new_row.html().replace(/\[__ei__\]/g, '[' + field.row_uid + ']') );

		new_row.removeClass('carbon-group-preview').addClass('carbon-group-row').insertBefore( field.node.find('.carbon-group-preview:first') );
		init(new_row);

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};
	}

	function complex_remove_row(field, row) {
		remove_fields(row);
		row.remove();
		complex_on_update_rows(field);

		if ( field.min_rows > field.num_rows ) {
			// TODO: add the correct row type
		};

		if ( field.max_rows > 0 && field.num_rows <= field.max_rows ) {
			field.btn_add.show();
		};
	}

	function complex_on_update_rows(field) {
		field.num_rows = field.node.find('.carbon-group-row').length;
	}

	init();

	window.carbon_field_init = init;
});