<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base datastore.
 * Defines the key datastore methods and their default implementations.
 */
abstract class Datastore implements Datastore_Interface {
	/**
	 * Initialize the datastore.
	 **/
	public function __construct() {
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
	 * @return Datastore $datastore
	 **/
	public static function factory( $type ) {
		$type = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $type ) ) );

		$class = __NAMESPACE__ . '\\' . $type . '_Datastore';

		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown data store type "' . $type . '".' );
		}

		$field = new $class();

		return $field;
	}

	/**
	 * An alias of factory().
	 *
	 * @see Datastore::factory()
	 **/
	public static function make( $type ) {
		return self::factory( $type );
	}
}
