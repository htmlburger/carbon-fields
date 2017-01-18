<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;
use Carbon_Fields\Updater\Updater;

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
	private $fields = array();

	function __construct( $data_manager ) {
		$this->data_manager = $data_manager;
		add_action( 'rest_api_init', array( $this, 'register_fields' ) );
	}

	/**
	 * Registers Carbon Fields using
	 * the register_rest_field() function
	 */
	public function register_fields() {
		$containers = $this->get_containers();

		$this->fields = array_map( array( $this, 'filter_fields' ), $containers );
		$this->fields = call_user_func_array( 'array_merge', $this->fields );

		foreach ( $containers as $container ) {
			$fields  = $this->filter_fields( $container );
			$context = strtolower( $container->type );
			$types   = call_user_func( array( __CLASS__, "get_{$context}_container_settings" ), $container );

			foreach ( $fields as $field ) {
				register_rest_field( $types,
					$field->get_name(), array(
						'get_callback'    => array( $this, "load_{$context}_field_value" ),
						'update_callback' => array( $this, "update_{$context}_field_value" ),
						'schema'          => null,
					)
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
	 * Wrapper method for loading Post Meta values, 
	 * needed to pass the correct $context
	 * 
	 * @param array $object Details of current object.
	 * @param string $field_name Name of field.
	 * @param WP_REST_Request $request Current request
	 * @return mixed
	 */
	public function load_post_meta_field_value( $object, $field_name, $request ) {
		$context = 'Post_Meta';
		return $this->load_field_value( $object, $field_name, $request, $context );
	}
	
	/**
	 * Wrapper method for loading Term Meta values, 
	 * needed to pass the correct $context
	 * 
	 * @param array $object Details of current object.
	 * @param string $field_name Name of field.
	 * @param WP_REST_Request $request Current request
	 * @return mixed
	 */
	public function load_term_meta_field_value( $object, $field_name, $request ) {
		$context = 'Term_Meta';
		return $this->load_field_value( $object, $field_name, $request, $context );
	}

	/**
	 * Wrapper method for loading Comment Meta values, 
	 * needed to pass the correct $context
	 * 
	 * @param array $object Details of current object.
	 * @param string $field_name Name of field.
	 * @param WP_REST_Request $request Current request
	 * @return mixed
	 */
	public function load_comment_meta_field_value( $object, $field_name, $request ) {
		$context = 'Comment_Meta';
		return $this->load_field_value( $object, $field_name, $request, $context );
	}

	/**
	 * Wrapper method for loading User Meta values, 
	 * needed to pass the correct $context
	 * 
	 * @param array $object Details of current object.
	 * @param string $field_name Name of field.
	 * @param WP_REST_Request $request Current request
	 * @return mixed
	 */
	public function load_user_meta_field_value( $object, $field_name, $request ) {
		$context = 'User_Meta';
		return $this->load_field_value( $object, $field_name, $request, $context );
	}

	/**
	 * Get the value of the "$field_name" field
	 *
	 * @param array $object Details of current object.
 	 * @param string $field_name Name of field.
 	 * @param WP_REST_Request $request Current request
 	 * @param string $context Post_Meta|Term_Meta|User_Meta|Comment_Meta
 	 * @return mixed
	 */	
	public function load_field_value( $object, $field_name, $request, $context ) {
		$field = $this->get_current_field( $field_name, $context );

		if ( empty( $field ) ) {
			return '';
		}   

		$field = array_pop( $field );
		
		$field->get_datastore()->set_id( $object['id'] );
		$field->load();

		$field_type = $this->get_field_type( $field );

		return call_user_func( array( $this->data_manager, "load_{$field_type}_field_value" ), $field );
	}

	/**
	 * Wrapper method for updating Post Meta fields,
	 * need to pass the correct $context
	 * 
	 * @param mixed $value The value of the field
	 * @param object $object The object from the request
	 * @param string $field_name Name of field
	 */
	public function update_post_meta_field_value( $value, $object, $field_name ) {
		$context = 'Post_Meta';
		$this->update_field_value( $value, $object, $field_name, $context );
	}

	/**
	 * Wrapper method for updating Term Meta fields,
	 * need to pass the correct $context
	 * 
	 * @param mixed $value The value of the field
	 * @param object $object The object from the request
	 * @param string $field_name Name of field
	 */
	public function update_term_meta_field_value( $value, $object, $field_name ) {
		$context = 'Term_Meta';
		$this->update_field_value( $value, $object, $field_name, $context );
	}

	/**
	 * Wrapper method for updating Comment Meta fields,
	 * need to pass the correct $context
	 * 
	 * @param mixed $value The value of the field
	 * @param object $object The object from the request
	 * @param string $field_name Name of field
	 */
	public function update_comment_meta_field_value( $value, $object, $field_name ) {
		$context = 'Comment_Meta';
		$this->update_field_value( $value, $object, $field_name, $context );
	}

	/**
	 * Wrapper method for updating User Meta fields,
	 * need to pass the correct $context
	 * 
	 * @param mixed $value The value of the field
	 * @param object $object The object from the request
	 * @param string $field_name Name of field
	 */
	public function update_user_meta_field_value( $value, $object, $field_name ) {
		$context = 'User_Meta';
		$this->update_field_value( $value, $object, $field_name, $context );
	}

	/**
	 * Handler for updating custom field data.
	 *
	 * @param mixed $value The value of the field
	 * @param object $object The object from the request
	 * @param string $field_name Name of field
	 * @param string $context Post_Meta|Term_Meta|User_Meta|Comment_Meta
	 */
	public function update_field_value( $value, $object, $field_name, $context ) {
		if ( ! $value || ! is_string( $value ) ) {
			return;
		}
		
		$field = $this->get_current_field( $field_name, $context );

		if ( empty( $field ) ) {
			return;
		}
		
		$field     = array_pop( $field );
		$type      = strtolower( $field->type );
		$context   = strtolower( $context );
		$object_id = self::get_object_id( $object, $context );

		Updater::$is_rest_request = true;
		
		try {
			call_user_func( "Carbon_Fields\Updater\Updater::update_field", $context, $object_id, $field_name, $value, $type );	
		} catch ( \Exception $e ) {
			echo wp_strip_all_tags( $e->getMessage() );
			exit;
		}
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
	public function get_current_field( $field_name, $context ) {
		return array_filter( $this->fields, function( $field ) use ( $field_name, $context ) { 
			return ( $field->get_name() === $field_name ) && ( $field->get_context() === $context );
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

	/**
	 * Retrieve ID from object
	 * based on $context
	 * 
	 * @param  object $object
	 * @param  string $context
	 * @return string
	 */
	public static function get_object_id( $object, $context ) {
		switch ( $context ) {
			case 'post_meta': // fallthrough intended
			case 'user_meta': 
				return $object->ID;
				break;

			case 'term_meta':
				return $object->term_id;
				break;

			case 'comment_meta' : 
				return $object->comment_ID;
				break;
		}
	}
}