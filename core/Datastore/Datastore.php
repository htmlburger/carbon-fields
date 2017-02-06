<?php

namespace Carbon_Fields\Datastore;

use \Carbon_Fields\App;
use \Carbon_Fields\Field\Field;
use \Carbon_Fields\Service\Legacy_Storage_Service;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base datastore.
 * Defines the key datastore methods and their default implementations.
 */
abstract class Datastore implements Datastore_Interface {

	/**
	 * Legacy storage service to pull legacy data as a fallback
	 * 
	 * @var Legacy_Storage_Service
	 */
	protected $legacy_storage_service;

	/**
	 * Initialize the datastore.
	 **/
	public function __construct( Legacy_Storage_Service $legacy_storage_service ) {
		$this->legacy_storage_service = $legacy_storage_service;
		$this->init();
	}

	/**
	 * Initialization tasks for concrete datastores.
	 *
	 * @abstract
	 **/
	abstract public function init();

	/**
	 * Create a new datastore of type $type.
	 *
	 * @param string $type
	 * @return Datastore_Interface
	 **/
	public static function factory( $type ) {
		$type = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $type ) ) );

		$class = __NAMESPACE__ . '\\' . $type . '_Datastore';

		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown datastore type "' . $type . '".' );
		}

		$datastore = new $class( App::resolve( 'legacy_storage_service' ) );

		return $datastore;
	}

	/**
	 * An alias of factory().
	 *
	 * @see Datastore::factory()
	 * @return Datastore_Interface
	 **/
	public static function make( $type ) {
		return static::factory( $type );
	}
}
