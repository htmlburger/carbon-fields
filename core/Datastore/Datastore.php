<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;
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
			Incorrect_Syntax_Exception::raise( 'Unknown datastore type "' . $type . '".' );
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
		return static::factory( $type );
	}

	/**
	 * Return the first field value found
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function get_value_for_field( Field $field ) {
		$values = $this->get_values_for_field( $field );
		if ( !empty( $values ) ) {
			return $values[0];
		}
		return '';
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to load value(s) in.
	 */
	public function load( Field $field, $multiple_values = false ) {
		if ( $multiple_values ) {
			$field->set_value( $this->get_values_for_field( $field ) );
		} else {
			$field->set_value( $this->get_value_for_field( $field ) );
		}
	}

	protected function get_full_hierarchy_for_field( Field $field ) {
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		return $full_hierarchy;
	}

	protected function get_full_hierarchy_index_for_field( Field $field ) {
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );
		return $full_hierarchy_index;
	}

	protected function get_storage_key_root( Field $field ) {
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = $this->get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . '|';

		return $storage_key;
	}

	protected function get_storage_key_prefix_for_field( Field $field ) {
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = $this->get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . '|' . implode( ':', $parents ) . '|' . implode( ':', $full_hierarchy_index ) . '|';

		// hash the parents array to avoid hitting key storage limits
		$storage_key_hashed = '_' . $first_parent . '|' . md5( implode( ':', $parents ) ) . '|' . implode( ':', $full_hierarchy_index ) . '|';

		return $storage_key;
	}

	protected function get_storage_key_for_field( Field $field, $value_group_index, $value_key ) {
		$storage_key = $this->get_storage_key_prefix_for_field( $field ) . $value_group_index . '|' . $value_key;
		return $storage_key;
	}
}
