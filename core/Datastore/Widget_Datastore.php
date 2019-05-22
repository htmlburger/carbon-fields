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
	 */
	public function init() {}

	/**
	 * Override storage array
	 *
	 * @param array $storage
	 */
	public function import_storage( $storage ) {
		$this->storage = $storage;
	}

	/**
	 * Get storage array
	 *
	 * @return array
	 */
	public function export_storage() {
		return $this->storage;
	}

	/**
	 * Get a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 * @param array $storage_key_patterns
	 * @return array<stdClass> Array of {key, value} objects
	 */
	protected function get_storage_array( Field $field, $storage_key_patterns ) {
		$storage_array = array();
		foreach ( $this->storage as $storage_key => $value ) {
			if ( $this->key_toolset->storage_key_matches_any_pattern( $storage_key, $storage_key_patterns ) ) {
				$storage_array[] = (object) array(
					'key' => $storage_key,
					'value' => $value,
				);
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
	 * Delete the field value(s)
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		$storage_key_patterns = $this->key_toolset->get_storage_key_deleter_patterns(
			( $field instanceof \Carbon_Fields\Field\Complex_Field ),
			$field->is_simple_root_field(),
			$this->get_full_hierarchy_for_field( $field ),
			$this->get_full_hierarchy_index_for_field( $field )
		);

		foreach ( $this->storage as $storage_key => $value ) {
			if ( $this->key_toolset->storage_key_matches_any_pattern( $storage_key, $storage_key_patterns ) ) {
				unset( $this->storage[ $storage_key ] );
			}
		}
	}
}
