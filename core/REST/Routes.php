<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\REST\REST_Controller;

/**
* Register custom REST routes		
*/
class Routes {

	protected $routes = [
		'post_meta'     => [
			'path'     => '/posts/(?P<id>\d+)',
			'callback' => 'get_post_meta',
		],
		'term_meta'     => [
			'path'     => '/terms/(?P<id>\d+)',
			'callback' => 'get_term_meta',
		],
		'user_meta'     => [
			'path'     => '/users/(?P<id>\d+)',
			'callback' => 'get_user_meta',
		],
		'theme_options' => [
			'path'     => '/options/',
			'callback' => 'get_options',
		],
	];

	public $controller;
	
	public function __construct() {
		$this->controller = new REST_Controller();

		add_action( 'rest_api_init', [ $this, 'register_routes' ], 15 );
	}

	public function register_routes() {
		foreach ( $this->routes as $route) {
			$this->create( $route['path'], $route['callback'] );
		}
	}

	public function create( $path, $callback ) {
		register_rest_route( $this->controller->get_vendor() . '/v' . $this->controller->get_version(), $path, [
			'methods'  => 'GET',
			'callback' => [ $this, $callback ],
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

	public function get_data( $container_type, $id = '' ) {
		return $this->controller->get_data( $container_type, $id );
	}

	public function get_routes() {
		return $this->routes;
	}

	public function set_routes( $routes ) {
		$this->routes = $routes;
	}
}