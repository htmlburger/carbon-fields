<?php 

class Carbon_Field_Sidebar extends Carbon_Field_Select {
	private $enable_add_new = true; // Whether to allow the user to add new sidebars

	function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	function to_json($load) {
		if ($this->enable_add_new) {
			$this->options['new'] = _x('Add New', 'sidebar', 'crb');
		}

		$field_data = parent::to_json($load);

		return $field_data;
	}
}
