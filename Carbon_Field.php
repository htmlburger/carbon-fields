<?php 

add_action('admin_print_scripts', array('Carbon_Field', 'admin_hook_scripts'));
add_action('admin_print_styles', array('Carbon_Field', 'admin_hook_styles'));
add_action('wp_ajax_carbon_relationship_load_posts', array('Carbon_Field_Relationship', 'carbon_relationship_load_posts'));

/**
 * Base field class. 
 * Defines the key container methods and their default implementations.
 * Implements factory design pattern
 *
 **/
class Carbon_Field {
	/**
	 * Globally unique field identificator. Generated randomly
	 *
	 * @var int
	 */
	protected $id;
	
	/**
	 * Stores the initial <kbd>$type</kbd> variable passed to the <code>factory()</code> method
	 * 
	 * @see factory
	 * @var string
	 */
	public $type;

	/**
	 * Field value
	 *
	 * @var mixed
	 */
	protected $value;

	/**
	 * Default field value
	 *
	 * @var mixed
	 */
	protected $default_value;

	/**
	 * Sanitized field name used as input name attribute during field render
	 *
	 * @see factory()
	 * @see set_name()
	 * @var string
	 */
	protected $name;

	/**
	 * Field name used as label during field render
	 *
	 * @see factory()
	 * @see set_label()
	 * @var string
	 */
	protected $label;

	/**
	 * Additional text containing information and guidance for the user
	 *
	 * @see help_text()
	 * @var string
	 */
	protected $help_text;

	/**
	 * Field DataStore instance to which save, load and delete calls are delegated
	 *
	 * @see set_datastore()
	 * @see get_datastore()
	 * @var Carbon_DataStore
	 */
	protected $store;

	/**
	 * The type of the container this field is in
	 *
	 * @see get_context()
	 * @var string
	 */
	protected $context;

	/**
	 * Optional. Function, replacing the specific field rendering function
	 *
	 * @see render()
	 * @var callable
	 */
	protected $render_fn;

	/**
	 * Whether or not this value should be auto loaded. Applicable to theme options only.
	 * 
	 * @see set_autoload()
	 * @var bool
	 **/
	protected $autoload = false;

	/**
	 * Whether or not this field is required.
	 * 
	 * @see set_required()
	 * @var bool
	 **/
	protected $required = false;

	/**
	 * Prefix to be pretended to the field name during load, save, delete and <strong>render</strong>
	 *
	 * @var string
	 **/
	protected $name_prefix = '_';

	/**
	 * Create a new field of type $type and name $name and label $label.
	 *
	 * @param string $type
	 * @param string $name lower case and underscore-delimited
	 * @param string $label (optional) Automatically generated from $name if not present
	 * @return object $field
	 **/
	static function factory($type, $name, $label=null) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = 'Carbon_Field_' . $type;

		if (!class_exists($class)) {
			throw new Carbon_Exception ('Unknown field "' . $type . '".');
		}

		if ( strpos($name, '-') !== false ) {
			throw new Carbon_Exception ('Forbidden character "-" in name "' . $name . '".');
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
		$this->id = 'carbon-' . $random_string;

		$this->init();
		if (is_admin()) {
			$this->admin_init();
		}
	}

	/**
	 * Perform instance initialization after calling setup()
	 *
	 * @return void
	 **/
	function init() {}

	/**
	 * Instance initialization when in the admin area. Called during object construction
	 *
	 * @return void
	 **/
	function admin_init() {}

	/**
	 * Delegate rendering to the correct function
	 *
	 * @return void
	 **/
	function render() {
		if (!is_callable($this->render_fn)) {
			return $this->_render();
		}

		return call_user_func($this->render_fn, $this);
	}

	/**
	 * Output the field markup
	 *
	 * @return void
	 **/
	function _render() {

	}

	/**
	 * Delegate load to the field DataStore instance
	 *
	 * @return void
	 **/
	function load() {
		$this->store->load($this);

		if ( $this->get_value() === false ) {
			$this->set_value( $this->default_value );
		}
	}

	/**
	 * Delegate save to the field DataStore instance
	 *
	 * @return void
	 **/
	function save() {
		return $this->store->save($this);
	}

	/**
	 * Delegate delete to the field DataStore instance
	 *
	 * @return void
	 **/
	function delete() {
		return $this->store->delete($this);
	}
	
	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 * @return void
	 **/
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
	
	/**
	 * Assign DataStore instance for use during load, save and delete
	 *
	 * @param object $store
	 * @return object $this
	 **/
	function set_datastore(Carbon_DataStore $store) {
		$this->store = $store;
		return $this;
	}

