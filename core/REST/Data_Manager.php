<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

class Data_Manager {
	
	protected $special_field_types = [
		'complex',
		'relationship',
		'association',
	]; 

	protected $exclude_field_types = [
		'html',
		'separator',
	];

	/**
	 * The containers holding the fields
	 * for the response
	 * 
	 * @var array
	 */
	public $containers = [];

	public $container_validator;

	public function __construct( $validator ) {
		$this->container_validator = $validator;
	}

	public function get_data( $type, $id  = '' ) {
		$response = [];
		
		$this->containers = $this->filter_containers( $type, $id );
		
		foreach ( $this->containers as $container ) {
			$fields = $this->filter_fields( $container->get_fields() );

			foreach ( $fields as $field ) {
				
				if ( $id ) {
					$field->get_datastore()->set_id( $id );
				}

				$field->load();
				
				$field_type = array_filter( $this->special_field_types, function( $special_type ) use ( $field ) {
					return strtolower( $field->type ) === $special_type ? $special_type : 'generic';
				} );
			
				$response[ $field->get_name() ] = call_user_func( [ $this, "load_{$field_type[0]}_field_value" ], $field );
			}
		}

		return $response;
	}

	public function filter_containers( $type, $id = '' ) {
		return array_filter( Container::$active_containers, function( $container ) use ( $type, $id ) {
			return $this->container_validator->is_valid_container( $container, $type, $id );
		} );
	}

	public function filter_fields( $fields ) {
		return array_filter( $fields, function( $field ) {
			return ! in_array( strtolower( $field->type ), $this->exclude_field_types ) ? $field : false;
		});
	}

	public function load_generic_field_value( $field ) {
		return $field->get_value();
	}

	public function load_complex_field_value( $field ) {
		return $field->to_json( false )['value'];
	}

	public function load_relationship_field_value( $field ) {
		return maybe_unserialize( $field->get_value() );
	}

	public function load_association_field_value( $field ) {
		return $this->load_relationship_field_value( $field );
	}
}