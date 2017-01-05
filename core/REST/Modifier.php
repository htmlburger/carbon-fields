<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

/**
* 
*/
class Modifier {

	protected $manager;

	private $fields         = [];
	private $fields_by_type = [];

	protected $types = [
		'Post_Meta' => 'post',
		'Term_Meta' => 'term',
		'User_Meta' => 'user',
	];

	protected $callbacks = [

	];

	function __construct( $manager ) {

		$this->manager = $manager;

		add_action( 'rest_api_init', [ $this, 'register_fields']);
		
	}

	public function register_fields() {
		$containers = $this->get_containers();

		foreach ( $containers as $container ) {
			$type                  = $container->type;
			$this->fields_by_type[ $this->types[ $type ] ] = $this->manager->filter_fields( $container->get_fields() );
		}

		$this->fields = call_user_func_array('array_merge', $this->fields_by_type);

		foreach ( $this->fields_by_type as $type => $fields_of_type ) {
			foreach ( $fields_of_type as $field ) {
				register_rest_field( $type,
					$field->get_name(), [
						'get_callback'    => [ $this, 'load_field_value' ],
						'update_callback' => null,
						'schema'          => null,
					]
				);
			}
		}
	}

	function get_containers() {
		return array_filter( Container::$active_containers, function( $container ) {
			return $container->type !== 'Theme_Options' && $container->get_rest_visibility(); 
		} );
	}

	function load_field_value( $object, $field_name, $request ) {

		$field = array_filter( $this->fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );

		if ( empty( $field ) ) {
			return '';
		}   

		$field = array_pop( $field );

		$field->get_datastore()->set_id( $object['id'] );
		$field->load();

		$field_type = in_array( strtolower( $field->type ), $this->manager->special_field_types ) ? strtolower( $field->type ) : 'generic';

		$value = call_user_func( [ $this->manager, "load_{$field_type}_field_value" ], $field );
		
		return $value;
	}
}