	/**
	 * Return the DataStore instance used by the field
	 *
	 * @return object $store
	 **/
	function get_datastore() {
		return $this->store;
	}

	/**
	 * Assign the type of the container this field is in
	 *
	 * @param string
	 * @return object $this
	 **/
	function set_context($context) {
		$this->context = $context;
		return $this;
	}

	/**
	 * Return the type of the container this field is in
	 *
	 * @return string
	 **/
	function get_context() {
		return $this->context;
	}

	/**
	 * Directly modify the field value
	 *
	 * @param mixed $value
	 * @return void
	 **/
	function set_value($value) {
		$this->value = $value;
	}

	/**
	 * Set default field value
	 *
	 * @param mixed $value
	 * @return void
	 **/
	function set_default_value($default_value) {
		$this->default_value = $default_value;
		return $this;
	}

	/**
	 * Get default field value
	 *
	 * @return mixed $value
	 **/
	function get_default_value() {
		return $this->default_value;
	}

	/**
	 * Return the field value
	 *
	 * @return mixed
	 **/
	function get_value() {
		return $this->value;
	}

	/**
	 * Set field name.
	 * Use only if you are completely aware of what you are doing.
	 *
	 * @param string $name Field name, either sanitized or not
	 * @return mixed
	 **/
	function set_name($name) {
		$name = preg_replace('~\s+~', '_', strtolower($name));
		if ( $this->name_prefix && strpos($name, $this->name_prefix) !== 0 ) {
			$name = $this->name_prefix . $name;
		}

		$this->name = $name;
	}

	/**
	 * Return the field name
	 *
	 * @return string
	 **/
	function get_name() {
		return $this->name;
	}

	/**
	 * Set field name prefix. Calling this method will update the field name
	 *
	 * @param string $prefix
	 * @return object $this
	 **/
	function set_prefix($prefix) {
		$this->name = preg_replace('~^' . preg_quote($this->name_prefix, '~') . '~', '', $this->name);
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;

		return $this;
	}

	/**
	 * Set field label.
	 *
	 * @param string $label If null, the label will be generated from the field name
	 * @return void
	 **/
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

	/**
	 * Set custom rendering function, replacing the default one.
	 *
	 * @param callable $fn
	 * @return object $this
	 **/
	function set_render($fn) {
		if ( !is_callable($fn) ) {
			throw new Carbon_Exception('Render must be callable');
		}

		$this->render_fn = $fn;
		return $this;
	}

	/**
	 * Set additional text to be displayed during field render, 
	 * containing information and guidance for the user
	 *
	 * @return object $this
	 **/
	function set_help_text($help_text) {
		$this->help_text = $help_text;
		return $this;
	}

	/**
	 * Alias for set_help_text()
	 *
	 * @see set_help_text()
	 * @return object $this
	 **/
	function help_text($help_text) {
		return $this->set_help_text($help_text);
	}

	/**
	 * Return the field help text
	 *
	 * @return object $this
	 **/
	function get_help_text() {
		return $this->help_text;
	}

	/**
	 * Whether or not this value should be auto loaded. Applicable to theme options only.
	 * 
	 * @param bool $autoload
	 * @return object $this
	 **/
	function set_autoload($autoload) {
		$this->autoload = $autoload;
		return $this;
	}

	/**
	 * Return whether or not this value should be auto loaded
	 * 
	 * @return bool
	 **/
	function get_autoload() {
		return $this->autoload;
	}

	/**
	 * Whether this field is mandatory for the user
	 *
	 * @param bool $required
	 * @return object $this
	 **/
	function set_required($required) {
		$this->required = $required;
		return $this;
	}

	/**
	 * HTML id attribute getter. 
	 * @return string
	 */
	function get_id() {
		return $this->id;
	}

	/**
	 * HTML id attribute setter
	 * @param string $id
	 */
	function set_id($id) {
		$this->id = $id;
	}

	/**
	 * Return whether this field is mandatory for the user
	 *
	 * @return bool
	 **/
	function is_required() {
		return $this->required;
	}
	
	/**
	 * Returns the type of the field based on the class
	 * The class is stripped by the "Carbon_Field" prefix. Then underscores are replaced with a dash.
	 * Finally the result is lowercased.
	 * 
	 * @return string
	 */
	public function get_type() {
		$class = get_class($this);
		
		
		return $this->clean_type($class);
	}
	
	/**
	 * Cleans up an object class for usage as HTML class
	 * 
	 * @return string
	 */
	private function clean_type($type) {
		$clean_class = str_replace('Carbon_Field', '', $type);
		$clean_class = trim($clean_class, '_');
		$dashed_clean_class = str_replace('_', '-', $clean_class);
		
		return strtolower($dashed_clean_class);
	}
	
