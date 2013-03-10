<?php 

add_action('admin_print_scripts', array('Carbon_Field', 'admin_hook_scripts'));
add_action('admin_print_styles', array('Carbon_Field', 'admin_hook_styles'));
add_action('wp_ajax_carbon_get_file_details', array('Carbon_Field_File', 'carbon_get_file_details'));

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
		add_action('admin_init', array(&$this, 'wp_init'));
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
	 * Instance initialization when in the admin area. 
	 * Called during the WordPress admin_init action
	 *
	 * @return void
	 **/
	function wp_init() {}

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

	function get_id() {
		return $this->id;
	}

	/**
	 * Return whether this field is mandatory for the user
	 *
	 * @return bool
	 **/
	function is_required() {
		return $this->required;
	}

	static function admin_hook_scripts() {
		wp_enqueue_script('carbon_fields', CARBON_PLUGIN_URL . '/js/fields.js');

		wp_enqueue_script('media-upload');
		wp_enqueue_script('thickbox');
	}

	static function admin_hook_styles() {
		wp_enqueue_style('carbon_fields', CARBON_PLUGIN_URL . '/css/fields.css');
		
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

	function render($append = '') {
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

		<div id="wp-<?php echo $id; ?>-wrap" class="carbon-wysiwyg wp-editor-wrap" data-toolbar="full">

			<?php if(get_bloginfo('version') < "3.3"): ?>
				<div id="editor-toolbar">
					<div id="media-buttons" class="hide-if-no-js">
						<?php do_action( 'media_buttons' ); ?>
					</div>
				</div>
			<?php else: ?>
				<div id="wp-<?php echo $id; ?>-editor-tools" class="wp-editor-tools">
					<div id="wp-<?php echo $id; ?>-media-buttons" class="hide-if-no-js wp-media-buttons">
						<?php do_action( 'media_buttons' ); ?>
					</div>
				</div>
			<?php endif; ?>

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

	function admin_footer() {
		// Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
		// wp_editor() automatically enqueues and sets up everything.
		?>
		<div style="display:none;">
			<?php wp_editor( '', 'carbon_settings' ); ?>
		</div>
		<?php
	}

	function admin_enqueue_scripts() {
		wp_enqueue_script('editor');
	}
}

class Carbon_Field_Date extends Carbon_Field {
	function init() {
		global $wp_version;

		if (defined('WP_ADMIN') && WP_ADMIN) {
			if (version_compare($wp_version, '3.4') >= 0) {
				wp_enqueue_script('jquery-ui-datepicker');
			} else {
				wp_enqueue_script('carbon-jquery-ui-datepicker', CARBON_PLUGIN_URL . '/js/jquery-ui.js');
			}
			
			wp_enqueue_style('carbon-jquery-ui', CARBON_PLUGIN_URL . '/css/jquery-ui.css');
		}
		Carbon_Field::init();
	}

	function render() {
		echo '
		<input id="' . $this->get_id() . '" type="text" name="' . $this->get_name() . '" value="' . esc_attr($this->value) . '" class="regular-text carbon-datepicker"  ' . ($this->required ? 'data-carbon-required="true"': '') . '/>
		<a class="carbon-datepicker-trigger hide-if-no-js"></a>
		';
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
			<input type="button" class="pickcolor button hide-if-no-js" value="Select a Color">
			<div class="carbon-color-container hide-if-no-js"></div>
		</div>';
	}
}

class Carbon_Field_Map extends Carbon_Field {
	protected $api_key;
	protected $default_lat = 40.346544;
	protected $default_long = -101.645507;
	protected $zoom = 10;

	function admin_init() {
		wp_enqueue_script('carbon-google-maps', 'http://maps.googleapis.com/maps/api/js?sensor=false');
	}

	function render() {
		echo '
		<input type="text" name="' . $this->get_name() . '" value="' . esc_attr($this->value) . '" class="regular-text carbon-map-field" data-zoom="' . esc_attr($this->zoom) . '" data-default-lat="' . esc_attr($this->default_lat) . '" data-default-lng="' . esc_attr($this->default_long) . '"  ' . ($this->required ? 'data-carbon-required="true"': '') . '/>
		<div class="carbon-map">&nbsp;</div>
		';
	}

	function set_position($lat, $long, $zoom) {
		$this->default_lat = $lat;
		$this->default_long = $long;
		$this->zoom = $zoom;

		return $this;
	}

	function save() {
		$original_name = $this->get_name();
		$original_value = $this->get_value();

		$value = explode(',', $this->get_value());
		if ( count($value) >= 2 ) {
			$lat = floatval($value[0]);
			$lng = floatval($value[1]);
		} else {
			$lat = $lng = '';
		}

		$this->set_name($original_name . '_lat');
		$this->set_value($lat);
		$this->store->save($this);

		$this->set_name($original_name . '_lng');
		$this->set_value($lng);
		$this->store->save($this);

		$this->set_name($original_name);
		$this->set_value($original_value);

		return true;
	}

	function load() {
		$original_name = $this->get_name();

		$lat = $lng = '';

		$this->set_name($original_name . '_lat');
		$this->store->load($this);
		$lat = $this->get_value();


		$this->set_name($original_name . '_lng');
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
	function render() {
		echo 'Locate Address on the map: <input type="text" class="regular-text address" /><input type="button" class="address-search-btn button" value="Find">';
		echo parent::render();
	}
}

class Carbon_Field_Select extends Carbon_Field {
	protected $options = array();

	function add_options($options) {
	    $this->options = array_merge($this->options, $options);
	    return $this;
	}

    function render() {
    	if ( empty($this->options) ) {
    		echo '<em>no options</em>';
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

	function add_options($options) {
	    $this->options = array_merge($this->options, $options);
	    return $this;
	}

    function render() {
    	if ( empty($this->options) ) {
    		echo '<em>no options</em>';
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
		$this->help_text('If you need to add scripts to your header, you should enter them here.');

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
		$this->help_text('If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.');

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

		return '<h3>' . $label . '</h3>';
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

	function add_options($options) {
	    $this->options = array_merge($this->options, $options);
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
    		echo '<em>no options</em>';
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
					echo '<p>... <a href="#" class="carbon-set-showall">Show All Options</a></p>';
				}
			}
		}

 		echo '</div>';
	}
}

class Carbon_Field_Relationship extends Carbon_Field {
	protected $post_type = 'post';

    function render() {
    	if (!is_array($this->value)) {
    		$this->value = array($this->value);
    	}

		$posts = get_posts(array(
			'post_type' => $this->post_type,
			'posts_per_page' => 5
		));

		?>
		<div class="carbon-relationship" data-name="<?php echo $this->get_name() ?>[]">
			<div class="relationship-left">
				<table class="widefat">
					<thead>
						<tr>
							<th>
								<input type="text" placeholder="Search" />
							</th>
						</tr>
					</thead>
				</table>

				<ul>
					<?php foreach ($posts as $post): ?>
						<li>
							<a href="#" data-post_id="<?php echo $post->ID ?>">
								<?php echo $post->post_title ?>
							</a>
						</li>
					<?php endforeach ?>
				</ul>
			</div>

			<div class="relationship-right">
				<ul>
					<?php foreach ($this->value as $post_id): 
						$post = get_post($post_id);
					?>
						<li>
							<a href="#" data-post_id="<?php echo $post->ID ?>">
								<?php echo $post->post_title ?>
							</a>
							<input type="hidden" name="<?php echo $this->get_name() ?>[]" value="<?php echo $post->ID ?>" />
						</li>
					<?php endforeach ?>
				</ul>
			</div>
		</div>
		<?php
	}
}

class Carbon_Field_Attachment extends Carbon_Field_File {
	function render() {
		echo '<input id="' . $this->get_id() . '" type="hidden" name="' . $this->get_name() . '" value="' . $this->get_value() . '"  class="regular-text carbon-image-field" ' . ($this->required ? 'data-carbon-required="true"': '') . '/>';
		echo '<div class="cl"></div>';

		$has_image = false;
		
		// For image only
		$attachment = get_post($this->value);

		if ( !$attachment || $attachment->post_type != 'attachment' ) {
			echo '<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" height="100" class="carbon-view_image blank"/>';
			echo '<span class="carbon-attachment-title"></span><div class="cl"></div>';
			echo '<span class="carbon-attachment-url"></span><div class="cl"></div>';
		} else {
			$url = wp_get_attachment_url($attachment->ID);
			$attachment_thumbnail = wp_get_attachment_thumb_url($attachment->ID);

			if ( empty($attachment_thumbnail) ) {
				$attachment_thumbnail = wp_get_attachment_image_src($attachment->ID, array(100, 100), true);
				$attachment_thumbnail = $attachment_thumbnail[0];
			}

			echo '<img src="' . $attachment_thumbnail . '" alt="" height="100" class="carbon-view_image"/>';
			echo '<span class="carbon-attachment-title">' . $attachment->post_title . '</span><div class="cl"></div>';
			echo '<span class="carbon-attachment-url">' . $url . '</span><div class="cl"></div>';
			$has_image = true;
		}

		echo '<input class="carbon-file-remove button" type="button" value="Remove" ' . ($has_image ? '': 'style="display: none;"') . ' />';

		echo '<input id="c2_open_media' . str_replace('-', '_', $this->id) .  '" rel="media-upload.php?type=file&amp;carbon_type=attachment" type="button" class="button" value="Select Media" ' . ($has_image ? 'style="display: none;"': '') . '/>';

		echo '<div class="cl"></div>';
	}
}

class Carbon_Field_File extends Carbon_Field {
	/**
	 * Whether admin_head was attached for a file or image field
	 *
	 * @see admin_init()
	 * @var bool
	 */
	static $attached_media_library_hook = false; 

	function render() {
		echo '<input id="' . $this->get_id() . '" type="text" name="' . $this->get_name() . '" value="' . $this->get_value() . '"  class="regular-text carbon-file-field" ' . ($this->required ? 'data-carbon-required="true"': '') . '/>';
		echo '<input id="c2_open_media' . str_replace('-', '_', $this->id) .  '" rel="media-upload.php?type=file&amp;carbon_type=file" type="button" class="button" value="Select Media" />';
		
		// For image only
		if ( !empty($this->value) ) {
			echo '<br /><a href="' . $this->value . '" target="_blank" class="carbon-view_file">View File</a>';
		}
	}

	function admin_init() {
		add_action('admin_print_styles', array($this, 'add_correct_script_hooks'), 1);

		if ( !self::$attached_media_library_hook ) {
			self::$attached_media_library_hook = true;
			add_action('admin_head-media-upload-popup', array('Carbon_Field_File', 'admin_media_library_popup_head'));
		}
	}

	function add_correct_script_hooks() {
		wp_enqueue_script('utf8_decode_js_userialize', CARBON_PLUGIN_URL . '/js/utf8.decode.js.unserialize.js');
	}


	static function admin_media_library_popup_head() {
		if ( !isset($_GET['carbon_type']) || !in_array($_GET['carbon_type'], array('file', 'image', 'attachment')) ) {
			return;
		}
		?>
		<style type="text/css">
			#media-upload-header #sidemenu li#tab-gallery,
			#media-upload-header #sidemenu li#tab-type_url,
			#media-items .media-item a.toggle,
			#media-items .media-item tr.image-size,
			#media-items .media-item tr.align,
			#media-items .media-item tr.url,
			#media-items .media-item .slidetoggle {
				display: none !important;
			}

			#media-items { 
				padding-bottom: 25px;
			}

			#media-items .media-item { 
				min-height: 68px;
			}

			#media-items .media-item .filename.new {
				min-height: 0;
				padding: 27px 10px 10px;
				line-height: 15px;
			}

			#media-items .media-item .pinkynail {
				max-width: 64px;
				max-height: 64px;
				display: block !important;
			}

			#media-items .media-item  .carbon-select { 
				float: right; 
				margin: 23px 12px 0 10px; 
			}
	
			#media-upload .ml-submit {
				display: none !important;
			}
		</style>
		<script type="text/javascript">
			(function($) {
				function carbon_add_buttons() {
					// add buttons to media items
					$('#media-items .media-item:not(.carbon-active)').each(function(){
						var th = $(this), id;

						// needs attachment ID
						if( th.children('input[id*="type-of-"]').length == 0 ){ 
							return false; 
						}
						
						// add buttons only once
						th.addClass('carbon-active');
						
						// find attachment id
						id = th.children('input[id*="type-of-"]').attr('id').replace('type-of-', '');
						
						// Add select button
						th.find('.filename.new').before('<a href="' + id + '" data-post-id="' + id + '" class="button carbon-select">Select File</a>');
					});
				}

				$('#media-items .media-item a.carbon-select').live('click', function(){
					var id = $(this).data('post-id'),
						thumbnail = $(this).closest('.media-item').find('.pinkynail').attr('src'),
						carbon_field = self.parent.carbon_active_field;

					var data = {
						action: 'carbon_get_file_details',
						id: id
					};

					$.ajax({
						url: ajaxurl,
						data : data,
						cache: false,
						dataType: "json",
						success: function( json ) {
							// validate
							if(!json) {
								alert('Cannot select this file');
								return false;
							}

							// Image fields require a present thumbnail
							if(carbon_field.data('type') == 'Image' && !json.thumbnail) {
								alert('Cannot select this file');
								return false;
							} else if ( !json.thumbnail ) {
								json.thumbnail = thumbnail;
							};

							// update carbon_field
							if ( carbon_field.data('type') == 'Attachment' ) {
								carbon_field.find('input.regular-text').val( json.id ).trigger('change');
								carbon_field.find('.carbon-file-remove').show();
								carbon_field.find('.button:not(.carbon-file-remove)').hide();
								carbon_field.find('.carbon-attachment-title').text(json.title);
								carbon_field.find('.carbon-attachment-url').text(json.url);
							} else {
								carbon_field.find('input.regular-text').val( json.url ).trigger('change');
							}
				 			carbon_field.find('.carbon-view_image').attr( 'src', json.thumbnail ).removeClass('blank');
				 			carbon_field.find('.carbon-view_file').attr( 'href', json.url );
				 			
				 			// reset carbon_active_field and return false
				 			self.parent.carbon_active_field = null;
				 			self.parent.tb_remove();
						}
					});
					
					return false;
				});

				$(document).ready(function(){
					setTimeout(function(){
						carbon_add_buttons();

						// add `carbon_type` param to the filter form
						$('#filter').append('<input type="hidden" name="carbon_type" value="<?php echo $_GET['carbon_type'] ?>" />');
					}, 1);
				});

				<?php if(!isset($_GET['tab']) || $_GET['tab'] == 'type'): ?>
					setInterval(function(){
						carbon_add_buttons();
					}, 500);
				<?php endif; ?>

			})(jQuery);
		</script>
		<?php
	}

	static function carbon_get_file_details() {
		if ( empty($_GET['id']) ) {
			echo json_encode(array());
			exit;
		}

		$attachment_id = intval($_GET['id']);

		$attachment = get_post($attachment_id);
		$url = wp_get_attachment_url($attachment_id);
		$thumbnail = wp_get_attachment_image_src($attachment_id, 'thumbnail');

		$result = array(
			'id' => $attachment_id,
			'title' => $attachment->post_title,
			'url' => $url,
			'thumbnail' => $thumbnail[0],
		);

		echo json_encode($result);
		exit;
	}
}

