<?php

add_action('admin_print_scripts', array('Carbon_Field', 'admin_hook_scripts'));
add_action('admin_print_styles', array('Carbon_Field', 'admin_hook_styles'));

if ( !class_exists('Carbon_Field') ) :

/**
 * Base field class.
 * Defines the key container methods and their default implementations.
 * Implements factory design pattern
 *
 **/
class Carbon_Field {
	/**
	 * Stores all the field backbone templates
	 *
	 * @see factory()
	 * @see add_template()
	 * @var array
	 */
	protected $templates = array();

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
	 * Whether or not this value should be auto loaded. Applicable to theme options only.
	 *
	 * @see set_autoload()
	 * @var bool
	 **/
	protected $autoload = false;

	/**
	 * Whether or not this field will be initialized when the field is in the viewport (visible).
	 * 
	 * @see set_lazyload()
	 * @var bool
	 **/
	protected $lazyload = false;

	/**
	 * Whether or not this field should take two columns (colspan="2"). Applicable to theme options and term fields only.
	 * 
	 * @see set_wide()
	 * @var bool
	 **/
	protected $wide = false;

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
	 * Stores the field options (if any)
	 *
	 * @var string
	 **/
	protected $options = array();

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
		$field->add_template($field->get_type(), array($field, 'template'));

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
	 * Enqueue admin scripts.
	 * Called once per field type.
	 *
	 * @return void
	 **/
	function admin_enqueue_scripts() {}

	/**
	 * Prints the main Underscore template
	 *
	 * @return void
	 **/
	function template() { }

	/**
	 * Returns all the backbone templates
	 *
	 * @return array
	 **/
	function get_templates() {
		return $this->templates;
	}

	/**
	 * Adds a new backbone template
	 *
	 * @return void
	 **/
	function add_template($name, $callback) {
		$this->templates[$name] = $callback;
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

			// remove the leading "crb_"(if it's there)
			$label = preg_replace('~^crb_~', '', $label);

			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}

