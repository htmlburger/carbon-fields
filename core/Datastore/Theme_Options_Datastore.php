<?php

namespace Carbon_Fields\Datastore;

use \Carbon_Fields\Field\Field;

/**
 * Theme options datastore class.
 */
class Theme_Options_Datastore extends Key_Value_Datastore {
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

		$storage_key_comparisons = $this->storage_key_patterns_to_sql( '`option_name`', $storage_key_patterns );

		$storage_array = $wpdb->get_results( '
			SELECT `option_name` AS `key`, `option_value` AS `value`
			FROM ' . $wpdb->options . '
			WHERE ' . $storage_key_comparisons . '
			ORDER BY `option_name` ASC
		' );

		if ( empty( $storage_array ) ) {
			$storage_array = $this->legacy_storage_service->get_storage_array( $this, $storage_key_patterns );
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
		$this->save_key_value_pair_with_autoload( $key, $value, 'no' );
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 * @param bool $autoload
	 */
	protected function save_key_value_pair_with_autoload( $key, $value, $autoload ) {
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
		$autoload = $field->get_autoload() ? 'yes': 'no';
		$value_set = $field->value()->get_set();
		if ( $value_set === null ) {
			return;
		}

		if ( empty( $value_set ) && $field->value()->keepalive() ) {
			$storage_key = $this->get_storage_key( $field, 0, static::KEEPALIVE_KEY );
			$this->save_key_value_pair_with_autoload( $storage_key, '', $autoload );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = $this->get_storage_key( $field, $value_group_index, $value_key );
				$this->save_key_value_pair_with_autoload( $storage_key, $value, $autoload );
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

		$storage_key_patterns = $this->get_storage_key_deleter_patterns( $field );
		$storage_key_comparisons = $this->storage_key_patterns_to_sql( '`option_name`', $storage_key_patterns );

		$wpdb->query( '
			DELETE FROM ' . $wpdb->options . '
			WHERE ' . $storage_key_comparisons . '
		' );
	}
}
