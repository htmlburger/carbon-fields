<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Nav_Menu_Datastore extends Post_Meta_Datastore {
	
	public function get_garbage_prefix() {
		if ( !$this->get_id() ) {
			return '';
		}
		return '_menu-item-' . $this->get_id();
	}

	public function get_clean_field_name( $field ) {
		$name = ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) ? $field->get_name() : $field;
		return substr( $name, strlen( $this->get_garbage_prefix() ) );
	}

	public function get_dirty_field_name( $field ) {
		$name = ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) ? $field->get_name() : $field;
		return $this->get_garbage_prefix() . $name;
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		if ( ! update_metadata( $this->get_meta_type(), $this->get_id(), $this->get_clean_field_name( $field ), $field->get_value() ) ) {
			add_metadata( $this->get_meta_type(), $this->get_id(), $this->get_clean_field_name( $field ), $field->get_value(), true );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		global $wpdb;

		if ( ! $this->get_id() ) {
			return;
		}

		$query = $wpdb->prepare( '
			SELECT `meta_value`
			FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '`= %d
			AND `meta_key`= %s
			LIMIT 1
		', intval( $this->get_id() ), $this->get_clean_field_name( $field ) );
		$value = $wpdb->get_col( $query );

		if ( ! is_array( $value ) || count( $value ) < 1 ) {
			$field->set_value( false );
			return;
		}

		$field->set_value( $value[0] );
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		global $wpdb;

		if ( ! $this->get_id() ) {
			return;
		}

		$meta_key = $this->get_clean_field_name( $field );

		$results = $wpdb->get_results( '
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $this->get_table_name() . '
			WHERE `meta_key` LIKE "' . addslashes( $meta_key ) . '_%" AND `' . $this->get_table_field_name() . '`="' . intval( $this->get_id() ) . '"
		', ARRAY_A );

		foreach ( $results as $index => $result ) {
			$result['field_key'] = $this->get_dirty_field_name( $result['field_key'] );
			$results[$index] = $result;
		}

		return $results;
	}
}
