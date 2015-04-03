<?php 

add_action('admin_print_scripts', array('Carbon_Container', 'admin_hook_scripts'));
add_action('admin_print_styles', array('Carbon_Container', 'admin_hook_styles'));

/**
 * Base container class. 
 * Defines the key container methods and their default implementations.
 *
 **/
abstract class Carbon_Container {
	/**
	 * List of registered unique panel identificators
	 *
	 * @see verify_unique_panel_id()
	 * @var array
	 */
	static $registered_panel_ids = array();

	/**
	 * List of registered unique field names
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	static protected $registered_field_names = array();

	/**
	 * List of containers created via factory that 
	 * should be initialized
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	static protected $init_containers = array();

	/**
	 * List of containers attached to the current page view
	 *
	 * @see _attach()
	 * @var array
	 */
	static protected $active_containers = array();

	/**
	 * List of fields attached to the current page view
	 *
	 * @see _attach()
	 * @var array
	 */
	static protected $active_fields = array();

	/**
	 * Stores all the container backbone templates
	 *
	 * @see factory()
	 * @see add_template()
	 * @var array
	 */
	protected $templates = array();

	/**
	 * List of default container settings
	 *
	 * @see init()
	 * @var array
	 */
	public $settings = array();

	/**
	 * Title of the container
	 *
	 * @var string
	 */
	public $title = '';

	/**
	 * Whether the container was setup
	 *
	 * @var bool
	 */
	public $setup_ready = false;

	/**
	 * List of notification messages to be displayed on the front-end
	 *
	 * @var array
	 */
	protected $notifications = array();

	/**
	 * List of error messages to be displayed on the front-end
	 *
	 * @var array
	 */
	protected $errors = array();

	/**
	 * List of container fields
	 *
	 * @see add_fields()
	 * @var array
	 */
	protected $fields = array();

	/**
	 * Container DataStore. Propagated to all container fields
	 *
	 * @see set_datastore()
	 * @see get_datastore()
	 * @var Carbon_DataStore
	 */
	protected $store;

	/**
	 * Create a new container of type $type and name $name and label $label.
	 *
	 * @param string $type
	 * @param string $name Human-readable name of the container
	 * @return object $container
	 **/
	static function factory($type, $name) {
		$type = str_replace(" ", '', ucwords(str_replace("_", ' ', $type)));

		$class = 'Carbon_Container_' . $type;

		if (!class_exists($class)) {
			throw new Carbon_Exception ('Unknown container "' . $type . '".');
		}

		$container = new $class($name);
		$container->type = $type;
		$container->add_template($type, array($container, 'template'));

		self::$init_containers[] = $container;

		return $container;
	}

	/**
	 * Init containers created via factory
	 *
	 * @return object
	 **/
	static function init_containers() {
		while (($container = array_shift(self::$init_containers))) {
			$container->init();
		}

		return $container;
	}

	/**
	 * Returns all the active containers created via factory
	 *
	 * @return array
	 **/
	static function get_active_containers() {
		return self::$active_containers;
	}

	/**
	 * Adds a container to the active containers array and triggers an action
	 *
	 * @return void
	 **/
	static function add_active_container($container) {
		self::$active_containers[] = $container;

		do_action('crb_container_activated', $container);
	}

	/**
	 * Returns all the active fields created via factory
	 *
	 * @return array
	 **/
	static function get_active_fields() {
		return self::$active_fields;
	}

	/**
	 * Adds a field to the active fields array and triggers an action
	 *
	 * @return void
	 **/
	static function add_active_field($field) {
		self::$active_fields[] = $field;

		if (method_exists($field, 'get_fields')) {
			$fields = $field->get_fields();

			foreach ($fields as $inner_field) {
				self::add_active_field($inner_field);
			}
		}

		do_action('crb_field_activated', $field);
	}

	/**
	 * Perform instance initialization after calling setup()
	 *
	 * @return void
	 **/
	abstract function init();

	/**
	 * Prints the main Underscore template
	 *
	 * @return void
	 **/
	abstract function template();

	function __construct($title) {
		$this->title = $title;
		$this->id = preg_replace('~\W~u', '', remove_accents($title));

		$this->verify_unique_panel_id($this->id);
	}

	/**
	 * Update container settings and begin initialization
	 *
	 * @see init()
	 * @param array $settings
	 * @return void
	 **/
	function setup($settings = array()) {
		if ( $this->setup_ready ) {
			throw new Carbon_Exception ('Panel "' . $this->title . '" already setup');
		}

		$this->check_setup_settings($settings);

		$this->settings = array_merge($this->settings, $settings);

		foreach ($this->settings as $key => $value) {
			if ( is_null($value) ) {
				unset($this->settings[$key]);
			}
		}

		$this->setup_ready = true;

		return $this;
	}

	function check_setup_settings(&$settings = array()) {
		$invalid_settings = array_diff_key($settings, $this->settings);
		if ( !empty($invalid_settings) ) {
			throw new Carbon_Exception ('Invalid settings supplied to setup(): "' . implode('", "', array_keys($invalid_settings)) . '"');
		}
	}

	/**
	 * Called first as part of the container save procedure.
	 * Responsible for checking the request validity and 
	 * calling the container-specific save() method
	 *
	 * @see save()
	 * @see is_valid_save()
	 * @return void
	 **/
	function _save() {
		$param = func_get_args();
		if ( call_user_func_array(array($this, 'is_valid_save'), $param) ) {
			call_user_func_array(array($this, 'save'), $param);
		}
	}

