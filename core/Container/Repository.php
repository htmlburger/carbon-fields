<?php

namespace Carbon_Fields\Container;

use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Keeps track of all instantiated containers
 */
class Repository {
	/**
	 * List of registered unique panel identificator ids
	 *
	 * @see get_unique_panel_id()
	 * @see register_unique_panel_id()
	 * @see unregister_unique_panel_id()
	 * @var array
	 */
	protected $registered_panel_ids = array();

	/**
	 * List of registered containers that should be initialized
	 *
	 * @see initialize_containers()
	 * @var array
	 */
	protected $pending_containers = array();

	/**
	 * List of all containers
	 *
	 * @see _attach()
	 * @var array
	 */
	protected $containers = array();

	/**
	 * Register a container with the repository
	 *
	 * @return array
	 **/
	public function register_container( Container $container ) {
		$this->register_unique_panel_id( $container->id );
		$this->containers[] = $container;
		$this->pending_containers[] = $container;
	}

	/**
	 * Initialize registered containers
	 *
	 * @return array
	 **/
	public function initialize_containers() {
		$initialized_containers = array();
		while ( ( $container = array_shift( $this->pending_containers ) ) ) {
			$container->init();
			$initialized_containers[] = $container;
		}

		return $initialized_containers;
	}

	/**
	 * Return all containers
	 *
	 * @return array
	 **/
	public function get_containers() {
		return $this->containers;
	}

	/**
	 * Return all currently active containers
	 *
	 * @return array
	 **/
	public function get_active_containers() {
		return array_filter( $this->containers, function( $c ) {
			return $c->active();
		} );
	}

	/**
	 * Generate a unique container identificator id based on container title
	 * 
	 * @param string $title
	 */
	public function get_unique_panel_id( $title ) {
		$id = preg_replace( '~[^\w\-]*~', '', remove_accents( $title ) );
		$base = $id;
		$suffix = 0;

		while ( !$this->is_unique_panel_id( $id ) ) {
			$suffix++;
			$id = $base . strval( $suffix );
		}

		return $id;
	}

	/**
	 * Check if container identificator id is unique
	 * 
	 * @param string $title
	 */
	protected function is_unique_panel_id( $id ) {
		return !in_array( $id, $this->registered_panel_ids );
	}

	/**
	 * Add container identificator id to the list of unique container ids
	 *
	 * @param string $id
	 **/
	protected function register_unique_panel_id( $id ) {
		if ( $this->is_unique_panel_id( $id ) ) {
			$this->registered_panel_ids[] = $id;
		}
	}

	/**
	 * Remove container identificator id from the list of unique container ids
	 *
	 * @param string $id
	 **/
	protected function unregister_unique_panel_id( $id ) {
		if ( !$this->is_unique_panel_id( $id ) ) {
			unset( $this->registered_panel_ids[ array_search( $id, $this->registered_panel_ids ) ] );
		}
	}
}
