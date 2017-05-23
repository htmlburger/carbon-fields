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
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		if ( ! update_metadata( $this->get_meta_type(), $this->get_id(), $field->get_name(), $field->get_value() ) ) {
			add_metadata( $this->get_meta_type(), $this->get_id(), $field->get_name(), $field->get_value(), true );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		global $wpdb;

		$value = $wpdb->get_col( '
			SELECT `meta_value`
			FROM ' . $this->get_table_name() . '
			WHERE `' . $this->get_table_field_name() . '`=' . intval( $this->get_id() ) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		' );

		if ( ! is_array( $value ) || count( $value ) < 1 ) {
			$field->set_value( false );
			return;
		}

		$field->set_value( $value[0] );
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		delete_metadata( $this->get_meta_type(), $this->get_id(), $field->get_name(), $field->get_value() );
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		global $wpdb;

		if ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		return $wpdb->get_results( '
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $this->get_table_name() . '
			WHERE `meta_key` LIKE "' . addslashes( $meta_key ) . '_%" AND `' . $this->get_table_field_name() . '`="' . intval( $this->get_id() ) . '"
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

		$meta_key_constraint = '`meta_key` LIKE "' . $field_name . implode( '-%" OR `meta_key` LIKE "' . $field_name, $group_names ) . '-%"';

		return $wpdb->query( '
			DELETE FROM ' . $this->get_table_name() . '
			WHERE (' . $meta_key_constraint . ') AND `' . $this->get_table_field_name() . '`="' . intval( $this->get_id() ) . '"
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