class Carbon_Field_Image extends Carbon_Field_File {
	public $image_extensions = array('jpg', 'jpeg', 'gif', 'png', 'bmp');

	function render() {
		echo '<input id="' . $this->get_id() . '" type="text" name="' . $this->get_name() . '" value="' . $this->get_value() . '"  class="regular-text carbon-image-field" ' . ($this->required ? 'data-carbon-required="true"': '') . '/>';
		echo '<input id="c2_open_media' . str_replace('-', '_', $this->id) .  '" rel="media-upload.php?type=image&amp;carbon_type=image" type="button" class="button" value="Select Media" />';
		echo '<div class="cl"></div>';

		$has_image = false;
		
		// For image only
		if ( $this->value != '' && in_array(array_pop(explode('.', $this->value)), $this->image_extensions) ) {
			echo '<img src="' . $this->value . '" alt="" height="100" class="carbon-view_image"/>';
			$has_image = true;
		} else if ( !empty($this->value) ) {
			echo '</br><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" height="100" class="carbon-view_image blank"/><em>This is not a valid image!</em>';
			$has_image = true;
		} else {
			echo '<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" height="100" class="carbon-view_image blank"/>';
		}

		echo '<input class="carbon-file-remove button" type="button" value="Remove Image" ' . ($has_image ? '': 'style="display: none;"') . ' />';

		echo '<div class="cl"></div>';
	}
}

