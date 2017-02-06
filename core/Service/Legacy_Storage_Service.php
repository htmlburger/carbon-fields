<?php

namespace Carbon_Fields\Service;

use \Carbon_Fields\Field\Field;
use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Datastore\Datastore;
use \Carbon_Fields\Datastore\Key_Value_Datastore as KVD;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/*
 * Service which provides the ability to do meta queries for multi-value fields and nested fields
 */
class Legacy_Storage_Service extends Service {

	/**
	 * Contaier repository to fetch fields from
	 * 
	 * @var ContainerRepository
	 */
	protected $container_repository;

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
	 */
	public function __construct( ContainerRepository $container_repository ) {
		$this->container_repository = $container_repository;
	}

	/**
	 * Enable the service
	 */
	protected function enabled() {
		// not needed
	}

	/**
	 * Disable the service
	 */
	protected function disabled() {
		// not needed
	}

	/**
	 * Return container instance which uses the passed datastore
	 * 
	 * @param  Datastore $datastore
	 * @return Container
	 */
	protected function get_container_for_datastore( Datastore $datastore ) {
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
			if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {

				$group_names = $field->get_group_names();
				foreach ( $group_names as $group_name ) {
					$group = $field->get_group_by_name( $group_name );
					if ( ! $group ) {
						continue;
					}
					$permutations[] = array(
						'field'=>$field->get_base_name(),
						'group'=>$group_name,
						'children'=>$this->get_field_group_permutations( $group->get_fields() ),
					);
				}
			} else {
				$permutations[] = array(
					'field'=>$field->get_base_name(),
					'group'=>'',
					'children'=>array(),
				);
			}
		}

