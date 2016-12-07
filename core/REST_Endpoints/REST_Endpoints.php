<?php 
namespace Carbon_Fields\REST_Endpoints;

use Carbon_Fields\Container\Post_Meta_Container;
use Carbon_Fields\Helper\Helper;

class REST_Endpoints {
	
	public $version = '1';
	public $vendor  = 'carbon-fields';

	function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ));
	}

	function register_routes() {
		register_rest_route( $this->vendor . '/v' . $this->version, '/post/(?P<id>\d+)', array(
			'methods' => 'GET',
			'callback' => array( $this, 'get_post_meta'),
		) );
	}

	function get_post_meta( $data ) {
		$container = new Post_Meta_Container( 'test' );

		$container->init( $data['id'] );

		$fields = $container::get_active_fields();

		$response = [];

		foreach ( $fields as $field ) {
			$field->get_datastore()->set_id( $data['id'] );
			$field->load();

			$response[ $field->get_name() ] = $field->get_value();
		}

		return ['meta_data' => $response ];
	}
}