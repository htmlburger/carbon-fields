<?php 

class EECF_Field_Groups extends EECF_Field_Repeater {
	protected $groups = array();

	function add_fields($fields, $name, $label=null) {
		$group = new EECF_Field_Group();
		$group->set_name( $name );
		$group->add_fields($fields);

		// Try to guess field label from it's name
		if (is_null($label)) {
			// remove the leading underscore(if it's there)
			$label = preg_replace('~^_~', '', $name);
			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}
		$group->set_label( $name );

		$this->groups[] = $group;
		return $this;
	}

	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		throw new Exception('TBD');
	}

	function load() {
		
	}

	function _render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/groups.php';
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

	function set_label($label) {
		$this->label = $label;
		return $this;
	}

	function get_label() {
		return $this->label;
	}

	function set_name($name) {
		if (substr($name, 0, 1) != '_') {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$this->name = $name;
		return $this;
	}

	function get_name() {
		return $this->name;
	}
}

