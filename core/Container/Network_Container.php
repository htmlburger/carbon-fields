<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Theme options container class.
 */
class Network_Container extends Theme_Options_Container {
	/**
	 * ID of the site the container is operating with
	 *
	 * @see init()
	 * @var int
	 */
	protected $site_id;

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! is_multisite() ) {
			Incorrect_Syntax_Exception::raise( 'The "' . $title . '" container will not be available because your site is not a multisite.' );
			return;
		}

		$this->set_datastore( Datastore::make( 'network' ), $this->has_default_datastore() );
		$this->set_site_id( SITE_ID_CURRENT_SITE );
	}

	/**
	 * {@inheritDoc}
	 */
	public function init() {
		$registered = $this->register_page();
		if ( $registered ) {
			add_action( 'network_admin_menu', array( $this, '_attach' ) );
		}
	}

	/**
	 * Check if a site exists by id
	 *
	 * @param  integer $id
	 * @return boolean
	 */
	protected function site_exists( $id ) {
		if ( ! function_exists( 'get_blog_status' ) ) {
			return false;
		}

		$blog_domain = get_blog_status( $id, 'domain' );
		return ! empty( $blog_domain );
	}

	/**
	 * Get the site ID the container is operating with.
	 *
	 * @return integer
	 */
	public function get_site_id() {
		return $this->site_id;
	}

	/**
	 * Set the site ID the container will operate with.
	 *
	 * @param  int  $id
	 * @return self $this
	 */
	public function set_site_id( $id ) {
		$id = intval( $id );

		if ( ! $this->site_exists( $id ) ) {
			Incorrect_Syntax_Exception::raise( 'The specified site id #' . $id . ' does not exist' );
			return $this;
		}

		$this->site_id = $id;
		$this->datastore->set_object_id( $this->get_site_id() );

		return $this;
	}
}
