<?php 

namespace Carbon_Fields\Field;

class Set_Field extends Field {
	protected $limit_options = 0;

	function set_options($options) {
		$this->_set_options($options);
		return $this;
	}

	function add_options($options) {
		$this->_add_options($options);
		return $this;
	}

	function limit_options($limit) {
		$this->limit_options = $limit;
		return $this;
	}

	function get_value() {
		if ($this->value === false) {
			return array();
		}

		$this->load_options();

		if (!is_array($this->value)) {
			$this->value = maybe_unserialize($this->value);
			if (!is_array($this->value)) {
				if ( is_null($this->value) ) {
					return array();
				}
				return array($this->value);
			}
		}

		return (array) $this->value;
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$this->load_options();

		$field_data = array_merge($field_data, array(
			'limit_options' => $this->limit_options,
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
		<# } else { #>
			<div class="carbon-set-list">
				<# _.each(options, function(option, i) { #>
					<# 
						var selected = jQuery.inArray(String(option.value), value) > -1;
						var counter = i + 1;
						var exceed = limit_options > 0 && counter > limit_options;
						var last = options.length === counter;
					#>

					<p {{{ exceed ? 'style="display:none"' : '' }}}>
						<label>
							<input type="checkbox" name="{{{ name }}}[]" value="{{ option.value }}" {{{ selected ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</p>

					<# if (!exceed && !last && counter == limit_options) { #>
						<p>... <a href="#" class="carbon-set-showall"><?php _e('Show All Options', 'crb'); ?></a></p>
					<# } #>
				<# }) #>
			</div>
		<# } #>
		<?php
	}
}
