<?php

namespace Carbon_Fields\Libraries\Sidebar_Manager;

/**
 * This class is responsible for handling custom sidebars.
 */
class Sidebar_Manager {

	/**
	 * Register actions, filters, etc...
	 */
	public function boot() {
		// Register the custom sidebars
		add_action( 'widgets_init', array( $this, 'register_sidebars' ), 100 );

		// Enqueue the UI scripts on the widgets page
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		// Set the default options
		if ( function_exists( 'crb_get_default_sidebar_options' ) ) {
			add_filter( 'carbon_fields_sidebar_default_options', 'crb_get_default_sidebar_options', -1 );
		}

		// Ajax listeners
		add_action( 'wp_ajax_carbon_fields_add_sidebar', array( $this, 'action_handler' ) );
		add_action( 'wp_ajax_carbon_fields_remove_sidebar', array( $this, 'action_handler' ) );
	}

	/**
	 * Handle action requests.
	 */
	public function action_handler() {
		$response = array(
			'success' => false,
			'error' => null,
			'errorCode' => null,
			'data' => null,
		);

		$input = stripslashes_deep( $_POST );
		$action = isset( $input['action'] ) ? $input['action'] : '';

		$result = $this->execute_action( $action, $input );

		if ( is_wp_error( $result ) ) {
			$response['success'] = false;
			$response['error'] = $result->get_error_message();
			$response['errorCode'] = $result->get_error_code();
		} else {
			$response['success'] = true;
			$response['data'] = $result;
		}

		wp_send_json( $response );
		exit;
	}

	/**
	 * Execute an action
	 *
	 * @param string $action
	 * @param array $input
	 * @return mixed
	 */
	public function execute_action( $action, $input ) {
		$name = isset( $input['name'] ) ? $input['name'] : '';
		if ( empty( $name ) ) {
			return new \WP_Error( 'name-missing', __( 'Please enter a name for the sidebar.', 'carbon-fields' ) );
		}

		$result = new \WP_Error( 'unknown-action', __( 'Unknown action attempted.', 'carbon-fields' ) );
		switch ( $action ) {
			case 'carbon_fields_add_sidebar':
				$result = $this->add_sidebar( $name );
				break;

			case 'carbon_fields_remove_sidebar':
				$result = $this->remove_sidebar( $name );
				break;
		}

		return $result;
	}

	/**
	 * Add a new custom sidebar.
	 *
	 * @see Sidebar_Manager::register_sidebars()
	 * @param string $id Sidebar ID
	 * @param string $name Sidebar Name
	 * @return bool|WP_Error
	 */
	public function add_sidebar( $name, $id = '' ) {
		$registered_sidebars = $this->get_sidebars();
		$id = $id ? $id : $name;

		// Sanitize the sidebar ID the same way as dynamic_sidebar()
		$id = sanitize_title( $id );

		if ( isset( $registered_sidebars[ $id ] ) ) {
			return new \WP_Error( 'sidebar-exists', __( 'Sidebar with the same ID is already registered.', 'carbon-fields' ) );
		}

		$registered_sidebars[ $id ] = array(
			'id' => $id,
			'name' => $name,
		);

		$success = update_option( 'carbon_custom_sidebars', $registered_sidebars );
		if ( ! $success ) {
			return new \WP_Error( 'update-failed', __( 'Failed to update option storing your custom sidebars. Please contact support.', 'carbon-fields' ) );
		}

		return array(
			'id' => $id,
			'name' => $name,
		);
	}

	/**
	 * Remove a custom sidebar by ID.
	 *
	 * @see Sidebar_Manager::register_sidebars()
	 * @param string $id Sidebar ID
	 * @return bool|WP_Error
	 */
	public function remove_sidebar( $id ) {
		$registered_sidebars = $this->get_sidebars();

		// Sanitize the sidebar ID the same way as dynamic_sidebar()
		$id = sanitize_title( $id );

		if ( isset( $registered_sidebars[ $id ] ) ) {
			unset( $registered_sidebars[ $id ] );
		} else {
			return new \WP_Error( 'sidebar-not-found', __( 'Sidebar not found.', 'carbon-fields' ) );
		}

		$success = update_option( 'carbon_custom_sidebars', $registered_sidebars );
		if ( ! $success ) {
			return new \WP_Error( 'update-failed', __( 'Failed to update option storing your custom sidebars. Please contact support.', 'carbon-fields' ) );
		}

		return $success;
	}

	/**
	 * Get all the registered custom sidebars.
	 *
	 * @return array
	 */
	public function get_sidebars() {
		return apply_filters( 'carbon_fields_sidebars', get_option( 'carbon_custom_sidebars', array() ) );
	}

	/**
	 * Register the custom sidebars.
	 */
	public function register_sidebars() {
		$registered_sidebars = $this->get_sidebars();
		$default_options = apply_filters( 'carbon_fields_sidebar_default_options', array() );

		foreach ( $registered_sidebars as $id => $options ) {
			$options['class'] = 'carbon-sidebar';
			$options = wp_parse_args( $options, $default_options );
			$options = apply_filters( 'carbon_fields_sidebar_options', $options, $id );

			register_sidebar( $options );
		}
	}

	/**
	 * Enqueue the UI scripts.
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'carbon-sidebar-manager', \Carbon_Fields\URL . '/core/Libraries/Sidebar_Manager/assets/css/app.css', array(), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-sidebar-manager', \Carbon_Fields\URL . '/core/Libraries/Sidebar_Manager/assets/js/app.js', array(), \Carbon_Fields\VERSION );
		wp_localize_script( 'carbon-sidebar-manager', 'crbSidebarl10n',
			array(
				'add_sidebar' => __( 'Add Sidebar', 'carbon-fields' ),
				'enter_name_of_new_sidebar' => __( 'Please enter the name of the new sidebar:', 'carbon-fields' ),
				'remove_sidebar_confirmation' => __( 'Are you sure you wish to remove this sidebar?', 'carbon-fields' ),
			)
		);
	}
}
