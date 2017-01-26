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
		$value_type = $field->expected_value_type;
		$value_set = $this->get_value_set_for_field( $field );
		$value = '';

		switch ( $value_type ) {
			case Field::VALUE_TYPE_MULTIPLE_VALUES:
				$value = array_map( function( $set ) {
					return $set['value'];
				}, $value_set );
				break;
			case Field::VALUE_TYPE_MULTIPLE_KEYS:
				$value = array();
				if ( !empty( $value_set ) ) {
					$value = $value_set[0];
				}
				break;
			case Field::VALUE_TYPE_VALUE_SET:
				$value = $value_set;
				break;

			case Field::VALUE_TYPE_SINGLE_VALUE:
			default:
				if ( !empty( $value_set ) ) {
					$value = $value_set[0]['value'];
				}
				break;
		}

		return $value;
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to load value(s) in.
	 */
	public function load( Field $field ) {
		$field->set_value( $this->get_value_for_field( $field ) );
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

	protected function database_results_to_value_set( $results ) {
		$value_set = array();

		foreach ( $results as $row ) {
			$pieces = explode( '|', $row->field_key );
			$value_group = $pieces[ count( $pieces ) - 2 ];
			$value_key = $pieces[ count( $pieces ) - 1 ];

			if ( !isset( $value_set ) ) {
				$value_set[$value_group] = array();
			}
			$value_set[$value_group][$value_key] = $row->field_value;
		}

		return $value_set;
	}
}
