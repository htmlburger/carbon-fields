<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class User_Meta_Container extends Container {
	protected $user_id;

	public $settings = array();

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'user_meta' ), $this->has_default_datastore() );
		}

		if ( apply_filters( 'carbon_fields_' . $type . '_container_admin_only_access', true, $title, $this ) ) {
			$this->where( 'current_user_capability', '=', 'manage_options' );
		}
	}

	/**
	 * Bind attach() and save() to the appropriate WordPress actions.
	 */
	public function init() {
		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'profile_update', array( $this, '_save' ), 10, 1 );
		add_action( 'user_register', array( $this, '_save' ), 10, 1 );
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		if ( ! $this->is_profile_page() ) {
			return false;
		}

		if ( ! $this->verified_nonce_in_request() ) {
			return false;
		}

		$params = func_get_args();
		return $this->is_valid_attach_for_object( $params[0] );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $user_id ID of the user against which save() is ran
	 */
	public function save( $user_id = null ) {
		// Unhook action to garantee single save
		remove_action( 'profile_update', array( $this, '_save' ) );

		$this->set_user_id( $user_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( stripslashes_deep( $_POST ) );
			$field->save();
		}

		do_action( 'carbon_fields_user_meta_container_saved', $user_id, $this );
	}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		global $pagenow;

		$input = stripslashes_deep( $_GET );

		$user_id = 0;
		if ( $pagenow === 'profile.php' ) {
			$user_id = get_current_user_id();
		}
		if ( isset( $input['user_id'] ) ) {
			$user_id = intval( $input['user_id'] );
		}
		$user = get_userdata( $user_id );

		$environment = array(
			'user_id' => $user ? intval( $user->ID ) : 0,
			'user' => $user ? $user : null,
			'roles' => $user ? $user->roles : array(),
		);
		return $environment;
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	public function is_valid_attach_for_request() {
		if ( ! $this->is_profile_page() ) {
			return false;
		}

		return $this->static_conditions_pass();
	}

	/**
	 * Get environment array for object id
	 *
	 * @return array
	 */
	protected function get_environment_for_object( $object_id ) {
		$user = get_userdata( $object_id );
		$environment = array(
			'user_id' => intval( $user->ID ),
			'user' => $user,
			'roles' => $user->roles,
		);
		return $environment;
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		$user = get_userdata( $object_id );

		if ( ! $user  ) {
			return false;
		}

		return $this->all_conditions_pass( intval( $user->ID ) );
	}

	/**
	 * Add the container to the user
	 */
	public function attach() {
		add_action( 'show_user_profile', array( $this, 'render' ), 10, 1 );
		add_action( 'edit_user_profile', array( $this, 'render' ), 10, 1 );
		add_action( 'user_new_form', array( $this, 'render' ), 10, 1 );
	}

	/**
	 * Whether we're on the user profile page
	 */
	protected function is_profile_page() {
		global $pagenow;

		return $pagenow === 'profile.php' || $pagenow === 'user-new.php' || $pagenow === 'user-edit.php';
	}

	/**
	 * Output the container markup
	 */
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
	 */
	protected function set_user_id( $user_id ) {
		$this->user_id = $user_id;
		$this->get_datastore()->set_object_id( $user_id );

		foreach ( $this->fields as $field ) {
			$datastore = $field->get_datastore();
			if ( $datastore->get_object_id() === 0 ) {
				$datastore->set_object_id( $user_id );
			}
		}
	}

	/**
	 * Show the container only on users who have the $role role.
	 *
	 * @deprecated
	 * @param string|array $role
	 * @return object $this
	 */
	public function show_on_user_role( $role ) {
		$roles = is_array( $role ) ? $role : array( $role );
		$this->where( 'user_role', 'IN', $roles );
		return $this;
	}
}
