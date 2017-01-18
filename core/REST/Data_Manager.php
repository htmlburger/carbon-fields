<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

/**
 * Class for retrieving relative data for REST responses
 */
class Data_Manager {
	
	/**
	 * Special field types, that require 
	 * different data loading
	 * 
	 * @var array
	 */
	public $special_field_types = array(
		'complex',
		'relationship',
		'association',
		'map'
	); 

	/**
	 * Field types that should be excluded
	 * from the REST response
	 * 
	 * @var array
	 */
	protected $exclude_field_types = array(
		'html',
		'separator',
	);

	/**
	 * Instance of the Container_Validator class
	 * 
	 * @var object
	 */
	public $container_validator;

	public function __construct( $validator ) {
		$this->container_validator = $validator;
	}

	/**
	 * Returns the Carbon Fields data based
	 * on $type and $id
	 * 
	 * @param  string $type 
	 * @param  string $id 
	 * @return array
	 */
	public function get_data( $type, $id  = '' ) {
		$response   = array();
		$containers = $this->filter_containers( $type, $id );

		foreach ( $containers as $container ) {
			$fields = $this->filter_fields( $container->get_fields() );

			foreach ( $fields as $field ) {
				
				if ( $id ) {
					$field->get_datastore()->set_id( $id );
				}

				$field->load();

				$field_type = in_array( strtolower( $field->type ), $this->special_field_types ) ? strtolower( $field->type ) : 'generic';

				$response[ $field->get_name() ] = call_user_func( array( $this, "load_{$field_type}_field_value" ), $field );
			}
		}

		return $response;
	}

	/**
	 * Filters all available containers 
	 * based on $type
	 * 
	 * @param  string $type 
	 * @param  string $id
	 * @return array
	 */
	public function filter_containers( $type, $id = '' ) {
		return array_filter( Container::$active_containers, function( $container ) use ( $type, $id ) {
			return $this->container_validator->is_valid_container( $container, $type, $id );
		} );
	}

	/**
	 * Checks if fields should be excluded from the response
	 * 
	 * @param  array $fields 
	 * @return array
	 */
	public function filter_fields( $fields ) {
		return array_filter( $fields, array( $this, 'should_load_field' ) );
	}

	/**
	 * Checks if a field should be excluded from the response
	 * 
	 * @param  object $field
	 * @return array       
	 */
	public function should_load_field( $field ) {
		return $field->get_rest_visibility() && ! in_array( strtolower( $field->type ), $this->exclude_field_types );
	}

	/**
	 * Loads field value
	 * 
	 * @param  object $field
	 * @return array
	 */
	public function load_generic_field_value( $field ) {
		return $field->get_value();
	}

	/**
	 * Loads the value of a complex field
	 * 
	 * @param  object $field 
	 * @return array
	 */
	public function load_complex_field_value( $field ) {
		$field_json = $field->to_json( false );
		return $field_json['value'];
	}

	/**
	 * Load the value of a map field
	 * 
	 * @param  object $field 
	 * @return array
	 */
	public function load_map_field_value( $field ) {
		$map_data = $field->to_json( false );

		return array(
			'lat'     => $map_data['lat'],
			'lng'     => $map_data['lng'],
			'zoom'    => $map_data['zoom'],
			'address' => $map_data['address'],
		);
	}

	/**
	 * Loads the value of a relationship field
	 * 
	 * @param  object $field 
	 * @return array
	 */
	public function load_relationship_field_value( $field ) {
		return maybe_unserialize( $field->get_value() );
	}

	/**
	 * Loads the value of an association field
	 * 
	 * @param object $field 
	 * @return array
	 */
	public function load_association_field_value( $field ) {
		$field->process_value();
		return $field->get_value();
	}
}