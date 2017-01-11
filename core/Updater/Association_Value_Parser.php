<?php 
namespace Carbon_Fields\Updater;

/**
* 	
*/
class Association_Value_Parser extends Value_Parser {
	
	public static function parse( $input ) {
		if ( empty( $input ) ) {
			return null;
		} 

		$parsed_data = array_map( function( $item ) {

			if ( ! self::is_key_present( $item['id'], $item ) ) {
				wp_die( __( 'Please make sure you have provided ids', 'crb' ) );
			}

			if ( ! self::is_key_present( $item['type'], $item ) ) {
				wp_die( __( 'Please make sure you have provided types', 'crb' ) );
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
						wp_die( __( 'Please provide post_type', 'crb' ) );
					}
					
					return 'post:' . $item['post_type'] . ':' . $item['id'];
					break;

				case 'term':
					
					if ( ! self::is_key_present( 'taxonomy', $item ) ) {
						wp_die( __( 'Please provide taxonomy', 'crb' ) );
					}

					return 'term:' . $item['taxonomy'] . ':' . $item['id'];
					break;

				default:
					
					wp_die( __( 'Unknown type used!', 'crb' ) );
					return false;
			}

		}, $input );
		
		return $parsed_data;
	}
}