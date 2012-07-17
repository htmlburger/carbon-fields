<?php 

class EECF_Field {
	protected $value;
	protected $name;
	protected $label;
	protected $help_text;
	protected $store;
	protected $render_fn;


	static function factory($type, $name, $label=null) {
		$type = str_replace(" ", '_', ucwords(str_replace("_", ' ', $type)));

		$class = 'EECF_Field_' . $type;

		if (!class_exists($class)) {
			throw new Exception ('Unknown field "' . $type . '".');
		}

		$field = new $class($name, $label);
		$field->type = $type;

	    return $field;
	}

	private function __construct($name, $label) {
		$this->set_name($name);
		$this->set_label($label);
	}

	function render() {
		if (!is_callable($this->render_fn)) {
			return $this->_render();
		}

		call_user_func($this->render_fn, $this);
		return;
	}

	function _render() {

	}

	function load() {
		return $this->store->load($this);
	}

	function save() {
		return $this->store->save($this);
	}

	function delete() {
		return $this->store->delete($this);
	}
	
	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		$this->set_value($input[$this->name]);
	}
	
	function set_datastore(EECF_DataStore $store) {
		$this->store = $store;
		return $this;
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

	function set_render($fn) {
		if ( !is_callable($fn) ) {
			throw new Exception('Render must be callable');
		}

		$this->render_fn = $fn;
		return $this;
	}

	function set_help_text($help_text) {
		$this->help_text = $help_text;
		return $this;
	}

	function help_text($help_text) {
		return $this->set_help_text($help_text);
	}

	function get_help_text() {
		return $this->help_text;
	}
}

class EECF_Field_Text extends EECF_Field {
	function render() {
		echo '<input type="text" name="' . $this->name . '" value="' . htmlentities($this->value, ENT_COMPAT, 'UTF-8') . '" class="regular-text" />';
	}
}

