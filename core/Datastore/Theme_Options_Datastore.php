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
		$field->set_value( get_option( $field->get_name() ) );
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
