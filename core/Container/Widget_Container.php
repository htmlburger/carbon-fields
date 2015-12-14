<?php 

namespace Carbon_Fields\Container;

class Widget_Container extends Container {

	function __construct($id) {
		// Reset the registerd fields array, this is required so we can have fields with same names
		self::$registered_field_names = array();

		$this->id = $id;
	}

	function init() {
		$this->_attach();
		$this->render();

		return $this;
	}

	function to_json($load) {
		return parent::to_json(false);
	}

	function render() {
		include DIR . '/templates/Container/widget.php';
	}

	function is_valid_attach() {
		$screen = get_current_screen();

		return $screen && $screen->id === 'widgets';
	}

}

