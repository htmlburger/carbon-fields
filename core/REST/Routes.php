<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Updater\Updater;

/**
* Register custom REST routes		
*/
class Routes {

	/**
	 * Carbon Fields routes
	 * 
	 * @var array
	 */
	protected $routes = array(
		'post_meta' => array(
			'path'                => '/posts/(?P<id>\d+)',
			'callback'            => 'get_post_meta',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
		),
		'term_meta' => array(
			'path'                => '/terms/(?P<id>\d+)',
			'callback'            => 'get_term_meta',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
		),
		'user_meta' => array(
			'path'                => '/users/(?P<id>\d+)',
			'callback'            => 'get_user_meta',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
		),
		'comment_meta' => array(
			'path'                => '/comments/(?P<id>\d+)',
			'callback'            => 'get_comment_meta',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
		),
		'theme_options' => array(
			'path'                => '/options/',
			'callback'            => 'options_accessor',
			'permission_callback' => 'options_permission',
			'methods'             => array( 'GET', 'POST' ),
		),
	);

	/**
	 * Version of the API
	 * 
	 * @see set_version()
	 * @see get_version()
	 * @var string
	 */
	protected $version = '1';

	/**
	 * Plugin slug
	 * 
	 * @see set_vendor()
	 * @see get_vendor()
	 * @var string
	 */
	protected $vendor = 'carbon-fields';

	/**
	 * Instance of the Data_Manager class
	 * 
	 * @var object
	 */
	public $data_manager;
	
	public function __construct( $data_manager ) {
		$this->data_manager = $data_manager;

		add_action( 'rest_api_init', array( $this, 'register_routes' ), 15 );
	}

	/**
	 * Creates the custom routes
	 * 
	 * @see  create()
	 */
	public function register_routes() {
		foreach ( $this->routes as $route ) {
			$this->create( $route );
		}
	}

	/**
	 * Registers a custom REST route
	 * 
	 * @param  array $route
	 */
	public function create( $route ) {
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), $route['path'], array(
			'methods'             => $route['methods'],
			'permission_callback' => array( $this, $route['permission_callback'] ),
			'callback'            => array( $this, $route['callback'] ),
		) );
	}

	/**
	 * Retrieves Carbon post meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_post_meta( $data ) {
		$carbon_data = $this->get_data( 'Post_Meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Retrieves Carbon user meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_user_meta( $data ) {
		$carbon_data = $this->get_data( 'User_Meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Retrieves Carbon term meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_term_meta( $data ) {
		$carbon_data = $this->get_data( 'Term_Meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Retrieves Carbon comment meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_comment_meta( $data ) {
		$carbon_data = $this->get_data( 'Comment_Meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Retrieves Carbon theme options
	 * 
	 * @return array
	 */
	public function get_options() {
		$carbon_data = $this->get_data( 'Theme_Options' );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Set Carbon theme options
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function set_options( $request ) {
		$options = $request->get_params();
		
		if ( empty( $options ) ) {
			return new \WP_REST_Response( __( 'No option names provided', 'crb' ) );
		}
		
		Updater::$is_rest_request = true;

		foreach ( $options as $key => $value ) {
			try {
				Updater::update_field( 'theme_option', null, $key, $value );	
			} catch ( \Exception $e ) {
				return new \WP_REST_Response( wp_strip_all_tags( $e->getMessage() ) );
			}
		}

		return new \WP_REST_Response( __( 'Theme Options updated.', 'crb' ), 200 );
	}

	/**
	 * Wrapper method used for retrieving data from the $data_manager
	 * 
	 * @param  string $container_type 
	 * @param  string $id
	 * @return array
	 */
	public function get_data( $container_type, $id = '' ) {
		return $this->data_manager->get_data( $container_type, $id );
	}

	/**
	 * Sets routes
	 */
	public function set_routes( $routes ) {
		$this->routes = $routes;
	}

	/**
	 * Returns routes
	 * 
	 * @return array
	 */
	public function get_routes() {
		return $this->routes;
	}

	/**
	 * Sets version
	 */
	public function set_version( $version ) {
		$this->version = $version;
	}

	/**
	 * Returns version
	 * 
	 * @return string
	 */
	public function get_version() {
		return $this->version;
	}

	/**
	 * Sets vendor
	 */
	public function set_vendor( $vendor ) { 
		$this->vendor = $vendor;
	}

	/**
	 * Returns vendor
	 * 
	 * @return string
	 */
	public function get_vendor() {
		return $this->vendor;
	}

	/**
	 * Proxy method for handling get/set for theme options
	 * 
	 * @param  WP_REST_Request $request 
	 * @return array|WP_REST_Response 
	 */
	public function options_accessor( $request ) {
		$request_type = $request->get_method();
		
		if ( $request_type === 'GET' ) {
			return $this->get_options();
		}

		if ( $request_type === 'POST' ) {
			return $this->set_options( $request );
		}
	}

	/**
	 * Allow access to an endpoint
	 * 
	 * @return bool true
	 */
	public function allow_access() {
		return true;
	}

	/**
	 * Proxy method for handling theme options permissions
	 * 
	 * @param  WP_REST_Request $request 
	 * @return bool
	 */
	public function options_permission( $request ) {
		$request_type = $request->get_method();

		if ( $request_type === 'GET' ) {
			return true;
		}

		if ( $request_type === 'POST' ) {
			return current_user_can( 'edit_theme_options' );
		}
	}
}