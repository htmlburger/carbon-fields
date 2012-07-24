<?php 

add_action('admin_print_scripts', array('EECF_Field', 'admin_hook_scripts'));
add_action('admin_print_styles', array('EECF_Field', 'admin_hook_styles'));

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

	static function admin_hook_scripts() {
		wp_enqueue_script('eecf_fields', EECF_PLUGIN_URL . '/js/fields.js');
	}

	static function admin_hook_styles() {
		wp_enqueue_style('eecf_fields', EECF_PLUGIN_URL . '/css/fields.css');
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
		add_action('admin_print_styles', array($this, 'add_correct_script_hooks'), 1);
	}

	function add_correct_script_hooks() {
		$css_directory = get_bloginfo('stylesheet_directory');
		wp_enqueue_script('utf8_decode_js_userialize', $css_directory . '/lib/scripts/utf8.decode.js.unserialize.js');
		wp_enqueue_script('fancybox', $css_directory . '/lib/scripts/fancybox/jquery.fancybox-1.3.4.pack.js');
		wp_enqueue_style('fancybox-css', $css_directory . '/lib/scripts/fancybox/jquery.fancybox-1.3.4.css');
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
}


