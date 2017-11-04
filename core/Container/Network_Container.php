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
}
