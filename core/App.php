<?php

namespace Carbon_Fields;

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\Loader\Loader;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Key_Toolset\Key_Toolset;
use \Carbon_Fields\Templater\Templater;
use \Carbon_Fields\Service\Meta_Query_Service;
use \Carbon_Fields\Service\Legacy_Storage_Service;
use \Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;

/**
 * Holds a static reference to the ioc container
 */
class App {

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
			return new Loader( $ioc['templater'], $ioc['sidebar_manager'], $ioc['container_repository'], $ioc['legacy_storage_service'] );
		};

		$ioc['container_repository'] = function( $ioc ) {
			return new ContainerRepository();
		};

		$ioc['key_toolset'] = function( $ioc ) {
			return new Key_Toolset();
		};

		$ioc['templater'] = function( $ioc ) {
			return new Templater();
		};

		$ioc['sidebar_manager'] = function( $ioc ) {
			return new Sidebar_Manager();
		};

		/* Services */

		$ioc['meta_query_service'] = function( $ioc ) {
			return new Meta_Query_Service( $ioc['container_repository'], $ioc['key_toolset'] );
		};

		$ioc['legacy_storage_service'] = function( $ioc ) {
			return new Legacy_Storage_Service( $ioc['container_repository'], $ioc['key_toolset'] );
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
		return static::instance()->ioc[$key];
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
		static::instance()->install( static::get_default_ioc() );
		static::resolve( 'loader' )->boot();
	}
}