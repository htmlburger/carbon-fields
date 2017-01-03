<?php 
namespace Carbon_Fields\REST;

/**
* Register custom REST routes		
*/
class Routes {

	/**
	 * Carbon Fields routes
	 * 
	 * @var array
	 */
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

		add_action( 'rest_api_init', [ $this, 'register_routes' ], 15 );
	}

	/**
	 * Creates the custom routes
	 * 
	 * @see  create()
	 */
	public function register_routes() {
		foreach ( $this->routes as $route ) {
			$this->create( $route['path'], $route['callback'] );
		}
	}

	/**
	 * Registers a custom REST route
	 * 
	 * @param  string $path
	 * @param  string $callback
	 */
	public function create( $path, $callback ) {
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), $path, [
			'methods'  => 'GET',
			'callback' => [ $this, $callback ],
		] );
	}

	/**
	 * Retrieves Carbon post meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_post_meta( $data ) {
		$carbon_data = $this->get_data( 'Post_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];
	}

	/**
	 * Retrieves Carbon theme options
	 * 
	 * @return array
	 */
	public function get_options() {
		$carbon_data = $this->get_data( 'Theme_Options' );
		return [ 'carbon_fields' => $carbon_data ];
	}

	/**
	 * Retrieves Carbon user meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_user_meta( $data ) {
		$carbon_data = $this->get_data( 'User_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];
	}

	/**
	 * Retrieves Carbon term meta
	 * 
	 * @param  array $data
	 * @return array
	 */
	public function get_term_meta( $data ) {
		$carbon_data = $this->get_data( 'Term_Meta', $data['id'] );
		return [ 'carbon_fields' => $carbon_data ];	
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
}