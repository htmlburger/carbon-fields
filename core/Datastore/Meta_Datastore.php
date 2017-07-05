<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Abstract meta datastore class.
 */
abstract class Meta_Datastore extends Key_Value_Datastore {

	/**
	 * Initialization tasks.
	 */
	public function init() {}

	/**
	 * Get a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 * @param array $storage_key_patterns
	 * @return array<stdClass> Array of {key, value} objects
	 */
	protected function get_storage_array( Field $field, $storage_key_patterns ) {
		global $wpdb;

		$storage_key_comparisons = $this->key_toolset->storage_key_patterns_to_sql( '`meta_key`', $storage_key_patterns );

		$storage_array = $wpdb->get_results( '
			SELECT `meta_key` AS `key`, `meta_value` AS `value`
			FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_object_id() ) . '
				AND ' . $storage_key_comparisons . '
			ORDER BY `meta_key` ASC
		' );

		$storage_array = apply_filters( 'carbon_fields_datastore_storage_array', $storage_array, $this, $storage_key_patterns );

		return $storage_array;
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 */
	protected function save_key_value_pair( $key, $value ) {
		if ( ! update_metadata( $this->get_meta_type(), $this->get_object_id(), $key, $value ) ) {
			add_metadata( $this->get_meta_type(), $this->get_object_id(), $key, $value, true );
		}
	}

	/**
	 * Delete the field value(s)
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		global $wpdb;

		$storage_key_patterns = $this->key_toolset->get_storage_key_deleter_patterns(
			is_a( $field, 'Carbon_Fields\\Field\\Complex_Field' ),
			$field->is_simple_root_field(),
			$this->get_full_hierarchy_for_field( $field ),
			$this->get_full_hierarchy_index_for_field( $field )
		);
		$storage_key_comparisons = $this->key_toolset->storage_key_patterns_to_sql( '`meta_key`', $storage_key_patterns );

		$meta_keys = $wpdb->get_col( '
			SELECT `meta_key`
			FROM `' . $this->get_table_name() . '`
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_object_id() ) . '
				AND ' . $storage_key_comparisons . '
		' );

		foreach ( $meta_keys as $meta_key ) {
			delete_metadata( $this->get_meta_type(), $this->get_object_id(), $meta_key );
		}
	}

	/**
	 * Get the type of meta data.
	 */
	abstract public function get_meta_type();

	/**
	 * Get the meta table name to query.
	 */
	abstract public function get_table_name();

	/**
	 * Get the meta table field name to query by.
	 */
	abstract public function get_table_field_name();
}
