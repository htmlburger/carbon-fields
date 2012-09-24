jQuery(function($) {

	function init(context) {
		var fields;

		if ( !context ) {
			context = $('body');
		};

		fields = $('.eecf-field:not(.eecf-field-skip)', context);

		fields.each(function() {
			var th = $(this),
				type = th.data('type'),
				field;

			if ( typeof eecf_field[type] == 'undefined' ) {
				return;
			};

			try {
				field = eecf_field(th);

				if ( typeof eecf_field[type] != 'undefined' ) {
					eecf_field[type](th, field);
				};
			} catch (e) {}
		});
	}

	function eecf_field(node) {
		var field = {};

		if ( node.data('eecf_field') ) {
			$.error('Field already parsed');
		};

		node.data('eecf_field', field);
		field.node = node;
		field.type = node.data('type')

		return field;
	}

	/* File and Image */
	eecf_field.File = function(element, field_obj) {
		element.find('.button-primary').click(function() {
			window.ecf_active_field = element;
			tb_show('','media-upload.php?TB_iframe=true');
		});
	}

	eecf_field.Image = function(element, field_obj) {
		element.find('.button-primary').click(function() {
			window.ecf_active_field = element;
			tb_show('','media-upload.php?type=image&amp;TB_iframe=true');
		});
	}

	/* Compound Field */
	eecf_field.Compound = function(element, field_obj) {
		// prepare object
		field_obj.btn_add = element.find('a[data-action=add]');
		field_obj.num_rows = element.find('.eecf-compound-row').length;
		field_obj.min_rows = element.children('.eecf-container').data('min-values');
		field_obj.max_rows = element.children('.eecf-container').data('max-values');

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
			compound_remove_row(field_obj, $(this).closest('.eecf-compound-row'));
			return false;
		});
	}

	function compound_add_row(field) {
		var sample_row, new_row;

		if ( field.max_rows > 0 && field.max_rows <= field.num_rows ) {
			alert('Maximum number of rows reached (' + field.num_rows + ')');
			return;
		};

		sample_row = field.node.find('.eecf-compound-preview');
		new_row = sample_row.clone();

		field.num_rows++;

		new_row.find('.eecf-field-skip').removeClass('eecf-field-skip');

		new_row.find('input[name*="__ei__"]').each(function() {
			var input = $(this);
			input.attr('name', input.attr('name').replace(/\[__ei__\]/, '[' + field.num_rows + ']'));
		});

		new_row.removeClass('eecf-compound-preview').addClass('eecf-compound-row').insertBefore(sample_row);
		init(new_row);

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};
	}

	function compound_remove_row (field, row) {
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
		var rows = field.node.find('.eecf-compound-row'),
			index = 0;

		field.num_rows = rows.length;

		rows.each(function() {
			var row = $(this);
			index ++;

			row.find('input[name^="' + field.name + '"]').each(function() {
				var input = $(this);
				input.attr('name', input.attr('name').replace(/\[\d+\]/, '[' + index + ']'));
			});
		});
	}


	/* Complex Field */
	eecf_field.Complex = function(element, field_obj) {
		// prepare object
		field_obj.group_selector = element.find('select[name$="[group]"]');
		field_obj.btn_add = element.find('a[data-action=add]');
		field_obj.num_rows = element.find('.eecf-group-row').length;
		field_obj.min_rows = element.children('.eecf-container').data('min-values');
		field_obj.max_rows = element.children('.eecf-container').data('max-values');

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
			complex_remove_row(field_obj, $(this).closest('.eecf-group-row'));
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

		sample_row = field.node.find('.eecf-group-preview.eecf-group-' + field.new_row_type);
		new_row = sample_row.clone();

		field.num_rows++;

		new_row.find('.eecf-field-skip').removeClass('eecf-field-skip');

		new_row.find('input[name$="[__ei__][group]"]').val(field.new_row_type);

		new_row.find('input[name*="__ei__"]').each(function() {
			var input = $(this);
			input.attr('name', input.attr('name').replace(/\[__ei__\]/, '[' + field.num_rows + ']'));
		});

		new_row.removeClass('eecf-group-preview').addClass('eecf-group-row').insertBefore( field.node.find('.eecf-group-preview:first') );
		init(new_row);

		if ( field.max_rows > 0 && field.num_rows == field.max_rows ) {
			field.btn_add.hide();
		};
	}

	function complex_remove_row(field, row) {
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
		var th = this,
			rows = field.node.find('.eecf-group-row'),
			index = 0;

		field.num_rows = rows.length;

		rows.each(function() {
			var row = $(this);
			index ++;

			row.find('input[name^="' + field.name + '"]').each(function() {
				var input = $(this);
				input.attr('name', input.attr('name').replace(/\[\d+\]/, '[' + index + ']'));
			});
		});
	}

	init();

	window.eecf_field_init = init;
});