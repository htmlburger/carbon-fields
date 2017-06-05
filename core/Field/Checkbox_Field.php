<?php

namespace Carbon_Fields\Field;

/**
 * Single checkbox field class.
 */
class Checkbox_Field extends Field {

	/**
	 * @{inheritDoc}
	 */
	protected $default_value = false;
	
	/**
	 * The value that is saved in the database when
	 * this checkbox field is enabled.
	 *
	 * @var string
	 */
	protected $option_value = 'yes';

	/**
	 * Get the option value.
	 *
	 * @return string
	 */
	public function get_option_value() {
		return $this->option_value;
	}

	/**
	 * Set the option value.
	 *
	 * @param string $value New value
	 * @return Field $this
	 */
	public function set_option_value( $value ) {
		$this->option_value = $value;
		return $this;
	}

	/**
	 * Load the field value from an input array based on it's name.
	 * If not enabled, set to empty string for easier data querying.
	 *
	 * @param array $input Array of field names and values.
	 */
	public function set_value_from_input( $input ) {
		parent::set_value_from_input( $input );
		if ( $this->get_value() !== $this->get_option_value() ) {
			$this->set_value( '' );
		}
	}

	/**
	 * Return a differently formatted value for end-users
	 *
	 * @return mixed
	 */
	public function get_formatted_value() {
		return ( $this->get_value() === $this->get_option_value() );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * In addition to default data, option value and label are added.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'option_value' => $this->get_option_value(),
			'option_label' => parent::get_label(),
		) );

		return $field_data;
	}

	/**
	 * Get the field label.
	 * Label here is empty because it is displayed in the front-end.
	 *
	 * @return string Label of the field.
	 */
	public function get_label() {
		return '';
	}
}
