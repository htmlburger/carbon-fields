<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Nav_Menu_Datastore extends Post_Meta_Datastore {
	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		// Not needed, the deletion is handled on delete_post automatically
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( $field ) {
		// Not needed, the deletion is handled on delete_post automatically
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		// Not implemented, Complex functionality would need this in order to work
	}

	/**
	 * Retrieve the initial field name
	 */
	public function get_field_name( $field ) {
		if ( ! empty( $field->initial_name ) ) {
			$field_name = $field->initial_name;
		} else {
			$field_name = $field->get_name();
		}

		return $field_name;
	}
}
