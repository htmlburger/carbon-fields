<?php

namespace Carbon_Fields\Datastore;

use \Carbon_Fields\App;
use \Carbon_Fields\Field\Field;

/**
 * Abstract meta datastore class.
 */
abstract class Meta_Datastore extends Key_Value_Datastore {
	/**
	 * Initialization tasks.
	 **/
	public function init() {}

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	protected function get_storage_array( Field $field, $storage_key_patterns ) {
		global $wpdb;

		$storage_key_comparisons = $this->storage_key_patterns_to_sql( '`meta_key`', $storage_key_patterns );

		$storage_array = $wpdb->get_results( '
			SELECT `meta_key` AS `key`, `meta_value` AS `value`
			FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_id() ) . '
				AND ' . $storage_key_comparisons . '
			ORDER BY `meta_key` ASC
		' );

		if ( empty( $storage_array ) ) {
			$storage_array = App::ioc( 'legacy_storage_service' )->get_storage_array_for_patterns( $this, $storage_key_patterns );
		}

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
	 * Delete the field value(s)
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		global $wpdb;

		$storage_key_patterns = $this->get_storage_key_deleter_patterns( $field );
		$storage_key_comparisons = $this->storage_key_patterns_to_sql( '`meta_key`', $storage_key_patterns );

		$wpdb->query( '
			DELETE FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '` = ' . intval( $this->get_id() ) . '
				AND ' . $storage_key_comparisons . '
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
