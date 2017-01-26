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
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );
		$value_set = $field->get_value_set();

		foreach ( $value_set as $index => $values ) {
			foreach ( $values as $key => $value ) {
				$data_key = '_!' . implode( ':', $full_hierarchy ) . '|' . implode( ':', $full_hierarchy_index ) . '|' . $index . '|' . $key;
				$data_key_hashed = '_!' . md5( implode( ':', $full_hierarchy ) ) . '|' . implode( ':', $full_hierarchy_index ) . '|' . $index . '|' . $key;

				update_option( $data_key, $value );
			}
		}
		return;

		// TODO - see what this option cache is all about
		$name = $field->get_name();
		$autoload = $field->get_autoload() ? 'yes': 'no';

		// Add value to the cache, so that add_option always works
		$notoptions = wp_cache_get( 'notoptions', 'options' );
		$notoptions[ $name ] = '';
		wp_cache_set( 'notoptions', $notoptions, 'options' );

		if ( ! add_option( $name, $field->get_value(), null, $autoload ) ) {
			update_option( $name, $field->get_value() );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		$field->set_value( $this->get_value_for_field( $field ) );
	}

	public function get_value_for_field( Field $field ) {
		$values = $this->get_values_for_field( $field );
		if ( !empty( $values ) ) {
			return $values[0]->field_value;
		}
		return '';
	}

	public function get_values_for_field( Field $field ) {
		global $wpdb;

		// _field:hierarchy:md5|group:hierarchy|index|key
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );

		$data_key = '_!' . implode( ':', $full_hierarchy ) . '|' . implode( ':', $full_hierarchy_index ) . '|';
		$data_key_hashed = '_!' . md5( implode( ':', $full_hierarchy ) ) . '|' . implode( ':', $full_hierarchy_index ) . '|';

		$values = $wpdb->get_results( '
			SELECT `option_name` AS `field_key`, `option_value` AS `field_value`
			FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . $data_key . '%"
			ORDER BY `option_name` ASC
		' );

		return $values;
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		delete_option( $field->get_name() );
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		global $wpdb;

		$value = $this->get_value_for_complex_field( $field );
		return $value;

		// _field:hierarchy:md5|group:hierarchy|index|key
		$full_hierarchy = array_merge( $field->get_hierarchy(), array( $field->get_hierarchy_name() ) );
		$full_hierarchy_index = !empty( $field->get_hierarchy_index() ) ? $field->get_hierarchy_index() : array( 0 );

		$data_key = '_!' . implode( ':', $full_hierarchy ) . '|' . implode( ':', $full_hierarchy_index ) . ':';
		$data_key_hashed = '_!' . md5( implode( ':', $full_hierarchy ) ) . '|' . implode( ':', $full_hierarchy_index ) . ':';

		$values = $wpdb->get_results( '
			SELECT `option_name` AS field_key, `option_value` AS field_value
			FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . $data_key . '%"
			ORDER BY `option_name` ASC
		' );
		var_dump($data_key);
		var_dump($values);

		return $values;

		
		global $wpdb;

		if ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		return $wpdb->get_results( '
			SELECT option_name AS field_key, option_value AS field_value FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . addslashes( $meta_key ) . '_%"
		', ARRAY_A );
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( $field ) {
		global $wpdb;

		$group_names = $field->get_group_names();
		$field_name = $field->get_name();

		$option_name_constraint = '`option_name` LIKE "' . $field_name . implode( '-%" OR `option_name` LIKE "' . $field_name, $group_names ) . '-%"';

		return $wpdb->query( '
			DELETE FROM ' . $wpdb->options . '
			WHERE (' . $option_name_constraint . ')
		' );
	}
}
