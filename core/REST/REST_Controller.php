<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;
use Carbon_Fields\REST\Container_Validator;

class REST_Controller {
	
	/**
	 * Version of the API
	 * @var string
	 */
	protected $version = '1';

	/**
	 * Plugin slug
	 * @var string
	 */
	protected $vendor = 'carbon-fields';

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

	public $validator;

	public function __construct() {
		$this->validator = new Container_Validator();
	}	

	public function get_data( $type, $id  = '') {
		$response = [];
		
		$this->containers = $this->filter_containers( $type, $id );
		
		foreach ( $this->containers as $container ) {
			$fields = $container->get_fields();

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
			return $this->validator->is_valid_container( $container, $type, $id );
		} );
	}

	public function set_version( $version ) {
		$this->version = $version;
	}

	public function get_version() {
		return $this->version;
	}

	public function set_vendor( $vendor ) { 
		$this->vendor = $vendor;
	}

	public function get_vendor() {
		return $this->vendor;
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