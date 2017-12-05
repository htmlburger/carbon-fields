<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Helper\Delimiter;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * Multiselect field class.
 * Allows to create a select where multiple values can be selected.
 */
class Multiselect_Field extends Predefined_Options_Field {
	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Value delimiter
	 *
	 * @var string
	 */
	protected $value_delimiter = '|';

	/**
	 * Create a field from a certain type with the specified label.
	 *
	 * @param string $type  Field type
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	public function __construct( $type, $name, $label ) {
		$this->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES ) );
		parent::__construct( $type, $name, $label );
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->get_name() ] ) ) {
			return $this->set_value( array() );
		}

		$value_delimiter = $this->value_delimiter;
		$options_values = $this->get_options_values();

		$value = stripslashes_deep( $input[ $this->get_name() ] );
		$value = Delimiter::split( $value, $this->value_delimiter );
		$value = array_map( function( $val ) use ( $value_delimiter ) {
			return Delimiter::unquote( $val, $value_delimiter );
		}, $value );
		$value = Helper::get_valid_options( $value, $options_values );

		return $this->set_value( $value );
	}

	/**
	 * {@inheritDoc}
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$value_delimiter = $this->value_delimiter;

		$options = $this->parse_options( $this->get_options(), true );
		$options = array_map( function( $option ) use ( $value_delimiter ) {
			$option['value'] = Delimiter::quote( $option['value'], $value_delimiter );
			return $option;
		}, $options );

		$value = array_map( function( $value ) use ( $value_delimiter ) {
			return Delimiter::quote( $value, $value_delimiter );
		}, $this->get_formatted_value() );

		$field_data = array_merge( $field_data, array(
			'options' => $options,
			'value' => $value,
			'valueDelimiter' => $this->value_delimiter,
		) );

		return $field_data;
	}

	/**
	 * {@inheritDoc}
	 */
	public function get_formatted_value() {
		$value = $this->get_value();
		$value = $this->get_values_from_options( $value );
		return $value;
	}
}
