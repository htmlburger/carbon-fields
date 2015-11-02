<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Base_Field;

class Custom_Fields_Datastore extends Base_Datastore {
	protected $post_id;

	function init() {}

	function save(Base_Field $field) {
		if ( !update_post_meta($this->post_id, $field->get_name(), $field->get_value()) ) {
			add_post_meta($this->post_id, $field->get_name(), $field->get_value(), true);
		}
	}

	function load(Base_Field $field) {
		global $wpdb;

		$value = $wpdb->get_col('
			SELECT `meta_value`
			FROM ' . $wpdb->postmeta . '
			WHERE `post_id`=' . intval($this->post_id) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		');

		if ( !is_array($value) || count($value) < 1 ) {
			$field->set_value(false);
			return;
		}

		$field->set_value($value[0]);
	}

	function delete(Base_Field $field) {
		delete_post_meta($this->post_id, $field->get_name(), $field->get_value());
	}

	function load_values($field) {
		global $wpdb;

		if ( is_object($field) && is_subclass_of($field, 'Carbon_Fields\\Field\\Base_Field') ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		return $wpdb->get_results('
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->postmeta . '
			WHERE `meta_key` LIKE "' . addslashes($meta_key) . '_%" AND `post_id`="' . intval($this->post_id) . '"
		', ARRAY_A);
	}

	function delete_values(Base_Field $field) {
		global $wpdb;

		$group_names = $field->get_group_names();
		$field_name = $field->get_name();

		$meta_key_constraint = '`meta_key` LIKE "' . $field_name . implode('-%" OR `meta_key` LIKE "' . $field_name, $group_names) . '-%"';

		return $wpdb->query('
			DELETE FROM ' . $wpdb->postmeta . '
			WHERE (' . $meta_key_constraint . ') AND `post_id`="' . intval($this->post_id) . '"
		');
	}

	function set_id($post_id) {
		$this->post_id = $post_id;
	}
}
