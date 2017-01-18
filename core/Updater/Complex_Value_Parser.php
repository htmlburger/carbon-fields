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
	 * @param  bool $is_option
	 * @return array $parsed_data
	 */
	public static function parse( $input, $is_option ) {
		if ( is_null( $input ) ) {
			return null;
		}

		if ( ! is_array( $input ) ) {
			self::throw_exception( __( 'Please provide an array or a json to be used for the update.', 'crb' ) );
		}

		if ( $is_option ) {
			return $input;
		}

		$parsed_data = array();
		
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