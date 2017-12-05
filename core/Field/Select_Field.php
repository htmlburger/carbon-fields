<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Helper\Helper;

/**
 * Select dropdown field class.
 */
class Select_Field extends Predefined_Options_Field {
	/**
	 * {@inheritDoc}
	 */
	public function set_value_from_input( $input ) {
		$options_values = $this->get_options_values();

		$value = null;
		if ( isset( $input[ $this->get_name() ] ) ) {
			$raw_value = stripslashes_deep( $input[ $this->get_name() ] );
			$raw_value = Helper::get_valid_options( array( $raw_value ), $options_values );
			if ( ! empty( $raw_value ) ) {
				$value = $raw_value[0];
			}
		}

		if ( $value === null ) {
			$value = $options_values[0];
		}

		return $this->set_value( $value );
	}

	/**
	 * {@inheritDoc}
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$options = $this->parse_options( $this->get_options(), true );
		$value = strval( $this->get_formatted_value() );

		$field_data = array_merge( $field_data, array(
			'value' => strval( $value ),
			'options' => $options,
		) );

		return $field_data;
	}

	/**
	 * {@inheritDoc}
	 */
	public function get_formatted_value() {
		$options_values = $this->get_options_values();
		if ( empty( $options_values ) ) {
			$options_values[] = '';
		}

		$value = $this->get_value();
		$value = $this->get_values_from_options( array( $value ) );
		$value = ! empty( $value ) ? $value[0] : $options_values[0];

		return $value;
	}
}
