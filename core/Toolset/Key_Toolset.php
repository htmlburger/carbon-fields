<?php

namespace Carbon_Fields\Toolset;

use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Provides common tools when dealing with storage keys
 *
 * Key schema:
 * _[root_field_name]|[parent:field:names:separated:with:colons]|[complex:group:indexes:separated:with:colons]|[value_index]|[property]
 *
 * Example:
 * _countries|major_cities:name|0:1|0|value
 * This key is for a field called "name" inside the complex field "major_cities" with group index 1, which is inside the complex field "countries" with group index 0
 */
class Key_Toolset {

	/**
	 * Prefix appended to all keys
	 */
	const KEY_PREFIX = '_';

	/**
	 * Value property to use for fields which need to be kept "alive" when they have no values stored (e.g. Set field with 0 checkboxes checked)
	 * Required to determine whether a field should use its default value or stay blank
	 *
	 * @var string
	 */
	const KEEPALIVE_PROPERTY = '_empty';

	/**
	 * Glue characters between segments in keys
	 */
	const SEGMENT_GLUE = '|';

	/**
	 * Glue characters between segments values in keys
	 */
	const SEGMENT_VALUE_GLUE = ':';

	/**
	 * Number of segments in a key
	 */
	const TOTAL_SEGMENTS = 5;

	/**
	 * "Equal" storage key pattern comparison type constant
	 */
	const PATTERN_COMPARISON_EQUAL = '=';

	/**
	 * "Starts with" storage key pattern comparison type constant
	 */
	const PATTERN_COMPARISON_STARTS_WITH = '^';

	/**
	 * Get the KEEPALIVE_PROPERTY
	 * Needed since php 5.3 cannot parse $instance->property::constant ( but parses $instance::constant )
	 *
	 * @return string
	 */
	public function get_keepalive_property() {
		return static::KEEPALIVE_PROPERTY;
	}

