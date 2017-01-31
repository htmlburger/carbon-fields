<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Interface for data storage management.
 */
interface Datastore_Interface {

	/**
	 * Load the field value(s)
	 *
	 * @param Field $field The field to load value(s) in.
	 */
	public function load( Field $field );

	/**
	 * Save the field value(s)
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field );

	/**
	 * Delete the field value(s)
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field );
}
