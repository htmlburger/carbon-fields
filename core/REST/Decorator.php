<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

/**
 * This class modifies the default REST routes
 * using the WordPress' register_rest_field function 
 */

class Decorator {

	/**
	 * Instance of the Data_Manager class
	 * 
	 * @var object
	 */
	public $data_manager;

	/**
	 * All fields that need to be registeres
	 *
	 * @var array
	 */
	private $fields = [];

	function __construct( $data_manager ) {
		$this->data_manager = $data_manager;
		add_action( 'rest_api_init', [ $this, 'register_fields'] );
	}

	public function register_fields() {
		$containers = $this->get_containers();

		$this->fields = array_map( [ $this, 'filter_fields' ], $containers );
		$this->fields = call_user_func_array( 'array_merge', $this->fields );

		foreach ( $containers as $container ) {
			$fields        = $this->filter_fields( $container );
			$type_to_lower = strtolower( $container->type );
			$types         = call_user_func( [ __CLASS__, "get_{$type_to_lower}_container_settings"], $container );

			foreach ( $fields as $field ) {
				register_rest_field( $types,
					$field->get_name(), [
						'get_callback'    => [ $this, 'load_field_value' ],
						'update_callback' => null,
						'schema'          => null,
					]
				);
			}
		}
	}

	public function get_containers() {
		return array_filter( Container::$active_containers, function( $container ) {
			return $container->type !== 'Theme_Options' && $container->get_rest_visibility(); 
		} );
	}

	public function filter_fields( $container ) {
		return $this->data_manager->filter_fields( $container->get_fields() );
	}

	public function load_field_value( $object, $field_name, $request ) {

		$field = array_filter( $this->fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );

		if ( empty( $field ) ) {
			return '';
		}   

		$field = array_pop( $field );
		
		$field->get_datastore()->set_id( $object['id'] );
		$field->load();

		$field_type = $this->get_field_type( $field );

		return call_user_func( [ $this->data_manager, "load_{$field_type}_field_value" ], $field );
	}

	public static function get_post_meta_container_settings( $container ) {
		return $container->settings['post_type'];
	}

	public static function get_term_meta_container_settings( $container ) {
		return $container->settings['taxonomy'];
	}

	public static function get_user_meta_container_settings( $container = '' ) {
		return 'user';
	}

	public static function get_comment_meta_container_settings( $container = '' ) {
		return 'comment';
	}

	public function get_field_type( $field ) {
		$type_to_lower = strtolower( $field->type );
		return in_array( $type_to_lower, $this->data_manager->special_field_types ) ? $type_to_lower : 'generic';
	}
}