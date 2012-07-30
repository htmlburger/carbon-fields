<?php 

class EECF_Field_Groups extends EECF_Field_Repeater {
	protected $groups = array();

	function add_fields($fields, $name, $label=null) {
		$group = new EECF_Field_Group();
		$group->set_name( $name );
		
		$group->add_fields($fields);
		$group->set_label( $label );


		$this->groups[$group->get_name()] = $group;
		return $this;
	}

	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;

		foreach ($this->groups as $group) {
			$group->set_datastore($this->store);
		}
	}

	function set_value_from_input($input = null) {
		$this->values = array();

		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->get_name()]) ) {
			return;
		}

		$input_groups = $input[$this->get_name()];
		$index = 0;

		foreach ($input_groups as $values) {
			$value_group = array();
			if ( !isset($values['group']) || !isset($this->groups[$values['group']]) ) {
				continue;
			}

			$group = $this->groups[$values['group']];
			unset($values['group']);

			$group_fields = $group->get_fields();

			// trim input values to those used by the field
			$group_field_names = array_flip($group->get_field_names());
			$values = array_intersect_key($values, $group_field_names);

			// check if group is empty
			if ( count(array_filter($values)) == 0 && !in_array('0', $values) ) {
				continue;
			}

			foreach ($group_fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);

				// update name to group name
				$tmp_field->set_name( $this->get_name() . $group->get_name() . $field->get_name() . '_' . $index );
				$value_group[] = $tmp_field;
			}

			$this->values[] = $value_group;
			$index++;
		}
	}

	function load() {
		// load existing groups
		$this->load_values();
	}

	function load_values() {
		$this->values = array();

		$group_rows = $this->store->load_values($this);
		$input_groups = array();

		if ( empty($group_rows) ) {
			return;
		}

		// quote group names for use in regex
		$group_names = array_map('preg_quote', array_keys($this->groups), array('~'));
		$group_names = implode('|', $group_names);

		// load and parse values and group type
		foreach ($group_rows as $row) {
			if ( !preg_match('~^' . preg_quote($this->name, '~') . '(?P<group>' . $group_names . ')(?P<key>.*)_(?P<index>\d+)$~', $row['field_key'], $field_name) ) {
				continue;
			}

			$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
		}

		// create groups list with loaded fields
		ksort($input_groups);

		foreach ($input_groups as $index => $values) {
			$value_group = array('type' => $values['type']);
			$group_fields = $this->groups[$values['type']]->get_fields();
			unset($values['type']);

			foreach ($group_fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);
				$value_group[] = $tmp_field;
			}

			$this->values[] = $value_group;
		}
	}

	function set_prefix($prefix) {
		$this->name = preg_replace('~^' . preg_quote($this->name_prefix, '~') . '~', '', $this->name);
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;

		foreach ($this->groups as $group) {
			$group->set_prefix($prefix);
		}
	}

	function _render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/field_groups.php';
	}
}


class EECF_Field_Group {
	protected $name;
	protected $label;
	protected $fields = array();

	function add_fields($fields) {
		$this->fields = array_merge($this->fields, $fields);
	}

	function get_fields() {
		return $this->fields;
	}

	function get_field_names() {
		$names = array();

		foreach ($this->fields as $field) {
			$names[] = $field->get_name();
		}

		return $names;
	}

	function set_label($label) {
		// Try to guess field label from it's name
		if (is_null($label)) {
			// remove the leading underscore(if it's there)
			$label = preg_replace('~^_~', '', $this->name);
			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}

		$this->label = $label;
	}

	function get_label() {
		return $this->label;
	}

	function set_name($name) {
		$name = preg_replace('~\s+~', '_', strtolower($name));
		if (substr($name, 0, 1) != '_') {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$this->name = $name;
	}

	function get_name() {
		return $this->name;
	}

	function set_datastore(EECF_DataStore $store) {
		foreach ($this->fields as $field) {
			if ( !$field->get_datastore() ) {
				$field->set_datastore($store);
			}
		}
	}

	function set_prefix($prefix) {
		foreach ($this->fields as $field) {
			$field->set_prefix($prefix);
		}
	}
}

