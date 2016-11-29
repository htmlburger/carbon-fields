<?php

namespace Carbon_Fields\Field;

/**
 * Number field class.
 */
class Number_Field extends Field {

	protected $default_min = 1;
	protected $default_max = 2147483647;
	protected $default_step = 1;

	protected $min = 1;
	protected $max = 2147483647;
	protected $step = 1;

	/**
	 * Underscore template of this field.
	 */
	function template() {
		?>
		<input id="{{{ id }}}" type="number" name="{{{ name }}}" value="{{ value }}" max="{{ max }}" min="{{ min }}" step="{{ step }}" pattern="[0-9]*" class="regular-text" />
		<?php
	}

	function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'min' => is_numeric( $this->min ) ? $this->min : $this->default_min,
			'max' => is_numeric( $this->max ) ? $this->max : $this->default_max,
			'step' => is_numeric( $this->step ) ? $this->step : $this->default_step,
		) );

		return $field_data;
	}

	function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Set the value for the field
		$this->set_name( $name );

		$field_value = '';
		if ( isset( $value ) && $value !== '' && is_numeric( $value ) ) {
			$value = floatval( $value );

			$is_valid_min = $this->min <= $value;
			$is_valid_max = $value <= $this->max;
			$is_valid_step = ( $value % $this->step ) === 0;

			if ( $value !== '' && $is_valid_min && $is_valid_max && $is_valid_step ) {
				$field_value = $value;
			}
		}

		$this->set_value( $field_value );

		parent::save();
	}

	function set_max( $max ) {
		$this->max = $max;

		return $this;
	}

	function set_min( $min ) {
		$this->min = $min;

		return $this;
	}

	function set_step( $step ) {
		$this->step = $step;

		return $this;
	}
}
