<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Widget datastore
 */
class Widget_Datastore extends Key_Value_Datastore {

	/**
	 * Flat key-value array acting as storage
	 *
	 * @var array
	 */
	protected $storage = array();

	/**
	 * Initialization tasks.
	 **/
	public function init() {}

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 * @return array Array of {key, value} objects
	 */
	protected function get_storage_array_for_field( Field $field ) {
		$storage_key = $this->get_storage_key_prefix_for_field( $field );
		$storage_key_length = strlen( $storage_key );

		$storage_array = array();
		foreach ( $this->storage as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				$storage_array[] = (object) array( 'key'=>$key, 'value'=>$value);
			}
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
		$this->storage[ $key ] = $value;
	}

	/**
	 * Override storage array
	 *
	 * @param array $storage
	 */
	public function import_storage( $storage ) {
		$this->storage = $storage;
	}

	/**
	 * Return storage array
	 *
	 * @return array
	 */
	public function export_storage() {
		return $this->storage;
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		$storage_key = $this->get_storage_key_prefix_for_field( $field );
		$storage_key_length = strlen( $storage_key );

		foreach ( $this->storage as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				unset( $this->storage[ $key ] );
			}
		}
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( Field $field ) {
		$storage_key = $this->get_storage_key_root( $field );
		$storage_key_length = strlen( $storage_key );

		foreach ( $this->storage as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				unset( $this->storage[ $key ] );
			}
		}
	}
}