	/**
	 * Return an array of html classes to be used for the field container
	 * 
	 * @return array
	 */
	public function get_html_class() {
		$html_classes = array();
		
		$object_class = get_class($this);
		$html_classes[] = $this->get_type();
		
		$parent_class = $object_class;
		while ($parent_class = get_parent_class($parent_class)) {
			$clean_class = $this->clean_type($parent_class);
			
			if ($clean_class) {
				$html_classes[] = $clean_class;
			}
		}
		
		return $html_classes;
	}

	static function admin_hook_scripts() {
		wp_enqueue_media();
		wp_enqueue_script('carbon_fields', CARBON_PLUGIN_URL . '/js/fields.js', array('jquery', 'farbtastic', 'jquery-ui-datepicker'), '0.4.1');
		wp_localize_script( 'carbon_fields', 'crbl10n',
			array(
				'title' => __('Files', 'crb'),
				'geocode_not_successful' => __('Geocode was not successful for the following reason: ', 'crb'),
				'max_num_items_reached' => __('Maximum number of items reached (%s items)', 'crb'),
				'max_num_rows_reached' => __('Maximum number of rows reached (%s rows)', 'crb'),
				'cannot_create_more_rows' => __('Cannot create more than %s rows', 'crb')
			)
		);
	}

	static function admin_hook_styles() {
		wp_enqueue_style('carbon_fields', CARBON_PLUGIN_URL . '/css/fields.css', array(), '0.4.1');
		
		wp_enqueue_style('thickbox');
	}
} // END Carbon_Field 

class Carbon_Field_Text extends Carbon_Field {
	function render() {
		echo '<input id="' . $this->get_id() . '" type="text" name="' . $this->name . '" value="' . esc_attr($this->value) . '" class="regular-text" ' . ($this->required ? 'data-carbon-required="true"': '') . ' />';
	}
}

class Carbon_Field_Textarea extends Carbon_Field {
	protected $height = 170;

	function set_height($height = 170) {
		$min_height = 20;
		$this->height = max(intval($height), $min_height);
		return $this;
	}

	function render() {
		echo '<textarea id="' . $this->get_id() . '" name="' . $this->get_name() . '" style="height: ' . $this->height . 'px; " ' . ($this->required ? 'data-carbon-required="true"': '') . '>';
		echo esc_textarea($this->get_value());
		echo '</textarea>';
	}
}

class Carbon_Field_Rich_Text extends Carbon_Field_Textarea {
	static $attached_editor = false; 
	
	function render() {
		$val = $this->get_value();

		$id = 'wysiwyg-' . $this->get_name();

		?>
		<div id="wp-<?php echo $id; ?>-wrap" class="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
			<div id="wp-<?php echo $id; ?>-editor-tools" class="wp-editor-tools">
				<div id="wp-<?php echo $id; ?>-media-buttons" class="hide-if-no-js wp-media-buttons">
					<?php do_action( 'media_buttons' ); ?>
				</div>
			</div>
			<div class="wp-editor-tabs">
				<a class="wp-switch-editor switch-html">Text</a>
				<a class="wp-switch-editor switch-tmce">Visual</a>
			</div>

			<div id="wp-<?php echo $id; ?>-editor-container" class="wp-editor-container">
				<textarea id="<?php echo $id; ?>" class="wp-editor-area" name="<?php echo $this->get_name(); ?>" <?php echo ($this->required ? 'data-carbon-required="true"': '') ?>><?php echo wp_richedit_pre($val); ?></textarea>
			</div>
		</div>
		<?php

	}

	function admin_init() {
		if ( !self::$attached_editor ) {
			self::$attached_editor = true;

			add_action('admin_print_scripts', array('Carbon_Field_Rich_Text', 'admin_enqueue_scripts'));
			add_action('admin_footer', array('Carbon_Field_Rich_Text', 'admin_footer'));
		}
	}

	static function admin_footer() {
		// Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
		// wp_editor() automatically enqueues and sets up everything.
		?>
		<div style="display:none;">
			<?php wp_editor( '', 'carbon_settings' ); ?>
		</div>
		<?php
	}

	static function admin_enqueue_scripts() {
		wp_enqueue_script('editor');
	}
}

class Carbon_Field_Date extends Carbon_Field {
	function init() {
		global $wp_version;

		if (defined('WP_ADMIN') && WP_ADMIN) {
			wp_enqueue_script('jquery-ui-datepicker');
			wp_enqueue_style('carbon-jquery-ui', CARBON_PLUGIN_URL . '/css/jquery-ui.css');
		}
		Carbon_Field::init();
	}

