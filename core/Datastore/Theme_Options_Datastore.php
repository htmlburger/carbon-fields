<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Theme options datastore class.
 *
 * Storage key schema
 * _parent1_name|md5(parent2_name:parent3_name:...)|field_group_index1:field_group_index2:...|value_group_index|value_key
 */
class Theme_Options_Datastore extends Datastore {
	/**
	 * Initialization tasks.
	 **/
	public function init() {}

	/**
	 * Return the field values
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	protected function get_raw_value_set_for_field( Field $field ) {
		global $wpdb;

		$storage_key = $this->get_storage_key_prefix_for_field( $field );

		$storage_array = $wpdb->get_results( '
			SELECT `option_name` AS `key`, `option_value` AS `value`
			FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
			ORDER BY `option_name` ASC
		' );

		$raw_value_set = $this->storage_array_to_raw_value_set( $storage_array );

		return $raw_value_set;
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to load value(s) in.
	 */
	public function load( Field $field ) {
		$field->set_value( $this->get_raw_value_set_for_field( $field ) );
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

		foreach ( $value_set as $value_group_index => $values ) {
			if ( empty($values) && $field->value()->keepalive() ) {
				$storage_key = $this->get_storage_key_for_field( $field, $value_group_index, self::KEEPALIVE_KEY );
				$this->save_key_value_pair( $storage_key, '', $autoload );
			}

			foreach ( $values as $value_key => $value ) {
				$storage_key = $this->get_storage_key_for_field( $field, $value_group_index, $value_key );
				$this->save_key_value_pair( $storage_key, $value, $autoload );
			}
		}
	}

	protected function save_key_value_pair( $key, $value, $autoload ) {
		$notoptions = wp_cache_get( 'notoptions', 'options' );
		$notoptions[ $key ] = '';
		wp_cache_set( 'notoptions', $notoptions, 'options' );

		if ( ! add_option( $key, $value, null, $autoload ) ) {
			update_option( $key, $value );
		}
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		global $wpdb;
		
		$storage_key = $this->get_storage_key_prefix_for_field( $field );

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

		$storage_key = $this->get_storage_key_root( $field );

		$wpdb->query( '
			DELETE FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
		' );
	}
}
