<?php 

class EECF_Field {
	protected $id;
	protected $value;
	protected $name;
	protected $label;
	protected $help_text;
	protected $store;
	protected $render_fn;
	protected $name_prefix = '_';


	static function factory($type, $name, $label=null) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = 'EECF_Field_' . $type;

		if (!class_exists($class)) {
			throw new EECF_Exception ('Unknown field "' . $type . '".');
		}

		$field = new $class($name, $label);
		$field->type = $type;

	    return $field;
	}

	private function __construct($name, $label) {
		$this->set_name($name);
		$this->set_label($label);

		// Pick random ID
	    $random_string = md5(mt_rand() . $this->get_name() . $this->get_label());
	    $random_string = substr($random_string, 0, 5); // 5 chars should be enough
	    $this->id = 'ecf-' . $random_string;

	    $this->init();
	    if (is_admin()) {
			$this->admin_init();
		}
		add_action('admin_init', array(&$this, 'wp_init'));
	}

	// Action hookers
	function init() {}
	function admin_init() {}
	function wp_init() {}

	function render() {
		if (!is_callable($this->render_fn)) {
			return $this->_render();
		}

		call_user_func($this->render_fn, $this);
		return;
	}

	function _render() {

	}

	function load() {
		return $this->store->load($this);
	}

	function save() {
		return $this->store->save($this);
	}

	function delete() {
		return $this->store->delete($this);
	}
	
	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->name]) ) {
			$this->set_value(null);
		} else {
			$this->set_value( stripslashes_deep($input[$this->name]) );
		}
	}
	
	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;
		return $this;
	}
	
	function get_datastore() {
		return $this->store;
	}

	function set_value($value) {
		$this->value = $value;
	}

	function get_value() {
		return $this->value;
	}

	function set_name($name) {
		$name = preg_replace('~\s+~', '_', strtolower($name));
		if ( $this->name_prefix && strpos($name, $this->name_prefix) !== 0 ) {
			$name = $this->name_prefix . $name;
		}

		$this->name = $name;
	}

	function set_prefix($prefix) {
		$this->name = preg_replace('~^' . preg_quote($this->name_prefix, '~') . '~', '', $this->name);
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;
	}

	function get_name() {
		return $this->name;
	}

	function set_label($label) {
		// Try to guess field label from it's name
		if (is_null($label)) {
			// remove the leading underscore(if it's there)
			$label = preg_replace('~^_~', '', $this->name);
			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}

		$this->label = $label;
	}

	function get_label() {
		return $this->label;
	}

	function set_render($fn) {
		if ( !is_callable($fn) ) {
			throw new EECF_Exception('Render must be callable');
		}

		$this->render_fn = $fn;
		return $this;
	}

	function set_help_text($help_text) {
		$this->help_text = $help_text;
		return $this;
	}

	function help_text($help_text) {
		return $this->set_help_text($help_text);
	}

	function get_help_text() {
		return $this->help_text;
	}
}

class EECF_Field_Text extends EECF_Field {
	function render() {
		echo '<input type="text" name="' . $this->name . '" value="' . htmlentities($this->value, ENT_COMPAT, 'UTF-8') . '" class="regular-text" />';
	}
}

class EECF_Field_Textarea extends EECF_Field {
	protected $rows = 2;

	function rows($rows = 2) {
		$this->rows = max(intval($rows), 0);
		return $this;
	}

	function render($append = '') {
		echo '<textarea name="' . $this->get_name() . '" rows="' . $this->rows . '">';
		echo $this->get_value();
		echo '</textarea>';
	}
}

class EECF_Field_Select extends EECF_Field {
	protected $options = array();

	function add_options($options) {
	    $this->options = $options;
	    return $this;
	}

    function render() {
    	if ( empty($this->options) ) {
    		throw new EECF_Exception('No options added for field "' . $this->get_name() . '"');
    	}

		$options = array();

		echo '<select name="' . $this->get_name() . '">';

		foreach ($this->options as $key => $value) {
			echo '<option value="' . htmlentities($key, ENT_COMPAT, 'UTF-8') . '"';

			if ($this->value == $key) {
				echo ' selected="selected"';
			}

			echo '>' . htmlentities($value, ENT_COMPAT, 'UTF-8') . '</option>';
		}

		echo '</select>';
	}
}

