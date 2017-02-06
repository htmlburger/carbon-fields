<?php

namespace Carbon_Fields\Datastore;

use \Carbon_Fields\App;
use \Carbon_Fields\Helper\Helper;
use \Carbon_Fields\Field\Field;
use \Carbon_Fields\Value_Set\Value_Set;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Key Value Datastore
 * Provides basic functionality to save in a key-value storage
 *
 * Key schema:
 * _[root_field_name]|[parent:field:names:separated:with:colons]|[complex:group:indexes:separated:with:colons]|[value_index]|[value_key/property]
 *
 * Example:
 * _countries|major_cities:name|0:1|0|value
 * This key is for a field called "name" inside the complex field "major_cities" with group index 1, which is inside the complex field "countries" with group index 0
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
	 *
	 * @return array
	 **/
	protected function get_full_hierarchy_for_field( Field $field ) {
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_base_name() ) );
		return $full_hierarchy;
	}

	/**
	 * Return array of ancestor entry indexes (ordered top-bottom)
	 * Indexes show which entry/group this field belongs to in a Complex_Field
	 *
	 * @return array
	 **/
	protected function get_full_hierarchy_index_for_field( Field $field ) {
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );
		return $full_hierarchy_index;
	}

	/**
	 * Return a storage key for a simple root field
	 *
	 * @return string
	 **/
	protected function get_storage_key_for_simple_root_field( Field $field ) {
		$storage_key = '_' . $field->get_name();
		return $storage_key;
	}

	/**
	 * Return a storage key depending on which is the root field
	 * Used to delete entire trees of values (Complex_Field)
	 *
	 * @return string
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
	 *
	 * @return string
	 **/
	protected function get_storage_key_prefix( Field $field ) {
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );
		$full_hierarchy_index = $this->get_full_hierarchy_index_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . 
			$first_parent . 
			static::SEGMENT_GLUE . 
			implode( static::SEGMENT_VALUE_GLUE, $parents ) . 
			static::SEGMENT_GLUE . 
			implode( static::SEGMENT_VALUE_GLUE, $full_hierarchy_index ) . 
			static::SEGMENT_GLUE;

		return $storage_key;
	}

	/**
	 * Return a full storage key for a single field value
	 *
	 * @return string
	 **/
	public function get_storage_key( Field $field, $value_group_index, $value_key ) {
		if ( $field->is_simple_root_field() && $value_key === Value_Set::VALUE_KEY ) {
			return $this->get_storage_key_for_simple_root_field( $field );
		}
		$storage_key = $this->get_storage_key_prefix( $field ) . $value_group_index . static::SEGMENT_GLUE . $value_key;
		return $storage_key;
	}

	/**
	 * Return a full storage key with optional wildcards for entry and value indexes
	 *
	 * @return string
	 **/
	public function get_storage_key_with_index_wildcards( Field $field, $value_key = Value_Set::VALUE_KEY, $wildcard = '%' ) {
		if ( $field->is_simple_root_field() && $value_key === Value_Set::VALUE_KEY ) {
			return $this->get_storage_key_for_simple_root_field( $field );
		}

		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$hierarchy_index = !empty( $field->get_hierarchy() ) ? $wildcard : '0';
		$value_group_index = $wildcard;

		$storage_key = '_' . 
			$first_parent . 
			static::SEGMENT_GLUE . 
			implode( static::SEGMENT_VALUE_GLUE, $parents ) . 
			static::SEGMENT_GLUE . 
			$hierarchy_index . 
			static::SEGMENT_GLUE . 
			$value_group_index . 
			static::SEGMENT_GLUE . 
			$value_key;
		return $storage_key;
	}

	/**
	 * Return an array of storage key patterns for use when getting values from storage
	 *
	 * @return array
	 **/
	public function get_storage_key_getter_patterns( Field $field ) {
		$patterns = array();

		if ( $field->is_simple_root_field() ) {
			$key = $this->get_storage_key_for_simple_root_field( $field );
			$patterns[ $key ] = static::PATTERN_COMPARISON_EQUAL;
		}
		
		$full_hierarchy = $this->get_full_hierarchy_for_field( $field );

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = '_' . $first_parent . static::SEGMENT_GLUE;
		if ( empty( $parents ) ) {
			$patterns[ $storage_key ] = static::PATTERN_COMPARISON_STARTS_WITH;
		} else {
			$key = $storage_key . implode( static::SEGMENT_VALUE_GLUE, $parents ) . static::SEGMENT_GLUE;
			$patterns[ $key ] = static::PATTERN_COMPARISON_STARTS_WITH;

			$key = $storage_key . implode( static::SEGMENT_VALUE_GLUE, $parents ) . static::SEGMENT_VALUE_GLUE;
			$patterns[ $key ] = static::PATTERN_COMPARISON_STARTS_WITH;
		}

		return $patterns;
	}

	/**
	 * Return an array of storage key patterns for use when deleting values from storage
	 *
	 * @return array
	 **/
	public function get_storage_key_deleter_patterns( Field $field ) {
		$patterns = array();
		
		if ( $field->is_simple_root_field() ) {
			$patterns[ $this->get_storage_key_for_simple_root_field( $field ) ] = static::PATTERN_COMPARISON_EQUAL;
		}
		
		if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {
			$patterns[ $this->get_storage_key_root( $field ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		} else {
			$patterns[ $this->get_storage_key_prefix( $field ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		}

		return $patterns;
	}

	/**
	 * Convert an array of storage key patterns to a parentheses-enclosed sql comparison
	 *
	 * @return string
	 **/
	protected function storage_key_patterns_to_sql( $column, $patterns ) {
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
	 * Check if a storage key matches any comparison pattern
	 * 
	 * @param  string $storage_key
	 * @param  array $patterns
	 * @return boolean
	 */
	protected function storage_key_matches_any_pattern( $storage_key, $patterns ) {
		foreach ( $patterns as $key => $type ) {
			switch ( $type ) {
				case Key_Value_Datastore::PATTERN_COMPARISON_EQUAL:
					if ( $storage_key === $key ) {
						return true;
					}
					break;
				case Key_Value_Datastore::PATTERN_COMPARISON_STARTS_WITH:
					$key_length = strlen( $key );
					if ( substr( $storage_key, 0, $key_length ) === $key ) {
						return true;
					}
					break;
				default:
					Incorrect_Syntax_Exception::raise( 'Unsupported storage key pattern type used: "' . $type . '"' );
					break;
			}
		}
		return false;
	}

	/**
	 * Raw Value Set Tree schema:
	 * array(
	 *     [field_name] => array(
	 *         'value_set'=>[raw_value_set],
	 *         'groups'=>array(
	 *             array(
	 *                 [recursion]
	 *             ),
	 *             ...
	 *         ),
	 *     ),
	 *     ...
	 * )
	 *
	 * @return array
	 */
	protected function cascading_storage_array_to_raw_value_set_tree( $storage_array ) {
		$tree = array();

		foreach ( $storage_array as $row ) {
			$key_segments = explode( static::SEGMENT_GLUE, substr( $row->key, 1) ); // drop the first underscore character
			$root = $key_segments[0];
			$parents = array();
			$group_indexes = array( 0 );
			$value_index = 0;
			$property = Value_Set::VALUE_KEY;

			if ( count( $key_segments ) === static::TOTAL_SEGMENTS ) {
				if ( !empty( $key_segments[1] ) ) {
					$parents = explode( static::SEGMENT_VALUE_GLUE, $key_segments[1] );
				}
				if ( !empty( $key_segments[2] ) ) {
					$group_indexes = array_map( 'intval', explode( static::SEGMENT_VALUE_GLUE, $key_segments[2] ) );
				}
				$value_index = intval( $key_segments[3] );
				$property = $key_segments[4];
			}

			if ( $property === static::KEEPALIVE_KEY ) {
				continue;
			}

			$full_hierarchy = array_merge( array( $root ), $parents );
			$level = &$tree;
			foreach ( $full_hierarchy as $i => $field_name ) {
				$index = isset( $group_indexes[ $i ] ) ? $group_indexes[ $i ] : -1;

				if ( !isset( $level[ $field_name ] ) ) {
					$level[ $field_name ] = array();
				}
				$level = &$level[ $field_name ];

				if ( $i < count( $full_hierarchy ) - 1 ) {
					if ( !isset( $level[ 'groups' ] ) ) {
						$level[ 'groups' ] = array();
					}
					$level = &$level[ 'groups' ];

					if ( !isset( $level[ $index ] ) ) {
						$level[ $index ] = array();
					}
					$level = &$level[ $index ];
				} else  {
					if ( !isset( $level[ 'value_set' ] ) ) {
						$level[ 'value_set' ] = array();
					}
					$level = &$level[ 'value_set' ];

					if ( !isset( $level[ $value_index ] ) ) {
						$level[ $value_index ] = array();
					}
					$level = &$level[ $value_index ];

					$level[ $property ] = $row->value;
				}
			}
			$level = &$tree;
		}

		Helper::ksort_recursive( $tree );
		return $tree;
	}

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 * @return array Array of {key, value} objects
	 */
	protected abstract function get_storage_array( Field $field, $storage_key_patterns );

	/**
	 * Load the field value(s)
	 *
	 * @param Field $field The field to get value(s) for
	 */
	public function load( Field $field ) {
		$storage_key_patterns = $this->get_storage_key_getter_patterns( $field );
		$cascading_storage_array = $this->get_storage_array( $field, $storage_key_patterns );
		$raw_value_set_tree = $this->cascading_storage_array_to_raw_value_set_tree( $cascading_storage_array );
		return $raw_value_set_tree;
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
