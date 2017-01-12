<?php 
namespace Carbon_Fields\Updater;

/**
* Class for parsing association input
*/
class Association_Value_Parser extends Value_Parser {
	
	/**
	 * Prepare $input for association field
	 * 
	 * @param  array $input 
	 * @param  bool $is_option
	 * @return array $parsed_data
	 */
	public static function parse( $input, $is_option ) {
		if ( empty( $input ) ) {
			return null;
		} 

		$parsed_data = array_map( function( $item ) {

			if ( ! self::is_key_present( $item['id'], $item ) ) {
				self::throw_exception( __( 'Please make sure you have provided ids', 'crb' ) );
			}

			if ( ! self::is_key_present( $item['type'], $item ) ) {
				self::throw_exception( __( 'Please make sure you have provided types', 'crb' ) );
			}

			switch ( $item['type'] ) {
				case 'user':
					return 'user:user:' . $item['id'];
					break;

				case 'comment':
					return 'comment:comment:' . $item['id'];
					break;

				case 'post':
					
					if ( ! self::is_key_present( 'post_type', $item ) ) {
						self::throw_exception( __( 'Please provide post_type', 'crb' ) );
					}
					
					return 'post:' . $item['post_type'] . ':' . $item['id'];
					break;

				case 'term':
					
					if ( ! self::is_key_present( 'taxonomy', $item ) ) {
						self::throw_exception( __( 'Please provide taxonomy', 'crb' ) );
					}

					return 'term:' . $item['taxonomy'] . ':' . $item['id'];
					break;

				default:
					self::throw_exception( __( 'Unknown type used!', 'crb' ) );
			}

		}, $input );
		
		return $parsed_data;
	}
}