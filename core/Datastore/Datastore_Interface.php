<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Interface for data storage management.
 */
interface Datastore_Interface {
	/**
	 * Return the field values
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function get_values_for_field( Field $field );

	/**
	 * Return the first field value found
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function get_value_for_field( Field $field );

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to load value(s) in.
	 * @param bool $multiple_values Whether to load multiple values or only the first one
	 */
	public function load( Field $field, $multiple_values = false );

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field );

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field );

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( Field $field );
}
