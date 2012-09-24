<?php 

class Carbon_Field_Compound extends Carbon_Field {
	const LAYOUT_TABLE = 'table';
	const LAYOUT_LIST = 'list';

	protected $fields = array();
	protected $values = array();
	protected $layout = self::LAYOUT_TABLE;

	protected $values_min = -1;
	protected $values_max = -1;

	function add_fields($fields) {
		$this->fields = array_merge($this->fields, $fields);

		return $this;
	}
	
	function set_datastore(Carbon_DataStore $store) {
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

	function get_values() {
		return $this->values;
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
		include dirname(__FILE__) . '/admin-templates/field_compound.php';
	}

	function set_layout($layout) {
		if ( !in_array($layout, array(self::LAYOUT_TABLE, self::LAYOUT_LIST)) ) {
			throw new Carbon_Exception('Incorrect layout specifier. Available values are "<code>' . self::LAYOUT_TABLE . '</code>" and "<code>' . self::LAYOUT_LIST . '</code>"');
		}

		$this->layout = $layout;

		return $this;
	}

	function set_min($min) {
		$this->values_min = intval($min);
		return $this;
	}

	function get_min() {
		return $this->values_min;
	}

	function set_max($max) {
		$this->values_max = intval($max);
		return $this;
	}

	function get_max() {
		return $this->values_max;
	}
}

