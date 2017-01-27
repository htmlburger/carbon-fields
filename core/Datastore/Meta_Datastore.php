<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Abstract meta datastore class.
 */
abstract class Meta_Datastore extends Datastore {
	/**
	 * Initialization tasks.
	 **/
	public function init() {}

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	protected function get_storage_array_for_field( Field $field ) {
		global $wpdb;

		$storage_key = static::get_storage_key_prefix_for_field( $field );

		$storage_array = $wpdb->get_results( '
			SELECT `meta_key` AS `key`, `meta_value` AS `value`
			FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_id() ) . '
				AND `meta_key` LIKE "' . esc_sql( $storage_key ) . '%"
			ORDER BY `meta_key` ASC
		' );

		return $storage_array;
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 */
	protected function save_key_value_pair( $key, $value ) {
		if ( ! update_metadata( $this->get_meta_type(), $this->get_id(), $key, $value ) ) {
			add_metadata( $this->get_meta_type(), $this->get_id(), $key, $value, true );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		$storage_array = $this->get_storage_array_for_field( $field );
		$raw_value_set = static::storage_array_to_raw_value_set( $storage_array );
		$field->set_value( $raw_value_set );
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$value_set = $field->value()->get_set();
		if ( $value_set === null ) {
			return;
		}

		if ( empty( $value_set ) && $field->value()->keepalive() ) {
			$storage_key = static::get_storage_key_for_field( $field, 0, static::KEEPALIVE_KEY );
			$this->save_key_value_pair( $storage_key, '' );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = static::get_storage_key_for_field( $field, $value_group_index, $value_key );
				$this->save_key_value_pair( $storage_key, $value );
			}
		}
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		global $wpdb;
		
		$storage_key = static::get_storage_key_prefix_for_field( $field );

		$wpdb->query( '
			DELETE FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_id() ) . '
				AND `meta_key` LIKE "' . esc_sql( $storage_key ) . '%"
		' );
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( Field $field ) {
		global $wpdb;

		$storage_key = static::get_storage_key_root( $field );

		$wpdb->query( '
			DELETE FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_id() ) . '
				AND `meta_key` LIKE "' . esc_sql( $storage_key ) . '%"
		' );
	}

	/**
	 * Retrieve the type of meta data.
	 */
	abstract public function get_meta_type();

	/**
	 * Retrieve the meta table name to query.
	 */
	abstract public function get_table_name();

	/**
	 * Retrieve the meta table field name to query by.
	 */
	abstract public function get_table_field_name();

	/**
	 * Set the ID of the datastore.
	 */
	abstract public function set_id( $id );

	/**
	 * Retrieve the ID of the datastore.
	 */
	abstract public function get_id();
}