class Carbon_Field_Choose_Sidebar extends Carbon_Field_Select {
	public $enable_add_new = true; // Whether to allow the user to add new sidebars
	public $sidebar_options = array(
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<h2 class="widgettitle">',
		'after_title' => '</h2>',
	);

	function init() {
		$this->add_sidebar_opts_sidebars();
		
		// Setup the sidebars after all fields are registered
		add_action('carbon_after_register_fields', array($this, 'setup_sidebars'), 20);
	}

	function add_sidebar_opts_sidebars() {
		global $wp_registered_sidebars;
		$sidebars = array();

		foreach ($wp_registered_sidebars as $sidebar) {
			$sidebars[] = $sidebar['name'];
		}

		$options = array_merge($sidebars, $this->_get_sidebars());
		$options = array_combine($options, $options);

		$this->add_options($options);
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
			$this->options['new'] = "Add New";
		}

		return parent::render();
	}

	function setup_sidebars() {
		$sidebars = $this->_get_sidebars();
		foreach ($sidebars as $sidebar) {
			$associated_pages = get_posts(array(
				'post_type' => array('page'),
				'meta_query'=>array(
					array( 'key' => $this->name, 'value' => urlencode($sidebar))
				),
				'posts_per_page'=>-1,
			));

			if (count($associated_pages)) {
				$show_pages = 5;
				$assoicated_pages_titles = array();
				$i = 0;
				foreach ($associated_pages as $associated_page) {
					$assoicated_pages_titles[] = apply_filters('the_title', $associated_page->post_title);
					if ($i==$show_pages) {
						break;
					}
					$i++;
				}
				$msg = 'This sidebar is used on ' . implode(', ', $assoicated_pages_titles) . ' ';
				if (count($associated_pages) > $show_pages) {
					$msg .= ' and ' . count($associated_pages) - $show_pages . ' more pages';
				}
			} else {
				$msg = '';
			}

			$slug = strtolower(preg_replace('~-{2,}~', '', preg_replace('~[^\w]~', '-', $sidebar)));

			register_sidebar(array(
				'name' => $sidebar,
				'id' => $slug,
				'description' => $msg,
			    'before_widget' => $this->sidebar_options['before_widget'],
			    'after_widget' => $this->sidebar_options['after_widget'],
			    'before_title' => $this->sidebar_options['before_title'],
			    'after_title' => $this->sidebar_options['after_title'],
			));
		}
	}

	function _get_sidebars() {
		// TODO: Select all meta values directly
		$pages_with_sidebars = get_posts(array(
			'post_type' => array('page'),
			'meta_query' => array(
				array('key' => $this->name)
			),
			'posts_per_page' => -1,
		));

		$sidebars = array();
		foreach ($pages_with_sidebars as $page_with_sidebar) {
			$sidebar = get_post_meta($page_with_sidebar->ID, $this->name, 1);
			if ($sidebar) {
				$sidebars[$sidebar] = 1;
			}
		}

		$sidebars = array_keys($sidebars);

		return $sidebars;
	}
}


