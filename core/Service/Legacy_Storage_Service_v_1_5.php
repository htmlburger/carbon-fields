<?php

namespace Carbon_Fields\Service;

use Carbon_Fields\Field\Field;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Datastore\Datastore_Interface;

/*
 * Service which provides the ability to do meta queries for multi-value fields and nested fields
 */
class Legacy_Storage_Service_v_1_5 extends Service {

	/**
	 * Contaier repository to fetch fields from
	 *
	 * @var ContainerRepository
	 */
	protected $container_repository;

	/**
	 * Key Toolset for key generation and comparison utilities
	 *
	 * @var Key_Toolset
	 */
	protected $key_toolset;

	/**
	 * List of special key suffixes that the Map field uses so save extra data
	 *
	 * @var array
	 */
	protected $map_keys = array( 'lat', 'lng', 'zoom', 'address' );

	/**
	 * Cache of converted storage arrays
	 *
	 * @var array
	 */
	protected $storage_array_cache = array();

	/**
	 * Service constructor
	 *
	 * @param ContainerRepository $container_repository
	 * @param Key_Toolset         $key_toolset
	 */
	public function __construct( ContainerRepository $container_repository, Key_Toolset $key_toolset ) {
		$this->container_repository = $container_repository;
		$this->key_toolset = $key_toolset;
	}

	/**
	 * Enable the service
	 */
	protected function enabled() {
		add_filter( 'carbon_fields_datastore_storage_array', array( $this, 'filter_storage_array' ), 10, 3 );
	}

	/**
	 * Disable the service
	 */
	protected function disabled() {
		remove_filter( 'carbon_fields_datastore_storage_array', array( $this, 'filter_storage_array' ), 10 );
	}

	/**
	 * Check if a key is a legacy map property key
	 *
	 * @param string $key
	 * @return bool
	 */
	protected function is_legacy_map_key( $key ) {
		$map_regex = array_map( function( $map_key ) {
			return preg_quote( $map_key, '/' );
		}, $this->map_keys );
		$map_regex = '/-(' . implode( '|', $map_regex ) . ')$/';
		return (bool) preg_match( $map_regex, $key );
	}

	/**
	 * Return container instance which uses the passed datastore
	 *
	 * @param  Datastore_Interface $datastore
	 * @return Container
	 */
	protected function get_container_for_datastore( Datastore_Interface $datastore ) {
		$containers = $this->container_repository->get_containers();
		foreach ( $containers as $container ) {
			if ( $container->get_datastore() === $datastore ) {
				return $container;
			}
		}
		return null;
	}

	/**
	 * Get a nested array of field_group permutations suitable for old key parsing
	 *
	 * @param  array $fields
	 * @return array
	 */
	protected function get_field_group_permutations( $fields ) {
		$permutations = array();

		foreach ( $fields as $field ) {
			if ( $field instanceof \Carbon_Fields\Field\Complex_Field ) {
				$group_names = $field->get_group_names();
				foreach ( $group_names as $group_name ) {
					$group = $field->get_group_by_name( $group_name );
					if ( ! $group ) {
						continue;
					}
					$permutations[] = array(
						'field' => $field->get_base_name(),
						'group' => $group_name,
						'children' => $this->get_field_group_permutations( $group->get_fields() ),
					);
				}
			} else {
				$permutations[] = array(
					'field' => $field->get_base_name(),
					'group' => '',
					'children' => array(),
				);
			}
		}

		return $permutations;
	}

	/**
	 * Get array of database table details for datastore
	 *
	 * @param Datastore_Interface $datastore
	 * @return array
	 */
	protected function get_table_details_for_datastore( Datastore_Interface $datastore ) {
		global $wpdb;

		$details = array(
			'prefix' => '_',
			'table_name' => '',
			'table_id_column' => '',
			'table_key_column' => '',
			'table_value_column' => '',
		);

		if ( $datastore instanceof \Carbon_Fields\Datastore\Theme_Options_Datastore ) {
			$details['prefix'] = '';
			$details['table_name'] = $wpdb->options;
			$details['table_key_column'] = 'option_name';
			$details['table_value_column'] = 'option_value';
		} else if ( $datastore instanceof \Carbon_Fields\Datastore\Meta_Datastore ) {
			$details['table_name'] = $datastore->get_table_name();
			$details['table_id_column'] = $datastore->get_table_field_name();
			$details['table_key_column'] = 'meta_key';
			$details['table_value_column'] = 'meta_value';
		}

		return $details;
	}

