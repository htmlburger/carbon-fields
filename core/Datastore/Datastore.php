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
	 * Value key to use for fields which need to be kept "alive" when they have no values stored (e.g. Set field with 0 checkboxes checked)
	 * Required to determine whether a field should use it's default value or stay blank
	 **/
	const KEEPALIVE_KEY = '_empty';

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
	 * Return array of ancestors (ordered top-bottom) with the field name appended to the end
	 **/
	public static function get_full_hierarchy_for_field( Field $field ) {
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		return $full_hierarchy;
	}

	/**
	 * Return array of ancestor entry indexes (ordered top-bottom)
	 * Indexes show which entry/group this field belongs to in a Complex_Field
	 **/
	public static function get_full_hierarchy_index_for_field( Field $field ) {
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );
		return $full_hierarchy_index;
	}

	/**
	 * Return a storage key depending on which is the root field
	 * Used to delete entire trees of values (Complex_Field)
	 **/
	public static function get_storage_key_root( Field $field ) {
		$full_hierarchy = static::get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = static::get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . '|';

		return $storage_key;
	}

	/**
	 * Return a storage key up to the root and hierarchy segments
	 * Used to get and delete multiple values for a single field
	 **/
	public static function get_storage_key_prefix_for_field( Field $field ) {
		$full_hierarchy = static::get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = static::get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . '|' . implode( ':', $parents ) . '|' . implode( ':', $full_hierarchy_index ) . '|';

		// hash the parents array to avoid hitting key storage limits - downside is you cannot determine what is the field hierarchy from the key itself
		// $storage_key_hashed = '_' . $first_parent . '|' . md5( implode( ':', $parents ) ) . '|' . implode( ':', $full_hierarchy_index ) . '|';

		return $storage_key;
	}

	/**
	 * Return a full storage key for a single field value
	 **/
	public static function get_storage_key_for_field( Field $field, $value_group_index, $value_key ) {
		$storage_key = static::get_storage_key_prefix_for_field( $field ) . $value_group_index . '|' . $value_key;
		return $storage_key;
	}

	/**
	 * Return a raw value set from an array of {key->..., value->...} objects such as the ones from query results
	 **/
	public static function storage_array_to_raw_value_set( $storage_array ) {
		$keepalive = false;
		$raw_value_set = array();

		foreach ( $storage_array as $row ) {
			$pieces = explode( '|', $row->key );
			$value_group = $pieces[ count( $pieces ) - 2 ];
			$value_key = $pieces[ count( $pieces ) - 1 ];
			if ( $value_key == static::KEEPALIVE_KEY ) {
				$keepalive = true;
				continue;
			}

			if ( !isset( $raw_value_set[ $value_group ] ) ) {
				$raw_value_set[ $value_group ] = array();
			}
			$raw_value_set[ $value_group ][ $value_key ] = $row->value;
		}

		if ( empty( $raw_value_set ) && !$keepalive ) {
			$raw_value_set = null;
		}
		return $raw_value_set;
	}
}
