<?php 

class EECF_Field_Repeater extends EECF_Field {
	protected $fields = array();
	protected $groups = array();

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
		$this->load_groups();

		// TODO: remove this line, used for testing?
		$group = $this->create_group();
		$group->add_fields($this->fields);
	}

	function save() {
		// TODO: delete all
		
		if ( !isset($_POST[$this->get_name()]) ) {
			return;
		}

		$value_groups = $_POST[$this->get_name()];
		foreach ($value_groups as $index => $values) {
			foreach ($this->fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);

				// update name to group name
				$tmp_field->set_name( $this->get_name() . $field->get_name() . '_' . $index );

				$tmp_field->save();
			}
		}
	}

	function delete() {
		throw new Exception('TBD');
	}

	function load_groups() {
		$group_rows = $this->store->load_groups($this);
		$value_groups = array();

		// load and parse values
		foreach ($group_rows as $row) {
			if ( !preg_match('~^' . preg_quote($this->name, '~') . '(?P<key>.*)_(?P<index>\d+)$~', $row['field_key'], $field_name) ) {
				continue;
			}

			$value_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
		}

		// create groups list with loaded fields
		foreach ($value_groups as $index => $values) {
			$group_fields = array();

			foreach ($this->fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				$tmp_field->set_value_from_input($values);
				$group_fields[] = $tmp_field;
			}

			$group = $this->create_group();
			$group->add_fields($group_fields);
		}
	}

	function create_group() {
		$group = new EECF_Field_Repeater_Group($this->get_name(), count($this->groups));
		$this->groups[] = $group;

		return $group;
	}

	function _render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/repeater.php';
	}
}

class EECF_Field_Repeater_Group {
	protected $fields = array();
	protected $index;
	protected $name;

	function __construct($name, $index=0) {
		$this->name = $name;
		$this->index = intval($index);
	}

	function add_fields($fields) {
		foreach ($fields as $index => $field) {
			if ( !is_a($field, 'EECF_Field') ) {
				throw new Exception('Object must be of type EECF_Field');
			}

			$field->set_name( $this->name . '[' . $this->get_index() . '][' . $field->get_name() . ']' );
			$this->fields[] = $field;
		}

		return $this;
	}

	function get_fields() {
		return $this->fields;
	}

	function get_index() {
		return $this->index;
	}
}

