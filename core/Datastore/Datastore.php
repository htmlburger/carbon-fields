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
	 * The related object id
	 *
	 * @var integer
	 */
	protected $object_id = 0;

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
	 * Get the related object id
	 *
	 * @return integer
	 */
	public function get_object_id() {
		return $this->object_id;
	}

	/**
	 * Set the related object id
	 *
	 * @param  integer $object_id
	 */
	public function set_object_id( $object_id ) {
		$this->object_id = $object_id;
	}

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
	 * @see    Datastore::factory()
	 * @return Datastore_Interface
	 */
	public static function make() {
		return call_user_func_array( array( get_class(), 'factory' ), func_get_args() );
	}
}