	/**
	 * Get array of sql comparisons for field
	 *
	 * @param  Field  $field
	 * @param  string $key_prefix
	 * @param  string $key_column
	 * @return array<string>
	 */
	protected function get_legacy_sql_comparisons_for_field( Field $field, $key_prefix, $key_column ) {
		$field_key_pattern = $key_prefix . $field->get_base_name();
		$comparisons = array();

		if ( $field instanceof \Carbon_Fields\Field\Complex_Field ) {
			$groups = $field->get_group_names();
			foreach ( $groups as $group_name ) {
				$underscored_group_name = preg_replace( '/^_{0,1}/', '_', $group_name ); // ensure first character is underscore
				$comparisons[] = ' `' . $key_column . '` LIKE "' . esc_sql( $field_key_pattern . $underscored_group_name . '-' ) . '%" ';
			}
		} else {
			$comparisons[] = ' `' . $key_column . '` = "' . esc_sql( $field_key_pattern ) . '" ';
		}

		if ( $field instanceof \Carbon_Fields\Field\Map_Field ) {
			foreach ( $this->map_keys as $map_key ) {
				$comparisons[] = ' `' . $key_column . '` = "' . esc_sql( $field_key_pattern . '-' . $map_key ) . '" ';
			}
		}

		return $comparisons;
	}

	/**
	 * Get a key-value array of legacy values for fields in the container of the passed datastore
	 *
	 * @param  Container           $container
	 * @param  Datastore_Interface $datastore
	 * @return array
	 */
	protected function get_legacy_storage_array_from_database( Container $container, Datastore_Interface $datastore ) {
		global $wpdb;

		$table = $this->get_table_details_for_datastore( $datastore );

		if ( $table['table_id_column'] && ! $datastore->get_object_id() ) {
			return array(); // bail as we have an ID column but no ID to compare with ( e.g. we are in a "create" view )
		}

		$comparisons = array();
		$container_fields = $container->get_fields();
		foreach ( $container_fields as $field ) {
			$comparisons = array_merge( $comparisons, $this->get_legacy_sql_comparisons_for_field( $field, $table['prefix'], $table['table_key_column'] ) );
		}

		if ( empty( $comparisons ) ) {
			return array(); // no comparisons to fetch with
		}

		$where_clause = ' ( ' . implode( ' OR ', $comparisons ) . ' ) ';
		if ( $table['table_id_column'] ) {
			$where_clause = ' `' . $table['table_id_column'] . '` = ' . $datastore->get_object_id() . ' AND ' . $where_clause;
		}
		$query = '
			SELECT `' . $table['table_key_column'] . '` AS `key`, `' . $table['table_value_column'] . '` AS `value`
			FROM `' . $table['table_name'] . '`
			WHERE ' . $where_clause . '
		';

		$raw_results = $wpdb->get_results( $query );

		$results = array();
		foreach ( $raw_results as $result ) {
			$results[ $result->key ] = $result->value;
		}

		return $results;
	}

	/**
	 * Get a key-value array of CF 1.5 values for fields in the container of the passed datastore
	 *
	 * @param  Datastore_Interface $datastore
	 * @return array
	 */
	public function get_legacy_storage_array( Datastore_Interface $datastore ) {
		$container = $this->get_container_for_datastore( $datastore );
		if ( ! $container ) {
			return array(); // unhandled datastore type or no registered containers
		}

		$cache_key = $container->get_id() . '-' . strval( $datastore->get_object_id() );

		if ( ! isset( $this->storage_array_cache[ $cache_key ] ) ) {
			$this->storage_array_cache[ $cache_key ] = $this->get_legacy_storage_array_from_database( $container, $datastore );
		}

		return $this->storage_array_cache[ $cache_key ];
	}

