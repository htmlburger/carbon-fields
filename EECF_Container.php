<?php 

add_action('admin_print_scripts', array('EECF_Container', 'admin_hook_scripts'));
add_action('admin_print_styles', array('EECF_Container', 'admin_hook_styles'));

abstract class EECF_Container {
	static $registered_panel_ids = array();
	public $settings = array();
	public $title = '';
	
	protected $notifications = array();
	protected $errors = array();

	protected $fields = array();
	protected $store;

	abstract function init();
	abstract function render();

	function __construct($title) {
		$this->title = $title;
		$this->id = preg_replace('~\W~', '', $title);

		$this->verify_unique_panel_id($this->id);
	}

	function __destruct() {
		$this->detach();
	}

	function setup($settings = array()) {
		$this->settings = array_merge($this->settings, $settings);
		$this->init();

		return $this;
	}

	function _save() {
		if ( $this->is_valid_save() ) {
			call_user_func_array(array($this, 'save'), func_get_args());
		}
	}

	function save() {
		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function is_valid_save() {
		return false;
	}

	function load() {
		foreach ($this->fields as $field) {
			$field->load();
		}
	}
	
	function detach() {
		$this->drop_unique_panel_id($this->id);
	}

	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new EECF_Exception('Object must be of type EECF_Field');
			}

			$this->verify_unique_field_name($field->get_name());

			if ( !$field->get_datastore() ) {
				$field->set_datastore($this->store);
			}
		}

		$this->fields = array_merge($this->fields, $fields);
	}

	function get_fields() {
		return $this->fields;
	}

	function verify_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			throw new EECF_Exception ('Panel ID "' . $id .'" already registered');
		}

		self::$registered_panel_ids[] = $id;
	}

	function drop_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			unset(self::$registered_panel_ids[ array_search($id, self::$registered_panel_ids) ]);
		}
	}

	function verify_unique_field_name($name) {
		static $registered_field_names = array();

		if ( in_array($name, $registered_field_names) ) {
			throw new EECF_Exception ('Field name "' . $name . '" already registered');
		}

		$registered_field_names[] = $name;
	}

	function get_nonce_name() {
		return 'eecf_panel_' . $this->id . '_nonce';
	}

	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;

		foreach ($this->fields as $field) {
			$field->set_datastore($this->store);
		}
	}

	function get_datastore() {
		return $this->store;
	}

	static function admin_hook_scripts() {
		wp_enqueue_script('eecf_fields', EECF_PLUGIN_URL . '/js/containers.js');
	}

	static function admin_hook_styles() {
		wp_enqueue_style('eecf_fields', EECF_PLUGIN_URL . '/css/containers.css');
	}

}

