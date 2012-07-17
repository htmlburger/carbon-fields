<?php 

abstract class EECF_DataStore {
	abstract function load(EECF_Field $field);
	abstract function save(EECF_Field $field);
	abstract function delete(EECF_Field $field);
	abstract function load_values(EECF_Field $field);
	abstract function delete_values(EECF_Field $field);
}

class EECF_DataStore_CustomField extends EECF_DataStore {
	protected $post_id;

	function save(EECF_Field $field) {
		update_post_meta($this->post_id, $field->get_name(), $field->get_value());
	}

	function load(EECF_Field $field) {
		$field->set_value( get_post_meta($this->post_id, $field->get_name(), true) );
	}

	function delete(EECF_Field $field) {
		delete_post_meta($this->post_id, $field->get_name(), $field->get_value());
	}

	function load_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->get_results('
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->postmeta . '
			WHERE `meta_key` LIKE "' . $field->get_name() . '_%"
		', ARRAY_A);
	}

	function delete_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->query('
			DELETE FROM ' . $wpdb->postmeta . '
			WHERE `meta_key` LIKE "' . $field->get_name() . '_%"
		');
	}

	function set_post_id($post_id) {
		$this->post_id = $post_id;
	}
}

class EECF_DataStore_ThemeOptions extends EECF_DataStore {
	function save(EECF_Field $field) {
		if ( !add_option($field->get_name(), $field->get_value(), null, 'no') ) {
			update_option($field->get_name(), $field->get_value());
		}
	}

	function load(EECF_Field $field) {
		$field->set_value( get_option($field->get_name()) );
	}

	function delete(EECF_Field $field) {
		delete_option($field->get_name());
	}

	function load_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->get_results('
			SELECT option_name AS field_key, option_value AS field_value FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . $field->get_name() . '_%"
		', ARRAY_A);
	}

	function delete_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->query('
			DELETE FROM ' . $wpdb->options . '
			WHERE `option_name` LIKE "' . $field->get_name() . '_%"
		');
	}
}