	/**
	 * Get expanded value for key from legacy storage array
	 *
	 * @param string $key Legacy key to fetch additional values for
	 * @param array $legacy_storage_array key=>value array of legacy data
	 * @return mixed
	 */
	protected function get_value_for_legacy_key( $key, $legacy_storage_array ) {
		$value = isset( $legacy_storage_array[ $key ] ) ? $legacy_storage_array[ $key ] : '';

		$first_map_key = $this->map_keys[0];
		if ( isset( $legacy_storage_array[ $key . '-' . $first_map_key ] ) ) {
			$value = array(
				Value_Set::VALUE_PROPERTY => $value,
			);

			foreach ( $this->map_keys as $map_key ) {
				$value[ $map_key ] = $legacy_storage_array[ $key . '-' . $map_key ];
			}
		}

		return $value;
	}

	/**
	 * Convert legacy storage rows to array of row descriptors
	 *
	 * @param array $legacy_storage_array
	 * @param array $field_group_permutations
	 * @return array
	 */
	protected function legacy_storage_rows_to_row_descriptors( $legacy_storage_array, $field_group_permutations ) {
		$row_descriptors = array();

		foreach ( $legacy_storage_array as $key => $value ) {
			if ( $this->is_legacy_map_key( $key ) ) {
				continue; // skip legacy map keys as they are handled separately through values
			}

			$value = $this->get_value_for_legacy_key( $key, $legacy_storage_array );
			$row_descriptors[] = $this->legacy_storage_row_to_row_descriptor( $key, $value, $field_group_permutations );
		}

		return $row_descriptors;
	}

	/**
	 * Get key segmentation regex for a field name
	 *
	 * @param  string $field_name
	 * @param  string $group_name
	 * @return string
	 */
	protected function get_key_segmentation_regex_for_field_name( $field_name, $group_name = '' ) {
		$legacy_group_name = ( $group_name === '_' ) ? $group_name : '_' . $group_name;

		$regex = '/\A_?' . preg_quote( $field_name, '/' ) . '(?:_(?P<group_index>\d+))?\z/';
		if ( $group_name !== '' ) {
			$regex = '/\A_?' . preg_quote( $field_name, '/' ) . '(?:_(?P<group_index>\d+))?' . preg_quote( $legacy_group_name, '/' ) . '\z/';
		}
		return $regex;
	}

	/**
	 * Convert legacy storage row to row descriptor
	 *
	 * @param  string $key
	 * @param  string $value
	 * @param  array $field_group_permutations
	 * @return array
	 */
	protected function legacy_storage_row_to_row_descriptor( $key, $value, $field_group_permutations ) {
		$key_pieces = explode( '-', $key );
		$field_group_level = $field_group_permutations;
		$matched_fields = array();

		foreach ( $key_pieces as $piece ) {
			foreach ( $field_group_level as $permutation ) {
				$match_regex = $this->get_key_segmentation_regex_for_field_name( $permutation['field'], $permutation['group'] );

				$matches = array();
				if ( preg_match( $match_regex, $piece, $matches ) ) {
					$match_data = array(
						'field' => $permutation['field'],
						'group' => $permutation['group'],
						'group_index' => ( isset( $matches['group_index'] ) ? intval( $matches['group_index'] ) : -1 ),
					);

					$previous_match_index = count( $matched_fields ) - 1;
					if ( isset( $matched_fields[ $previous_match_index ] ) ) {
						$matched_fields[ $previous_match_index ]['group_index'] = $match_data['group_index']; // indexes are offset in CF 1.5 complex keys
						$match_data['group_index'] = 0;
					}
					$matched_fields[] = $match_data;

					$field_group_level = $permutation['children'];
					break; // break so next piece foreaches the new field_group_level
				}
			}
		}

		return array(
			'key' => $matched_fields,
			'value' => $value,
		);
	}

