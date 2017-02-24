<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Factory {

	/**
	 * Key=>Value dictionary of types and their respective class name
	 * 
	 * @var array
	 */
	protected $dictionary = array();

	/**
	 * Get the registered types and their respective class name
	 * 
	 * @return array
	 */
	public function get_dictionary() {
		return $this->dictionary;
	}

	/**
	 * Get the registered class names and their respective type
	 * 
	 * @return array
	 */
	public function get_flipped_dictionary() {
		return array_flip( $this->get_dictionary() );
	}

	/**
	 * Register a condition to allow instantiation
	 * 
	 * @param string $type
	 * @param string $class
	 */
	public function register( $type, $class ) {
		$this->dictionary[ $type ] = $class;
	}

	/**
	 * Check if type is registered
	 * 
	 * @param  string  $type
	 * @return boolean
	 */
	public function has_type( $type ) {
		$dictionary = $this->get_dictionary();
		return isset( $dictionary[ $type ] );
	}

	/**
	 * Check if class is registered
	 * 
	 * @param  string  $class
	 * @return boolean
	 */
	public function has_class( $class ) {
		$flipped_dictionary = $this->get_flipped_dictionary();
		return isset( $flipped_dictionary[ $class ] );
	}

	/**
	 * Get the type for the specified class
	 * 
	 * @param  string      $class
	 * @return string|null
	 */
	public function get_type( $class ) {
		if ( $this->has_class( $class ) ) {
			$flipped_dictionary = $this->get_flipped_dictionary();
			return $flipped_dictionary[ $class ];
		}
		return null;
	}

	/**
	 * Get the class for the specified type
	 * 
	 * @param  string      $type
	 * @return string|null
	 */
	public function get_class( $type ) {
		if ( $this->has_type( $type ) ) {
			$dictionary = $this->get_dictionary();
			return $dictionary[ $type ];
		}
		return null;
	}

	/**
	 * Get an instance of the specified type
	 * 
	 * @param  string $type
	 * @return mixed
	 */
	public function make( $type ) {
		if ( ! $this->has_type( $type ) ) {
			Incorrect_Syntax_Exception::raise( 'Attempted to make an instance of an unknown type: ' . $type );
		}
		return App::resolve( 'container_condition_type_' . $type );
	}
}