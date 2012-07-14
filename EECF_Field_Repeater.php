<?php 

class EECF_Field_Repeater extends EECF_Field {
	protected $fields = array();

	function add_fields($fields) {
		$this->fields = array_merge($this->fields, $fields);
	}

	function save(EECF_DataStore $store) {
		foreach ($this->fields as $field) {
			// Process input value and set it
			$field->set_value("");
			$field->save($store);
		}
	}
}