	/**
	 * Convert row descriptor to array of new storage key-values
	 *
	 * @param  array $row_descriptor
	 * @return array
	 */
	protected function row_descriptor_to_storage_array( $row_descriptor ) {
		$storage_array = array();

		$hierarchy = array_map( function( $match ) {
			return $match['field'];
		}, $row_descriptor['key'] );

		$hierarchy_index = array_map( function( $match ) {
			return $match['group_index'];
		}, array_slice( $row_descriptor['key'], 0, -1 ) ); // last index is not part of the hierarchy index

		$complex_parents = array_slice( $hierarchy, 0, -1 );
		foreach ( $complex_parents as $level => $complex_parent ) {
			$complex_parent_hierarchy_index = array_slice( $hierarchy_index, 0, $level );
			$complex_parent_value_index = $hierarchy_index[ $level ];

			$key = $this->key_toolset->get_storage_key( false, array_slice( $hierarchy, 0, $level + 1 ), $complex_parent_hierarchy_index, $complex_parent_value_index, Value_Set::VALUE_PROPERTY );
			$group_name = $row_descriptor['key'][ $level ]['group'];
			$storage_array[ $key ] = $group_name;
		}

		$unserialized_value = maybe_unserialize( $row_descriptor['value'] );
		if ( is_array( $unserialized_value ) ) {
			if ( isset( $unserialized_value[ Value_Set::VALUE_PROPERTY ] ) ) {
				// value is a key=>value array - save each property separately
				foreach ( $unserialized_value as $property => $value_item ) {
					$key = $this->key_toolset->get_storage_key( false, $hierarchy, $hierarchy_index, 0, $property );
					$storage_array[ $key ] = $value_item;
				}
			} else {
				// value is a simple array - save each value separately
				$i = 0;
				foreach ( $unserialized_value as $value_item ) {
					$key = $this->key_toolset->get_storage_key( false, $hierarchy, $hierarchy_index, $i, Value_Set::VALUE_PROPERTY );
					$storage_array[ $key ] = $value_item;
					$i++;
				}
			}
		} else if ( $unserialized_value === null ) {
			// no value found - add a keepalive key
			$key = $this->key_toolset->get_storage_key( false, $hierarchy, $hierarchy_index, 0, '_empty' );
			$storage_array[ $key ] = '';
		} else {
			if ( count( $hierarchy ) === 1 ) {
				// Add a basic key as well as simple root fields will load that instead
				$key = '_' . $hierarchy[0];
				$storage_array[ $key ] = $row_descriptor['value'];
			}

			$key = $this->key_toolset->get_storage_key( false, $hierarchy, $hierarchy_index, 0, Value_Set::VALUE_PROPERTY );
			$storage_array[ $key ] = $row_descriptor['value'];
		}

		return $storage_array;
	}

	/**
	 * Get all data saved for a datastore in the new key-value format
	 *
	 * @param  Datastore_Interface $datastore
	 * @return array
	 */
	public function get_storage_array_for_datastore( Datastore_Interface $datastore ) {
		$legacy_storage_array = $this->get_legacy_storage_array( $datastore );
		if ( empty( $legacy_storage_array ) ) {
			return array(); // no migration data found
		}

		$container = $this->get_container_for_datastore( $datastore );
		$field_group_permutations = $this->get_field_group_permutations( $container->get_fields() );
		$row_descriptors = $this->legacy_storage_rows_to_row_descriptors( $legacy_storage_array, $field_group_permutations );

		$storage_array = array();
		foreach ( $row_descriptors as $row_descriptor ) {
			$storage_array = array_merge( $storage_array, $this->row_descriptor_to_storage_array( $row_descriptor ) );
		}

		return $storage_array;
	}

	/**
	 * Get array of new storage key-values matching key patterns
	 *
	 * @param  Datastore_Interface $datastore
	 * @param  array $storage_key_patterns
	 * @return array
	 */
	public function get_storage_array( Datastore_Interface $datastore, $storage_key_patterns ) {
		$storage_array = $this->get_storage_array_for_datastore( $datastore );
		$matched_data = array();
		foreach ( $storage_array as $key => $value ) {
			if ( $this->key_toolset->storage_key_matches_any_pattern( $key, $storage_key_patterns ) ) {
				$matched_data[] = (object) array(
					'key' => $key,
					'value' => $value,
				);
			}
		}
		return $matched_data;
	}

	public function filter_storage_array( $storage_array, $datastore, $storage_key_patterns ) {
		if ( empty( $storage_array ) ) {
			$storage_array = $this->get_storage_array( $datastore, $storage_key_patterns );
		}
		return $storage_array;
	}
}
