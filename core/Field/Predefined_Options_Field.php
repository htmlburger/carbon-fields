<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base class for fields with predefined options.
 * Mainly used to reduce the bloat on the base Field class.
 **/
abstract class Predefined_Options_Field extends Field {
	/**
	 * Stores the field options (if any)
	 *
	 * @var array|callable
	 **/
	protected $options = array();

	/**
	 * Set the options of this field.
	 * Accepts either array of data or a callback that returns the data.
	 *
	 * @param array|callable $options
	 */
	public function set_options( $options ) {
		$this->options = array();

		if ( is_callable( $options ) ) {
			$this->options = $options;
		} elseif ( is_array( $options ) ) {
			$this->add_options( $options );
		} else {
			$this->options = array();
			Incorrect_Syntax_Exception::raise( 'Only arrays and callbacks are allowed in the <code>set_options()</code> method.' );
		}

		return $this;
	}

	/**
	 * Add new options to this field.
	 * Accepts an array of data.
	 *
	 * @param array|callable $options
	 */
	public function add_options( $options ) {
		if ( is_array( $options ) ) {
			$old_options = is_callable( $this->options ) ? array() : $this->options;

			if ( ! empty( $old_options ) ) {
				$this->options = array_merge( $old_options, $options );
			} else {
				$this->options = $options;
			}
		} else {
			$this->options = array();
			Incorrect_Syntax_Exception::raise( 'Only arrays are allowed in the <code>add_options()</code> method.' );
		}

		return $this;
	}

	/**
	 * Check if there are callbacks and populate the options
	 */
	protected function load_options() {
		if ( empty( $this->options ) ) {
			return false;
		}

		if ( is_callable( $this->options ) ) {
			$options = call_user_func( $this->options );
			if ( ! is_array( $options ) ) {
				$options = array();
			}
		} else {
			$options = array();
			foreach ( $this->options as $key => $value ) {
				if ( is_array( $value ) ) {
					$options = $options + $value;
				} else {
					$options[ $key ] = $value;
				}
			}
		}

		$this->options = $options;
	}

	/**
	 * Changes the options array structure. This is needed to keep the array items order when it is JSON encoded.
	 * Will also work with a callable that returns an array.
	 *
	 * @param array|callable $options
	 * @return array
	 */
	public function parse_options( $options ) {
		$parsed = array();

		if ( is_callable( $options ) ) {
			$options = call_user_func( $options );
		}

		foreach ( $options as $key => $value ) {
			$parsed[] = array(
				'name' => $value,
				'value' => $key,
			);
		}

		return $parsed;
	}

	/**
	 * Retrieve the current options.
	 *
	 * @return array|callable $options
	 */
	public function get_options() {
		return $this->options;
	}
} // END Field
