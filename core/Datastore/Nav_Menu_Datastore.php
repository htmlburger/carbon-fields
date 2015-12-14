<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Nav_Menu_Datastore extends Post_Meta_Datastore {
	public $post_id;

	function save(Field $field) {
		if ( !update_post_meta($this->post_id, $this->get_field_name($field), $field->get_value()) ) {
			add_post_meta($this->post_id, $this->get_field_name($field), $field->get_value(), true);
		}
	}

	function load(Field $field) {
		global $wpdb;

		$value = $wpdb->get_col('
			SELECT `meta_value`
			FROM ' . $wpdb->postmeta . '
			WHERE `post_id`=' . intval($this->post_id) . '
			AND `meta_key`="' . $this->get_field_name($field) . '"
			LIMIT 1
		');

		if ( !is_array($value) || count($value) < 1 ) {
			$field->set_value(false);
			return;
		}

		$field->set_value($value[0]);
	}

	function delete(Field $field) {
		// Not needed, the deletion is handled on delete_post automatically
	}

	function delete_values(Field $field) {
		// Not needed, the deletion is handled on delete_post automatically
	}

	function load_values($field) {
		// Not implemented, Complex functionality would need this in order to work
	}

	/**
	 * Retrieve the initial field name
	 */
	function get_field_name($field) {
		if ( !empty($field->initial_name) ) {
			$field_name = $field->initial_name;
		} else {
			$field_name = $field->get_name();
		}

		return $field_name;
	}
}