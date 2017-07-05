<?php

namespace Carbon_Fields;

use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Helper\Helper;
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

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Holds a static reference to the ioc container
 */
final class Carbon_Fields {

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
	public $ioc = null;

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
	 * Resolve a dependency through IoC
	 *
	 * @param  string      $key
	 * @param  string|null $subcontainer Subcontainer to look into
	 * @return mixed
	 */
	public static function resolve( $key, $subcontainer = null ) {
		$ioc = static::instance()->ioc;
		if ( $subcontainer !== null ) {
			if ( ! isset( $ioc[ $subcontainer ] ) ) {
				return null;
			}
			$ioc = $ioc[ $subcontainer ];
		}
		return $ioc[ $key ];
	}

	/**
	 * Resolve a dependency through IoC with arguments
	 *
	 * @param  string $identifier   Key to resolve from the container
	 * @param  array  $arguments    Key-value array of arguments
	 * @param  string $subcontainer The container to resolve from
	 * @return mixed
	 */
	public static function resolve_with_arguments( $identifier, $arguments, $subcontainer = null ) {
		$local_container = $subcontainer ? static::resolve( $subcontainer ) : static::instance()->ioc;
		$container = new PimpleContainer();
		$container['root_container'] = static::instance()->ioc;
		$container['local_container'] = $local_container;
		$container['arguments'] = $arguments;
		$container['object'] = $local_container->raw( $identifier );
		return $container['object'];
	}

	/**
	 * Resolve a service through IoC
	 *
	 * @param string $service_name
	 * @return mixed
	 */
	public static function service( $service_name ) {
		return static::resolve( $service_name, 'services' );
	}

	/**
	 * Check if a dependency is registered
	 *
	 * @param  string      $key
	 * @param  string|null $subcontainer Subcontainer to look into
	 * @return bool
	 */
	public static function has( $key, $subcontainer = null ) {
		$ioc = static::instance()->ioc;
		if ( $subcontainer !== null ) {
			if ( ! isset( $ioc[ $subcontainer ] ) ) {
				return false;
			}
			$ioc = $ioc[ $subcontainer ];
		}
		return isset( $ioc[ $key ] );
	}

	/**
	 * Extend Carbon Fields by adding a new entity (container condition etc.)
	 *
	 * @param string $class    Extension class name
	 * @param string $extender Extending callable
	 */
	public static function extend( $class, $extender ) {
		$type_dictionary = array(
			'_Container' => 'containers',
			'_Field' => 'fields',
			'_Condition' => 'container_conditions',
		);

		$extension_suffix = '';
		$extension_subcontainer = '';
		foreach ( $type_dictionary as $suffix => $subcontainer ) {
			if ( substr( $class, -strlen( $suffix ) ) === $suffix ) {
				$extension_suffix = $suffix;
				$extension_subcontainer = $subcontainer;
			}
		}

		if ( empty( $extension_suffix ) ) {
			Incorrect_Syntax_Exception::raise( 'Could not determine "' . $class . '" extension type. Extension classes must have one of the following suffixes: ' . implode( ', ', array_keys( $type_dictionary ) ) );
			return;
		}

		$identifier = Helper::class_to_type( $class, $extension_suffix );
		$ioc = static::instance()->ioc[ $extension_subcontainer ];
		$ioc[ $identifier ] = $ioc->factory( $extender );
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
	 * Resolve the public url of a directory inside WordPress
	 *
	 * @param  string $directory
	 * @return string
	 */
	public static function directory_to_url( $directory ) {
		$url = \trailingslashit( $directory );
		$count = 0;

		# Sanitize directory separator on Windows
		$url = str_replace( '\\' ,'/', $url );

		$possible_locations = array(
			WP_PLUGIN_DIR => \plugins_url(), # If installed as a plugin
			WP_CONTENT_DIR => \content_url(), # If anywhere in wp-content
			ABSPATH => \site_url( '/' ), # If anywhere else within the WordPress installation
		);

		foreach ( $possible_locations as $test_dir => $test_url ) {
			$test_dir_normalized = str_replace( '\\' ,'/', $test_dir );
			$url = str_replace( $test_dir_normalized, $test_url, $url, $count );

			if ( $count > 0 ) {
				return \untrailingslashit( $url );
			}
		}

		return ''; // return empty string to avoid exposing half-parsed paths
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
	 * @param Listener $listener
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

		$ioc['containers'] = function() {
			return new PimpleContainer();
		};

		$ioc['fields'] = function() {
			return new PimpleContainer();
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
		$ioc['services'] = function() {
			return new PimpleContainer();
		};

		$ioc['services']['meta_query'] = function() use ( $ioc ) {
			return new Meta_Query_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		$ioc['services']['legacy_storage'] = function() use ( $ioc ) {
			return new Legacy_Storage_Service_v_1_5( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		$ioc['services']['rest_api'] = function() use ( $ioc ) {
			return new REST_API_Service( $ioc['rest_api_router'], $ioc['rest_api_decorator'] );
		};

		/* Events */
		$ioc['event_emitter'] = function() {
			return new Emitter();
		};

		$ioc['event_persistent_listener'] = function() {
			return new PersistentListener();
		};

		$ioc['event_single_event_listener'] = function() {
			return new SingleEventListener();
		};

		$ioc->register( new \Carbon_Fields\Provider\Container_Condition_Provider() );

		return $ioc;
	}
}