<?php 
namespace Carbon_Fields\REST;

/**
* Register custom REST routes		
*/
class Routes extends REST_Controller {
	
	function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	function register_routes() {

		// Post meta route
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/posts/(?P<id>\d+)', [
			'methods'  => 'GET',
			'callback' => [ $this, 'get_post_meta' ],
		] );

		// Term meta route
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/terms/(?P<id>\d+)', [
			'methods'  => 'GET',
			'callback' => [ $this, 'get_term_meta' ],
		] );
		
		// User Meta route 
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/users/(?P<id>\d+)', [
			'methods'  => 'GET',
			'callback' => [ $this, 'get_user_meta' ],
		] );
		
		// Theme options route
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), '/options/', [
			'methods'  => 'GET',
			'callback' => [ $this, 'get_options' ],
		] );
	}

	public function get_post_meta( $data ) {
		$carbon_data = $this->get_data( 'Post_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];
	}

	public function get_options() {
		$carbon_data = $this->get_data( 'Theme_Options' );
		return [ 'carbon_fields' => $carbon_data ];
	}

	public function get_user_meta( $data ) {
		$carbon_data = $this->get_data( 'User_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];
	}

	public function get_term_meta( $data ) {
		$carbon_data = $this->get_data( 'Term_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];	
	}
}