		$this->label = $label;
	}

	function get_label() {
		return $this->label;
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
	 * Return whether or not this value should be auto loaded.
	 *
	 * @return bool
	 **/
	function get_autoload() {
		return $this->autoload;
	}

	/**
	 * Whether or not this field will be initialized when the field is in the viewport (visible).
	 * 
	 * @param bool $autoload
	 * @return object $this
	 **/
	function set_lazyload($lazyload) {
		$this->lazyload = $lazyload;
		return $this;
	}

	/**
	 * Return whether or not this field should be lazyloaded.
	 * 
	 * @return bool
	 **/
	function get_lazyload() {
		return $this->lazyload;
	}

	/**
	 * Whether or not this field should take two columns (colspan="2"). Applicable to theme options and term fields only.
	 * 
	 * @param bool $wide
	 * @return object $this
	 **/
	function set_wide($wide) {
		$this->wide = $wide;
		return $this;
	}

	/**
	 * Return whether or not this field is wide (takes more then two columns).
	 * 
	 * @return bool
	 **/
	function is_wide() {
		return $this->wide;
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
	protected function clean_type($type) {
		$clean_class = str_replace('Carbon_Field', '', $type);
		$clean_class = str_replace('_', '', $clean_class);

		return $clean_class;
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

	/**
	 * Allows the value of a field to be processed after loading.
	 * Can be implemented by the extending class if necessary.
	 * 
	 * @return array
	 */
	public function process_value() {

	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json($load) {
		if ($load) {
			$this->load();
		}

		$this->process_value();

		$field_data = array(
			'id' => $this->get_id(),
			'type' => $this->get_type(),
			'label' => $this->get_label(),
			'name' => $this->get_name(),
			'value' => $this->get_value(),
			'default_value' => $this->get_default_value(),
			'help_text' => $this->get_help_text(),
			'context' => $this->get_context(),
			'required' => $this->is_required(),
			'lazyload' => $this->get_lazyload(),
			'wide' => $this->is_wide(),
		);

		return $field_data;
	}

	/**
	 * Set the field options
	 * Callbacks are supported
	 *
	 * @param array|callback $options
	 * @return void
	 */
	protected function _set_options($options) {
		$this->options = (array) $options;
	}

	/**
	 * Add options to the field
	 * Callbacks are supported
	 *
	 * @param array|callback $options
	 * @return void
	 */
	protected function _add_options($options) {
		$this->options[] = $options;
	}

	/**
	 * Check if there are callbacks and populate the options
	 *
	 * @return void
	 */
	protected function load_options() {
		if (empty($this->options)) {
			return false;
		}

		$options = array();
		foreach ($this->options as $key => $value) {
			if (is_callable($value)) {
				$options = $options + (array) call_user_func($value);
			} else if (is_array($value)) {
				$options = $options + $value;
			} else {
				$options[$key] = $value;
			}
		}

		$this->options = $options;
	}

	/**
	 * Changes the options array structure. This is needed to keep the array items order when it is JSON encoded.
	 *
	 * @param array $options
	 * @return array
	 */
	public function parse_options($options) {
		$parsed = array();

		foreach ($options as $key => $value) {
			$parsed[] = array(
				'name' => $value,
				'value' => $key,
			);
		}

		return $parsed;
	}

	static function admin_hook_scripts() {
		wp_enqueue_media();
		crb_enqueue_script('carbon-fields', CARBON_PLUGIN_URL . '/js/fields.js', array('carbon-app', 'carbon-containers'));
		wp_localize_script('carbon-fields', 'crbl10n',
			array(
				'title' => __('Files', 'crb'),
				'geocode_not_successful' => __('Geocode was not successful for the following reason: ', 'crb'),
				'max_num_items_reached' => __('Maximum number of items reached (%s items)', 'crb'),
				'max_num_rows_reached' => __('Maximum number of rows reached (%s rows)', 'crb'),
				'cannot_create_more_rows' => __('Cannot create more than %s rows', 'crb'),
				'enter_name_of_new_sidebar' => __('Please enter the name of the new sidebar:', 'crb'),
				'enter_name_of_new_sidebar' => __('Please enter the name of the new sidebar:', 'crb'),
				'complex_no_rows' => __('There are no %s yet. Click <a href="#">here</a> to add one.', 'crb'),
				'complex_add_button' => __('Add %s', 'crb'),
			)
		);
	}

	static function admin_hook_styles() {
		wp_enqueue_style('thickbox');
	}
} // END Carbon_Field

endif; // END Class Exists check


if ( !class_exists('Carbon_Field_Text') ) :

class Carbon_Field_Text extends Carbon_Field {
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}

endif; // END Carbon_Field_Text


if ( !class_exists('Carbon_Field_Textarea') ) :

class Carbon_Field_Textarea extends Carbon_Field {
	protected $height = 170;
	protected $rows = 0;

	// deprecated in favor of set_rows()
	function set_height($height = 170) {
		$min_height = 28;
		$this->height = max(intval($height), $min_height);
		return $this;
	}

	function set_rows($rows = 0) {
		$this->rows = absint($rows);
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'rows' => $this->rows,
			'height' => $this->height,
		));

		return $field_data;
	}

	function template() {
		?>
		<textarea id="{{{ id }}}" name="{{{ name }}}" {{{ rows ? 'rows="' + rows + '"' : 'style="height: ' + height + 'px;"' }}}>{{ value }}</textarea>
		<?php
	}
}

endif; // END Carbon_Field_Textarea


if ( !class_exists('Carbon_Field_Rich_Text') ) :

class Carbon_Field_Rich_Text extends Carbon_Field_Textarea {
	protected $lazyload = true;
	static $initialized = false;

	function admin_init() {
		if (!self::$initialized) {
			self::$initialized = true;

			add_action('admin_footer', array($this, 'editor_init'));
		}
	}

	function template() {
		?>
		<div id="wp-{{{ id }}}-wrap" class="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
			<div id="wp-{{{ id }}}-editor-tools" class="wp-editor-tools">
				<div id="wp-{{{ id }}}-media-buttons" class="hide-if-no-js wp-media-buttons">
					<a href="#" class="button insert-media add_media" data-editor="{{{ id }}}" title="<?php _e('Add Media'); ?>">
						<span class="wp-media-buttons-icon"></span> <?php _e('Add Media'); ?>
					</a>
					<?php
						remove_action('media_buttons', 'media_buttons');
						do_action('media_buttons');
						add_action('media_buttons', 'media_buttons');
					?>
				</div>
			</div>
			<div class="wp-editor-tabs">
				<button id="{{{ id }}}-tmce" class="wp-switch-editor switch-tmce" onclick="switchEditors.switchto(this);" type="button">
					<?php _e('Visual', 'crb'); ?>
				</button>
				<button id="{{{ id }}}-html" class="wp-switch-editor switch-html" onclick="switchEditors.switchto(this);" type="button">
					<?php _e( 'Text', 'crb' ); ?>
				</button>
			</div>
			<div id="wp-{{{ id }}}-editor-container" class="wp-editor-container">
				<textarea id="{{{ id }}}" class="wp-editor-area" name="{{{ name }}}">{{ value ? switchEditors.wpautop(value) : value }}</textarea>
			</div>
		</div>
		<?php
	}

	// Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
	// wp_editor() automatically enqueues and sets up everything.
	function editor_init() {
		?>
		<div style="display:none;">
			<?php
				$settings = array(
					'tinymce' => array(
						'resize' => true,
						'wp_autoresize_on' => true,
					)
				);

				wp_editor('', 'carbon_settings', $settings);
			?>
		</div>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Date') ) :

class Carbon_Field_Date extends Carbon_Field {

	/**
	 * Datepicker options
	 */
	public $options = array();

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'options' => $this->options,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="input-with-button">
			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-datepicker" />
			<span class="carbon-datepicker-trigger button icon-button hide-if-no-js"><?php _e('Date', 'crb'); ?></span>
		</div>
		<?php
	}

	function admin_enqueue_scripts() {
		wp_enqueue_script('jquery-ui-datepicker');

		wp_enqueue_style('jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css');
		wp_enqueue_style('carbon-jquery-ui', CARBON_PLUGIN_URL . '/css/jquery-ui.css');
	}

	function set_options($options) {
		$this->options = $options;

		return $this;
	}
}

endif;


if ( !class_exists('Carbon_Field_Color') ) :

class Carbon_Field_Color extends Carbon_Field {
	function template() {
		?>
		<div class="carbon-color-row">
			<div class="input-with-button">
				<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-color" />
				<span class="pickcolor button icon-button hide-if-no-js"><?php _e('Select a Color', 'crb'); ?></span>
			</div>
			<div class="carbon-color-container hide-if-no-js"></div>
		</div>
		<?php
	}

	function admin_enqueue_scripts() {
		wp_enqueue_script('farbtastic');
		wp_enqueue_style('farbtastic');
	}
}

endif;


if ( !class_exists('Carbon_Field_Map') ) :

class Carbon_Field_Map extends Carbon_Field {
	protected $lazyload = true;
	protected $default_lat = 40.346544;
	protected $default_lng = -101.645507;
	protected $default_zoom = 10;
	protected $lat = null;
	protected $lng = null;
	protected $zoom = null;
	protected $address = '';

	function admin_enqueue_scripts() {
		wp_enqueue_script('carbon-google-maps', '//maps.googleapis.com/maps/api/js?sensor=false');
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'lat' => is_float($this->lat) ? $this->lat : $this->default_lat,
			'lng' => is_float($this->lng) ? $this->lng : $this->default_lng,
			'zoom' => is_int($this->zoom) ? $this->zoom : $this->default_zoom,
			'address' => $this->address,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="carbon-map-search">
			<p><?php _e('Locate Address on the map', 'crb'); ?>: </p>
			
			<div class="input-with-button">
				<input type="text" name="{{{ name }}}[address]" value="{{{ address }}}" class="regular-text address" />
				<span class="address-search-btn button icon-button">
					<?php _e('Find', 'crb'); ?>
				</span>
			</div>
				
			<input type="hidden" name="{{{ name }}}[lat]" value="{{{ lat }}}" />
			<input type="hidden" name="{{{ name }}}[lng]" value="{{{ lng }}}" />
			<input type="hidden" name="{{{ name }}}[zoom]" value="{{{ zoom }}}" />
		</div>
		<div class="carbon-map-canvas">&nbsp;</div>
		<?php
	}

	function set_position($lat, $lng, $zoom) {
		$this->default_lat = $lat;
		$this->default_lng = $lng;
		$this->default_zoom = $zoom;

		return $this;
	}

	function load() {
		$this->store->load($this);

		$name = $this->get_name();

		// Set the "lat"
		$this->set_name($name . '-lat');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->lat = (float) $this->get_value();
		}

		// Set the "lng"
		$this->set_name($name . '-lng');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->lng = (float) $this->get_value();
		}

		// Set the "address"
		$this->set_name($name . '-address');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->address = $this->get_value();
		}

		// Set the "zoom"
		$this->set_name($name . '-zoom');
		$this->store->load($this);
		if ($this->get_value() || $this->get_value() === '0') {
			$this->zoom = (int) $this->get_value();
		}

		// Set the field value
		$this->set_name($name);
		$value = $this->lat && $this->lng ? $this->lat . ',' . $this->lng : '';
		$this->set_value($value);
	}

	function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Add the "lat" meta in the database
		$this->set_name($name . '-lat');
		$this->set_value($value['lat']);
		$this->store->save($this);

		// Add the "lng" meta in the database
		$this->set_name($name . '-lng');
		$this->set_value($value['lng']);
		$this->store->save($this);

		// Add the "zoom" meta in the database
		$this->set_name($name . '-zoom');
		$this->set_value($value['zoom']);
		$this->store->save($this);

		// Add the "address" meta in the database
		$this->set_name($name . '-address');
		$this->set_value($value['address']);
		$this->store->save($this);

		// Set the value for the field
		$this->set_name($name);
		$field_value = !empty($value['lat']) && !empty($value['lng']) ? $value['lat'] . ',' . $value['lng'] : '';
		$this->set_value($field_value);

		parent::save();
	}

	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->name]) ) {
			$this->set_value(null);
		} else {
			$value = stripslashes_deep($input[$this->name]);

			if (isset($input[$this->name . '_-lat'])) {
				$this->lat = (float) $input[$this->name . '_-lat'];
			}

			if (isset($input[$this->name . '_-lng'])) {
				$this->lng = (float) $input[$this->name . '_-lng'];
			}

			if (isset($input[$this->name . '_-zoom'])) {
				$this->zoom = (int) $input[$this->name . '_-zoom'];
			}

			if (isset($input[$this->name . '_-address'])) {
				$this->address = $input[$this->name . '_-address'];
			}

			$this->set_value( $value );
		}
	}
}

