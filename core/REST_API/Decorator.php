<?php

namespace Carbon_Fields\REST_API;

use \Carbon_Fields\Helper\Helper;
use \Carbon_Fields\Container\Repository as ContainerRepository;

/**
 * Decorate default REST routes with extra information provided by Carbon Fields
 */
class Decorator {

	/**
	 * ContainerRepository instance
	 * 
	 * @var ContainerRepository
	 */
	protected $container_repository;
	
	/**
	 * @param ContainerRepository $container_repository
	 */
	public function __construct( ContainerRepository $container_repository ) {
		$this->container_repository = $container_repository;
	}

	/**
	 * Boot up functionality
	 */
	public function boot() {
		add_action( 'rest_api_init', array( $this, 'register_fields' ) );
	}

	/**
	 * Register Carbon Fields using the register_rest_field() function
	 */
	public function register_fields() {
		$containers = $this->container_repository->get_containers();
		$containers = array_filter( $containers, function( $container ) {
			return ( $container->type !== 'Theme_Options' );
		} );

		foreach ( $containers as $container ) {
			$fields = $container->get_fields();
			$context = strtolower( $container->type );
			$type_callable = array( __CLASS__, "get_{$context}_container_settings" );
			if ( ! is_callable( $type_callable ) ) {
				continue; // unsupported container type
			}
			$types = call_user_func( $type_callable, $container );

			foreach ( $fields as $field ) {
				if ( ! $field->get_visible_in_rest_api() ) {
					continue;
				}

				$getter = function( $object, $field_name ) use ( $container ) {
					$object_id = self::get_object_id( $object, $container->type );
					return Helper::get_value( $object_id, $container->type, $field_name );
				};

				$setter = function( $value, $object, $field_name ) use ( $container ) {
					$object_id = self::get_object_id( $object, $container->type );
					$success = Helper::set_value( $object_id, $container->type, $field_name, $value );
					if ( ! $success ) {
						echo 'Failed to find or update field "' . $field_name . '".';
						exit;
					}
				};

				register_rest_field( $types,
					$field->get_base_name(), array(
						'get_callback'    => $getter,
						'update_callback' => $setter,
						'schema'          => null,
					)
				);
			}
		}
	}

	/**
	 * Get Post Meta Container visibility settings
	 *
	 * @return array
	 */	
	public static function get_post_meta_container_settings( $container ) {
		return $container->settings['post_type'];
	}

	/**
	 * Get Term Meta Container visibility settings
	 *
	 * @return array
	 */	
	public static function get_term_meta_container_settings( $container ) {
		return $container->settings['taxonomy'];
	}

	/**
	 * Get User Meta Container visibility settings
	 *
	 * @return string
	 */	
	public static function get_user_meta_container_settings( $container ) {
		return 'user';
	}

	/**
	 * Get Comment Meta Container visibility settings
	 * 
	 * @return string
	 */	
	public static function get_comment_meta_container_settings( $container ) {
		return 'comment';
	}

	/**
	 * Retrieve ID from object based on $context
	 * 
	 * @param object $object
	 * @param string $container_type
	 * @return null|int
	 */
	public static function get_object_id( $object, $container_type ) {
		$object = is_array( $object ) ? (object) $object : $object;
		switch ( $container_type ) {
			case 'Post_Meta': // fallthrough intended
			case 'User_Meta': 
				return isset( $object->ID ) ? $object->ID : $object->id;
				break;
			case 'Term_Meta':
				return $object->term_id;
				break;
			case 'Comment_Meta': 
				return $object->comment_ID;
				break;
		}
		return null;
	}
}
