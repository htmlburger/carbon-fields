<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Theme options datastore class.
 */
class Theme_Options_Datastore extends Key_Value_Datastore {

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

		$storage_key_comparisons = $this->key_toolset->storage_key_patterns_to_sql( '`option_name`', $storage_key_patterns );

		$storage_array = $wpdb->get_results( '
			SELECT `option_name` AS `key`, `option_value` AS `value`
			FROM ' . $wpdb->options . '
			WHERE ' . $storage_key_comparisons . '
			ORDER BY `option_name` ASC
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
		$this->save_key_value_pair_with_autoload( $key, $value, false );
	}

	/**
	 * Save a single key-value pair to the database with autoload
	 *
	 * @param string $key
	 * @param string $value
	 * @param bool $autoload
	 */
	protected function save_key_value_pair_with_autoload( $key, $value, $autoload = true ) {
		$autoload = $autoload ? 'yes': 'no';
		$notoptions = wp_cache_get( 'notoptions', 'options' );
		$notoptions[ $key ] = '';
		wp_cache_set( 'notoptions', $notoptions, 'options' );

		if ( ! add_option( $key, $value, null, $autoload ) ) {
			update_option( $key, $value, $autoload );
		}
	}

	/**
	 * Save the field value(s)
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$value_set = $field->get_full_value();

		if ( empty( $value_set ) && $field->get_value_set()->keepalive() ) {
			$storage_key = $this->key_toolset->get_storage_key(
				$field->is_simple_root_field(),
				$this->get_full_hierarchy_for_field( $field ),
				$this->get_full_hierarchy_index_for_field( $field ),
				0,
				$this->key_toolset->get_keepalive_property()
			);
			$this->save_key_value_pair_with_autoload( $storage_key, '', $field->get_autoload() );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $property => $value ) {
				$storage_key = $this->key_toolset->get_storage_key(
					$field->is_simple_root_field(),
					$this->get_full_hierarchy_for_field( $field ),
					$this->get_full_hierarchy_index_for_field( $field ),
					$value_group_index,
					$property
				);
				$this->save_key_value_pair_with_autoload( $storage_key, $value, $field->get_autoload() );
			}
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
		$storage_key_comparisons = $this->key_toolset->storage_key_patterns_to_sql( '`option_name`', $storage_key_patterns );

		$option_names = $wpdb->get_col( '
			SELECT `option_name`
			FROM `' . $wpdb->options . '`
			WHERE ' . $storage_key_comparisons . '
		' );

		foreach ( $option_names as $option_name ) {
			delete_option( $option_name );
		}
	}
}