	function render() {
		echo '<input id="' . $this->get_id() . '" type="text" name="' . $this->get_name() . '" value="' . esc_attr($this->value) . '" class="regular-text carbon-datepicker"  ' . ($this->required ? 'data-carbon-required="true"': '') . '/>';
		echo '<span class="carbon-datepicker-trigger button icon-button hide-if-no-js">' . __('Date', 'crb') . '</span>';
	}
}

class Carbon_Field_Color extends Carbon_Field {
	function init() {
		if (defined('WP_ADMIN') && WP_ADMIN) {
			wp_enqueue_script('farbtastic');
			wp_enqueue_style('farbtastic');
		}

		Carbon_Field::init();
	}

	function render() {
		echo '
		<div class="carbon-color-row">
			<input id="' . $this->get_id() . '" type="text" name="' . $this->get_name() . '" value="' . esc_attr($this->value) . '" class="regular-text carbon-color" ' . ($this->required ? 'data-carbon-required="true"': '') . ' />
			<a class="carbon-color-preview hide-if-no-js"></a>
			<span class="pickcolor button icon-button hide-if-no-js">' . __('Select a Color', 'crb') . '</span>
			<div class="carbon-color-container hide-if-no-js"></div>
		</div>';
	}
}

class Carbon_Field_Map extends Carbon_Field {
	protected $api_key;
	protected $default_lat = 40.346544;
	protected $default_lng = -101.645507;
	protected $zoom = 10;

	function admin_init() {
		wp_enqueue_script('carbon-google-maps', 'http://maps.googleapis.com/maps/api/js?sensor=false');
	}

	function render() {
		echo '
		<input type="text" name="' . $this->get_name() . '" value="' . esc_attr($this->value) . '" class="regular-text carbon-map-field" data-zoom="' . esc_attr($this->zoom) . '" data-default-lat="' . esc_attr($this->default_lat) . '" data-default-lng="' . esc_attr($this->default_lng) . '"  ' . ($this->required ? 'data-carbon-required="true"': '') . '/>
		<div class="carbon-map-canvas">&nbsp;</div>
		';
	}

	function set_position($lat, $lng, $zoom) {
		$this->default_lat = $lat;
		$this->default_lng = $lng;
		$this->zoom = $zoom;

		return $this;
	}

	function save() {
		$this->store->save($this);
		
		$original_name = $this->get_name();
		$original_value = $this->get_value();

		$value = explode(',', $this->get_value());
		if ( count($value) >= 2 ) {
			$lat = floatval($value[0]);
			$lng = floatval($value[1]);
		} else {
			$lat = $lng = '';
		}

		$this->set_name($original_name . '-lat');
		$this->set_value($lat);
		$this->store->save($this);

		$this->set_name($original_name . '-lng');
		$this->set_value($lng);
		$this->store->save($this);

		$this->set_name($original_name);
		$this->set_value($original_value);

		return true;
	}

	function load() {
		$original_name = $this->get_name();

		$lat = $lng = '';

		$this->set_name($original_name . '-lat');
		$this->store->load($this);
		$lat = $this->get_value();


		$this->set_name($original_name . '-lng');
		$this->store->load($this);
		$lng = $this->get_value();


		$this->set_name($original_name);
		$this->set_value($lat . ',' . $lng);
	}


	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->name]) ) {
			$this->set_value(null);
		} else {
			$value = stripslashes_deep($input[$this->name]);

			if ( is_array($value) && isset($value['lat']) && isset($value['lng']) ) {
				$value = $value['lat'] . ',' . $value['lng'];
			}

			$this->set_value( $value );
		}
	}

}
class Carbon_Field_Map_With_Address extends Carbon_Field_Map {
	protected $address = '';
	
	function render() {
		echo '<p>' . __('Locate Address on the map', 'crb') . ': <input type="text" name="' . esc_attr($this->get_name()) . '[address]" value="' . esc_attr($this->address) . '" class="regular-text address" /><span class="address-search-btn button icon-button">' . __('Find', 'crb') . '</span></p>';

		echo '
		<input type="text" name="' . $this->get_name() . '[coordinates]" value="' . esc_attr($this->value) . '" class="regular-text carbon-map-field" data-zoom="' . esc_attr($this->zoom) . '" data-default-lat="' . esc_attr($this->default_lat) . '" data-default-lng="' . esc_attr($this->default_lng) . '"  ' . ($this->required ? 'data-carbon-required="true"': '') . '/>
		<div class="carbon-map-canvas">&nbsp;</div>
		';
	}
	
