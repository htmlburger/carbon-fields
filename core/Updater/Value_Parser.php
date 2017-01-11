<?php 
namespace Carbon_Fields\Updater;

/**
* 
*/

class Value_Parser {
	
	public static function parse( $input ) {
		return $input;
	}

	public static function is_key_present( $key, $array ) {
		return isset( $array[ $key ] ) && $array[ $key ] ? true : false;
	}	
}