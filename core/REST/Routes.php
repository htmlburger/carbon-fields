<?php 
namespace Carbon_Fields\REST;

/**
* Register custom REST routes		
*/
class Routes extends REST_Controller {
	
	function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	function register_routes() {

		// Post meta route
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/posts/(?P<id>\d+)', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'get_post_data'),
		) );

		// Term meta route
		// register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/posts/(?P<id>\d+)', array(
		// 	'methods'  => 'GET',
		// 	'callback' => array( $this, 'get_post_meta'),
		// ) );
		
		// User Meta route 
		// register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/posts/(?P<id>\d+)', array(
		// 	'methods'  => 'GET',
		// 	'callback' => array( $this, 'get_post_meta'),
		// ) );
		
		// Theme options route
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/options/', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'get_options'),
		) );
	}

	public function get_post_data( $data ) {
		$carbon_data = $this->get_data( 'Post_Meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	public function get_options() {
		$carbon_data = $this->get_data( 'Theme_Options' );
		return array( 'carbon_fields' => $carbon_data );
	}
}