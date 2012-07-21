<?php 

class EECF_Field_Repeater extends EECF_Field {
	protected $fields = array();
	protected $values = array();

	function add_fields($fields) {
		$this->fields = array_merge($this->fields, $fields);

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

	function load() {
		// load existing groups
		$this->load_values();

		// TODO: remove this line, used for testing?
		$this->values[] = $this->fields;
	}
	
	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		$this->values = array();

		if ( !isset($input[$this->get_name()]) ) {
			return;
		}

		$value_groups = $input[$this->get_name()];
		$index = 0;

		foreach ($value_groups as $values) {
			$group = array();
			// check if group is empty
			if ( count(array_filter($values)) == 0 && !in_array('0', $values) ) {
				continue;
			}

			foreach ($this->fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);

				// update name to group name
				$tmp_field->set_name( $this->get_name() . $field->get_name() . '_' . $index );
				$group[] = $tmp_field;
			}

			$this->values[] = $group;
			$index++;
		}
	}

	function save() {
		$this->delete();

		foreach ($this->values as $value) {
			foreach ($value as $field) {
				$field->save();
			}
		}
	}

	function delete() {
		return $this->store->delete_values($this);
	}

	function load_values() {
		$group_rows = $this->store->load_values($this);
		$value_groups = array();
		
		$this->values = array();

		if ( empty($group_rows) ) {
			return;
		}

		// load and parse values
		foreach ($group_rows as $row) {
			if ( !preg_match('~^' . preg_quote($this->name, '~') . '(?P<key>.*)_(?P<index>\d+)$~', $row['field_key'], $field_name) ) {
				continue;
			}

			$value_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
		}

		// create groups list with loaded fields
		ksort($value_groups);
		foreach ($value_groups as $index => $values) {
			$group_fields = array();

			foreach ($this->fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);
				$group_fields[] = $tmp_field;
			}

			$this->values[] = $group_fields;
		}
	}

	function set_prefix($prefix) {
		$this->name = preg_replace('~^' . preg_quote($this->name_prefix, '~') . '~', '', $this->name);
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;

		foreach ($this->fields as $field) {
			$field->set_prefix($prefix);
		}
	}

	function _render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/repeater.php';
	}
}

