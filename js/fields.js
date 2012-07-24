jQuery(function($) {

	function EECF_Field (node) {
		if ( node.data('eecf_field') ) {
			$.error('Field already parsed');
		};

		node.data('eecf_field', this);
		this.node = node;
	}

	$.extend(EECF_Field, {
		init: function(context) {
			var fields;

			if ( !context ) {
				context = $('body');
			};

			fields = $('.eecf-field', context);

			fields.each(function() {
				var th = $(this),
					type = th.data('type'),
					field;

				if ( typeof EECF_Field[type] == 'undefined' ) {
					return;
				};

				field = new EECF_Field[type](th);
				field.init();
			});
		}
	})

	/* File Field */
	EECF_Field.File = function() {
		EECF_Field.apply(this, arguments)
	}

	$.extend(EECF_Field.File.prototype, {
		init: function() {
			var media_box_opened = false,
				orig_send_to_editor = window.send_to_editor;

			this.node.find('.button-primary').click(function() {
				var button = $(this),
					url = button.attr('rel'),
					input = button.parent().find('input:not(#' + button.attr('id') + ')');

				$.fancybox({
					href: url,
					type: 'iframe',
        			width: 681,
        			height: 600,
        			onCleanup: function (){}
				});

				media_box_opened = true;
				
				window.pb_medialibrary = function(html) {
					var data = c2_unserialize(html);
					
					if ( typeof data['url'] != 'undefined' && data.url ) {
						input.val(data.url);
						update_file_href(input, button, data.url);
					} else {
						alert('Something went wrong... \nPlease enter the file URL manually.');
					};

					$.fancybox.close();
				}

				window.send_to_editor = ( media_box_opened )? function(html) {
					var a = ( $('a', html).length != 0 )? $('a', html) : $('a', html).prevObject,
						file_url = a.attr('href');

					input.val(file_url);
					update_file_href(input, button, file_url);

					$.fancybox.close();

					media_box_opened = false;
				} : orig_send_to_editor;
				
				if ( typeof(win) !== 'undefined' ) {
					win.send_to_editor = function(html) {
						var a = ( $('a', html).length != 0 )? $('a', html) : $('a', html).prevObject,
							file_url = a.attr('href');
						
						input.val(file_url);
						update_file_href(input, button, file_url);
						
						$.fancybox.close();
					}
				};
			});

			function update_file_href (input, button, href) {
				var link = input.parent().find('a.eecf-view_file');

				if ( link.length == 0 ) {
					link = $('<a class="eecf-view_file" href="" target="_blank">View File</a>');
					button.after(link).after('<br />');
				};

				link.attr('href', href);
			}
		}
	});

	/* Image Field */
	EECF_Field.Image = function() {
		EECF_Field.apply(this, arguments)
	}

	$.extend(EECF_Field.Image.prototype, {
		init: function() {
			var media_box_opened = false,
				orig_send_to_editor = window.send_to_editor;

			this.node.find('.button-primary').click(function() {
				var button = $(this),
					url = button.attr('rel'),
					input = button.parent().find('input:not(#' + button.attr('id') + ')');

				$.fancybox({
					href: url,
					type: 'iframe',
        			width: 681,
        			height: 600,
        			onCleanup: function (){}
				});

				media_box_opened = true;
				
				window.pb_medialibrary = function(html) {
					var data = c2_unserialize(html);
					
					if ( typeof data['url'] != 'undefined' && data.url ) {
						input.val(data.url);
						update_img_src(input, button, data.url);
					} else {
						alert('Something went wrong... \nPlease enter the image URL manually.');
					};

					$.fancybox.close();
				}

				window.send_to_editor = ( media_box_opened )? function(html) {
					var a = ( $('a', html).length != 0 )? $('a', html) : $('a', html).prevObject,
						imgurl = ( $('img', html).length != 0 )? $('img', html).attr('src') : a.attr('href');

					input.val(imgurl);
					update_img_src(input, button, imgurl, $('img', html).length);

					$.fancybox.close();

					media_box_opened = false;
				} : orig_send_to_editor;
				
				if ( typeof(win) !== 'undefined' ) {
					win.send_to_editor = function(html) {
						var a = ( $('a', html).length != 0 )? $('a', html) : $('a', html).prevObject,
							imgurl = ( $('img', html).length != 0 )? $('img', html).attr('src') : a.attr('href');
						
						input.val(imgurl);
						update_img_src(input, button, imgurl, $('img', html).length);
						
						$.fancybox.close();
					}
				};
			});

			function update_img_src (input, button, src, is_img) {
				var view = input.parent().find('img.eecf-view_image');

				if ( typeof('is_img') != 'undefined' && is_img == 0 ) {
					view.replaceWith('');
					return;
				};

				if ( view.length == 0 ) {
					view = $('<img class="eecf-view_image" src="" alt="" />');
					button.after(view).after('<br />');
				};

				view.attr('src', src);
			}
		}
	});


	/* Repeater Field */
	EECF_Field.Repeater = function() {
		EECF_Field.apply(this, arguments);

		this.btn_add = this.node.find('a[data-action=add]');
		this.num_rows = this.node.find('.eecf-repeater-row').length
		this.name = this.node.data('name');
	}

	$.extend(EECF_Field.Repeater.prototype, {
		init: function() {
			var th = this;

			this.btn_add.click(function() {
				th.addRow();
				return false;
			});

			this.node.find('a[data-action=remove]').live('click', function() {
				th.removeRow($(this).closest('.eecf-repeater-row'))
				return false;
			});
		},
		addRow: function() {
			var th = this,
				sample_row = this.node.find('.eecf-repeater-preview'),
				new_row = sample_row.clone();

			this.num_rows++;

			new_row.find('input[name*="__i__"]').each(function() {
				var input = $(this);
				input.attr('name', input.attr('name').replace(/\[__i__\]/, '[' + th.num_rows + ']'));
			});

			new_row.removeClass('eecf-repeater-preview').addClass('eecf-repeater-row').insertBefore(sample_row);
			EECF_Field.init(new_row);
		},
		removeRow: function(row) {
			row.remove();
			this.onUpdateRows();
		},
		onUpdateRows: function() {
			var th = this,
				rows = this.node.find('.eecf-repeater-row'),
				index = 0;

			this.num_rows = rows.length;

			rows.each(function() {
				var row = $(this);
				index ++;

				row.find('input[name^="' + th.name + '"]').each(function() {
					var input = $(this);
					input.attr('name', input.attr('name').replace(/\[\d+\]/, '[' + index + ']'));
				});
			});
		}
	});

	/* Groups Field */
	EECF_Field.Groups = function() {
		EECF_Field.apply(this, arguments);

		this.group_selector = this.node.find('select[name$="[group]"]');
		this.btn_add = this.node.find('a[data-action=add]');
		this.num_rows = this.node.find('.eecf-repeater-row').length
		this.name = this.node.data('name');

		this.new_row_type = this.group_selector.val();
	}

	$.extend(EECF_Field.Groups.prototype, {
		init: function() {
			var th = this;

			this.btn_add.click(function() {
				th.addRow();
				return false;
			});

			this.node.find('a[data-action=remove]').live('click', function() {
				th.removeRow($(this).closest('.eecf-group-row'))
				return false;
			});

			this.group_selector.change(function() {
				th.new_row_type = $(this).val();
			});
		},
		addRow: function() {
			var th = this,
				sample_row = this.node.find('.eecf-group-preview.eecf-group-' + th.new_row_type),
				new_row = sample_row.clone();

			this.num_rows++;

			console.log( sample_row.length );

			new_row.find('input[name*="__i__"]').each(function() {
				var input = $(this);
				input.attr('name', input.attr('name').replace(/\[__i__\]/, '[' + th.num_rows + ']'));
			});

			new_row.removeClass('eecf-group-preview').addClass('eecf-group-row').insertBefore(sample_row);
			EECF_Field.init(new_row);
		},
		removeRow: function(row) {
			row.remove();
			this.onUpdateRows();
		},
		onUpdateRows: function() {
			var th = this,
				rows = this.node.find('.eecf-group-row'),
				index = 0;

			this.num_rows = rows.length;

			rows.each(function() {
				var row = $(this);
				index ++;

				row.find('input[name^="' + th.name + '"]').each(function() {
					var input = $(this);
					input.attr('name', input.attr('name').replace(/\[\d+\]/, '[' + index + ']'));
				});
			});
		}
	});


	EECF_Field.init();
});