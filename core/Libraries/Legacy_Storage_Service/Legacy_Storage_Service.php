<?php

namespace Carbon_Fields\Libraries\Legacy_Storage_Service;

use \Carbon_Fields\Field\Field;
use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;
use \Carbon_Fields\Datastore\Datastore;
use \Carbon_Fields\Datastore\Key_Value_Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/*
 * Service which provides the ability to do meta queries for multi-value fields and nested fields
 */
class Legacy_Storage_Service {

	protected $container_repository;

	protected $map_keys = array( 'lat', 'lng', 'zoom', 'address' );

	public function __construct( ContainerRepository $container_repository ) {
		$this->container_repository = $container_repository;
	}

	protected function get_container_for_datastore( Datastore $datastore ) {
		$containers = $this->container_repository->get_containers();
		foreach ( $containers as $container ) {
			if ( $container->get_datastore() === $datastore ) {
				return $container;
			}
		}
		return null;
	}

	protected function get_field_storage_array( Datastore $datastore ) {
		global $wpdb;

		$prefix = '_';
		$table_name = '';
		$table_id_column = '';
		$table_key_column = '';
		$table_value_column = '';
		$container = $this->get_container_for_datastore( $datastore );

		if ( !$container ) {
			return array(); // unhandled datastore type or no registered containers
		}

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

		$comparisons = array();
		$container_fields = $container->get_fields();
		foreach ( $container_fields as $field ) {
			$field_key_pattern = $prefix . $field->get_hierarchy_name();

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
		return $results;
	}

	protected function get_storage_data_for_datastore( Datastore $datastore ) {
		$storage_array = $this->get_field_storage_array( $datastore );
		if ( empty( $storage_array ) ) {
			return array(); // no migration data found
		}

		$container = $this->get_container_for_datastore( $datastore );
		$field_group_permutations = $this->get_field_group_permutations( $container->get_fields() );

		$row_descriptors = array();
		foreach ( $storage_array as $key => $value ) {
			$row_descriptors = array_merge( $row_descriptors, $this->storage_row_to_value_descriptor( $field_group_permutations, $key, $value, $storage_array ) );
		}

		$new_storage_data = array();
		foreach ( $row_descriptors as $row_descriptor ) {
			$new_storage_data = array_merge( $new_storage_data, $this->row_descriptor_to_new_storage_data( $row_descriptor ) );
		}

		return $new_storage_data;
	}

	protected function get_field_group_permutations( $fields ) {
		$permutations = array();

		foreach ( $fields as $field ) {
			if ( is_a( $field, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {

				$group_names = $field->get_group_names();
				foreach ( $group_names as $group_name ) {
					$group = $field->get_group_by_name( $group_name );
					if ( !$group ) {
						continue;
					}
					$permutations[] = array(
						'field'=>$field->get_hierarchy_name(),
						'group'=>$group_name,
						'children'=>$this->get_field_group_permutations( $group->get_fields() ),
					);
				}
			} else {
				$permutations[] = array(
					'field'=>$field->get_hierarchy_name(),
					'group'=>'',
					'children'=>array(),
				);
			}
		}

		return $permutations;
	}

	protected function storage_row_to_value_descriptor( $field_group_permutations, $key, $value, $all_rows ) {
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

	protected function row_descriptor_to_new_storage_data( $row_descriptor ) {
		$storage_data = array();

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
			$storage_data[ $key ] = $group_name;
		}

		$value = maybe_unserialize( $row_descriptor['value'] );

		if ( is_array( $value ) ) {
			if ( isset( $value['value'] ) ) {
				foreach ( $value as $value_key => $value_item ) {
					$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index, 0, $value_key );
					$storage_data[ $key ] = $value_item;
				}
			} else {
				$i = 0;
				foreach ( $value as $value_item ) {
					$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index, $i );
					$storage_data[ $key ] = $value_item;
					$i++;
				}
			}
		} else {
			if ( count( $hierarchy ) === 1 ) {
				// Add a basic key as well as simple root fields will load that instead
				$key = '_' . $hierarchy[0];
				$storage_data[ $key ] = $row_descriptor['value'];
			}

			$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index );
			$storage_data[ $key ] = $row_descriptor['value'];
		}


		return $storage_data;
	}

	protected function field_data_to_storage_key( $hierarchy, $hierarchy_index, $value_index = 0, $value_key = 'value' ) {
		$first_parent = $hierarchy[0];
		$parents = array_slice( $hierarchy, 1 );
		$hierarchy_index = !empty( $hierarchy_index ) ? $hierarchy_index : array( 0 );

		$key = '_' . $first_parent . '|';
		$key .= implode( ':', $parents ) . '|';
		$key .= implode( ':', $hierarchy_index ) . '|';
		$key .= $value_index . '|';
		$key .= $value_key;
		return $key;
	}

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

	public function get_storage_array_for_patterns( Datastore $datastore, $storage_key_patterns ) {
		$storage_data = $this->get_storage_data_for_datastore( $datastore );

		$matched_data = array();
		foreach ( $storage_data as $key => $value ) {
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