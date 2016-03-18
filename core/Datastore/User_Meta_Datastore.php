<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * User meta datastore class.
 */
class User_Meta_Datastore extends Meta_Datastore {
	/**
	 * ID of the user.
	 *
	 * @var int
	 */
	protected $user_id;

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		$results = parent::load_values( $field );

		if ( ! $results && is_object( $field ) ) {
			$tmp_field = clone $field;
			$tmp_field->set_value_from_input();

			$values = $tmp_field->get_values();

			foreach ( $values as $single_value ) {
				foreach ( $single_value as $value_field ) {
					$results[] = array(
						'field_key' => $value_field->get_name(),
						'field_value' => $value_field->get_value(),
					);
				}
			}
		}

		return $results;
	}

	/**
	 * Retrieve the type of meta data.
	 *
	 * @return string
	 */
	public function get_meta_type() {
		return 'user';
	}

	/**
	 * Retrieve the meta table name to query.
	 *
	 * @return string
	 */
	public function get_table_name() {
		global $wpdb;
		return $wpdb->usermeta;
	}

	/**
	 * Retrieve the meta table field name to query by.
	 *
	 * @return string
	 */
	public function get_table_field_name() {
		return 'user_id';
	}

	/**
	 * Set the user ID of the datastore.
	 *
	 * @param int $user_id ID of the user.
	 */
	public function set_id( $user_id ) {
		$this->user_id = $user_id;
	}

	/**
	 * Retrieve the user ID of the datastore.
	 *
	 * @return int ID of the user.
	 */
	public function get_id() {
		return $this->user_id;
	}
}
