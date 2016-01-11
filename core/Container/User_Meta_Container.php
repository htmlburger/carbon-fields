<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\User_Meta_Datastore;

class User_Meta_Container extends Container {
	protected $user_id;

	public $settings = array(
		'show_on' => array(
			'role' => array()
		)
	);

	/**
	 * Create a new user meta container
	 *
	 * @param string $title Unique title of the container
	 **/
	public function __construct( $title ) {
		parent::__construct( $title );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( new User_Meta_Datastore() );
		}
	}

	/**
	 * Bind attach() and save() to the appropriate WordPress actions.
	 **/
	public function init() {
		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'profile_update', array( $this, '_save' ), 10, 1 );
		add_action( 'user_register', array( $this, '_save' ), 10, 1 );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $user_id ID of the user against which save() is ran
	 **/
	public function save( $user_id ) {
		// Unhook action to garantee single save
		remove_action( 'profile_update', array( $this, '_save' ) );

		$this->set_user_id( $user_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input();
			$field->save();
		}

		do_action( 'carbon_after_save_user_meta', $user_id );
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	public function is_valid_save( $user_id = 0 ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return false;
		} else if ( ! isset( $_REQUEST[ $this->get_nonce_name() ] ) || ! wp_verify_nonce( $_REQUEST[ $this->get_nonce_name() ], $this->get_nonce_name() ) ) {
			return false;
		} else if ( ! $this->is_valid_attach() ) {
			return false;
		}

		return $this->is_valid_save_conditions( $user_id );
	}

	/**
	 * Perform checks whether the current save() request is valid
	 *
	 * @param int $user_id ID of the user against which save() is ran
	 * @return bool
	 **/
	public function is_valid_save_conditions( $user_id ) {
		$valid = true;
		$user = get_userdata( $user_id );

		if ( empty( $user->roles ) ) {
			return;
		}

		// Check user role
		if ( ! empty( $this->settings['show_on']['role'] ) ) {
			$allowed_roles = (array) $this->settings['show_on']['role'];

			// array_shift removed the returned role from the $user_profile->roles
			// $roles_to_shift prevents changing of the $user_profile->roles variable
			$roles_to_shift = $user->roles;
			$profile_role = array_shift( $roles_to_shift );
			if ( ! in_array( $profile_role, $allowed_roles ) ) {
				$valid = false;
			}
		}

		return $valid;
	}

	/**
	 * Show the container only on users who have the $role role.
	 *
	 * @param string $role
	 * @return object $this
	 **/
	public function show_on_user_role( $role ) {
		$this->settings['show_on']['role'] = (array) $role;

		return $this;
	}

	/**
	 * Add the container to the user
	 **/
	public function attach() {
		add_action( 'show_user_profile', array( $this, 'render' ), 10, 1 );
		add_action( 'edit_user_profile', array( $this, 'render' ), 10, 1 );
		add_action( 'user_new_form', array( $this, 'render' ), 10, 1 );
	}

	/**
	 * Whether we're on the user profile page
	 **/
	public function is_profile_page() {
		global $pagenow;

		return $pagenow === 'profile.php' || $pagenow === 'user-new.php' || $pagenow === 'user-edit.php';
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach() {
		if ( ! current_user_can( 'edit_users' ) || ! $this->is_profile_page() ) {
			return false;
		}

		return true;
	}

	/**
	 * Output the container markup
	 **/
	public function render( $user_profile = null ) {
		$profile_role = '';

		if ( is_object( $user_profile ) ) {
			$this->set_user_id( $user_profile->ID );

			// array_shift removed the returned role from the $user_profile->roles
			// $roles_to_shift prevents changing of the $user_profile->roles variable
			$roles_to_shift = $user_profile->roles;
			$profile_role = array_shift( $roles_to_shift );
		}

		include \Carbon_Fields\DIR . '/templates/Container/user_meta.php';
	}

	/**
	 * Set the user ID the container will operate with.
	 *
	 * @param int $user_id
	 **/
	public function set_user_id( $user_id ) {
		$this->user_id = $user_id;
		$this->store->set_id( $user_id );
	}
}
