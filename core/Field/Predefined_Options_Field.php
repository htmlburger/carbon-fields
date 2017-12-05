<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base class for fields with predefined options.
 * Mainly used to reduce the bloat on the base Field class.
 */
abstract class Predefined_Options_Field extends Field {

	/**
	 * Stores the raw, unprocessed field options
	 *
	 * @var array(array|callable)
	 */
	protected $option_collections = array();

	/**
	 * Check if an array is indexed
	 *
	 * @param  array   $array
	 * @return boolean
	 */
	protected function is_indexed_array( $array ) {
		return array_keys( $array ) === range( 0, count( $array ) - 1 );
	}

	/**
	 * Set the options of this field.
	 * Accepts either array of data or a callback that returns the data.
	 *
	 * @param  array|callable $options
	 * @return self           $this
	 */
	public function set_options( $options ) {
		if ( ! is_callable( $options ) && ! is_array( $options ) ) {
			Incorrect_Syntax_Exception::raise( 'Only arrays and callbacks are allowed in the <code>set_options()</code> method.' );
			return $this;
		}

		$this->option_collections = array();
		return $this->add_options( $options );
	}

	/**
	 * Add new options to this field.
	 * Accepts either array of data or a callback that returns the data.
	 *
	 * @param  array|callable $options
	 * @return self           $this
	 */
	public function add_options( $options ) {
		if ( ! is_callable( $options ) && ! is_array( $options ) ) {
			Incorrect_Syntax_Exception::raise( 'Only arrays and callbacks are allowed in the <code>add_options()</code> method.' );
			return $this;
		}

		$this->option_collections[] = $options;
		return $this;
	}

	/**
	 * Get a populated array of options executing any callbacks in the process
	 *
	 * @return array
	 */
	protected function load_options() {
		$options = array();
		foreach ( $this->option_collections as $collection ) {
			$collection_items = array();
			if ( is_callable( $collection ) ) {
				$collection_items = call_user_func( $collection );
				if ( ! is_array( $collection_items ) ) {
					continue;
				}
			} else {
				$collection_items = $collection;
			}
			if ( $this->is_indexed_array( $options ) && $this->is_indexed_array( $collection_items ) ) {
				$options = array_merge( $options, $collection_items );
			} else {
				$options = array_replace( $options, $collection_items );
			}
		}

		return $options;
	}

	/**
	 * Retrieve the current options.
	 *
	 * @return array
	 */
	public function get_options() {
		return $this->load_options();
	}

	/**
	 * Retrieve the current options' values only.
	 *
	 * @return array $options
	 */
	protected function get_options_values() {
		$options = $this->parse_options( $this->get_options() );
		return wp_list_pluck( $options, 'value' );
	}

	/**
	 * Changes the options array structure. This is needed to keep the array items order when it is JSON encoded.
	 * Will also work with a callable that returns an array.
	 *
	 * @param array|callable $options
	 * @return array
	 */
	protected function parse_options( $options, $stringify_value = false ) {
		$parsed = array();

		if ( is_callable( $options ) ) {
			$options = call_user_func( $options );
		}

		foreach ( $options as $key => $value ) {
			$parsed[] = array(
				'value' => $stringify_value ? strval( $key ) : $key,
				'label' => strval( $value ),
			);
		}

		return $parsed;
	}

	/**
	 * Get an array of all values that are both in the passed array and the predefined list of options
	 *
	 * @param  array $values
	 * @return array
	 */
	protected function get_values_from_options( $values ) {
		$options_values = $this->get_options_values();
		$values = Helper::get_valid_options( $values, $options_values );
		return $values;
	}
}
