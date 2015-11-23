<?php 

namespace Carbon_Fields\Field;

class Checkbox_Field extends Field {
	protected $option_value = 'yes';

	function set_option_value($value) {
		$this->option_value = $value;
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'option_value' => $this->option_value,
			'option_label' => parent::get_label(),
		));

		return $field_data;
	}

	function template() {
		?>
		<label>
			<input type="checkbox" name="{{{ name }}}" value="{{ option_value }}" {{{ option_value == value ? 'checked="checked"' : '' }}} />
			{{{ option_label }}}
		</label>
		<?php
	}

	function get_label() {
		return '';
	}

	function is_required() {
		return false;
	}
}
