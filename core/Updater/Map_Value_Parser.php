<?php 
namespace Carbon_Fields\Updater;

/**
* Class for parsing map input
*/
class Map_Value_Parser extends Value_Parser {
	
	/**
	 * Prepare $input for map field
	 * 
	 * @param  array $input 
	 * @param  bool $is_option
	 * @return array $parsed_data
	 */
	public static function parse( $input, $is_option ) {
		if ( empty( $input ) ) {
			return null;
		}

		$expected = array( 'lat', 'lng', 'address', 'zoom' );
		$keys     = array_keys( $input );
		$diff     = array_diff( $expected, $keys );
		$name     = self::$carbon_field->get_name();

		if ( ! empty( $diff ) ) {
			self::throw_exception( __( 'Please make sure that the update array has the proper structure ( <strong>lat</strong>, <strong>lng</strong>, <strong>address</strong>, <strong>zoom</strong>)', 'crb' ) );
		}

		return $input;
	}
}