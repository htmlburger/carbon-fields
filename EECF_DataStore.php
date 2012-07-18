<?php 

abstract class EECF_DataStore {
	abstract function init();
	abstract function load(EECF_Field $field);
	abstract function save(EECF_Field $field);
	abstract function delete(EECF_Field $field);
	abstract function load_values(EECF_Field $field);
	abstract function delete_values(EECF_Field $field);

	function __construct() {
		$this->init();
	}
}

class EECF_DataStore_CustomField extends EECF_DataStore {
	protected $post_id;

	function init() {}

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
	function init() {}

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

class EECF_DataStore_TaxonomyMeta extends EECF_DataStore {
	protected $term_id;

	static function create_table() {
		global $wpdb;

		// TODO: setup tables for each registered blog?

		$charset_collate = '';	
		if ( ! empty($wpdb->charset) ) {
			$charset_collate = "DEFAULT CHARACTER SET " . $wpdb->charset;
		}
			
		if ( ! empty($wpdb->collate) ) {
			$charset_collate .= " COLLATE " . $wpdb->collate;
		}
	
		$tables = $wpdb->get_results('SHOW TABLES LIKE "' . $wpdb->prefix . 'taxonomymeta"');
		if ( empty($tables) ) {
			$wpdb->query('CREATE TABLE ' . $wpdb->prefix . 'taxonomymeta (
				meta_id bigint(20) unsigned NOT NULL auto_increment,
				taxonomy_id bigint(20) unsigned NOT NULL default "0",
				meta_key varchar(255) default NULL,
				meta_value longtext,
				PRIMARY KEY	(meta_id),
				KEY taxonomy_id (taxonomy_id),
				KEY meta_key (meta_key)
			) ' . $charset_collate . ';');
		}
	}

	function init() {
		global $wpdb;

		$wpdb->taxonomymeta = $wpdb->prefix . 'taxonomymeta';
	}

	function save(EECF_Field $field) {
		add_metadata('taxonomy', $this->term_id, $field->get_name(), $field->get_value(), true);
	}

	function load(EECF_Field $field) {
		$field->set_value( get_metadata('taxonomy', $this->term_id, $field->get_name(), true) );
	}

	function delete(EECF_Field $field) {
		delete_metadata('taxonomy', $this->term_id, $field->get_name(), $field->get_value());
		
	}

	function load_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->get_results('
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->taxonomymeta . '
			WHERE `meta_key` LIKE "' . $field->get_name() . '_%"
		', ARRAY_A);
		
	}

	function delete_values(EECF_Field $field) {
		global $wpdb;

		return $wpdb->query('
			DELETE FROM ' . $wpdb->taxonomymeta . '
			WHERE `meta_key` LIKE "' . $field->get_name() . '_%"
		');
	}

	function set_term_id($term_id) {
		$this->term_id = $term_id;
	}
}

