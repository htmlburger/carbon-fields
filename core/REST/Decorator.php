<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

/**
 * This class modifies the default REST routes
 * using the WordPress' register_rest_field() function 
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

	/**
	 * Registers Carbon Fields using
	 * the register_rest_field() function
	 */
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
						'update_callback' => [ $this, 'update_field_value' ],
						'schema'          => null,
					]
				);
			}
		}
	}

	/**
	 * Return all containers that 
	 * should be visible in the REST API responses
	 *
	 * @return array
	 */
	public function get_containers() {
		return array_filter( Container::$active_containers, function( $container ) {
			return $container->type !== 'Theme_Options' && $container->get_rest_visibility(); 
		} );
	}

	/**
	 * Return all fields attached to a container
	 * that should be included in the REST API response
	 * 
	 * @param object $container
	 * @return array
	 */
	public function filter_fields( $container ) {
		return $this->data_manager->filter_fields( $container->get_fields() );
	}

	/**
	 * Get the value of the "$field_name" field
	 *
	 * @param array $object Details of current object.
 	 * @param string $field_name Name of field.
 	 * @param WP_REST_Request $request Current request
 	 * @return mixed
	 */	
	public function load_field_value( $object, $field_name, $request ) {

		$field = $this->get_current_field( $field_name );

		if ( empty( $field ) ) {
			return '';
		}   

		$field = array_pop( $field );
		
		$field->get_datastore()->set_id( $object['id'] );
		$field->load();

		$field_type = $this->get_field_type( $field );

		return call_user_func( [ $this->data_manager, "load_{$field_type}_field_value" ], $field );
	}

	/**
	 * Handler for updating custom field data.
	 *
	 * @param mixed $value The value of the field
	 * @param object $object The object from the response
	 * @param string $field_name Name of field
	 *
	 * @return bool|int
	 */
	public function update_field_value( $value, $object, $field_name ) {
		if ( ! $value || ! is_string( $value ) ) {
			return;
		}

		$field = $this->get_current_field( $field_name );

		if ( empty( $field ) ) {
			return;
		}
		
		$field    = array_pop( $field );
		$type     = strtolower( $field->type );
		$context  = strtolower( $field->get_context() ); 

		return call_user_func( "Carbon_Fields\Helper\Updater::update_field", $context, $object->ID, $field_name, $value, $type );
	}

	/**
	 * Get the type of a field
	 * 
	 * @param object $field
	 * @return string
	 */
	public function get_field_type( $field ) {
		$type_to_lower = strtolower( $field->type );
		return in_array( $type_to_lower, $this->data_manager->special_field_types ) ? $type_to_lower : 'generic';
	}

	/**
	 * Get field based on it's name
	 * @param  string $field_name 
	 * @return array
	 */
	public function get_current_field( $field_name ) {
		return array_filter( $this->fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );
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

}