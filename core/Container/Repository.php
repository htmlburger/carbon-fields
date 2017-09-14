<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Keeps track of all instantiated containers
 */
class Repository {
	/**
	 * List of registered unique container ids
	 *
	 * @see get_unique_container_id()
	 * @see register_unique_container_id()
	 * @see unregister_unique_container_id()
	 * @var array
	 */
	protected $registered_container_ids = array();

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
	 * Container id prefix
	 *
	 * @var string
	 */
	protected $container_id_prefix = 'carbon_fields_container_';

	/**
	 * Container id prefix
	 *
	 * @var string
	 */
	protected $widget_id_wildcard_suffix = '-__i__';

	/**
	 * Register a container with the repository
	 *
	 * @return array
	 */
	public function register_container( Container $container ) {
		$this->register_unique_container_id( $container->get_id() );
		$this->containers[] = $container;
		$this->pending_containers[] = $container;
	}

	/**
	 * Initialize registered containers
	 *
	 * @return array
	 */
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
	 * @param string $type Container type to filter for
	 * @return array
	 */
	public function get_containers( $type = null ) {
		$raw_containers = $this->containers;
		$containers = array();

		if ( $type === null ) {
			$containers = $raw_containers;
		} else {
			$normalized_type = Helper::normalize_type( $type );
			foreach ( $raw_containers as $container ) {
				if ( $container->type === $normalized_type ) {
					$containers[] = $container;
				}
			}
		}

		return $containers;
	}

	/**
	 * Return field in a container with supplied id
	 *
	 * @param  string                    $field_name
	 * @param  string                    $container_id
	 * @param  bool                      $include_nested_fields
	 * @return Carbon_Fields\Field\Field
	 */
	public function get_field_in_container( $field_name, $container_id, $include_nested_fields = true ) {
		$containers = $this->get_containers();
		$field = null;

		foreach ( $containers as $container ) {
			if ( $container->get_id() !== $container_id ) {
				continue;
			}

			if ( $include_nested_fields ) {
				$field = $container->get_field_by_name( $field_name );
			} else {
				$field = $container->get_root_field_by_name( $field_name );
			}
			break;
		}

		return $field;
	}

	/**
	 * Return field in containers
	 *
	 * @param  string                    $field_name
	 * @param  string                    $container_type
	 * @param  bool                      $include_nested_fields
	 * @return Carbon_Fields\Field\Field
	 */
	public function get_field_in_containers( $field_name, $container_type = null, $include_nested_fields = true ) {
		$containers = $this->get_containers( $container_type );
		$field = null;

		foreach ( $containers as $container ) {
			if ( $include_nested_fields ) {
				$field = $container->get_field_by_name( $field_name );
			} else {
				$field = $container->get_root_field_by_name( $field_name );
			}
			if ( $field ) {
				break;
			}
		}

		return $field;
	}

	/**
	 * Return all currently active containers
	 *
	 * @return array
	 */
	public function get_active_containers() {
		return array_filter( $this->containers, function( $container ) {
			return $container->is_active();
		} );
	}

	/**
	 * Check if container identificator id is unique
	 *
	 * @param string $id
	 */
	public function is_unique_container_id( $id ) {
		return ! in_array( $id, $this->registered_container_ids );
	}

	/**
	 * Generate a unique container identificator id based on container title
	 *
	 * @param string $title
	 */
	public function get_unique_container_id( $title ) {
		$id = remove_accents( $title );
		$id = strtolower( $id );

		$id_prefix = $this->container_id_prefix;
		if ( substr( $id, 0, strlen( $id_prefix ) ) === $id_prefix ) {
			$id_prefix = '';
		}

		$wids = $this->widget_id_wildcard_suffix;
		$id_suffix = '';
		if ( substr( $id, -strlen( $wids ) ) === $wids ) {
			$id_suffix = $wids;
			$id = substr( $id, 0, -strlen( $wids ) );
		}
		
		$id = preg_replace( '~[\s]+~', '_', $id );
		$id = preg_replace( '~[^\w\-\_]+~', '', $id );

		$id = $id_prefix . $id . $id_suffix;

		$base = $id;
		$suffix = 0;

		while ( ! $this->is_unique_container_id( $id ) ) {
			$suffix++;
			$id = $base . strval( $suffix );
		}

		return $id;
	}

	/**
	 * Add container identificator id to the list of unique container ids
	 *
	 * @param string $id
	 */
	protected function register_unique_container_id( $id ) {
		if ( $this->is_unique_container_id( $id ) ) {
			$this->registered_container_ids[] = $id;
		}
	}

	/**
	 * Remove container identificator id from the list of unique container ids
	 *
	 * @param string $id
	 */
	protected function unregister_unique_container_id( $id ) {
		if ( ! $this->is_unique_container_id( $id ) ) {
			unset( $this->registered_container_ids[ array_search( $id, $this->registered_container_ids ) ] );
		}
	}
}
