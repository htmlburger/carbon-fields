<?php 
class Carbon_Field_Complex extends Carbon_Field {
	const LAYOUT_TABLE = 'table';
	const LAYOUT_LIST = 'list';

	protected $fields = array();
	protected $values = array();
	protected $groups = array();

	protected $layout = self::LAYOUT_LIST;
	protected $values_min = -1;
	protected $values_max = -1;

	public $labels = array(
		'plural_name'=>'Entries',
    	'singular_name'=>'Entry',
	);

	function init() {
		if (defined('WP_ADMIN') && WP_ADMIN) {
			wp_enqueue_script('jquery-ui-sortable');
		}
		Carbon_Field::init();
	}

	function add_fields() {
		$argv = func_get_args();
		$argc = count($argv);

		if ( $argc == 1 ) {
			$fields = $argv[0];
			$name = '';
			$label = null;
		} else if ($argc == 2) {
			if ( is_array($argv[0]) ) {
				list($fields, $name) = $argv;
			} else {
				list($name, $fields) = $argv;
			}
			$label = null;
		} else if ( $argc == 3 ) {
			if ( is_array($argv[0]) ) {
				list($fields, $name, $label) = $argv;
			} else {
				list($name, $label, $fields) = $argv;
			}
		}

		$group = new Carbon_Field_Group();
		$group->set_name( $name );
		
		$group->add_fields($fields);
		$group->set_label( $label );

		$this->groups[$group->get_name()] = $group;
		return $this;
	}
	function setup_labels($labels) {
		$this->labels = array_merge($this->labels, $labels);
		return $this;
	}

	function set_datastore(Carbon_DataStore $store) {
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

		if ( isset($input_groups['__ei__']) ) {
			unset($input_groups['__ei__']);
		}

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
				if ( is_a($tmp_field, 'Carbon_Field_Complex') ) {
					$new_name = $this->get_name() . $group->get_name() . '-' . $field->get_name() . '_' . $index;
					$new_values = array( $new_name => $values[$tmp_field->get_name()] );

					$tmp_field->set_name( $new_name );
					$tmp_field->set_value_from_input($new_values);
				} else {
					$tmp_field->set_value_from_input($values);
				}

				// update name to group name
				$tmp_field->set_name( $this->get_name() . $group->get_name() . '-' . $field->get_name() . '_' . $index );
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
			if ( !preg_match('~^' . preg_quote($this->name, '~') . '(?P<group>' . $group_names . ')-(?P<key>.*)_(?P<index>\d+)_?(?P<sub>\w+)?$~', $row['field_key'], $field_name) ) {
				continue;
			}
			
			$row['field_value'] = maybe_unserialize($row['field_value']);

			if ( !empty($field_name['sub']) ) {
				$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
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

	function get_values() {
		return $this->values;
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
		include dirname(__FILE__) . '/admin-templates/field_complex.php';
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


class Carbon_Field_Group {
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

	function set_datastore(Carbon_DataStore $store) {
		foreach ($this->fields as $field) {
			if ( is_a($field, 'Carbon_Field_Complex') ) {
				throw new Carbon_Exception('Nested of complex fields? We are working on that!');
			}
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

