<?php

namespace Carbon_Fields;

use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Loader\Loader;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Toolset\WP_Toolset;
use Carbon_Fields\Service\Meta_Query_Service;
use Carbon_Fields\Service\Legacy_Storage_Service_v_1_5;
use Carbon_Fields\Service\REST_API_Service;
use Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;

use Carbon_Fields\REST_API\Router as REST_API_Router;
use Carbon_Fields\REST_API\Decorator as REST_API_Decorator;

use Carbon_Fields\Event\Emitter;
use Carbon_Fields\Event\PersistentListener;
use Carbon_Fields\Event\SingleEventListener;

/**
 * Holds a static reference to the ioc container
 */
class Carbon_Fields {

	/**
	 * An event emitter to facilitate events before the WordPress environment is guaranteed to be loaded
	 * 
	 * @var Emitter
	 */
	protected $emitter;

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
	 * @return Carbon_Fields\Carbon_Fields
	 */
	public static function instance() {
		static $instance = null;
		if ( $instance === null ) {
			$instance = new static();
		}
		return $instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->install( $this->get_default_ioc() );
	}

	/**
	 * Get default IoC container dependencies
	 * 
	 * @return PimpleContainer
	 */
	protected static function get_default_ioc() {
		$ioc = new PimpleContainer();

		$ioc['loader'] = function( $ioc ) {
			return new Loader( $ioc['sidebar_manager'], $ioc['container_repository'] );
		};

		$ioc['container_repository'] = function() {
			return new ContainerRepository();
		};

		$ioc['key_toolset'] = function() {
			return new Key_Toolset();
		};

		$ioc['wp_toolset'] = function() {
			return new WP_Toolset();
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
		$ioc['services'] = function( $ioc ) {
			$sioc = new PimpleContainer();

			$sioc['meta_query'] = function( $sioc ) use ( $ioc ) {
				return new Meta_Query_Service( $ioc['container_repository'], $ioc['key_toolset'] );
			};

			$sioc['legacy_storage'] = function( $sioc ) use ( $ioc ) {
				return new Legacy_Storage_Service_v_1_5( $ioc['container_repository'], $ioc['key_toolset'] );
			};

			$sioc['rest_api'] = function( $sioc ) use ( $ioc ) {
				return new REST_API_Service( $ioc['rest_api_router'], $ioc['rest_api_decorator'] );
			};

			return $sioc;
		};

		$ioc['event_emitter'] = function() {
			return new Emitter();
		};

		$ioc['event_persistent_listener'] = function() {
			return new PersistentListener();
		};

		$ioc['event_single_event_listener'] = function() {
			return new SingleEventListener();
		};

		\Carbon_Fields\Installer\Container_Condition_Installer::install( $ioc );

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
		$sioc = static::resolve( 'services' );
		return $sioc[ $service_name ];
	}

	/**
	 * Check if a dependency is registered
	 *
	 * @param string $key
	 * @return bool
	 */
	public static function has( $key ) {
		return isset( static::instance()->ioc[ $key ] );
	}

	/**
	 * Replace the ioc container for Carbon_Fields\Carbon_Fields
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

		static::resolve( 'loader' )->boot();
		static::instance()->booted = true;
		static::instance()->get_emitter()->emit( 'loaded' );
		do_action( 'carbon_fields_loaded' );
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
			throw new \Exception( 'You must call Carbon_Fields\Carbon_Fields::boot() in a suitable WordPress hook before using Carbon Fields.' );
		}
	}

	/**
	 * Get the event emitter
	 * 
	 * @return Emitter
	 */
	public function get_emitter() {
		if ( $this->emitter === null ) {
			$this->emitter = static::resolve( 'event_emitter' );
		}
		return $this->emitter;
	}

	/**
	 * Add a listener to an event
	 * 
	 * @param string   $event
	 * @return Listener $listener
	 */
	public static function add_listener( $event, $listener ) {
		return static::instance()->get_emitter()->add_listener( $event, $listener );
	}

	/**
	 * Remove a listener from any event
	 * 
	 * @param Listener $removed_listener
	 */
	public static function remove_listener( $listener ) {
		static::instance()->get_emitter()->remove_listener( $listener );
	}

	/**
	 * Add a persistent listener to an event
	 * 
	 * @param  string   $event    The event to listen for
	 * @param  string   $callable The callable to call when the event is broadcasted
	 * @return Listener
	 */
	public static function on( $event, $callable ) {
		return static::instance()->get_emitter()->on( $event, $callable );
	}

	/**
	 * Add a one-time listener to an event
	 *
	 * @param  string   $event    The event to listen for
	 * @param  string   $callable The callable to call when the event is broadcasted
	 * @return Listener
	 */
	public static function once( $event, $callable ) {
		return static::instance()->get_emitter()->once( $event, $callable );
	}
}