	function save() {
		parent::save();
		
		$original_name = $this->get_name();
		$original_value = $this->get_value();

		$this->set_name($original_name . '-address');
		$this->set_value($this->address);
		$this->store->save($this);

		$this->set_name($original_name);
		$this->set_value($original_value);

		return true;
	}
	
	function load() {
		$original_name = $this->get_name();
		
		$this->set_name($original_name . '-address');
		$this->store->load($this);
		$this->address = $this->get_value();
		
		$this->set_name($original_name);
		
		parent::load();
	}

	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}


		if ( !isset($input[$this->name]['coordinates']) ) {
			parent::set_value_from_input($input);
		} else {
			$value = stripslashes_deep($input[$this->name]['coordinates']);

			if ( is_array($value) && isset($value['lat']) && isset($value['lng']) ) {
				$value = $value['lat'] . ',' . $value['lng'];
			}

			$this->set_value( $value );
		}


		if ( isset($input[$this->name]['address']) ) {
			$address = stripslashes_deep($input[$this->name]['address']);
			$this->address = $address;
		}
	}
}

class Carbon_Field_Select extends Carbon_Field {
	protected $options = array();
	
	function set_options($options) {
		$this->options = (array)$options;
		return $this;
	}

	function add_options($options) {
		$this->options = (array)$this->options + (array)$options;
		return $this;
	}

	function render() {
		if ( empty($this->options) ) {
			echo '<em>' . __('no options', 'crb') . '</em>';
			return;
		}

		echo '<select id="' . $this->get_id() . '" name="' . $this->get_name() . '" ' . ($this->required ? 'data-carbon-required="true"': '') . '>';

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

class Carbon_Field_Radio extends Carbon_Field {
	protected $options = array();
	
	function set_options($options) {
		$this->options = (array)$options;
		return $this;
	}

	function add_options($options) {
		$this->options = (array)$this->options + (array)$options;
		return $this;
	}

	function render() {
		if ( empty($this->options) ) {
			echo '<em>' . __('no options', 'crb') . '</em>';
			return;
		}

		echo '<ul class="carbon-radio-list" ' . ($this->required ? 'data-carbon-required="true"': '') . '>';

		foreach ($this->options as $key => $value) {
			echo '<li><label><input type="radio" name="' . $this->get_name() . '" value="' . esc_attr($key) . '"';

			if ($this->value == $key) {
				echo ' checked="checked"';
			}

			echo '/>' . esc_html($value) . '</label></li>';
		}

		echo '</ul>';
	}
}

class Carbon_Field_Checkbox extends Carbon_Field {
	protected $option_value = 'yes';

	function set_option_value($value) {
		$this->option_value = $value;
		return $this;
	}

	function render() {
		if ( empty($this->option_value) ) {
			throw new Carbon_Exception('Set non-empty option value for field "' . $this->get_name() . '"');
		}

		$checked_attr = $this->get_value() == $this->option_value ? ' checked="checked" ': '';

		echo '<label>
			<input type="checkbox" name="' . $this->get_name() . '" value="' . esc_attr($this->option_value) . '" ' . $checked_attr . ' />
			' . 	$this->label . '
		</label>';
	}

	function get_label() {
		return '';
	}
}

class Carbon_Field_Header_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your header, you should enter them here.', 'crb'));

		add_action('wp_head', array($this, 'print_scripts'));
		Carbon_Field::init();
	}
	
	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}

		echo get_option($this->name);
	}
}

class Carbon_Field_Footer_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.', 'crb'));

		add_action('wp_footer', array($this, 'print_scripts'));
		Carbon_Field::init();
	}
	
	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}
		
		echo get_option($this->name);
	}
}

class Carbon_Field_Separator extends Carbon_Field {
	function render() {

	}

