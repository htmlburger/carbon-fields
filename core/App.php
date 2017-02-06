<?php

namespace Carbon_Fields;

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\Loader\Loader;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Templater\Templater;
use \Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;
use \Carbon_Fields\Libraries\Meta_Query_Service\Meta_Query_Service;
use \Carbon_Fields\Libraries\Legacy_Storage_Service\Legacy_Storage_Service;

/**
 * Holds a static reference to the ioc container
 */
class App {

	protected $ioc = null;

	protected static $instance = null;

	public static function instance() {
		if ( static::$instance === null ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	protected static function get_default_ioc() {
		$ioc = new PimpleContainer();

		$ioc['loader'] = function( $c ) {
			return new Loader( $c['templater'], $c['sidebar_manager'], $c['container_repository'], $c['meta_query_service'] );
		};

		$ioc['container_repository'] = function( $c ) {
			return new ContainerRepository();
		};

		$ioc['templater'] = function( $c ) {
			return new Templater();
		};

		$ioc['sidebar_manager'] = function( $c ) {
			return new Sidebar_Manager();
		};

		$ioc['meta_query_service'] = function( $c ) {
			return new Meta_Query_Service( $c['container_repository'] );
		};

		$ioc['legacy_storage_service'] = function( $c ) {
			return new Legacy_Storage_Service( $c['container_repository'] );
		};

		return $ioc;
	}

	public static function ioc( $key ) {
		return static::instance()->ioc[$key];
	}

	public function install( PimpleContainer $ioc ) {
		$this->ioc = $ioc;
	}

	public static function boot() {
		static::instance()->install( static::get_default_ioc() );
		static::ioc( 'loader' )->boot();
	}
}