	/**
	 * Get sanitized hierarchy index for hierarchy
	 *
	 * @param array<string> $full_hierarchy
	 * @param array<int> $full_hierarchy_index
	 * @return array<int>
	 */
	public function get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index ) {
		$full_hierarchy_index = array_slice( $full_hierarchy_index, 0, count( $full_hierarchy ) - 1 );
		if ( empty( $full_hierarchy_index ) ) {
			$full_hierarchy_index = array();
		}
		$full_hierarchy_index = array_map( 'intval', $full_hierarchy_index );
		return $full_hierarchy_index;
	}

	/**
	 * Get a storage key for a simple root field
	 *
	 * @param string $field_base_name
	 * @return string
	 */
	protected function get_storage_key_for_simple_root_field( $field_base_name ) {
		$storage_key = static::KEY_PREFIX . $field_base_name;
		return $storage_key;
	}

	/**
	 * Get a storage key for the root field
	 * Suitable for deleting entire trees of values (e.g. Complex_Field)
	 *
	 * @param array $full_hierarchy
	 * @return string
	 */
	protected function get_storage_key_root( $full_hierarchy ) {
		$first_parent = array_shift( $full_hierarchy );
		$storage_key = static::KEY_PREFIX . $first_parent . static::SEGMENT_GLUE;
		return $storage_key;
	}

	/**
	 * Get a storage key up to the hierarchy index segment
	 * Suitable for getting and deleting multiple values for a single field
	 *
	 * @param array<string> $full_hierarchy
	 * @param array<int> $full_hierarchy_index
	 * @return string
	 */
	protected function get_storage_key_prefix( $full_hierarchy, $full_hierarchy_index ) {
		$full_hierarchy_index = $this->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index );
		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = static::KEY_PREFIX .
			$first_parent .
			static::SEGMENT_GLUE .
			implode( static::SEGMENT_VALUE_GLUE, $parents ) .
			static::SEGMENT_GLUE .
			implode( static::SEGMENT_VALUE_GLUE, $full_hierarchy_index ) .
			static::SEGMENT_GLUE;

		return $storage_key;
	}

	/**
	 * Get a full storage key for a single field value
	 *
	 * @param bool $is_simple_root_field
	 * @param array<string> $full_hierarchy
	 * @param array<int> $full_hierarchy_index
	 * @param int $value_group_index
	 * @param string $property
	 * @return string
	 */
	public function get_storage_key( $is_simple_root_field, $full_hierarchy, $full_hierarchy_index, $value_group_index, $property ) {
		$full_hierarchy_index = $this->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index );
		if ( $is_simple_root_field && $property === Value_Set::VALUE_PROPERTY ) {
			return $this->get_storage_key_for_simple_root_field( array_shift( $full_hierarchy ) );
		}
		$storage_key = $this->get_storage_key_prefix( $full_hierarchy, $full_hierarchy_index ) . intval( $value_group_index ) . static::SEGMENT_GLUE . $property;
		return $storage_key;
	}

	/**
	 * Get a full storage key with optional wildcards for entry and value indexes
	 *
	 * @param bool $is_simple_root_field
	 * @param array<string> $full_hierarchy
	 * @param string $property
	 * @param string $wildcard
	 * @return string
	 */
	public function get_storage_key_with_index_wildcards( $is_simple_root_field, $full_hierarchy, $property = Value_Set::VALUE_PROPERTY, $wildcard = '%' ) {
		if ( $is_simple_root_field && $property === Value_Set::VALUE_PROPERTY ) {
			return $this->get_storage_key_for_simple_root_field( array_shift( $full_hierarchy ) );
		}

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );
		$hierarchy = array_slice( $full_hierarchy, 0, -1 );
		$hierarchy_index = ! empty( $hierarchy ) ? $wildcard : '';
		$value_group_index = $wildcard;

		$storage_key = static::KEY_PREFIX .
			$first_parent .
			static::SEGMENT_GLUE .
			implode( static::SEGMENT_VALUE_GLUE, $parents ) .
			static::SEGMENT_GLUE .
			$hierarchy_index .
			static::SEGMENT_GLUE .
			$value_group_index .
			static::SEGMENT_GLUE .
			$property;
		return $storage_key;
	}

	/**
	 * Get an array of storage key patterns for use when getting values from storage
	 *
	 * @param bool $is_simple_root_field
	 * @param array<string> $full_hierarchy
	 * @return array
	 */
	public function get_storage_key_getter_patterns( $is_simple_root_field, $full_hierarchy ) {
		$patterns = array();

		if ( $is_simple_root_field ) {
			$key = $this->get_storage_key_for_simple_root_field( $full_hierarchy[ count( $full_hierarchy ) - 1 ] );
			$patterns[ $key ] = static::PATTERN_COMPARISON_EQUAL;
		}

		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );

		$storage_key = static::KEY_PREFIX . $first_parent . static::SEGMENT_GLUE;
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
	 * Get an array of storage key patterns for use when deleting values from storage
	 *
	 * @param bool $is_complex_field
	 * @param bool $is_simple_root_field
	 * @param array<string> $full_hierarchy
	 * @param array<int> $full_hierarchy_index
	 * @return array
	 */
	public function get_storage_key_deleter_patterns( $is_complex_field, $is_simple_root_field, $full_hierarchy, $full_hierarchy_index ) {
		$full_hierarchy_index = $this->get_sanitized_hierarchy_index( $full_hierarchy, $full_hierarchy_index );
		$patterns = array();

		if ( $is_simple_root_field ) {
			$key = $this->get_storage_key_for_simple_root_field( $full_hierarchy[ count( $full_hierarchy ) - 1 ] );
			$patterns[ $key ] = static::PATTERN_COMPARISON_EQUAL;
		}

		if ( $is_complex_field ) {
			$patterns[ $this->get_storage_key_root( $full_hierarchy ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		} else {
			$patterns[ $this->get_storage_key_prefix( $full_hierarchy, $full_hierarchy_index ) ] = static::PATTERN_COMPARISON_STARTS_WITH;
		}

		return $patterns;
	}

	/**
	 * Convert an array of storage key patterns to a parentheses-enclosed sql comparison
	 *
	 * @param string $table_column
	 * @param array $patterns
	 * @return string
	 */
	public function storage_key_patterns_to_sql( $table_column, $patterns ) {
		$sql = array();

		foreach ( $patterns as $storage_key => $type ) {
			$comparison = '';
			switch ( $type ) {
				case static::PATTERN_COMPARISON_EQUAL:
					$comparison = $table_column . ' = "' . esc_sql( $storage_key ) . '"';
					break;
				case static::PATTERN_COMPARISON_STARTS_WITH:
					$comparison = $table_column . ' LIKE "' . esc_sql( $storage_key ) . '%"';
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
	 * Check if a storage key matches any pattern
	 *
	 * @param string $storage_key
	 * @param array $patterns
	 * @return bool
	 */
	public function storage_key_matches_any_pattern( $storage_key, $patterns ) {
		foreach ( $patterns as $key => $type ) {
			switch ( $type ) {
				case static::PATTERN_COMPARISON_EQUAL:
					if ( $storage_key === $key ) {
						return true;
					}
					break;
				case static::PATTERN_COMPARISON_STARTS_WITH:
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
	 * Check if an array of segments has all of its segments
	 *
	 * @param array<string> $segments_array
	 * @return bool
	 */
	public function is_segments_array_full( $segments_array ) {
		return ( count( $segments_array ) === static::TOTAL_SEGMENTS );
	}

	/**
	 * Convert a storage key to an array of its segments
	 *
	 * @param string $storage_key
	 * @return array<string>
	 */
	public function storage_key_to_segments_array( $storage_key ) {
		$key = substr( $storage_key, 1 ); // drop the key prefix
		$segments = explode( static::SEGMENT_GLUE, $key );
		return $segments;
	}

	/**
	 * Convert a segment to an array of its values
	 *
	 * @param string $segment
	 * @return array<mixed>
	 */
	public function segment_to_segment_values_array( $segment ) {
		return explode( static::SEGMENT_VALUE_GLUE , $segment );
	}

	/**
	 * Get a parsed array of storage key segments and values
	 *
	 * @param string $storage_key
	 * @return array
	 */
	public function parse_storage_key( $storage_key ) {
		$parsed = array(
			'root' => '',
			'hierarchy' => array(),
			'hierarchy_index' => array(),
			'value_index' => 0,
			'property' => Value_Set::VALUE_PROPERTY,
		);

		$segments = $this->storage_key_to_segments_array( $storage_key );

		$parsed['root'] = $segments[0];
		if ( $this->is_segments_array_full( $segments ) ) {
			$parsed['hierarchy'] = array_filter( explode( static::SEGMENT_VALUE_GLUE, $segments[1] ) );

			if ( ! empty( $segments[2] ) ) {
				$parsed['hierarchy_index'] = array_map( 'intval', explode( static::SEGMENT_VALUE_GLUE, $segments[2] ) );
			}

			$parsed['value_index'] = intval( $segments[3] );

			$parsed['property'] = $segments[4];
		}

		// Add utility values
		$parsed['full_hierarchy'] = array_merge( array( $parsed['root'] ), $parsed['hierarchy'] );

		return $parsed;
	}
}