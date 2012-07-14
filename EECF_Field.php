<?php 

class EECF_Field {
	protected $value;
	protected $name;
	protected $label;
	protected $store;


	static function factory($type, $name, $label=null) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = 'EECF_Field_' . $type;

		if (!class_exists($class)) {
			throw new Exception ('Unknown field "' . $type . '".');
		}

		// Try to guess field label from it's name
		if (is_null($label)) {
			// remove the leading underscore(if it's there)
			$label = preg_replace('~^_~', '', $name);
			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}

		if (substr($name, 0, 1) != '_') {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$field = new $class($name, $label);
		$field->type = $type;

	    return $field;
	}

	private function __construct($name, $label) {
		$this->name = $name;
		$this->label = $label;

		$this->render_fn = array($this, '_render');
	}

	function render() {
		if (!is_callable($this->render_fn)) {
			throw new Exception('EECF_Field render funtion is invalid');
		}

		call_user_func($this->render_fn, $this);
		return;
	}

	function _render() {

	}

	function load() {
		$this->store->load($this);
	}

	function save() {
		$this->store->save($this);
	}

	function delete() {
		$this->store->delete($this);
	}
	
	function set_value_from_input() {
		$this->set_value($_POST[$this->name]);
	}
	
	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;
	}
	
	function get_datastore() {
		return $this->store;
	}

	function set_value($value) {
		$this->value = $value;
	}

	function get_value() {
		return $this->value;
	}

	function set_name($name) {
		$this->name = $name;
	}

	function get_name() {
		return $this->name;
	}
}

class EECF_Field_Text extends EECF_Field {
	function render() {
		echo '<label>' . $this->label . '</label><input name="' . $this->name . '" value="' . htmlentities($this->value, ENT_COMPAT, 'UTF-8') . '" />';
	}
}

