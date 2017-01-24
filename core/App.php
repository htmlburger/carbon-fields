<?php

namespace Carbon_Fields;

use \Carbon_Fields\Pimple\Container as PimpleContainer;
use \Carbon_Fields\Loader\Loader;
use \Carbon_Fields\Templater\Templater;
use \Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;
use \Carbon_Fields\Libraries\Plugin_Update_Warning\Plugin_Update_Warning;
use \Carbon_Fields\Container\Repository as ContainerRepository;

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

	public static function ioc( $key ) {
		return static::instance()->ioc[$key];
	}

	public static function boot() {
		App::ioc( 'loader' )->boot();
	}

	public function __construct() {
		$ioc = new PimpleContainer();

		$ioc['loader'] = function( $c ) {
			return new Loader( $c['templater'], $c['sidebar_manager'], $c['plugin_update_warning'], $c['container_repository'] );
		};

		$ioc['templater'] = function( $c ) {
			return new Templater();
		};

		$ioc['sidebar_manager'] = function( $c ) {
			return new Sidebar_Manager();
		};

		$ioc['plugin_update_warning'] = function( $c ) {
			return new Plugin_Update_Warning();
		};

		$ioc['container_repository'] = function( $c ) {
			return new ContainerRepository();
		};

		$this->ioc = $ioc;
	}
}