<?php

namespace Carbon_Fields\REST_API;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Container\Repository as ContainerRepository;

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
			return ( $container->type !== 'theme_options' );
		} );

		foreach ( $containers as $container ) {
			$fields = $container->get_fields();
			$context = $container->type;
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
					return Helper::get_value( $object_id, $container->type, '', $field_name );
				};

				$setter = function( $value, $object, $field_name ) use ( $container ) {
					$object_id = self::get_object_id( $object, $container->type );
					Helper::set_value( $object_id, $container->type, '', $field_name, $value );
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
		return $container->get_post_type_visibility();
	}

	/**
	 * Get Term Meta Container visibility settings
	 *
	 * @return array
	 */
	public static function get_term_meta_container_settings( $container ) {
		return $container->get_taxonomy_visibility();
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
		$container_type = Helper::normalize_type( $container_type );
		switch ( $container_type ) {
			case 'post_meta': // fallthrough intended
			case 'user_meta':
				return isset( $object->id ) ? $object->id : $object->ID;
				break;
			case 'term_meta':
				return isset( $object->id ) ? $object->id : $object->term_id;
				break;
			case 'comment_meta':
				return isset( $object->id ) ? $object->id : $object->comment_ID;
				break;
		}
		return null;
	}
}
