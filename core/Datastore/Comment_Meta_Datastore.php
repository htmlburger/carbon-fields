<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Comment_Meta_Datastore extends Datastore {
	protected $comment_id;

	function init() {}

	function save(Field $field) {
		if ( !update_comment_meta($this->comment_id, $field->get_name(), $field->get_value()) ) {
			add_comment_meta($this->comment_id, $field->get_name(), $field->get_value(), true);
		}
	}

	function load(Field $field) {
		global $wpdb;

		$value = $wpdb->get_col('
			SELECT `meta_value`
			FROM ' . $wpdb->commentmeta . '
			WHERE `comment_id`=' . intval($this->comment_id) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		');

		if ( !is_array($value) || count($value) < 1 ) {
			$field->set_value(false);
			return;
		}

		$field->set_value($value[0]);
	}

	function delete(Field $field) {
		delete_comment_meta($this->comment_id, $field->get_name(), $field->get_value());
	}

	function load_values($field) {
		global $wpdb;

		if ( is_object($field) && is_subclass_of($field, 'Carbon_Fields\\Field\\Field') ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		return $wpdb->get_results('
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->commentmeta . '
			WHERE `meta_key` LIKE "' . addslashes($meta_key) . '_%" AND `comment_id`="' . intval($this->comment_id) . '"
		', ARRAY_A);
	}

	function delete_values(Field $field) {
		global $wpdb;

		$group_names = $field->get_group_names();
		$field_name = $field->get_name();

		$meta_key_constraint = '`meta_key` LIKE "' . $field_name . implode('-%" OR `meta_key` LIKE "' . $field_name, $group_names) . '-%"';

		return $wpdb->query('
			DELETE FROM ' . $wpdb->commentmeta . '
			WHERE (' . $meta_key_constraint . ') AND `comment_id`="' . intval($this->comment_id) . '"
		');
	}

	function set_id($comment_id) {
		$this->comment_id = $comment_id;
	}
}