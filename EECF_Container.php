<?php 

abstract class EECF_Container {
	static $registered_panel_ids = array();
	public $settings = array();
	public $title = '';

	protected $fields = array();
	protected $store;

	abstract function init();
	abstract function render();

	function __construct($title) {
		$this->title = $title;
		$this->id = preg_replace('~\W~', '', $title);

		$this->verify_unique_panel_id($this->id);
	}

	function setup($settings = array()) {
		$this->settings = array_merge($this->settings, $settings);
		$this->init();
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

	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new Exception('Object must be of type EECF_Field');
			}

			$this->verify_unique_field_name($field->get_name());

			if ( !$field->get_datastore() ) {
				$field->set_datastore($this->store);
			}
		}

		$this->fields = array_merge($this->fields, $fields);
	}

	function verify_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			throw new Exception ('Panel ID "' . $id .'" already registered');
		}

		self::$registered_panel_ids[] = $id;
	}

	function verify_unique_field_name($name) {
		static $registered_field_names = array();

		if ( in_array($name, $registered_field_names) ) {
			throw new Exception ('Field name "' . $name . '" already registered');
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

}

class EECF_Container_CustomFields extends EECF_Container {
	protected $post_id;

	public $settings = array(
		'post_type'=>'post',
		'panel_context'=>'normal',
		'panel_priority'=>'high',
	);

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_CustomField());
		}

		if ( isset($_GET['post']) ) {
			$this->set_post_id($_GET['post']);
		}

	    add_action('admin_init', array($this, 'attach'));
		add_action('save_post', array($this, '_save'));
	}

	function save($post_id) {
		// Unhook action to garantee single save
		remove_action('save_post', array($this, 'save'));

		$this->set_post_id($post_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function is_valid_save() {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return false;
		}

		return true;
	}

	function attach() {
		add_meta_box(
	    	$this->id, 
	    	$this->title, 
	    	array($this, 'render'), 
	    	$this->settings['post_type'], 
	    	$this->settings['panel_context'],
	    	$this->settings['panel_priority']
	    );
	}

	function render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-custom-fields.php';
	}

	function set_post_id($post_id) {
		$this->post_id = $post_id;
		$this->store->set_post_id($post_id);
	}
}

