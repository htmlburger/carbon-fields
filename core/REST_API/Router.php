<?php

namespace Carbon_Fields\REST_API;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Container\Repository as ContainerRepository;

/**
* Register custom routes for REST API
*/
class Router {

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
		'association_data' => array(
			'path'                => '/association',
			'callback'            => 'get_association_data',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
		),
		'attachment_data' => array(
			'path'                => '/attachment',
			'callback'            => 'get_attachment_data',
			'permission_callback' => 'allow_access',
			'methods'             => 'GET',
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
	 * Vendor slug for the API
	 *
	 * @see set_vendor()
	 * @see get_vendor()
	 * @var string
	 */
	protected $vendor = 'carbon-fields';

	/**
	 * ContainerRepository instance
	 *
	 * @var ContainerRepository
	 */
	protected $container_repository;

	/**
	 * @param ContainerRepository $container_repository
	 */
	public function __construct( ContainerRepository $container_repository ) {
		$this->container_repository = $container_repository;
	}

	/**
	 * Boot up functionality
	 */
	public function boot() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ), 15 );
	}

	/**
	 * Set routes
	 */
	public function set_routes( $routes ) {
		$this->routes = $routes;
	}

	/**
	 * Return routes
	 *
	 * @return array
	 */
	public function get_routes() {
		return $this->routes;
	}

	/**
	 * Set version
	 */
	public function set_version( $version ) {
		$this->version = $version;
	}

	/**
	 * Return version
	 *
	 * @return string
	 */
	public function get_version() {
		return $this->version;
	}

	/**
	 * Set vendor
	 */
	public function set_vendor( $vendor ) {
		$this->vendor = $vendor;
	}

	/**
	 * Return vendor
	 *
	 * @return string
	 */
	public function get_vendor() {
		return $this->vendor;
	}

	/**
	 * Allow access to an endpoint
	 *
	 * @return bool
	 */
	public function allow_access() {
		return true;
	}

	/**
	 * Register custom routes
	 *
	 * @see  register_route()
	 */
	public function register_routes() {
		foreach ( $this->routes as $route ) {
			$this->register_route( $route );
		}
	}

	/**
	 * Register a custom REST route
	 *
	 * @param  array $route
	 */
	protected function register_route( $route ) {
		register_rest_route( $this->get_vendor() . '/v' . $this->get_version(), $route['path'], array(
			'methods'             => $route['methods'],
			'permission_callback' => array( $this, $route['permission_callback'] ),
			'callback'            => array( $this, $route['callback'] ),
		) );
	}

	/**
	 * Proxy method for handling get/set for theme options
	 *
	 * @param  WP_REST_Request $request
	 * @return array|WP_REST_Response
	 */
	public function options_accessor( $request ) {
		$request_type = $request->get_method();

		if ( $request_type === 'POST' ) {
			return $this->set_options( $request );
		}

		return $this->get_options();
	}

	/**
	 * Proxy method for handling theme options permissions
	 *
	 * @param  WP_REST_Request $request
	 * @return bool
	 */
	public function options_permission( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Wrapper method used for retrieving data from Data_Manager
	 *
	 * @param  string $container_type
	 * @param  string $object_id
	 * @return array
	 */
	protected function get_all_field_values( $container_type, $object_id = null ) {
		$object_id = ( $object_id !== '' ) ? $object_id : null;

		$containers = $this->container_repository->get_containers( $container_type );
		$fields = array();
		foreach ( $containers as $container ) {
			$fields = array_merge( $fields, $container->get_fields() );
		}

		$values = array();
		foreach ( $fields as $field ) {
			if ( ! $field->get_visible_in_rest_api() ) {
				continue;
			}
			$values[ $field->get_base_name() ] = Helper::get_value( $object_id, $container_type, '', $field->get_base_name() );
		}
		return $values;
	}

	/**
	 * Get Carbon Fields post meta values
	 *
	 * @param  array $data
	 * @return array
	 */
	public function get_post_meta( $data ) {
		$carbon_data = $this->get_all_field_values( 'post_meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Get Carbon Fields user meta values
	 *
	 * @param  array $data
	 * @return array
	 */
	public function get_user_meta( $data ) {
		$carbon_data = $this->get_all_field_values( 'user_meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Get Carbon Fields term meta values
	 *
	 * @param  array $data
	 * @return array
	 */
	public function get_term_meta( $data ) {
		$carbon_data = $this->get_all_field_values( 'term_meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Get Carbon Fields comment meta values
	 *
	 * @param  array $data
	 * @return array
	 */
	public function get_comment_meta( $data ) {
		$carbon_data = $this->get_all_field_values( 'comment_meta', $data['id'] );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Get Carbon Fields association options data.
	 *
	 * @return array
	 */
	public function get_association_data() {
		$container_id = $_GET['container_id'];
		$field_id     = $_GET['field_id'];
		$options      = isset( $_GET['options'] ) ? $_GET['options'] : array();
		$return_value = array();

		$field = Helper::get_field( null, $container_id, $field_id );

		foreach ( $options as $entry ) {
			$item = array(
				'type'       => $entry['type'],
				'subtype'    => $entry['subtype'],
				'thumbnail'  => $field->get_thumbnail_by_type( $entry['id'], $entry['type'], $entry['subtype'] ),
				'id'         => intval( $entry['id'] ),
				'title'      => $field->get_title_by_type( $entry['id'], $entry['type'], $entry['subtype'] ),
				'label'      => $field->get_item_label( $entry['id'], $entry['type'], $entry['subtype'] ),
				'is_trashed' => ( $entry['type'] == 'post' && get_post_status( $entry['id'] ) === 'trash' ),
			);

			$return_value[] = $item;
		}

		return $return_value;
	}

	/**
	 * Get attachment data by given ID or URL.
	 *
	 * @return array
	 */
	public function get_attachment_data() {
		$type  = sanitize_text_field( $_GET['type'] );
		$value = sanitize_text_field( $_GET['value'] );

		return Helper::get_attachment_metadata( $value, $type );
	}

	/**
	 * Retrieve Carbon theme options
	 *
	 * @return array
	 */
	protected function get_options() {
		$carbon_data = $this->get_all_field_values( 'theme_options' );
		return array( 'carbon_fields' => $carbon_data );
	}

	/**
	 * Set Carbon theme options
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	protected function set_options( $request ) {
		$options = $request->get_params();

		if ( empty( $options ) ) {
			return new \WP_REST_Response( __( 'No option names provided', 'carbon-fields' ) );
		}

		foreach ( $options as $key => $value ) {
			try {
				Helper::set_value( null, 'Theme_Options', '', $key, $value );
			} catch ( \Exception $e ) {
				return new \WP_REST_Response( wp_strip_all_tags( $e->getMessage() ) );
			}
		}

		return new \WP_REST_Response( __( 'Theme Options updated.', 'carbon-fields' ), 200 );
	}
}
