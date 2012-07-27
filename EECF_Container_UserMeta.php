<?php

class EECF_Container_UserMeta extends EECF_Container {
	protected $user_id;

	public $settings = array();

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_UserMeta());
		}

		add_action('admin_init', array($this, '_attach'));
		add_action('profile_update', array(&$this, '_save'), 10, 1);
	}

	function save($user_id) {
		$this->set_user_id($user_id);

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
		add_action('show_user_profile', array(&$this, 'render'), 10, 1);
		add_action('edit_user_profile', array(&$this, 'render'), 10, 1);
	}

	function render($user_profile = null) {
		if ( is_null($user_profile) ) {
			return;
		}

		$this->set_user_id( $user_profile->ID );

		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-user-meta.php';
	}

	function set_user_id($user_id) {
		$this->user_id = $user_id;
		$this->store->set_user_id($user_id);
	}
}

