<?php 

namespace Carbon_Fields\Field;

class Select_Field extends Field {
	function set_options($options) {
		$this->_set_options($options);
		return $this;
	}

	function add_options($options) {
		$this->_add_options($options);
		return $this;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);
		$this->load_options();

		$field_data = array_merge($field_data, array(
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
		<# } else { #>
			<select id="{{{ id }}}" name="{{{ name }}}">
				<# _.each(options, function(option) { #>
					<option value="{{ option.value }}" {{{ option.value == value ? 'selected="selected"' : '' }}}>
						{{{ option.name }}}
					</option>
				<# }) #>
			</select>
		<# } #>
		<?php
	}
}
