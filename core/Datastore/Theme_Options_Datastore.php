<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Theme options datastore class.
 */
class Theme_Options_Datastore extends Datastore {
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
			SELECT `option_name` AS `key`, `option_value` AS `value`
			FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
			ORDER BY `option_name` ASC
		' );

		return $storage_array;
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 * @param bool $autoload
	 */
	protected function save_key_value_pair( $key, $value, $autoload ) {
		$notoptions = wp_cache_get( 'notoptions', 'options' );
		$notoptions[ $key ] = '';
		wp_cache_set( 'notoptions', $notoptions, 'options' );

		if ( ! add_option( $key, $value, null, $autoload ) ) {
			update_option( $key, $value );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to load value(s) in.
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
		$autoload = $field->get_autoload() ? 'yes': 'no';
		$value_set = $field->value()->get_set();
		if ( $value_set === null ) {
			return;
		}

		if ( empty( $value_set ) && $field->value()->keepalive() ) {
			$storage_key = static::get_storage_key_for_field( $field, 0, static::KEEPALIVE_KEY );
			$this->save_key_value_pair( $storage_key, '', $autoload );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = static::get_storage_key_for_field( $field, $value_group_index, $value_key );
				$this->save_key_value_pair( $storage_key, $value, $autoload );
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
			DELETE FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
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
			DELETE FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
		' );
	}
}
