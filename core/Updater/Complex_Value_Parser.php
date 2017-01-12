<?php 
namespace Carbon_Fields\Updater;

use Carbon_Fields\Helper\Helper;

/**
* Class for parsing complex input
*/
class Complex_Value_Parser extends Value_Parser {
	
	/**
	 * Prepare $input for complex field
	 * 
	 * @param  array $input 
	 * @return array $parsed_data
	 */
	public static function parse( $input ) {
		if ( empty( $input ) ) {
			return null;
		}

		$parsed_data = [];
		
		foreach ( $input as $index => $group ) {
			foreach ( $group as $key => $value ) {
				$new_key = $key;

				if ( $key !== 'group' ) {
					$new_key = Helper::prepare_meta_name( $key );
				}

				$parsed_data[ $index ][ $new_key ] = $value;
			}
		}

		return $parsed_data;
	}
}