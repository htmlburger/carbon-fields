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
	 * @see drop_unique_panel_id()
	 * @var array
	 */
	protected $registered_panel_ids = array();

	/**
	 * List of containers created via factory that should be initialized
	 *
	 * @see factory()
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
	 * Normalizes a container type string to an expected format
	 *
	 * @param string $type
	 * @return string $normalized_type
	 **/
	protected function normalize_container_type( $type ) {
		// backward compatibility: post_meta container used to be called custom_fields
		if ( $type === 'custom_fields' ) {
			$type = 'post_meta';
		}

		$normalized_type = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $type ) ) );
		return $normalized_type;
	}

	/**
	 * Resolves a string-based type to a fully qualified container class name
	 *
	 * @param string $type
	 * @return string $class_name
	 **/
	protected function container_type_to_class( $type ) {
		$class = __NAMESPACE__ . '\\' . $type . '_Container';
		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown container "' . $type . '".' );
			$class = __NAMESPACE__ . '\\Broken_Container';
		}
		return $class;
	}

	/**
	 * Create a new container of type $type and name $name.
	 *
	 * @param string $type
	 * @param string $name Human-readable name of the container
	 * @return object $container
	 **/
	public function factory( $type, $name ) {
		$unique_id = $this->get_unique_panel_id( $name );
		
		$normalized_type = $this->normalize_container_type( $type );
		$class = $this->container_type_to_class( $normalized_type );
		$container = new $class( $unique_id, $name, $normalized_type );

		$this->containers[] = $container;
		$this->pending_containers[] = $container;

		return $container;
	}

	/**
	 * Initialize containers created via factory
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
		$id = preg_replace( '~\W\-~u', '', remove_accents( $title ) );
		$base = $id;
		$suffix = 0;

		while ( in_array( $id, $this->registered_panel_ids ) ) {
			$suffix++;
			$id = $base . strval( $suffix );
		}

		$this->registered_panel_ids[] = $id;

		return $id;
	}

	/**
	 * Remove container identificator id from the list of unique container ids
	 *
	 * @param string $id
	 **/
	public function drop_unique_panel_id( $id ) {
		if ( in_array( $id, $this->registered_panel_ids ) ) {
			unset( $this->registered_panel_ids[ array_search( $id, $this->registered_panel_ids ) ] );
		}
	}
}
