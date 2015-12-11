<?php 

namespace Carbon_Fields\Field;

class Sidebar_Field extends Select_Field {
	private $enable_add_new = true; // Whether to allow the user to add new sidebars
	private $excluded_sidebars = false; // Exclude these sidebars from the select menu 

	function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	function exclude_sidebars($sidebars) {
		$this->excluded_sidebars = $sidebars;
		return $this;
	}

	function to_json($load) {
		if ($this->enable_add_new) {
			$this->options['new'] = _x('Add New', 'sidebar', 'crb');
		}

		$field_data = parent::to_json($load);

		if ( $this->excluded_sidebars ) {
			if ( !array($this->excluded_sidebars) ) {
				$this->excluded_sidebars = array($this->excluded_sidebars);
			}

			$field_data = array_merge($field_data, array(
				'excluded_sidebars' => $this->excluded_sidebars
			));
		}

		return $field_data;
	}
}