		return $permutations;
	}

	/**
	 * Get a key-value array of CF 1.5 values for fields in the container of the passed datastore
	 * 
	 * @param  Datastore $datastore
	 * @return array
	 */
	protected function get_legacy_storage_array( Datastore $datastore ) {
		global $wpdb;

		$container = $this->get_container_for_datastore( $datastore );
		if ( ! $container ) {
			return array(); // unhandled datastore type or no registered containers
		}

		if ( ! isset( $this->storage_array_cache[ $container->id ] ) ) {
			$prefix = '_';
			$table_name = '';
			$table_id_column = '';
			$table_key_column = '';
			$table_value_column = '';

			if ( is_a( $datastore, '\\Carbon_Fields\\Datastore\\Theme_Options_Datastore' ) ) {
				$prefix = '';
				$table_name = $wpdb->options;
				$table_key_column = 'option_name';
				$table_value_column = 'option_value';
			} else if ( is_a( $datastore, '\\Carbon_Fields\\Datastore\\Meta_Datastore' ) ) {
				$table_name = $datastore->get_table_name();
				$table_id_column = $datastore->get_table_field_name();
				$table_key_column = 'meta_key';
				$table_value_column = 'meta_value';
			}

			if ( $table_id_column && ! $datastore->get_id() ) {
				return array(); // we are in a "create" view where we do not have an id (e.g. term meta)
			}

			$comparisons = array();
			$container_fields = $container->get_fields();
			foreach ( $container_fields as $field ) {
				$field_key_pattern = $prefix . $field->get_base_name();

				if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {
					$groups = $field->get_group_names();
					foreach ( $groups as $group_name ) {
						$underscored_group_name = ( substr( $group_name, 0, 1 ) === '_' ? $group_name : '_' . $group_name );
						$comparisons[] = ' `' . $table_key_column . '` LIKE "' . esc_sql( $field_key_pattern . $underscored_group_name . '-' ) . '%" ';
					}
				} else {
					$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern ) . '" ';

					if ( is_a( $field, '\\Carbon_Fields\\Field\\Map_Field' ) ) {
						foreach ( $this->map_keys as $mk ) {
							$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern . '-' . $mk ) . '" ';
						}
					}
				}
			}

			if ( empty( $comparisons ) ) {
				return array(); // no comparisons to fetch with
			}

			$where_clause = ' ( ' . implode( ' OR ', $comparisons ) . ' ) ';
			if ( $table_id_column ) {
				$where_clause = ' `' . $table_id_column . '` = ' . $datastore->get_id() . ' AND ' . $where_clause;
			}
			$query = '
				SELECT `' . $table_key_column . '` AS `key`, `' . $table_value_column . '` AS `value`
				FROM `' . $table_name . '`
				WHERE ' . $where_clause . '
			';

			$raw_results = $wpdb->get_results( $query );

			$results = array();
			foreach ( $raw_results as $result ) {
				$results[ $result->key ] = $result->value;
			}

			$this->storage_array_cache[ $container->id ] = $results;
		}

		return $this->storage_array_cache[ $container->id ];
	}

	/**
	 * Convert old storage row to value descriptor
	 * 
	 * @param  array $field_group_permutations
	 * @param  string $key
	 * @param  string $value
	 * @param  array $all_rows
	 * @return array
	 */
	protected function legacy_storage_row_to_value_descriptor( $field_group_permutations, $key, $value, $all_rows ) {
		$map_regex = array_map( function( $key ) {
			return preg_quote( $key, '/' );
		}, $this->map_keys );
		$map_regex = '/-(' . implode( '|', $map_regex ) . ')$/';

		if ( preg_match( $map_regex, $key ) ) {
			return array();
		}

		$key_pieces = explode( '-', $key );
		$field_group_level = $field_group_permutations;
		$matched_fields = array();
		foreach ( $key_pieces as $piece ) {
			$match_data = array();
			foreach ( $field_group_level as $permutation ) {
				if ( $permutation['group'] === '' ) {
					$regex = '/\A_?' . preg_quote( $permutation['field'], '/' ) . '(?:_(?P<group_index>\d+))?\z/';
					$matches = array();
					if ( preg_match( $regex, $piece, $matches ) ) {
						$match_data = array(
							'field'=>$permutation['field'],
							'group'=>'',
							'group_index'=>( isset( $matches['group_index'] ) ? intval( $matches['group_index'] ) : -1 ),
						);
					}
				} else {
					$legacy_group_name = ( $permutation['group'] === '_' ) ? $permutation['group'] : '_' . $permutation['group'];
					$regex = '/\A_?' . preg_quote( $permutation['field'], '/' ) . '(?:_(?P<group_index>\d+))?' . preg_quote( $legacy_group_name, '/' ) . '\z/';
					$matches = array();
					if ( preg_match( $regex, $piece, $matches ) ) {
						$match_data = array(
							'field'=>$permutation['field'],
							'group'=>$permutation['group'],
							'group_index'=>( isset( $matches['group_index'] ) ? intval( $matches['group_index'] ) : -1 ),
						);
					}
				}

				if ( $match_data ) {
					$field_group_level = $permutation['children'];
					break;
				}
			}

			if ( $match_data ) {
				$previous_match_index = count( $matched_fields ) - 1;
				if ( isset( $matched_fields[ $previous_match_index ] ) ) {
					$matched_fields[ $previous_match_index ]['group_index'] = $match_data['group_index']; // indexes are offset in CF 1.5 complex keys
					$match_data['group_index'] = 0;
				}
				$matched_fields[] = $match_data;
			} else {
				// match failed - unexpected key format or field name has been changed
			}
		}

		if ( isset( $all_rows[ $key . '-' . $this->map_keys[0] ] ) ) {
			$value = array(
				'value'=>$value,
			);
			foreach ( $this->map_keys as $mk ) {
				$value[ $mk ] = $all_rows[ $key . '-' . $mk ];
			}
		}

		return array(
			array(
				'key'=>array(
					'_raw'=>$key,
					'fields'=>$matched_fields,
				),
				'value'=>$value,
			),
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
		}, $row_descriptor['key']['fields'] );

		$hierarchy_index = array_map( function( $match ) {
			return $match['group_index'];
		}, array_slice( $row_descriptor['key']['fields'], 0, -1 ) ); // last index is not part of the hierarchy index

		$complex_parents = array_slice( $hierarchy, 0, -1 );
		foreach ( $complex_parents as $level => $complex_parent ) {
			$complex_parent_hierarchy_index = array_slice( $hierarchy_index, 0, $level );
			$complex_parent_value_index = $hierarchy_index[ $level ];

			$key = $this->field_data_to_storage_key( array_slice( $hierarchy, 0, $level + 1 ), $complex_parent_hierarchy_index, $complex_parent_value_index );
			$group_name = $row_descriptor['key']['fields'][ $level ]['group'];
			$storage_array[ $key ] = $group_name;
		}

		$value = maybe_unserialize( $row_descriptor['value'] );

		if ( is_array( $value ) ) {
			if ( isset( $value['value'] ) ) {
				foreach ( $value as $value_key => $value_item ) {
					$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index, 0, $value_key );
					$storage_array[ $key ] = $value_item;
				}
			} else {
				$i = 0;
				foreach ( $value as $value_item ) {
					$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index, $i );
					$storage_array[ $key ] = $value_item;
					$i++;
				}
			}
		} else if ( $value === null ) {
			$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index, 0, '_empty' );
			$storage_array[ $key ] = '';
		} else {
			if ( count( $hierarchy ) === 1 ) {
				// Add a basic key as well as simple root fields will load that instead
				$key = '_' . $hierarchy[0];
				$storage_array[ $key ] = $row_descriptor['value'];
			}

			$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index );
			$storage_array[ $key ] = $row_descriptor['value'];
		}

		return $storage_array;
	}

	/**
	 * Convert field data to a new storage key
	 * 
	 * @param  array  $hierarchy
	 * @param  array  $hierarchy_index
	 * @param  integer $value_index
	 * @param  string  $value_key
	 * @return string
	 */
	protected function field_data_to_storage_key( $full_hierarchy, $hierarchy_index, $value_index = 0, $value_key = 'value' ) {
		$parents = $full_hierarchy;
		$first_parent = array_shift( $parents );
		$hierarchy_index = ! empty( $hierarchy_index ) ? $hierarchy_index : array( 0 );

		$key = '_' . $first_parent . KVD::SEGMENT_GLUE;
		$key .= implode( KVD::SEGMENT_VALUE_GLUE, $parents ) . KVD::SEGMENT_GLUE;
		$key .= implode( KVD::SEGMENT_VALUE_GLUE, $hierarchy_index ) . KVD::SEGMENT_GLUE;
		$key .= $value_index . KVD::SEGMENT_GLUE;
		$key .= $value_key;
		return $key;
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
				case KVD::PATTERN_COMPARISON_EQUAL:
					if ( $storage_key === $key ) {
						return true;
					}
					break;
				case KVD::PATTERN_COMPARISON_STARTS_WITH:
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
	 * Get all data saved for a datastore in the new key-value format
	 * 
	 * @param  Datastore $datastore
	 * @return array
	 */
	protected function get_storage_array_for_datastore( Datastore $datastore ) {
		$legacy_storage_array = $this->get_legacy_storage_array( $datastore );
		if ( empty( $legacy_storage_array ) ) {
			return array(); // no migration data found
		}

		$container = $this->get_container_for_datastore( $datastore );
		$field_group_permutations = $this->get_field_group_permutations( $container->get_fields() );

		$row_descriptors = array();
		foreach ( $legacy_storage_array as $key => $value ) {
			$row_descriptors = array_merge( $row_descriptors, $this->legacy_storage_row_to_value_descriptor( $field_group_permutations, $key, $value, $legacy_storage_array ) );
		}

		$storage_array = array();
		foreach ( $row_descriptors as $row_descriptor ) {
			$storage_array = array_merge( $storage_array, $this->row_descriptor_to_storage_array( $row_descriptor ) );
		}

		return $storage_array;
	}

	/**
	 * Get array of new storage key-values matching key patterns
	 * 
	 * @param  Datastore $datastore
	 * @param  array $storage_key_patterns
	 * @return array
	 */
	public function get_storage_array( Datastore $datastore, $storage_key_patterns ) {
		if ( ! $this->is_enabled() ) {
			return array();
		}

		$storage_array = $this->get_storage_array_for_datastore( $datastore );

		$matched_data = array();
		foreach ( $storage_array as $key => $value ) {
			if ( $this->storage_key_matches_any_pattern( $key, $storage_key_patterns ) ) {
				$matched_data[] = (object) array(
					'key'=>$key,
					'value'=>$value,
				);
			}
		}
		return $matched_data;
	}
}