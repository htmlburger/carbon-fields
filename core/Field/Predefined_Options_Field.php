<?php

namespace Carbon_Fields\Field;

/**
 * Base class for fields with predefined options. 
 * Mainly used to reduce the bloat on the base Field class
 **/
abstract class Predefined_Options_Field extends Field {
	/**
	 * Stores the field options (if any)
	 *
	 * @var array
	 **/
	protected $options = array();

	/**
	 * Set the field options
	 * Callbacks are supported
	 *
	 * @param array|callable $options
	 */
	protected function _set_options( $options ) {
		$this->options = (array) $options;
	}

	/**
	 * Add options to the field
	 * Callbacks are supported
	 *
	 * @param array|callable $options
	 */
	protected function _add_options( $options ) {
		$this->options[] = $options;
	}

	/**
	 * Set the options of this field.
	 * Accepts either array of data or a callback that returns the data.
	 * 
	 * @param array|callable $options 
	 */
	public function set_options( $options ) {
		$this->_set_options( $options );
		return $this;
	}

	/**
	 * Add new options to this field.
	 * Accepts either array of data or a callback that returns the data.
	 * 
	 * @param array|callable $options
	 */
	public function add_options( $options ) {
		$this->_add_options( $options );
		return $this;
	}

	/**
	 * Check if there are callbacks and populate the options
	 */
	protected function load_options() {
		if ( empty( $this->options ) ) {
			return false;
		}

		$options = array();
		foreach ( $this->options as $key => $value ) {
			if ( is_callable( $value ) ) {
				$options = $options + (array) call_user_func( $value );
			} else if ( is_array( $value ) ) {
				$options = $options + $value;
			} else {
				$options[ $key ] = $value;
			}
		}

		$this->options = $options;
	}

	/**
	 * Changes the options array structure. This is needed to keep the array items order when it is JSON encoded.
	 *
	 * @param array $options
	 * @return array
	 */
	public function parse_options( $options ) {
		$parsed = array();

		foreach ( $options as $key => $value ) {
			$parsed[] = array(
				'name' => $value,
				'value' => $key,
			);
		}

		return $parsed;
	}

} // END Field
