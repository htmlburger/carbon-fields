jQuery(function($) {

	function EECF_Field (node) {
		if ( node.data('eecf_field') ) {
			console.log('taken');
			return;
		};

		node.data('eecf_field', this);
		this.node = node;
	}

	$.extend(EECF_Field, {
		init: function() {
			var fields = $('.eecf-field');

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


	EECF_Field.init();
});