	function get_label() {
		$label = parent::get_label();

		return '<h3 class="title carbon-separator">' . $label . '</h3>';
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

class Carbon_Field_Set extends Carbon_Field {
	protected $options = array();
	protected $limit_options = 0;
	
	function set_options($options) {
		$this->options = (array)$options;
		return $this;
	}

	function add_options($options) {
		$this->options = (array)$this->options + (array)$options;
		return $this;
	}

	function limit_options($limit) {
		$this->limit_options = $limit;
		return $this;
	}

	function render() {
		if (!is_array($this->value)) {
			$this->value = maybe_unserialize($this->value);
			if (!is_array($this->value)) {
				$this->value = array($this->value);
			}
		}

		if (empty($this->options)) {
			echo '<em>' . __('no options', 'crb') . '</em>';
			return;
		}

		$loopCount = 0;

		echo '<div class="carbon-set-list" ' . ($this->required ? 'data-carbon-required="true"': '') . '>';

		foreach ($this->options as $key => $value) {
			$loopCount ++;

			$option = '<input type="checkbox" name="' . $this->get_name() . '[]" value="' . esc_attr($key) . '"';
			if ( in_array($key, $this->value) ) {
				$option .= ' checked="checked"';
			}
			$option .= '/>';

			if ( $this->limit_options > 0 && $loopCount > $this->limit_options ) {
				echo '<p style="display:none"><label>' . $option . $value . '</label></p>';				
			} else {
				echo '<p><label>' . $option . $value . '</label></p>';

				if ( $loopCount == $this->limit_options ) {
					echo '<p>... <a href="#" class="carbon-set-showall">' . __('Show All Options', 'crb') . '</a></p>';
				}
			}
		}

 		echo '</div>';
	}
}

class Carbon_Field_Relationship extends Carbon_Field {
	protected $post_type = 'post';
	protected $values_max = -1;

	function set_post_type($post_type) {
		$this->post_type = $post_type;
		return $this;
	}

	function set_max($max) {
		$this->values_max = intval($max);
		return $this;
	}

	function get_max() {
		return $this->values_max;
	}

	function admin_init() {
		wp_enqueue_script('jquery-ui-sortable');
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

	function render() {
		$this->value = maybe_unserialize($this->value);
		if (!is_array($this->value)) {
			$this->value = array($this->value);
		}

		// Exclude the current post from the list
		$screen = get_current_screen();
		$exclude_id = '';
		if ( $screen->base == 'post' && isset($_GET['post']) ) {
			$exclude_id = intval($_GET['post']);
		}

		$this->post_type = (array) $this->post_type;

		$posts = get_posts(array(
			'post_type' => $this->post_type,
			'posts_per_page' => 10,
			'orderby' => 'title',
			'order' => 'ASC',
			'exclude' => $exclude_id
		));

		$post_types = get_post_types('','objects');

		?>
		<div class="carbon-relationship" data-post-type="<?php echo implode(',', $this->post_type) ?>" data-max-values="<?php echo $this->get_max() ?>" data-exclude="<?php echo $exclude_id ?>" data-paged="1" data-name="<?php echo $this->get_name() ?>[]">
			<div class="relationship-left">
				<table class="widefat">
					<thead>
						<tr>
							<th>
								<input type="text" placeholder="<?php esc_attr_e('Search', 'crb') ?>" />
							</th>
						</tr>
					</thead>
				</table>

				<ul class="relationship-list">
					<?php foreach ($posts as $post): 
					$type_title = $post->post_type;
					$type_title = isset($post_types[$type_title]->labels->singular_name) ? $post_types[$type_title]->labels->singular_name: $type_title;
					?>
						<li <?php if(in_array($post->ID, $this->value)) echo 'class="inactive"' ?>>
							<a href="#" data-post_id="<?php echo $post->ID ?>">
								<em><?php echo $type_title ?></em>
								<span><!-- plus --></span>
								<?php echo $post->post_title ?>
							</a>
						</li>
					<?php endforeach ?>
					<li class="load-more"><span class="spinner"></span></li>
				</ul>
			</div>

			<div class="relationship-right">
				<label><?php _e('Associated:', 'crb'); ?></label>
				
				<ul class="relationship-list">
					<?php
					foreach ($this->value as $post_id): 
						$post = get_post($post_id);
						if ( !$post || !$post_id ) {
							continue;
						}
						$type_title = $post->post_type;
						$type_title = isset($post_types[$type_title]->labels->singular_name) ? $post_types[$type_title]->labels->singular_name: $type_title;
					?>
						<li>
							<a href="#" data-post_id="<?php echo $post->ID ?>"><em><?php echo $type_title ?></em><?php echo $post->post_title ?> <span><!-- minus --></span></a>
							<input type="hidden" name="<?php echo $this->get_name() ?>[]" value="<?php echo $post->ID ?>" />
						</li>
					<?php endforeach ?>
				</ul>
			</div>
			
			<div class="cl">&nbsp;</div>
		</div>
		<?php
	}

	static function carbon_relationship_load_posts() {
		if ( empty($_POST['paged']) || empty($_POST['post-type']) ) {
			echo '';
			exit;
		}

		if( !empty($_POST['s']) ) {
			add_filter('posts_where', array('Carbon_Field_Relationship', 'posts_where'), 10, 2 );
		}

		// Exclude the current post from the list
		$exclude_id = '';
		if ( isset($_POST['exclude']) ) {
			$exclude_id = intval($_POST['exclude']);
		}

		$post_type = explode(',', $_POST['post-type']);

		$posts = get_posts(array(
			'post_type' => $post_type,
			'posts_per_page' => 10,
			'orderby' => 'title',
			'order' => 'ASC',
			'paged' => intval($_POST['paged']),
			'suppress_filters' => false,
			'exclude' => $exclude_id
		));

		$post_types = get_post_types('','objects');

		foreach ($posts as $post){
			$type_title = $post->post_type;
			$type_title = isset($post_types[$type_title]->labels->singular_name) ? $post_types[$type_title]->labels->singular_name: $type_title;

			echo '<li><a href="#" data-post_id="' . $post->ID . '"><em>' . $type_title . '</em>' . $post->post_title . '<span><!-- plus --></span></a></li>';
		}

		exit;
	}

   	static function posts_where( $where, &$wp_query ) {
		global $wpdb;
		
		if ( !empty($_POST['s']) )  {
			$where .= " AND " . $wpdb->posts . ".post_title LIKE '%" . esc_sql( like_escape(  $_POST['s'] ) ) . "%'";
		}
		
		return $where;
	}

}

class Carbon_Field_File extends Carbon_Field {
	public $button_label = 'Select File';
	public $window_button_label = 'Select File';
	public $window_label = 'Files';
	public $image_extensions = array('jpg', 'jpeg', 'gif', 'png', 'bmp');

	// empty for all types. available types: audio, video, image
	public $field_type = ''; 

	// alt, author, caption, dateFormatted, description, editLink, filename, height, icon, id, link, menuOrder, mime, name, status, subtype, title, type, uploadedTo, url, width
	public $value_type = 'url';
	
	function init() {
		$this->button_label = __('Select File', 'crb');
		$this->window_button_label = __('Select File', 'crb');
		$this->window_label = __('Files', 'crb');
	}
	
	function set_type($type) {
		$this->field_type = $type;
		return $this;
	}

	function render() {
		echo '<input 
				id="' . $this->get_id() . '" 
				type="text" 
				name="' . $this->get_name() . '" 
				value="' . $this->get_value() . '"  
				class="regular-text carbon-file-field" ' . ($this->required ? 'data-carbon-required="true"': '') . '
				'.($this->value_type=='id' ? 'style="display:none"' : '').'
			/>';
		
		echo '<span 
				id="c2_open_media' . str_replace('-', '_', $this->id) .  '"
				class="button c2_open_media icon-button"
				data-window-label="'.$this->window_label.'"
				data-window-button-label="'.$this->window_button_label.'"
				data-type="' . $this->field_type . '"
				data-value-type="'.$this->value_type.'"
			>' . $this->button_label . '</span>';
		
		echo $this->description();
	}
	
	function description() {
		$description = '<a href="' . $this->value . '" target="_blank" class="carbon-view_file" style="' . (!empty($this->value) ? '' : 'display:none;' ) . '" >' . __('View File', 'crb') . '</a>';
		
		return apply_filters('carbon_field_' . $this->type . '_description', '<div class="carbon-description">' . $description . '</div>');
	}
}

class Carbon_Field_Attachment extends Carbon_Field_File {
	public $value_type = 'id';

	function description(){
		$description = '';
		$is_image = false;
		$has_image = false;
		$attachment_url = !empty($this->value) ? wp_get_attachment_url( $this->value ) : '';
		$thumbnail_src = !empty($this->value) ? wp_get_attachment_image_src( $this->value, 'thumbnail' ) : '';
		$attachment_type = wp_check_filetype($attachment_url);

		if ( in_array($attachment_type['ext'], $this->image_extensions) ) {
			// is_image
			$is_image = true;
		}

		if ( $is_image ) {
			$description .= '<div class="carbon-preview">';
			$description .= '<img src="' . $thumbnail_src[0] . '" alt="" class="carbon-view_image"/>';
			$description .= '<span class="carbon-file-remove icon-button"></span>';
			$description .= '</div>';
		} else {
			$description .= '<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" class="carbon-view_image blank"/>';
		}

		$description .= '<div class="cl"></div>';

		$description .= '<span class="attachment_url">'.$attachment_url.'</span>';

		$is_image = false;

		return apply_filters('carbon_field_' . $this->type . '_description', '<div class="carbon-description">' . $description . '</div>');
	}
}

class Carbon_Field_Image extends Carbon_Field_File {
	public $button_label = 'Select Image';
	public $window_button_label = 'Select Image';
	public $window_label = 'Images';
	public $field_type = 'image';
	
	function init() {
		$this->button_label = __('Select Image', 'crb');
		$this->window_button_label = __('Select Image', 'crb');
		$this->window_label = __('Images', 'crb');
	}

	function description(){
		$description = '';

		$has_image = false;
		if ( $this->value != '' ) {
			$description .= '<div class="carbon-preview">';
			$description .= '<img src="' . $this->value . '" alt="" class="carbon-view_image"/>';
			$description .= '<span class="carbon-file-remove"></span>';
			$description .= '</div>';
		} else {
			$description = '<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" class="carbon-view_image blank"/>';
		}

		$description .= '<div class="cl"></div>';

		return apply_filters('carbon_field_' . $this->type . '_description', '<div class="carbon-description">' . $description . '</div>');
	}
}

class Carbon_Field_Choose_Sidebar extends Carbon_Field_Select {
	private $enable_add_new = true; // Whether to allow the user to add new sidebars
	private $custom_sidebars = array();
	private $sidebar_options = array(
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h2 class="widgettitle">',
		'after_title' => '</h2>',
	);

	function init() {
		// Setup the sidebars after all fields are registered
		add_action('carbon_after_register_fields', array($this, 'setup_sidebar_options'), 20);
		add_action('carbon_after_register_fields', array($this, 'register_custom_sidebars'), 21);
	}

	function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	function set_sidebar_options($sidebar_options) {
		// Make sure that all needed fields are in the options array
		$required_arguments = array('before_widget', 'after_widget', 'before_title', 'after_title');
		foreach ($required_arguments as $arg) {
			if (!isset($sidebar_options[$arg])) {
				throw new Carbon_Exception('Provide all sidebar options for ' . $this->name . ': <code>' .
						implode(', ', $required_arguments) . '</code>');
			}
		}

		$this->sidebar_options = $sidebar_options;
		return $this;
	}

	function render() {
		if ($this->enable_add_new) {
			$this->options['new'] = _x('Add New', 'sidebar', 'crb');
		}

		return parent::render();
	}

	function setup_sidebar_options() {
		global $wp_registered_sidebars;
		$custom_sidebars = $this->get_custom_sidebars();

		// Add field options
		$sidebars = array();

		foreach ($wp_registered_sidebars as $sidebar) {
			$sidebars[] = $sidebar['name'];
		}

		$options = array_merge($sidebars, $custom_sidebars);
		$options = array_combine($options, $options);
		$this->add_options($options);
	}

	function register_custom_sidebars() {
		$custom_sidebars = $this->get_custom_sidebars();

		foreach ($custom_sidebars as $sidebar) {
			$slug = strtolower(preg_replace('~-{2,}~', '', preg_replace('~[^\w]~', '-', $sidebar)));

			register_sidebar(array(
				'name' => $sidebar,
				'id' => $slug,
				'description' => '',
				'before_widget' => $this->sidebar_options['before_widget'],
				'after_widget' => $this->sidebar_options['after_widget'],
				'before_title' => $this->sidebar_options['before_title'],
				'after_title' => $this->sidebar_options['after_title'],
			));
		}
	}

	function get_custom_sidebars() {
		global $wpdb;

		if ( !empty($this->custom_sidebars) ) {
			return $this->custom_sidebars;
		}

		$sidebars = array();

		$query_string = '';
		switch ($this->context) {
			case 'CustomFields':
				$query_string = 'SELECT meta_value AS sidebar FROM ' . $wpdb->postmeta . ' WHERE meta_key = "' .  esc_sql($this->name) . '"';
				break;
			case 'TermMeta':
				$query_string = 'SELECT meta_value AS sidebar FROM ' . $wpdb->termmeta . ' WHERE meta_key = "' .  esc_sql($this->name) . '"';
				break;
			case 'ThemeOptions':
				$query_string = 'SELECT option_value AS sidebar FROM ' . $wpdb->options . ' WHERE option_name = "' .  esc_sql($this->name) . '"';
				break;
			case 'UserMeta':
				$query_string = 'SELECT meta_value AS sidebar FROM ' . $wpdb->usermeta . ' WHERE meta_key = "' .  esc_sql($this->name) . '"';
				break;
		}

		$sidebar_names = $wpdb->get_col($query_string);
		
		foreach ($sidebar_names as $sidebar_name) {
			$sidebars[$sidebar_name] = 1;
		}

		$this->custom_sidebars = array_keys($sidebars);

		return $this->custom_sidebars;
	}
}

class Carbon_Field_HTML extends Carbon_Field {
	public $field_html;

	function set_html($html) {
		$this->field_html = $html;
		return $this;
	}

	function render() {
		echo $this->field_html;
	}

	function get_label() {
		return '';
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
