<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Theme options container class.
 */
class Network_Container extends Theme_Options_Container {
	public function init() {
		$registered = $this->register_page();
		if ( $registered ) {
			add_action( 'network_admin_menu', array( $this, '_attach' ) );
		}
	}

	public function render() {
		$input = stripslashes_deep( $_GET );
		$request_settings_updated = isset( $input['settings-updated'] ) ? $input['settings-updated'] : '';
		if ( $request_settings_updated === 'true' ) {
			$this->notifications[] = __( 'Settings saved.', 'carbon-fields' );
		}

		include \Carbon_Fields\DIR . '/templates/Container/network.php';
	}
}
