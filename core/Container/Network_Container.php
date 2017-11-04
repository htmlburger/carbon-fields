<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Theme options container class.
 */
class Network_Container extends Theme_Options_Container {
	/**
	 * ID of the site the container is working with
	 *
	 * @see init()
	 * @var int
	 */
	protected $site_id;

	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		if( !is_multisite() ) {
			Incorrect_Syntax_Exception::raise( 'The ' . $title. ' is unavailable because your site is not multisite. ' );
			return ;
		}

		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		$this->set_datastore( Datastore::make( 'network' ), $this->has_default_datastore() );

		$this->set_site_id( SITE_ID_CURRENT_SITE );
	}

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

	public function set_site_id( $id ) {
		if( $this->site_exists( $id ) ) {
			$this->site_id = $id;
		}

		$this->datastore->set_object_id( $this->get_site_id() );

		return $this;
	}

	protected function get_site_id() {
		return $this->site_id;
	} 

	protected function site_exists( $id ) {
		return ( bool ) get_blog_status( $id, 'domain' );
	}
}
