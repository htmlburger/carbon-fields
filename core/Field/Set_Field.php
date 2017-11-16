<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Value_Set\Value_Set;

/**
 * Set field class.
 * Allows to create a set of checkboxes where multiple can be selected.
 */
class Set_Field extends Predefined_Options_Field {

	/**
	 * The options limit.
	 *
	 * @var int
	 */
	protected $limit_options = 0;

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

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
	 * Set the number of the options to be displayed at the initial field display.
	 *
	 * @param  int $limit
	 */
	public function limit_options( $limit ) {
		$this->limit_options = $limit;
		return $this;
	}

	/**
	 * Load the field value from an input array based on its name
	 *
	 * @param  array $input Array of field names and values.
	 * @return self  $this
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->name ] ) ) {
			$this->set_value( array() );
		} else {
			$value = stripslashes_deep( $input[ $this->name ] );
			if ( is_array( $value ) ) {
				$value = array_values( $value );
			}
			$this->set_value( $value );
		}
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'limit_options' => $this->limit_options,
			'options' => $this->parse_options( $this->get_options() ),
		) );

		return $field_data;
	}
}