	/**
	 * Load submitted data and save each field in the container
	 *
	 * @see is_valid_save()
	 * @return void
	 **/
	function save($user_data) {
		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	function is_valid_save() {
		return false;
	}

	/**
	 * Load the value for each field in the container.
	 * Could be used internally during container rendering
	 *
	 * @return void
	 **/
	function load() {
		foreach ($this->fields as $field) {
			$field->load();
		}
	}
	

	/**
	 * Called first as part of the container attachment procedure.
	 * Responsible for checking  it's ok to attach the container 
	 * and if it is, calling the container-specific attach() method
	 *
	 * @see attach()
	 * @see is_valid_attach()
	 * @return void
	 **/
	function _attach() {
		$param = func_get_args();
		if (call_user_func_array(array($this, 'is_valid_attach'), $param)) {
			call_user_func_array(array($this, 'attach'), $param);

			if (call_user_func_array(array($this, 'is_active'), $param)) {
				self::add_active_container($this);

				$fields = $this->get_fields(); 
				foreach ($fields as $field) {
					self::add_active_field($field);
				}
			}
		}
	}

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
	 * Attach the container rendering and helping methods 
	 * to concrete WordPress Action hooks
	 *
	 * @return void
	 **/
	function attach() {}

	/**
	 * Perform checks whether the container is active for current request
	 *
	 * @return bool True if the container is active
	 **/
	function is_active() {
		return $this->is_valid_attach();
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	function is_valid_attach() {
		return true;
	}

	/**
	 * Revert the result of attach()
	 *
	 * @return void
	 **/
	function detach() {
		$this->drop_unique_panel_id($this->id);

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_name($field->get_name());
		}
	}

	/**
	 * Append array of fields to the current fields set. All items of the array
	 * must be instances of Carbon_Field and their names should be unique for all
	 * Carbon containers.
	 * If a field does not have DataStore already, the container data store is 
	 * assigned to them instead.
	 *
	 * @param array $fields
	 * @return void
	 **/
	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'Carbon_Field') ) {
				throw new Carbon_Exception('Object must be of type Carbon_Field');
			}

			$this->verify_unique_field_name($field->get_name());

			$field->set_context($this->type);
			if ( !$field->get_datastore() ) {
				$field->set_datastore($this->store);
			}
		}

		$this->fields = array_merge($this->fields, $fields);

		return $this;
	}

	/**
	 * Returns the private container array of fields.
	 * Use only if you are completely aware of what you are doing.
	 *
	 * @return array
	 **/
	function get_fields() {
		return $this->fields;
	}

	/**
	 * Perform a check whether the current container has fields
	 *
	 * @return bool
	 **/
	function has_fields() {
		return (bool) $this->fields;
	}

	/**
	 * Perform checks whether there is a container registered with identificator $id
	 *
	 * @return void
	 */
	function verify_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			throw new Carbon_Exception ('Panel ID "' . $id .'" already registered');
		}

		self::$registered_panel_ids[] = $id;
	}


	/**
	 * Remove container identificator $id from the list of unique container ids
	 *
	 * @param string $id
	 * @return void
	 **/
	function drop_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			unset(self::$registered_panel_ids[ array_search($id, self::$registered_panel_ids) ]);
		}
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 * @return void
	 **/
	function verify_unique_field_name($name) {
		if ( in_array($name, self::$registered_field_names) ) {
			throw new Carbon_Exception ('Field name "' . $name . '" already registered');
		}

		self::$registered_field_names[] = $name;
	}

	/**
	 * Remove field name $name from the list of unique field names
	 *
	 * @param string $name
	 * @return void
	 **/
	function drop_unique_field_name($name) {
		$index = array_search($name, self::$registered_field_names);
		if ( $index !== false ) {
			unset(self::$registered_field_names[$index]);
		}
	}

	/**
	 * Assign DataStore instance for use by the container fields
	 *
	 * @param object $store
	 * @return void
	 **/
	function set_datastore(Carbon_DataStore $store) {
		$this->store = $store;

		foreach ($this->fields as $field) {
			$field->set_datastore($this->store);
		}
	}

	/**
	 * Return the DataStore instance used by container fields
	 *
	 * @return object $store
	 **/
	function get_datastore() {
		return $this->store;
	}

	/**
	 * Return WordPress nonce name used to identify the current container instance
	 *
	 * @return string
	 **/
	function get_nonce_name() {
		return 'carbon_panel_' . $this->id . '_nonce';
	}

	/**
	 * Return WordPress nonce field
	 *
	 * @return string
	 **/
	function get_nonce_field() {
		return wp_nonce_field($this->get_nonce_name(), $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ false);
	}

	/**
	 * Returns an array that holds the container data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json($load) {
		$container_data = array(
			'id' => $this->id,
			'type' => $this->type,
			'title' => $this->title,
			'settings' => $this->settings,
			'fields' => array(),
		);

		$fields = $this->get_fields();
		foreach ($fields as $field) {
			$field_data = $field->to_json($load);
			$container_data['fields'][] = $field_data;
		}

		return $container_data;
	}

	static function admin_hook_scripts() {
		crb_enqueue_script('carbon-containers', CARBON_PLUGIN_URL . '/js/containers.js', array('carbon-app'));

		wp_localize_script('carbon-containers', 'carbon_containers_l10n',
			array(
				'please_fill_the_required_fields' => __('Please fill out all required fields highlighted below.', 'crb'),
				'changes_made_save_alert' => __('The changes you made will be lost if you navigate away from this page.', 'crb'),
			)
		);
	}

	static function admin_hook_styles() {
		crb_enqueue_style('carbon-main', CARBON_PLUGIN_URL . '/css/main.css');
	}

} // END Carbon_Container 

