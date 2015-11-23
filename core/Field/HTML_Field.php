<?php 

namespace Carbon_Fields\Field;

class HTML_Field extends Field {
	public $field_html;

	function set_html($callback_or_html) {
		if ( is_callable($callback_or_html) ) {
			$this->field_html = call_user_func($callback_or_html);
		} else {
			$this->field_html = $callback_or_html;
		}
		
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'html' => $this->field_html,
		));

		return $field_data;
	}

	function template() {
		?>
		{{{ html }}}
		<?php
	}

	function is_required() {
		return false;
	}

	function get_label() {
		return '';
	}

	function load() {
		// skip;
	}

	function save() {
		// skip;
	}

	function delete() {
		// skip;
	}
}
