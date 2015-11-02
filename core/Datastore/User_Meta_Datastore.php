<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Base_Field;

class User_Meta_Datastore extends Base_Datastore {
	protected $user_id;

	function init() {}

	function save(Base_Field $field) {
		if ( !update_user_meta($this->user_id, $field->get_name(), $field->get_value()) ) {
			add_user_meta($this->user_id, $field->get_name(), $field->get_value(), true);
		}
	}

	function load(Base_Field $field) {
		global $wpdb;

		$value = $wpdb->get_col('
			SELECT `meta_value`
			FROM ' . $wpdb->usermeta . '
			WHERE `user_id`=' . intval($this->user_id) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		');

		if ( !is_array($value) || count($value) < 1 ) {
			$field->set_value_from_input();
			return;
		}

		$field->set_value($value[0]);
	}

	function delete(Base_Field $field) {
		delete_user_meta($this->user_id, $field->get_name(), $field->get_value());
	}

	function load_values($field) {
		global $wpdb;

		if ( is_object($field) && is_subclass_of($field, 'Carbon_Fields\\Field\\Base_Field') ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		$results = $wpdb->get_results('
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->usermeta . '
			WHERE `meta_key` LIKE "' . addslashes($meta_key) . '_%" AND `user_id`="' . intval($this->user_id) . '"
		', ARRAY_A);
		if (!$results && is_object($field)) {
			$tmp_field = clone $field;
			$tmp_field->set_value_from_input();

			$values = $tmp_field->get_values();

			foreach ($values as $single_value) {
				foreach ($single_value as $value_field) {
					$results[] = array(
						'field_key' => $value_field->get_name(),
						'field_value' => $value_field->get_value()
					);	
				}
			}
		}

		return $results;
	}

	function delete_values(Base_Field $field) {
		global $wpdb;

		$group_names = $field->get_group_names();
		$field_name = $field->get_name();

		$meta_key_constraint = '`meta_key` LIKE "' . $field_name . implode('-%" OR `meta_key` LIKE "' . $field_name, $group_names) . '-%"';

		return $wpdb->query('
			DELETE FROM ' . $wpdb->usermeta . '
			WHERE (' . $meta_key_constraint . ') AND `user_id`="' . intval($this->user_id) . '"
		');
	}

	function set_id($user_id) {
		$this->user_id = $user_id;
	}
}
