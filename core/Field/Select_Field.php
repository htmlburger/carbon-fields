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
		$options = $this->parse_options( $this->get_options() );
		$options = wp_list_pluck( $options, 'value' );

		$value = null;

		if ( isset( $input[ $this->get_name() ] ) ) {
			$value = stripslashes_deep( $input[ $this->get_name() ] );
			$value = Helper::get_valid_options( array( $value ), $options );
			$value = ! empty( $value ) ? $value[0] : null;
		}

		if ( $value === null ) {
			$value = $options[0];
		}

		return $this->set_value( $value );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$options = $this->parse_options( $this->get_options() );
		$values = wp_list_pluck( $options, 'value' );
		$value = $this->get_formatted_value();
		if ( ! empty( $values ) ) {
			// this roundabout way is required in order to keep proper value types
			// as values taken from the database are always strings
			$value_index = array_search( $value, $values );
			if ( $value_index !== false ) {
				$value = $values[ $value_index ];
			} else {
				$value = $values[0];
			}
		}

		$field_data = array_merge( $field_data, array(
			'value' => $value,
			'options' => $options,
		) );

		return $field_data;
	}
}
