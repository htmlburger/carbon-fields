<?php 
namespace Carbon_Fields\Updater;

/**
* Class for parsing input
*/

class Value_Parser {
	
	/**
	 * Prepare $input for carbon field
	 * 
	 * @param  array $input 
	 * @return array $parsed_data
	 */
	public static function parse( $input ) {
		return $input;
	}

	/**
	 * Check if a $key is set in $array and whether it has a value
	 * 
	 * @param  string  $key
	 * @param  array  $array
	 * @return boolean
	 */
	public static function is_key_present( $key, $array ) {
		return isset( $array[ $key ] ) && $array[ $key ] ? true : false;
	}	
}