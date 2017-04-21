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
	 * Get an instance of the specified type
	 * 
	 * @param  string $type
	 * @return mixed
	 */
	public function make( $type ) {
		$condition_type_superclass = 'Carbon_Fields\\Container\\Condition\\Condition';
		$normalized_type = Helper::normalize_type( $type );
		
		$identifier = 'container_condition_type_' . $normalized_type;
		if ( App::has( $identifier ) ) {
			return App::resolve( $identifier );
		}

		if ( class_exists( $type ) ) {
			$reflection = new \ReflectionClass( $type );
			if ( $reflection->isSubclassOf( $condition_type_superclass ) ) {
				return new $type();
			} else {
				Incorrect_Syntax_Exception::raise( 'Condition must be of type ' . $condition_type_superclass );
			}
		}

		Incorrect_Syntax_Exception::raise( 'Unknown condition type "' . $type . '".' );
		return null;
	}
}