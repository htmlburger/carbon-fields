<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Factory {

	/**
	 * Get the type for the specified class
	 * 
	 * @param  string $class
	 * @return string
	 */
	public function get_type( $class ) {
		return Helper::class_to_type( $class, '_Condition' );
	}

	/**
	 * Get the class for the specified type
	 * 
	 * @param  string      $type
	 * @return string
	 */
	public function get_class( $type ) {
		return Helper::type_to_class( $type, __NAMESPACE__, '_Condition' );
	}

	/**
	 * Get an instance of the specified type
	 * 
	 * @param  string $type
	 * @return mixed
	 */
	public function make( $type ) {
		$normalized_type = Helper::normalize_type( $type );
		
		$identifier = 'container_condition_type_' . $normalized_type;
		if ( App::has( $identifier ) ) {
			return App::resolve( $identifier );
		}

		$class = $this->get_class( $normalized_type );
		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown condition type "' . $type . '".' );
		}
		return new $class( array() );
	}
}