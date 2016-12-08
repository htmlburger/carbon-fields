<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

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
	protected $vendor  = 'carbon-fields';

	/**
	 * The containers holding the fields
	 * for the response
	 * 
	 * @var array
	 */
	public $containers = [];

	public function get_data( $type, $id  = '') {
		$response   = [];
		
		$this->filter_containers( $type, $id );
		
		foreach ( $this->containers as $container ) {
			$fields = $container->get_fields();

			foreach ( $fields as $field ) {
				
				if ( $id ) {
					$field->get_datastore()->set_id( $id );
				}

				$field->load();

				$response[ $field->get_name() ] = $field->get_value();
			}
		}

		return $response;
	}

	public function filter_containers( $type, $id = '' ) {
		$filtered_containers = [];

		foreach ( Container::$active_containers as $container ) {
			if ( $container->type !== $type ) {
				continue;
			}

			if ( $container->type === 'Post_Meta' ) {
				if ( ! $container->is_valid_save_conditions( $id ) ) {
					continue;
				}
			}

			$filtered_containers[] = $container;
		}

		$this->containers = $filtered_containers;
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
}