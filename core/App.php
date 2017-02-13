<?php

namespace Carbon_Fields;

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\Loader\Loader;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Toolset\Key_Toolset;
use \Carbon_Fields\Service\Template_Service;
use \Carbon_Fields\Service\Meta_Query_Service;
use \Carbon_Fields\Service\Legacy_Storage_Service;
use \Carbon_Fields\Service\REST_API_Service;
use \Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;

use \Carbon_Fields\REST_API\Router as REST_API_Router;
use \Carbon_Fields\REST_API\Decorator as REST_API_Decorator;


/**
 * Holds a static reference to the ioc container
 */
class App {

	/**
	 * Flag if Carbon Fields has been booted
	 * 
	 * @var bool
	 */
	public $booted = false;

	/**
	 * Inversion of Control container instance
	 * 
	 * @var PimpleContainer
	 */
	protected $ioc = null;

	/**
	 * Singleton implementation
	 *
	 * @return App
	 */
	public static function instance() {
		static $instance = null;
		if ( $instance === null ) {
			$instance = new static();
		}
		return $instance;
	}

	/**
	 * Get default IoC container dependencies
	 * 
	 * @return PimpleContainer
	 */
	protected static function get_default_ioc() {
		$ioc = new PimpleContainer();

		$ioc['loader'] = function( $ioc ) {
			return new Loader( $ioc['template_service'], $ioc['sidebar_manager'], $ioc['container_repository'], $ioc['legacy_storage_service'], $ioc['rest_api_service'] );
		};

		$ioc['container_repository'] = function() {
			return new ContainerRepository();
		};

		$ioc['key_toolset'] = function() {
			return new Key_Toolset();
		};

		$ioc['template_service'] = function() {
			return new Template_Service();
		};

		$ioc['sidebar_manager'] = function() {
			return new Sidebar_Manager();
		};

		$ioc['rest_api_router'] = function( $ioc ) {
			return new REST_API_Router( $ioc['container_repository'] );
		};

		$ioc['rest_api_decorator'] = function( $ioc ) {
			return new REST_API_Decorator( $ioc['container_repository'] );
		};

		/* Services */

		$ioc['meta_query_service'] = function( $ioc ) {
			return new Meta_Query_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		$ioc['legacy_storage_service'] = function( $ioc ) {
			return new Legacy_Storage_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		$ioc['rest_api_service'] = function( $ioc ) {
			return new REST_API_Service( $ioc['rest_api_router'], $ioc['rest_api_decorator'] );
		};

		return $ioc;
	}

	/**
	 * Resolve a dependency through IoC
	 *
	 * @param string $key
	 * @return mixed
	 */
	public static function resolve( $key ) {
		return static::instance()->ioc[ $key ];
	}

	/**
	 * Resolve a service through IoC
	 *
	 * @param string $service_name
	 * @return mixed
	 */
	public static function service( $service_name ) {
		return static::resolve( $service_name . '_service' );
	}

	/**
	 * Replace the ioc container for the App
	 * 
	 * @param  PimpleContainer $ioc
	 */
	public function install( PimpleContainer $ioc ) {
		$this->ioc = $ioc;
	}

	/**
	 * Boot Carbon Fields with default IoC dependencies
	 */
	public static function boot() {
		if ( static::is_booted() ) {
			return;
		}

		if ( defined( __NAMESPACE__ . '\VERSION' ) ) {
			return; // Possibly attempting to load multiple versions of Carbon Fields; bail in favor of already loaded version
		}

		static::instance()->install( static::get_default_ioc() );
		static::resolve( 'loader' )->boot();
		static::instance()->booted = true;
	}

	/**
	 * Check if Carbon Fields has booted
	 */
	public static function is_booted() {
		return static::instance()->booted;
	}

	/**
	 * Throw exception if Carbon Fields has not been booted
	 */
	public static function verify_boot() {
		if ( ! static::is_booted() ) {
			throw new \Exception( 'You must call \Carbon_Fields\App::boot() in a suitable WordPress hook before using Carbon Fields.' );
		}
	}
}