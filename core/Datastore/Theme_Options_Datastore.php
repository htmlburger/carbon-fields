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
	public function get_values_for_field( Field $field ) {
		global $wpdb;

		$storage_key = $this->get_storage_key_prefix_for_field( $field );

		$values = $wpdb->get_results( '
			SELECT `option_name` AS `field_key`, `option_value` AS `field_value`
			FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . esc_sql( $storage_key ) . '%"
			ORDER BY `option_name` ASC
		' );

		$values = array_map( function( $value ) {
			return $value->field_value;
		}, $values );

		return $values;
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$autoload = $field->get_autoload() ? 'yes': 'no';
		$value_set = $field->get_value_set();

		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = $this->get_storage_key_for_field( $field, $value_group_index, $value_key );

				$notoptions = wp_cache_get( 'notoptions', 'options' );
				$notoptions[ $storage_key ] = '';
				wp_cache_set( 'notoptions', $notoptions, 'options' );

				if ( ! add_option( $storage_key, $value, null, $autoload ) ) {
					update_option( $storage_key, $value );
				}
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
