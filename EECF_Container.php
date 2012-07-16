<?php 

class EECF_Container {
	static $registered_panel_ids = array();
	public $settings = array();
	public $title = '';

	protected $fields = array();
	protected $store;

	function __construct($title) {
		$this->title = $title;
		$this->id = preg_replace('~\W~', '', $title);

		$this->verify_unique_panel_id($this->id);
	}

	function setup($settings = array()) {
		$this->settings = array_merge($this->settings, $settings);
		$this->init();
	}

	function render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/panel.php';
	}

	function save() {
		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new Exception('Object must be of type EECF_Field');
			}

			if ( !$field->get_datastore() ) {
				$field->set_datastore($this->store);
			}
		}

		$this->fields = array_merge($this->fields, $fields);
	}

	function verify_unique_panel_id($id) {
		if ( in_array($id, self::$registered_panel_ids) ) {
			throw new Exception ('Panel ID already registered');
		}

		self::$registered_panel_ids[] = $id;
	}

	function get_nonce_name() {
		return 'eecf_panel_' . $this->id . '_nonce';
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
		$this->store = new EECF_DataStore_CustomField();

		if ( isset($_GET['post']) ) {
			$this->set_post_id($_GET['post']);
		}

	    add_action('admin_init', array($this, 'attach'));
		add_action('save_post', array($this, 'save'));
	}

	function save($post_id) {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return;
		} else if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return;
		}

		$this->set_post_id($post_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
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

	function set_post_id($post_id) {
		$this->post_id = $post_id;
		$this->store->set_post_id($post_id);
	}

	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;

		foreach ($this->fields as $field) {
			$field->set_datastore($this->store);
		}
	}
}