class EECF_Field_Separator extends EECF_Field {
	function render() {

	}

	function load() {
		// skip;
	}

	function save() {
		// skip;
	}

	function delete() {
		// skip;
	}
}

class EECF_Field_Set extends EECF_Field {
	protected $options = array();
	protected $limit_options = 0;

	function add_options($options) {
	    $this->options = $options;
	    return $this;
	}

	function limit_options($limit) {
		$this->limit_options = $limit;
	    return $this;
	}

    function render() {
    	if (!is_array($this->value)) {
    		$this->value = array($this->value);
    	}

    	if (empty($this->options)) {
    		throw new EECF_Exception('No options added for field "' . $this->name . '"');
    	}

		$loopCount = 0;

		echo '<div class="eecf-set-list">';

		foreach ($this->options as $key => $value) {
			$loopCount ++;

			$option = '<input type="checkbox" name="' . $this->get_name() . '[]" value="' . $key . '"';
			if ( in_array($key, $this->value) ) {
				$option .= ' checked="checked"';
			}
			$option .= '/>';

			if ( $this->limit_options > 0 && $loopCount > $this->limit_options ) {
				echo '<p style="display:none"><label>' . $option . $value . '</label></p>';				
			} else {
				echo '<p><label>' . $option . $value . '</label></p>';

				if ( $loopCount == $this->limit_options ) {
					echo '<p>... <a href="#" class="ecf-set-showall">Show All Options</a></p>';
				}
			}
		}

 		echo '</div>';
	}
}

class EECF_Field_File extends EECF_Field {
	function render() {
		echo '<input type="text" name="' . $this->get_name() . '" value="' . $this->get_value() . '"  class="regular-text" />';
		echo '<input id="c2_open_media' . str_replace('-', '_', $this->id) .  '" rel="media-upload.php" type="button" class="button-primary" value="Select Media" />';
		
		// For image only
		echo '<br /><a href="' . $this->value . '" target="_blank" class="eecf-view_file">View File</a>';
	}

	function admin_init() {
		add_action('admin_print_styles-post.php', array($this, 'add_correct_script_hooks'), 1);
		add_action('admin_print_styles-post-new.php', array($this, 'add_correct_script_hooks'), 1);
		add_action('admin_footer-post.php', array($this, 'print_the_js'), 1);
		add_action('admin_footer-post-new.php', array($this, 'print_the_js'), 1);
	}

	function add_correct_script_hooks() {
		$css_directory = get_bloginfo('stylesheet_directory');
		wp_enqueue_script('utf8_decode_js_userialize', $css_directory . '/lib/scripts/utf8.decode.js.unserialize.js');
		wp_enqueue_script('fancybox', $css_directory . '/lib/scripts/fancybox/jquery.fancybox-1.3.4.pack.js');
		wp_enqueue_style('fancybox-css', $css_directory . '/lib/scripts/fancybox/jquery.fancybox-1.3.4.css');
	}
	
	function print_the_js() {
	    ?>
		<script type="text/javascript">
			jQuery(function ($) {
				var media_box_opened = false,
					orig_send_to_editor = window.send_to_editor;

				$('#c2_open_media<?php echo str_replace('-', '_', $this->id); ?>').click(function() {
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
			});
		</script>
		<?php
	}
}

class EECF_Field_Image extends EECF_Field_File {
	public $image_extensions = array('jpg', 'jpeg', 'gif', 'png', 'bmp');

	function render() {
		echo '<input type="text" name="' . $this->get_name() . '" value="' . $this->get_value() . '"  class="regular-text" />';
		echo '<input id="c2_open_media' . str_replace('-', '_', $this->id) .  '" rel="media-upload.php" type="button" class="button-primary" value="Select Media" />';
		
		// For image only
		if ( $this->value != '' && in_array(array_pop(explode('.', $this->value)), $this->image_extensions) ) {
			echo '<br /><img src="' . $this->value . '" alt="" height="100" class="eecf-view_image"/>';
		}
	}
	
	function print_the_js() {
	    ?>
		<script type="text/javascript">
			jQuery(function ($) {
				var media_box_opened = false,
					orig_send_to_editor = window.send_to_editor;

				$('#c2_open_media<?php echo str_replace('-', '_', $this->id); ?>').click(function() {
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
			});
		</script>
		<?php
	}
}


