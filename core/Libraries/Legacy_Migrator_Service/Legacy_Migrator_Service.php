<?php

namespace Carbon_Fields\Libraries\Legacy_Migrator_Service;

use \Carbon_Fields\Container\Container;
use \Carbon_Fields\Container\Repository as ContainerRepository;

// TODO value unserialization
// TODO handle simple root fields

/*
 * Service which provides the ability to do meta queries for multi-value fields and nested fields
 */
class Legacy_Migrator_Service {

	protected $container_repository;

	public function __construct( ContainerRepository $container_repository ) {
		$this->container_repository = $container_repository;
	}

	public function boot() {
		add_action( 'carbon_after_register_fields', array( $this, 'migrate_containers' ) );
	}

	public function migrate_containers() {
		$containers = $this->container_repository->get_containers();

		foreach ( $containers as $container ) {
			$this->migrate_container( $container );
		}
		exit;
	}

	protected function get_container_storage_array( Container $container ) {
		global $wpdb;

		$prefix = '_';
		$table_name = '';
		$table_id_column = '';
		$table_key_column = '';
		$table_value_column = '';
		switch ( $container->type ) {
			case 'Theme_Options':
				$prefix = '';
				$table_name = $wpdb->options;
				$table_key_column = 'option_name';
				$table_value_column = 'option_value';
				break;
			default:
				return array(); // unhandled container type
				break;
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
					$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern . '-lat' ) . '" ';
					$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern . '-lng' ) . '" ';
					$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern . '-address' ) . '" ';
					$comparisons[] = ' `' . $table_key_column . '` = "' . esc_sql( $field_key_pattern . '-zoom' ) . '" ';
				}
			}
		}

		if ( empty( $comparisons ) ) {
			return array(); // no comparisons to fetch with
		}

		$where_clause = ' ( ' . implode( ' OR ', $comparisons ) . ' ) ';
		if ( $table_id_column ) {
			// TODO solve 0 when we have object IDs
			$where_clause = ' `' . $table_id_column . '` = 0 AND ' . $where_clause;
		}
		$query = '
			SELECT `' . $table_key_column . '` AS `key`, `' . $table_value_column . '` AS `value`
			FROM `' . $table_name . '`
			WHERE ' . $where_clause . '
		';

		return $wpdb->get_results( $query );
	}

	protected function migrate_container( Container $container ) {
		// _crb_home_sections_features-_columns_0_col3of4-_rows_0_row-_cols_0_col2of3-_link_0

		$storage_array = $this->get_container_storage_array( $container );
		if ( empty( $storage_array ) ) {
			// TODO store empty value instead to flag this container as migrated
			return; // no data to migrate
		}

		$storage_array = array(
			(object) array( 'key'=>'_crb_title', 'value'=>'1', ),
			(object) array( 'key'=>'_crb_subtitle', 'value'=>'2', ),
			(object) array( 'key'=>'_crb_home_bg', 'value'=>'3', ),
			(object) array( 'key'=>'_crb_home_title', 'value'=>'4', ),
			(object) array( 'key'=>'_crb_designer_image', 'value'=>'5', ),
			(object) array( 'key'=>'_crb_designer_name', 'value'=>'6', ),
			(object) array( 'key'=>'_crb_designer_link', 'value'=>'7', ),
			(object) array( 'key'=>'_crb_button', 'value'=>'8', ),
			(object) array( 'key'=>'_crb_button_link', 'value'=>'9', ),
			(object) array( 'key'=>'_crb_preview_background', 'value'=>'10', ),
			(object) array( 'key'=>'_crb_preview_image', 'value'=>'11', ),
			(object) array( 'key'=>'_crb_columns_col3of4-_rows_1_row-_cols_2_left_align-_left_image_3', 'value'=>'12', ),
			(object) array( 'key'=>'_crb_columns_col3of4-_rows_0_row-_cols_0_left_align-_right_image_0', 'value'=>'13', ),
			(object) array( 'key'=>'_crb_columns_col3of4-_rows_0_row-_cols_0_right_align-_left_image_1', 'value'=>'14', ),
			(object) array( 'key'=>'_crb_columns_col3of4-_rows_0_row-_cols_0_right_align-_right_image_1', 'value'=>'15', ),
			(object) array( 'key'=>'_crb_columns_col1of4-_image_1', 'value'=>'16', ),
			(object) array( 'key'=>'_crb_listing_title', 'value'=>'17', ),
		);

		$row_descriptors = array();
		foreach ( $storage_array as $row ) {
			$row_descriptors = array_merge( $row_descriptors, $this->storage_row_to_value_descriptor( $row->key, $row->value ) );
		}


		$new_storage_data = array();
		foreach ( $row_descriptors as $row_descriptor ) {
			$new_storage_data = array_merge( $new_storage_data, $this->row_descriptor_to_new_storage_data( $row_descriptor ) );
		}

		print_r($row_descriptors);
		var_dump('----------');
		var_dump('----------');
		var_dump('----------');
		print_r($new_storage_data);
	}

	protected function storage_row_to_value_descriptor( $key, $value ) {
		$key_segments = array();
		$matched = preg_match_all( '/
			(
				(
					(?P<field_indexed>\w+?) # Field name
					(?:_(?P<group_index>\d+)) # Group index for the group this field appears in
					(?P<group_indexed>_\w*) # Group name this field appears in
				)
				|
				(
					(?P<field_unindexed>\w+) # Field name
					(?P<group_unindexed>_\w*) # Group name this field appears in
				)
			)
			\-
			(?:
				(?P<last_field>\w+) # Last field (non-complex); matches only once at the end of the key
				_
				(?P<last_group_index>\d+) # Last group index for the group this field appears in
				$
			)?
		/x', $key, $key_segments );
		
		$merged_segments = array();
		if ( !$matched ) {
			$merged_segments = array(
				'fields'=>array(
					$key,
				),
				'groups'=>array(
					'',
				),
				'indexes'=>array(
					0,
				),
			);
		} else {
			$merged_segments['fields'] = $key_segments['field_indexed'];
			$merged_segments['fields'][0] = $key_segments['field_unindexed'][0];
			$merged_segments['fields'][] = $key_segments['last_field'][ count( $key_segments['last_field'] ) - 1 ];

			$merged_segments['groups'] = $key_segments['group_indexed'];
			$merged_segments['groups'][0] = $key_segments['group_unindexed'][0];
			$merged_segments['groups'][] = '';
			
			$merged_segments['indexes'] = array_slice( $key_segments['group_index'], 1 );
			$merged_segments['indexes'][] = $key_segments['last_group_index'][ count( $key_segments['last_group_index'] ) - 1 ];
			$merged_segments['indexes'][] = 0;
		}

		return array(
			array(
				'key'=>array_merge( array(
					'_raw'=>$key,
				), $merged_segments ),
				'value'=>$value,
			),
		);
	}

	protected function row_descriptor_to_new_storage_data( $row_descriptor ) {
		$storage_data = array();

		if ( count( $row_descriptor['key']['fields'] ) > 1 ) {

		} else {

		}

		$hierarchy = array_map( function( $field_name ) {
			return substr( $field_name, 0, 1 ) === '_'  ? substr( $field_name, 1 ) : $field_name;
		}, $row_descriptor['key']['fields'] );

		$hierarchy_index = array_slice( $row_descriptor['key']['indexes'], 0, count( $row_descriptor['key']['indexes'] ) - 1 );
		$key = $this->field_data_to_storage_key( $hierarchy, $hierarchy_index );
		$storage_data[ $key ] = $row_descriptor['value'];

		$complex_parents = array_slice( $hierarchy, 0, -1 );
		foreach ( $complex_parents as $level => $complex_parent ) {
			$key = $this->field_data_to_storage_key( array_slice( $hierarchy, 0, $level + 1 ) , array_slice( $hierarchy_index, 0, $level ) );
			var_dump($complex_parent);
			var_dump($key);
		}

		var_dump('-----------');
		print_r( $row_descriptor );
		print_r( $storage_data );
		var_dump('-----------');

		return $storage_data;
	}

	protected function field_data_to_storage_key( $hierarchy, $hierarchy_index ) {
		$first_parent = $hierarchy[0];
		$parents = array_slice( $hierarchy, 1 );
		$hierarchy_index = !empty( $hierarchy_index ) ? $hierarchy_index : array( 0 );

		$key = '_' . $first_parent . '|';
		$key .= implode( ':', $parents ) . '|';
		$key .= implode( ':', $hierarchy_index ) . '|';
		$key .= '0|';
		$key .= 'value';
		return $key;
	}
}