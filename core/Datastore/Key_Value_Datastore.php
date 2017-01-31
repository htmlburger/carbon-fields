<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Key Value Datastore
 * Provides basic functionality to save in a key-value storage
 */
abstract class Key_Value_Datastore extends Datastore {

	/**
	 * Value key to use for fields which need to be kept "alive" when they have no values stored (e.g. Set field with 0 checkboxes checked)
	 * Required to determine whether a field should use it's default value or stay blank
	 **/
	const KEEPALIVE_KEY = '_empty';

	/**
	 * Glue characters between segments in keys
	 **/
	const SEGMENT_GLUE = '|';

	/**
	 * Glue characters between segments values in keys
	 **/
	const SEGMENT_VALUE_GLUE = ':';

	/**
	 * Number of segments in a key
	 **/
	const TOTAL_SEGMENTS = 5;

	/**
	 * "Equal" storage key pattern comparison type constant
	 **/
	const PATTERN_COMPARISON_EQUAL = '=';

	/**
	 * "Starts with" storage key pattern comparison type constant
	 **/
	const PATTERN_COMPARISON_STARTS_WITH = '^';

	/**
	 * Return array of ancestors (ordered top-bottom) with the field name appended to the end
	 **/
	protected function get_full_hierarchy_for_field( Field $field ) {
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		return $full_hierarchy;
	}

	/**
	 * Return array of ancestor entry indexes (ordered top-bottom)
	 * Indexes show which entry/group this field belongs to in a Complex_Field
	 **/
	protected function get_full_hierarchy_index_for_field( Field $field ) {
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );
		return $full_hierarchy_index;
	}

	/**
	 * Return whether the field is a root field and holds a single value
	 **/
	protected function is_simple_root_field( Field $field ) {
		return (
			empty( $field->get_hierarchy() )
			&&
			(
				$field->value()->get_type() === Value_Set::TYPE_SINGLE_VALUE
				||
				$field->value()->get_type() === Value_Set::TYPE_MULTIPLE_KEYS
			)
		);
	}

	/**
	 * Return a storage key for a simple root field
	 **/
	protected function get_storage_key_for_simple_root_field( Field $field ) {
		$storage_key = '_' . $field->get_name();
		return $storage_key;
	}

	/**
	 * Return a storage key depending on which is the root field
	 * Used to delete entire trees of values (Complex_Field)
	 **/
	protected function get_storage_key_root( Field $field ) {
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = $this->get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . static::SEGMENT_GLUE;

		return $storage_key;
	}

	/**
	 * Return a storage key up to the root and hierarchy segments
	 * Used to get and delete multiple values for a single field
	 **/
	protected function get_storage_key_prefix( Field $field ) {
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = $this->get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . static::SEGMENT_GLUE . implode( static::SEGMENT_VALUE_GLUE, $parents ) . static::SEGMENT_GLUE . implode( static::SEGMENT_VALUE_GLUE, $full_hierarchy_index ) . static::SEGMENT_GLUE;

		// hash the parents array to avoid hitting key storage limits - downside is you cannot determine what is the field hierarchy from the key itself
		// $storage_key_hashed = '_' . $first_parent . static::SEGMENT_GLUE . md5( implode( static::SEGMENT_VALUE_GLUE, $parents ) ) . static::SEGMENT_GLUE . implode( static::SEGMENT_VALUE_GLUE, $full_hierarchy_index ) . static::SEGMENT_GLUE;

		return $storage_key;
	}

	/**
	 * Return a full storage key for a single field value
	 **/
	public function get_storage_key( Field $field, $value_group_index, $value_key ) {
		if ( $this->is_simple_root_field( $field ) && $value_key === Value_Set::VALUE_KEY ) {
			return $this->get_storage_key_for_simple_root_field( $field );
		}
		$storage_key = $this->get_storage_key_prefix( $field ) . $value_group_index . static::SEGMENT_GLUE . $value_key;
		return $storage_key;
	}

	public function get_storage_key_getter_patterns( Field $field ) {
		$patterns = array();
		
		if ( $this->is_simple_root_field( $field ) ) {
			$patterns[ $this->get_storage_key_for_simple_root_field( $field ) ] = static::PATTERN_COMPARISON_EQUAL;
		}

		$patterns[ $this->get_storage_key_prefix( $field ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		return $patterns;
	}

	public function get_storage_key_deleter_patterns( Field $field ) {
		$patterns = array();
		
		if ( $this->is_simple_root_field( $field ) ) {
			$patterns[ $this->get_storage_key_for_simple_root_field( $field ) ] = static::PATTERN_COMPARISON_EQUAL;
		}
		
		if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {
			$patterns[ $this->get_storage_key_root( $field ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		} else {
			$patterns[ $this->get_storage_key_prefix( $field ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		}

		return $patterns;
	}

	public function storage_key_patterns_to_sql( $column, $patterns ) {
		$sql = array();

		foreach ( $patterns as $storage_key => $type ) {
			$comparison = '';
			switch ( $type ) {
				case static::PATTERN_COMPARISON_EQUAL:
					$comparison = $column . ' = "' . esc_sql( $storage_key ) . '" ';
					break;
				case static::PATTERN_COMPARISON_STARTS_WITH:
					$comparison = $column . ' LIKE "' . esc_sql( $storage_key ) . '%" ';
					break;
				default:
					Incorrect_Syntax_Exception::raise( 'Unsupported storage key pattern type used: "' . $type . '"' );
					break;
			}

			$sql[] = $comparison;
		}

		return ' ( ' . implode( ' OR ', $sql ) . ' ) ';
	}

	/**
	 * Return a raw value set from an array of {key->..., value->...} objects such as the ones from query results
	 *
	 * @return array
	 **/
	protected function storage_array_to_raw_value_set( $storage_array ) {
		$keepalive = false;
		$raw_value_set = array();

		foreach ( $storage_array as $row ) {
			$pieces = explode( static::SEGMENT_GLUE, $row->key );
			$value_group = 0;
			$value_key = Value_Set::VALUE_KEY;

			if ( count( $pieces ) === static::TOTAL_SEGMENTS ) {
				$value_group = $pieces[ count( $pieces ) - 2 ];
				$value_key = $pieces[ count( $pieces ) - 1 ];
			}

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

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 * @return array Array of {key, value} objects
	 */
	protected abstract function get_storage_array_for_field( Field $field );

	/**
	 * Load the field value(s)
	 *
	 * @param Field $field The field to load value(s) in.
	 */
	public function load( Field $field ) {
		$storage_array = $this->get_storage_array_for_field( $field );
		$raw_value_set = $this->storage_array_to_raw_value_set( $storage_array );
		$field->set_value( $raw_value_set );
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 */
	protected abstract function save_key_value_pair( $key, $value );

	/**
	 * Save the field value(s)
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$value_set = $field->value()->get_set();
		if ( $value_set === null ) {
			return;
		}

		if ( empty( $value_set ) && $field->value()->keepalive() ) {
			$storage_key = $this->get_storage_key( $field, 0, static::KEEPALIVE_KEY );
			$this->save_key_value_pair( $storage_key, '' );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = $this->get_storage_key( $field, $value_group_index, $value_key );
				$this->save_key_value_pair( $storage_key, $value );
			}
		}
	}
}
