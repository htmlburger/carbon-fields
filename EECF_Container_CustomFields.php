<?php

class EECF_Container_CustomFields extends EECF_Container {
	static protected $registered_field_names;
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
	
	function detach() {
		parent::detach();

	    remove_action('admin_init', array($this, 'attach'));
		remove_action('save_post', array($this, '_save'));

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_id($field->get_name());
		}
	}

	function render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-custom-fields.php';
	}

	function set_post_id($post_id) {
		$this->post_id = $post_id;
		$this->store->set_post_id($post_id);
	}

	function verify_unique_field_name($name) {
		if ( empty($this->settings['post_type']) ) {
			throw new EECF_Exception ('Panel instance is not setup correctly (missing post type)');
		}

		if ( !isset(self::$registered_field_names[$this->settings['post_type']]) ) {
			self::$registered_field_names[$this->settings['post_type']] = array();
		}

		if ( in_array($name, self::$registered_field_names[$this->settings['post_type']]) ) {
			throw new EECF_Exception ('Field name "' . $name . '" already registered');
		}

		self::$registered_field_names[$this->settings['post_type']][] = $name;
	}

	function drop_unique_field_id($name) {
		$index = array_search($name, self::$registered_field_names[$this->settings['post_type']]);
		if ( $index !== false ) {
			unset(self::$registered_field_names[$this->settings['post_type']][$index]);
		}
	}
}

