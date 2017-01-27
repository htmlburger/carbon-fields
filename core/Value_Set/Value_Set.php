<?php

namespace Carbon_Fields\Value_Set;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Value_Set {

	const TYPE_SINGLE_VALUE = 1;
	const TYPE_MULTIPLE_VALUES = 2;
	const TYPE_MULTIPLE_KEYS = 3;
	const TYPE_VALUE_SET = 4;

	protected $type = self::TYPE_SINGLE_VALUE;

	protected $valid_types = array( self::TYPE_SINGLE_VALUE, self::TYPE_MULTIPLE_VALUES, self::TYPE_MULTIPLE_KEYS, self::TYPE_VALUE_SET );

	protected $properties = array( 'value'=>'' );

	protected $value_set = null;

	public function __construct( $type = self::TYPE_SINGLE_VALUE, $additional_properties = array() ) {
		if ( !in_array( $type, $this->valid_types ) ) {
			Incorrect_Syntax_Exception::raise( "Invalid type specified for Value_Set: $type" );
		}

		$this->type = $type;
		$this->properties = array_merge( $this->properties, $additional_properties );
	}

	protected function get_formatted_value_set( $raw_value_set ) {
		$formatted_value_set = array();
		foreach ( $raw_value_set as $raw_value ) {
			$formatted_value = array();
			foreach ( $this->properties as $property => $default_value ) {
				$formatted_value[ $property ] = isset( $raw_value[ $property ] ) ? $raw_value[ $property ] : $default_value;
			}
			$formatted_value_set[] = $formatted_value;
		}
		return $formatted_value_set;
	}

	public function keepalive() {
		return ( $this->type !== self::TYPE_SINGLE_VALUE );
	}

	public function empty() {
		return empty( $this->value_set );
	}

	public function get() {
		if ( $this->value_set === null ) {
			return null;
		}
		$value = '';

		switch ( $this->type ) {
			case self::TYPE_MULTIPLE_VALUES:
				$value = array_map( function( $set ) {
					return $set['value'];
				}, $this->value_set );
				break;
			case self::TYPE_MULTIPLE_KEYS:
				$value = array();
				if ( !empty( $this->value_set ) ) {
					$value = $this->value_set[0];
				}
				break;
			case self::TYPE_VALUE_SET:
				$value = $this->value_set;
				break;

			case self::TYPE_SINGLE_VALUE:
			default:
				if ( !empty( $this->value_set ) ) {
					$value = $this->value_set[0]['value'];
				}
				break;
		}

		return $value;
	}

	public function get_set() {
		return $this->value_set;
	}

	protected function is_flat_array( $array ) {
		$flat = true;
		foreach ( $array as $value ) {
			if ( is_array( $value ) ) {
				$flat = false;
				break;
			}
		}
		return $flat;
	}

	protected function flat_array_to_raw_value_set( $value_array ) {
		$raw_value_set = array();

		$keyed = false;
		$keys = array_keys( $value_array );
		foreach ( $keys as $key ) {
			if ( is_string( $key ) ) {
				$keyed = true;
				break;
			}
		}

		if ( $keyed ) {
			$raw_value_set[] = $value_array;
		} else {
			foreach ( $value_array as $key => $value ) {
				if ( isset( $value['value'] ) ) {
					$raw_value_set[] = $value;
				} else {
					$raw_value_set[] = array(
						'value'=>$value,
					);
				}
			}
		}

		return $raw_value_set;
	}

	public function set( $raw_value_set ) {
		if ( $raw_value_set === null ) {
			$this->value_set = null;
			return;
		}

		if ( !is_array( $raw_value_set ) ) {
			$raw_value_set = array( $raw_value_set );
		}

		if ( $this->is_flat_array( $raw_value_set ) ) {
			$raw_value_set = $this->flat_array_to_raw_value_set( $raw_value_set );
		}

		$this->value_set = $this->get_formatted_value_set( $raw_value_set );
	}
}