<?php 

abstract class EECF_DataStore {
	abstract function load(EECF_Field $field);
	abstract function save(EECF_Field $field);
	abstract function delete(EECF_Field $field);
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

	function set_post_id($post_id) {
		$this->post_id = $post_id;
	}
}

