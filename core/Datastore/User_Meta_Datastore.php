<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class User_Meta_Datastore extends Datastore {
	protected $user_id;

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
		if ( ! update_user_meta( $this->user_id, $field->get_name(), $field->get_value() ) ) {
			add_user_meta( $this->user_id, $field->get_name(), $field->get_value(), true );
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
			FROM ' . $wpdb->usermeta . '
			WHERE `user_id`=' . intval( $this->user_id ) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		');

		if ( ! is_array( $value ) || count( $value ) < 1 ) {
			$field->set_value_from_input();
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
		delete_user_meta( $this->user_id, $field->get_name(), $field->get_value() );
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

		$results = $wpdb->get_results( '
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->usermeta . '
			WHERE `meta_key` LIKE "' . addslashes( $meta_key ) . '_%" AND `user_id`="' . intval( $this->user_id ) . '"
		', ARRAY_A );

		if ( ! $results && is_object( $field ) ) {
			$tmp_field = clone $field;
			$tmp_field->set_value_from_input();

			$values = $tmp_field->get_values();

			foreach ( $values as $single_value ) {
				foreach ( $single_value as $value_field ) {
					$results[] = array(
						'field_key' => $value_field->get_name(),
						'field_value' => $value_field->get_value()
					);	
				}
			}
		}

		return $results;
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
			DELETE FROM ' . $wpdb->usermeta . '
			WHERE (' . $meta_key_constraint . ') AND `user_id`="' . intval( $this->user_id ) . '"
		' );
	}

	/**
	 * Set the user ID of the datastore.
	 * 
	 * @param int $user_id ID of the user.
	 */
	public function set_id( $user_id ) {
		$this->user_id = $user_id;
	}
}
