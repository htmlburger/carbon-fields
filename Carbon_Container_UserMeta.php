<?php

class Carbon_Container_UserMeta extends Carbon_Container {
	protected $user_id;

	public $settings = array(
		'show_on' => array(
			'role' => array()
		)
	);

	function __construct($title) {
		parent::__construct($title);

		if ( !$this->get_datastore() ) {
			$this->set_datastore(new Carbon_DataStore_UserMeta());
		}
	}

	/**
	 * Bind attach() and save() to the appropriate WordPress actions.
	 *
	 * @return void
	 **/
	function init() {
		add_action('admin_init', array($this, '_attach'));
		add_action('profile_update', array(&$this, '_save'), 10, 1);
	}

	function save($user_id) {
		// Unhook action to garantee single save
		remove_action('profile_update', array(&$this, '_save'));

		$this->set_user_id($user_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function is_valid_save($user_id = 0) {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return false;
		} else if ( !current_user_can('edit_users') ) {
			return false;
		}

		return $this->is_valid_save_conditions($user_id);
	}

	function is_valid_save_conditions($user_id) {
		$valid = true;
		$user = get_userdata($user_id);

		if ( empty($user->roles) ) {
			return;
		}

		// Check user role
		if ( !empty($this->settings['show_on']['role']) ) {
			$allowed_roles = (array) $this->settings['show_on']['role'];
			if ( !in_array($user->roles[0], $allowed_roles) ) {
				$valid = false;
			}
		}
		
		return $valid;
	}

	function show_on_user_role($role) {
		$this->settings['show_on']['role'] = (array) $role;

		return $this;
	}

	function attach() {
		add_action('show_user_profile', array(&$this, 'render'), 10, 1);
		add_action('edit_user_profile', array(&$this, 'render'), 10, 1);
	}

	function is_valid_attach() {
		if ( !current_user_can('edit_users') ) {
			return false;
		}

		return true;
	}

	function render($user_profile = null, $a=null, $b=null) {
		if ( is_null($user_profile) ) {
			return;
		}

		$this->set_user_id( $user_profile->ID );

		$container_tag_class_name = get_class($this);
		$container_type = 'UserMeta';
		$container_options = array('show_on' => $this->settings['show_on']);
		$profile_role = $user_profile->roles[0];

		include dirname(__FILE__) . '/admin-templates/container-user-meta.php';
	}

	function set_user_id($user_id) {
		$this->user_id = $user_id;
		$this->store->set_id($user_id);
	}
}

