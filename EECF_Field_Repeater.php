<?php 

class EECF_Field_Repeater extends EECF_Field {
	protected $fields = array();

	function add_fields($fields) {
		foreach ($fields as $index => $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new Exception('Object must be of type EECF_Field');
			}

			$field->set_name( $this->get_name() . $field->get_name() );
			$this->fields[] = $field;
		}

		return $this;
	}
	
	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;

		foreach ($this->fields as $field) {
			if ( !$field->get_datastore() ) {
				$field->set_datastore($this->store);
			}
		}
	}

	function save() {
		foreach ($this->fields as $field) {
			// Process input value and set it
			$field->set_value_from_input();
			$field->save();
		}
	}

	function _render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/repeater.php';
	}
}