endif;


if ( !class_exists('Carbon_Field_Map_With_Address') ) :

class Carbon_Field_Map_With_Address extends Carbon_Field_Map {
	function get_type() {
		$class = get_parent_class($this); // setting the type to be the same as the map field

		return $this->clean_type($class);
	}
}

endif;


if ( !class_exists('Carbon_Field_Select') ) :

class Carbon_Field_Select extends Carbon_Field {
	function set_options($options) {
		$this->_set_options($options);
		return $this;
	}

	function add_options($options) {
		$this->_add_options($options);
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);
		$this->load_options();

		$field_data = array_merge($field_data, array(
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
		<# } else { #>
			<select id="{{{ id }}}" name="{{{ name }}}">
				<# _.each(options, function(option) { #>
					<option value="{{ option.value }}" {{{ option.value == value ? 'selected="selected"' : '' }}}>
						{{{ option.name }}}
					</option>
				<# }) #>
			</select>
		<# } #>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Radio') ) :

class Carbon_Field_Radio extends Carbon_Field_Select {
	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
		<# } else { #>
			<ul class="carbon-radio-list">
				<# _.each(options, function(option) { #>
					<li>
						<label>
							<input type="radio" name="{{{ name }}}" value="{{ option.value }}" {{{ option.value == value ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</li>
				<# }) #>
			</ul>
		<# } #>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Checkbox') ) :

class Carbon_Field_Checkbox extends Carbon_Field {
	protected $option_value = 'yes';

	function set_option_value($value) {
		$this->option_value = $value;
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'option_value' => $this->option_value,
			'option_label' => parent::get_label(),
		));

		return $field_data;
	}

	function template() {
		?>
		<label>
			<input type="checkbox" name="{{{ name }}}" value="{{ option_value }}" {{{ option_value == value ? 'checked="checked"' : '' }}} />
			{{{ option_label }}}
		</label>
		<?php
	}

	function get_label() {
		return '';
	}

	function is_required() {
		return false;
	}
}

endif;


if ( !class_exists('Carbon_Field_Header_Scripts') ) :

class Carbon_Field_Header_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your header, you should enter them here.', 'crb'));

		add_action('wp_head', array($this, 'print_scripts'));

		parent::init();
	}

	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}

		echo get_option($this->name);
	}
}

endif;


if ( !class_exists('Carbon_Field_Footer_Scripts') ) :

class Carbon_Field_Footer_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.', 'crb'));

