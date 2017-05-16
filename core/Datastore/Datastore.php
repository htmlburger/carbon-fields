<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base datastore.
 * Defines the key datastore methods and their default implementations.
 */
abstract class Datastore implements Datastore_Interface {

	/**
	 * Initialize the datastore.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Initialization tasks for concrete datastores.
	 *
	 * @abstract
	 */
	abstract public function init();

	/**
	 * Create a new datastore of type $raw_type.
	 *
	 * @param string $raw_type
	 * @return Datastore_Interface
	 */
	public static function factory( $raw_type ) {
		$type = Helper::normalize_type( $raw_type );
		$class = Helper::type_to_class( $type, __NAMESPACE__, '_Datastore' );
		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown datastore type "' . $raw_type . '".' );
			return null;
		}

		$datastore = new $class();

		return $datastore;
	}

	/**
	 * An alias of factory().
	 *
	 * @see Datastore::factory()
	 * @return Datastore_Interface
	 */
	public static function make( $type ) {
		return static::factory( $type );
	}
}