		add_action('wp_footer', array($this, 'print_scripts'));

		parent::init();
	}

	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}

		echo get_option($this->name);
	}
}

endif;


if ( !class_exists('Carbon_Field_Separator') ) :

class Carbon_Field_Separator extends Carbon_Field {
	protected $wide = true;

	function template() {
		?>
		<h3>{{{ label }}}</h3>
		<?php
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

	function is_required() {
		return false;
	}
}

endif;


if ( !class_exists('Carbon_Field_Set') ) :

class Carbon_Field_Set extends Carbon_Field {
	protected $limit_options = 0;

	function set_options($options) {
		$this->_set_options($options);
		return $this;
	}

	function add_options($options) {
		$this->_add_options($options);
		return $this;
	}

	function limit_options($limit) {
		$this->limit_options = $limit;
		return $this;
	}

	function get_value() {
		if ($this->value === false) {
			return array();
		}

		$this->load_options();

		if (!is_array($this->value)) {
			$this->value = maybe_unserialize($this->value);
			if (!is_array($this->value)) {
				return array($this->value);
			}
		}

		return (array) $this->value;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$this->load_options();

		$field_data = array_merge($field_data, array(
			'limit_options' => $this->limit_options,
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
		<# } else { #>
			<div class="carbon-set-list">
				<# _.each(options, function(option, i) { #>
					<# 
						var selected = jQuery.inArray(String(option.value), value) > -1;
						var counter = i + 1;
						var exceed = limit_options > 0 && counter > limit_options;
						var last = options.length === counter;
					#>

					<p {{{ exceed ? 'style="display:none"' : '' }}}>
						<label>
							<input type="checkbox" name="{{{ name }}}[]" value="{{ option.value }}" {{{ selected ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</p>

					<# if (!exceed && !last && counter == limit_options) { #>
						<p>... <a href="#" class="carbon-set-showall"><?php _e('Show All Options', 'crb'); ?></a></p>
					<# } #>
				<# }) #>
			</div>
		<# } #>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Relationship') ) :

class Carbon_Field_Relationship extends Carbon_Field {
	protected $post_type = 'post';
	protected $max = -1;
	protected $allow_duplicates = false;

	function admin_init() {
		$this->add_template($this->get_type() . '_item', array($this, 'item_template'));

		parent::admin_init();
	}

	function set_post_type($post_type) {
		if (!is_array($post_type)) {
			$post_type = array($post_type);
		}

		$this->post_type = $post_type;
		return $this;
	}

	function set_max($max) {
		$this->max = intval($max);
		return $this;
	}

	function allow_duplicates($allow = true) {
		$this->allow_duplicates = (bool)$allow;
		return $this;
	}

	/**
	 * Used to get the title of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_title` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	function get_title_by_type($id, $type, $subtype = '') {
		$title = get_the_title($id);
		if (!$title) {
			$title = '(no title) - ID: ' . $id;
		}

		/**
		 * Filter the title of the relationship item.
		 *
		 * @param string $title   The unfiltered item title.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters('carbon_relationship_title', $title, $this->get_name(), $id, $type, $subtype);
	}

	/**
	 * Used to get the label of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_item_label` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype Subtype - "page", "post", "category", etc.
	 * @return string $label The label of the item.
	 */
	function get_item_label($id, $type, $subtype = '') {
		$object = get_post_type_object($subtype);
		$label = $object->labels->singular_name;

		/**
		 * Filter the label of the relationship item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters('carbon_relationship_item_label', $label, $this->get_name(), $id, $type, $subtype);
	}

	/**
	 * Generate the item options for the relationship field.
	 *
	 * @return array $options The selectable options of the relationship field.
	 */
	function get_options() {
		$options = array();
		/**
		 * Filter the default query when fetching posts for a particular field.
		 *
		 * @param array $args The parameters, passed to get_posts().
		 */
		foreach ($this->post_type as $post_type) {
			$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_post_' . $post_type;
			$args = apply_filters($filter_name, array(
				'post_type' => $post_type,
				'posts_per_page' => -1,
				'fields' => 'ids',
				'suppress_filters' => false,
			));

			// fetch and prepare posts as relationship items
			$new_options = get_posts($args);
			foreach ($new_options as &$p) {
				$p = array(
					'id' => $p,
					'title' => $this->get_title_by_type($p, 'post', $post_type),
					'type' => 'post',
					'subtype' => $post_type,
					'label' => $this->get_item_label($p, 'post', $post_type),
					'is_trashed' => (get_post_status($p) == 'trash'),
				);
			}

			$options = array_merge($options, $new_options);
		}

		/**
		 * Filter the final list of options, available to a certain relationship field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the relationship field.
		 */
		$options = apply_filters('carbon_relationship_options', $options, $this->get_name());

		return $options;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		if (!empty($field_data['value'])) {
			$value = array();

			$field_data['value'] = maybe_unserialize($field_data['value']);
			foreach ($field_data['value'] as $single_value) {
				$post_type = get_post_type($single_value);
				$value[] = array(
					'id' => $single_value,
					'title' => $this->get_title_by_type($single_value, 'post', $post_type),
					'type' => 'post',
					'subtype' => $post_type,
					'label' => $this->get_item_label($single_value, 'post', $post_type),
					'is_trashed' => (get_post_status($single_value) == 'trash'),
				);
			}
			$field_data['value'] = $value;
		}

		$field_data = array_merge($field_data, array(
			'options' => $this->get_options(),
			'max' => $this->max,
			'allow_duplicates' => $this->allow_duplicates,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="relationship-container">
			<div class="relationship-left">
				<div class="search-field">
					<input type="text" class="search-field" placeholder="<?php esc_attr_e('Search', 'crb'); ?>" />
				</div>

				<ul class="relationship-list">
					<# if (options) { #>
						<# _.each(options, function(item) { #>
							<?php echo $this->item_template(false); ?>
						<# }); #>
					<# } #>
				</ul>
			</div>

			<div class="relationship-right">
				<label><?php _e('Associated:', 'crb'); ?></label>

				<ul class="relationship-list">
					<# if (value) { #>
						<# _.each(value, function(item) { #>
							<?php echo $this->item_template(); ?>
						<# }); #>
					<# } #>
				</ul>
			</div>
		</div>
		<?php
	}

	/**
	 * Serves as a backbone template for the relationship items.
	 * Used for both the selected and the selectable options.
	 *
	 * @param bool $display_input Whether to display the selected item input field.
	 */
	function item_template($display_input = true) {
		?>
		<li>
			<span class="mobile-handle"></span>
			<a href="#" data-item-id="{{{ item.id }}}" data-item-title="{{{ item.title }}}" data-item-type="{{{ item.type }}}" data-item-subtype="{{{ item.subtype }}}" data-item-label="{{{ item.label }}}" data-value="{{{ item.id }}}">
				<em>{{{ item.label }}}</em>
				<span></span>
				{{{ item.title }}}
			</a>
			<?php if ($display_input): ?>
				<input type="hidden" name="{{{ name }}}[]" value="{{{ item.id }}}" />
			<?php endif; ?>
		</li>
		<?php
	}

}

endif;

if ( !class_exists('Carbon_Field_Association') ) :

class Carbon_Field_Association extends Carbon_Field_Relationship {
	protected $types = array(
		array(
			'type' => 'post',
			'post_type' => 'post',
		)
	);

	function set_types($types) {
		$this->types = $types;
		return $this;
	}

	/**
	 * @deprecated 
	 * @see set_types()
	 */
	function set_post_type($post_type) {
		$this->set_types(array(
			array(
				'type' => 'post',
				'post_type' => $post_type
			)
		));

		return $this;
	}

	/**
	* Converts the database values into a usable associative array.
	* 
	* The relationship data is saved in the database in the following format:
	* 	array (
	*		0 => 'post:page:4',
	*		1 => 'term:category:2',
	*		2 => 'user:user:1',
	* 	)
	* where the value of each array item contains:
	* 	- Type of data (post, term, user or comment)
	* 	- Subtype of data (the particular post type or taxonomy)
	* 	- ID of the item (the database ID of the item)
	*/
	function process_value() {
		$raw_value = maybe_unserialize($this->get_value());
		if (!$raw_value) {
			$raw_value = array();
		}

		$value = array();
		foreach ($raw_value as $raw_value_entry) {
			if (is_string($raw_value_entry)) {
				$value_pieces = explode(':', $raw_value_entry);
			} else {
				$value_pieces = array_values($raw_value_entry);
			}

			$item = array(
				'type' => $value_pieces[0],
				'subtype' => $value_pieces[1],
				'id' => $value_pieces[2],
				'title' => $this->get_title_by_type($value_pieces[2], $value_pieces[0], $value_pieces[1]),
				'label' => $this->get_item_label($value_pieces[2], $value_pieces[0], $value_pieces[1]),
				'is_trashed' => ($value_pieces[0] == 'post' && get_post_status($value_pieces[2]) == 'trash'),
			);
			$value[] = $item;
		}

		$this->set_value($value);
	}

	/**
	 * Used to get the title of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_title` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	function get_title_by_type($id, $type, $subtype = '') {
		$title = '';

		if ($type === 'post') {
			$title = get_the_title($id);
		} elseif($type === 'term') {
			$term = get_term_by('id', $id, $subtype);
			$title = $term->name;
		} elseif($type === 'user') {
			$title = get_the_author_meta('user_login', $id);
		} elseif($type === 'comment') {
			$title = get_comment_text($id);
			$max = apply_filters('carbon_relationship_comment_length', 30, $this->get_name());
			if (strlen($title) > $max) {
				$title = substr($title, 0, $max) . '...';
			}
		}

		if (!$title) {
			$title = '(no title) - ID: ' . $id;
		}

		/**
		 * Filter the title of the relationship item.
		 *
		 * @param string $title   The unfiltered item title.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters('carbon_relationship_title', $title, $this->get_name(), $id, $type, $subtype);
	}

	/**
	 * Used to get the label of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_item_label` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype Subtype - "page", "post", "category", etc.
	 * @return string $label The label of the item.
	 */
	function get_item_label($id, $type, $subtype = '') {
		$label = $subtype ? $subtype : $type;

		if ($type === 'post') {
			$post_type_object = get_post_type_object($subtype);
			$label = $post_type_object->labels->singular_name;
		} elseif($type === 'term') {
			$taxonomy_object = get_taxonomy($subtype);
			$label = $taxonomy_object->labels->singular_name;
		}

		/**
		 * Filter the label of the relationship item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters('carbon_relationship_item_label', $label, $this->get_name(), $id, $type, $subtype);
	}

	/**
	 * Generate the item options for the relationship field.
	 *
	 * @return array $options The selectable options of the relationship field.
	 */
	function get_options() {
		$options = array();

		foreach ($this->types as $type) {

			// populate posts
			if ($type['type'] === 'post') {

				/**
				 * Filter the default query when fetching posts for a particular field.
				 *
				 * @param array $args The parameters, passed to get_posts().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['post_type'];
				$args = apply_filters($filter_name, array(
					'post_type' => $type['post_type'],
					'posts_per_page' => -1,
					'fields' => 'ids',
					'suppress_filters' => false,
				));

				// fetch and prepare posts as relationship items
				$posts = get_posts($args);
				foreach ($posts as &$p) {
					$p = array(
						'id' => $p,
						'title' => $this->get_title_by_type($p, $type['type'], $type['post_type']),
						'type' => $type['type'],
						'subtype' => $type['post_type'],
						'label' => $this->get_item_label($p, $type['type'], $type['post_type']),
						'is_trashed' => (get_post_status($p) == 'trash'),
					);
				}
				$options = array_merge($options, $posts);

			// populate taxonomy terms
			} elseif ($type['type'] === 'term') {

				/**
				 * Filter the default parameters when fetching terms for a particular field.
				 *
				 * @param array $args The parameters, passed to get_terms().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['taxonomy'];
				$args = apply_filters($filter_name, array(
					'hide_empty' => 0,
					'fields' => 'id=>name',
				));

				// fetch and prepare terms as relationship items
				$terms = get_terms($type['taxonomy'], $args);
				foreach ($terms as $term_id => &$term) {
					$term = array(
						'id' => $term_id,
						'title' => $term,
						'type' => $type['type'],
						'subtype' => $type['taxonomy'],
						'label' => $this->get_item_label($term_id, $type['type'], $type['taxonomy']),
						'is_trashed' => false,
					);
				}
				$options = array_merge($options, $terms);

			// populate users
			} elseif ($type['type'] === 'user') {

				/**
				 * Filter the default parameters when fetching users for a particular field.
				 *
				 * @param array $args The parameters, passed to get_users().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'];
				$args = apply_filters($filter_name, array(
					'fields' => 'ID'
				));

				// fetch and prepare users as relationship items
				$users = get_users($args);
				foreach ($users as &$u) {
					$u = array(
						'id' => $u,
						'title' => $this->get_title_by_type($u, $type['type']),
						'type' => $type['type'],
						'subtype' => 'user',
						'label' => $this->get_item_label($u, $type['type']),
						'is_trashed' => false,
					);
				}
				$options = array_merge($options, $users);

			// populate comments
			} elseif($type['type'] === 'comment') {

				/**
				 * Filter the default parameters when fetching comments for a particular field.
				 *
				 * @param array $args The parameters, passed to get_comments().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'];
				$args = apply_filters($filter_name, array(
					'fields' => 'ids'
				));

				// fetch and prepare comments as relationship items
				$comments = get_comments($args);
				foreach ($comments as &$c) {
					$c = array(
						'id' => $c,
						'title' => $this->get_title_by_type($c, $type['type']),
						'type' => $type['type'],
						'subtype' => 'comment',
						'label' => $this->get_item_label($c, $type['type']),
						'is_trashed' => false,
					);
				}
				$options = array_merge($options, $comments);

			}
		}

		/**
		 * Filter the final list of options, available to a certain relationship field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the relationship field.
		 */
		$options = apply_filters('carbon_relationship_options', $options, $this->get_name());

		return $options;
	}

	function to_json($load) {
		$field_data = Carbon_Field::to_json($load);

		$field_data = array_merge($field_data, array(
			'options' => $this->get_options(),
			'max' => $this->max,
			'allow_duplicates' => $this->allow_duplicates,
		));

		return $field_data;
	}

	/**
	 * Serves as a backbone template for the relationship items.
	 * Used for both the selected and the selectable options.
	 *
	 * @param bool $display_input Whether to display the selected item input field.
	 */
	function item_template($display_input = true) {
		?>
		<li>
			<a href="#" data-item-id="{{{ item.id }}}" data-item-title="{{{ item.title }}}" data-item-type="{{{ item.type }}}" data-item-subtype="{{{ item.subtype }}}" data-item-label="{{{ item.label }}}" data-value="{{{ item.type }}}:{{{ item.subtype }}}:{{{ item.id }}}">
				<em>{{{ item.label }}}</em>
				<span></span>
				{{{ item.title }}}
				<# if (item.is_trashed) { #>
					<i class="trashed"></i>
				<# } #>
			</a>
			<?php if ($display_input): ?>
				<input type="hidden" name="{{{ name }}}[]" value="{{{ item.type }}}:{{{ item.subtype }}}:{{{ item.id }}}" />
			<?php endif; ?>
		</li>
		<?php
	}

}

endif;

if ( !class_exists('Carbon_Field_File') ) :

class Carbon_Field_File extends Carbon_Field {
	public $button_label = '';
	public $window_button_label = '';
	public $window_label = '';

	// empty for all types. available types: audio, video, image
	public $field_type = '';

	// alt, author, caption, dateFormatted, description, editLink, filename, height, icon, id, link, menuOrder, mime, name, status, subtype, title, type, uploadedTo, url, width
	public $value_type = 'url';

	function admin_init() {
		$this->button_label = __('Select File', 'crb');
		$this->window_button_label = __('Select File', 'crb');
		$this->window_label = __('Files', 'crb');

		$this->add_template($this->get_type() . '-Description', array($this, 'template_description'));
	}

	function set_type($type) {
		$this->field_type = $type;
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$url = '';
		$thumb_url = '';
		$file_ext = '';
		$file_type = '';
		$value = $this->get_value();

		if ($value) {
			$url = is_numeric($value) ? wp_get_attachment_url($value) : $value;
			$filetype = wp_check_filetype($url);

			$file_ext = $filetype['ext']; // png, mp3, etc..
			$file_type = preg_replace('~\/.+$~', '', $filetype['type']); // image, video, etc..

			if ($file_type == 'image') {
				$thumb_url = $url;

				if ($this->value_type == 'id') {
					$thumb_src = wp_get_attachment_image_src($value, 'thumbnail');
					$thumb_url = $thumb_src[0];
				}
			}
		}

		$field_data = array_merge($field_data, array(
			'url' => (string) $url,
			'thumb_url' => $thumb_url,
			'file_ext' => $file_ext,
			'file_type' => $file_type,
			'button_label' => $this->button_label,
			'window_button_label' => $this->window_button_label,
			'window_label' => $this->window_label,
			'type_filter' => $this->field_type,
			'value_type' => $this->value_type,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="input-with-button">
			<input 
				id="{{ id }}" 
				type="text" 
				name="{{ name }}" 
				value="{{ value }}" 
				class="regular-text carbon-file-field" 
				{{{ value_type === 'id' ? 'style="display:none"' : '' }}} 
			/>

			<span id="c2_open_media{{ id.replace('-', '_') }}" class="button c2_open_media icon-button">
				{{{ button_label }}}
			</span>
		</div>
		
		{{{ description }}}
		<?php
	}

	function template_description() {
		?>
		<div class="carbon-description {{{ value ? '' : 'hidden' }}}">
			<a href="{{ value }}" target="_blank" class="button carbon-view_file">
				<?php _e('View File', 'crb'); ?>
			</a>
		</div>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Attachment') ) :

class Carbon_Field_Attachment extends Carbon_Field_File {
	public $value_type = 'id';

	function template_description() {
		?>
		<div class="carbon-description {{{ value ? '' : 'hidden' }}}">
			<div class="carbon-attachment-preview {{{ thumb_url ? '' : 'hidden' }}}">
				<div class="carbon-preview">
					<div class="thumbnail">
						<div class="centered">
							<img src="{{ thumb_url }}" class="thumbnail-image" />
						</div>
					</div>
					<div class="carbon-file-remove"></div>
				</div>
			</div>

			<# if (value_type === 'id') { #>
				<div class="attachment-url">{{ url }}</div>
			<# } #>
		</div>
		<?php
	}
}

endif;


if ( !class_exists('Carbon_Field_Image') ) :

class Carbon_Field_Image extends Carbon_Field_Attachment {
	public $field_type = 'image';
	public $value_type = 'url';
	
	function admin_init() {
		$this->button_label = __('Select Image', 'crb');
		$this->window_button_label = __('Select Image', 'crb');
		$this->window_label = __('Images', 'crb');

		parent::admin_init();
	}
}

endif;


if ( !class_exists('Carbon_Field_Choose_Sidebar') ) :

class Carbon_Field_Choose_Sidebar extends Carbon_Field_Select {
	private $enable_add_new = true; // Whether to allow the user to add new sidebars
	private $custom_sidebars = array();
	private $sidebar_options = array();

	function init() {
		// Set Default Sidebar Options
		$this->sidebar_options['default'] = $this->get_default_sidebar_options();

		// Setup the sidebars after all fields are registered
		add_action('carbon_after_register_fields', array($this, 'setup_sidebar_options'), 20);
		add_action('carbon_after_register_fields', array($this, 'register_custom_sidebars'), 21);
	}

	function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	/**
	 * Returns an array with the default sidebar options
	 */
	function get_default_sidebar_options() {
		$sidebar_options = array(
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget'  => '</li>',
			'before_title'  => '<h2 class="widgettitle">',
			'after_title'   => '</h2>',
		);

		if ( function_exists( 'crb_get_default_sidebar_options' ) ) {
			$sidebar_options = crb_get_default_sidebar_options();
		}

		return $sidebar_options;
	}

	/**
	 * Sets the Sidebar Options
	 */
	function set_sidebar_options($sidebar_options) {
		// Make sure that all needed fields are in the options array
		$required_arguments = array('before_widget', 'after_widget', 'before_title', 'after_title');

		/**
		 * Set default settings
		 */
		$sidebar_options_first_element = array_values($sidebar_options);
		$sidebar_options_first_element = $sidebar_options_first_element[0];

		if ( !is_array($sidebar_options_first_element) ) {
			/**
			 * Enters here, if one array with settings is passed
			 * Makes the passed settings, the default ones
			 */
			$sidebar_options = array(
				'default' => $sidebar_options,
			);
		} elseif ( !isset($sidebar_options['default']) ) {
			/**
			 * Enters here, if the default settings are not passed
			 * Sets the default settings
			 *
			 * @see get_default_sidebar_options()
			 */
			$sidebar_options['default'] = $this->get_default_sidebar_options();
		}

		/**
		 * Check if all required arguments are passed for each of the sidebars
		 */
		foreach ($sidebar_options as $options) {
			foreach ($required_arguments as $arg) {
				if ( !isset($options[$arg]) ) {
					throw new Carbon_Exception(
						'Provide all sidebar options for ' . $this->name . ': <code>' .
						implode(', ', $required_arguments) . '</code>'
					);
				}
			}
		}

		$this->sidebar_options = $sidebar_options;
		return $this;
	}

	function to_json($load) {
		if ($this->enable_add_new) {
			$this->options['new'] = _x('Add New', 'sidebar', 'crb');
		}

		$field_data = parent::to_json($load);

		return $field_data;
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
			$slug = sanitize_title_with_dashes($sidebar);

			$sidebar_options = array();

			// Handles which options to use for the current sidebar
			if ( isset($this->sidebar_options[$slug]) ) {
				$sidebar_options = $this->sidebar_options[$slug];
			} else {
				$sidebar_options = $this->sidebar_options['default'];
			}

			// Registers the Sidebar
			register_sidebar(array_merge($sidebar_options, array(
				'name' => $sidebar,
				'id'   => $slug,
			)));
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

		$sidebar_names = array_filter($wpdb->get_col($query_string));

		foreach ($sidebar_names as $sidebar_name) {
			$sidebars[$sidebar_name] = 1;
		}

		$this->custom_sidebars = array_keys($sidebars);

		return $this->custom_sidebars;
	}
}

endif;


if ( !class_exists('Carbon_Field_HTML') ) :

class Carbon_Field_HTML extends Carbon_Field {
	public $field_html;
	protected $wide = true;

	function set_html($html) {
		$this->field_html = $html;
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'html' => $this->field_html,
		));

		return $field_data;
	}

	function template() {
		?>
		{{{ html }}}
		<?php
	}

	function is_required() {
		return false;
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

endif;


if ( !class_exists('Carbon_Field_Gravity_Form') ) :

/**
 * Gravity Form Select
 */
class Carbon_Field_Gravity_Form extends Carbon_Field_Select {
	function admin_init() {
		// Setup Form Options
		add_action( 'carbon_after_register_fields', array($this, 'setup_gravity_form_options'), 20 );
	}

	/**
	 * Performs a check whether the Gravity Form is installed and activated
	 */
	function is_plugin_active() {
		if ( class_exists('RGFormsModel') && method_exists('RGFormsModel', 'get_forms') ) {
			return true;
		}

		return false;
	}

	/**
	 * Sets the Gravity Form Options
	 */
	function setup_gravity_form_options() {
		if ( !$this->is_plugin_active() ) {
			return;
		}

		$forms = RGFormsModel::get_forms(null, 'title');

		if ( !is_array($forms) || empty($forms) ) {
			return;
		}

		$options = array(
			'0' => __('No form', 'crb'),
		);

		foreach ($forms as $form) {
			$options[$form->id] = $form->title;
		}

		$this->set_options($options);
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$this->set_options( apply_filters( 'crb_gravity_form_options', $this->options ) );

		$field_data = array_merge($field_data, array(
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		// Gravity Forms not installed
		if ( !$this->is_plugin_active() ) {
			?><em><?php _e('Please install Gravity Forms plugin', 'crb'); ?></em><?php
			return;
		}

		// No forms have been found
		if ( empty($this->options) ) {
			?><em><?php _e('No Gravity Forms have been found.', 'crb'); ?></em><?php
			return;
		}

		parent::template();
	}
}

endif;