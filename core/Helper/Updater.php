<?php 
namespace Carbon_Fields\Helper;

/**
* 
*/
class Updater {

	public static $info = "test";
	
	public static function parse_update_value( $field, $value ) {
		$type  = $field->type;
		$value = self::maybe_json_decode( $value );
		$name  = $field->get_name();

		switch ( $type ) {
			case 'complex':
				// make decision on array struckture
			break;

			case 'map':
			case 'map_with_address':
				
			break;

			case 'association':
			
			break;

			default:
				
		}

		return $value;
	}

	public static function maybe_json_decode( $maybe_json ) {
		$json = self::is_json( $maybe_json );

		if ( $json ) {
			return $json;
		}

		return $maybe_json;
	}

	public static function is_json( $string ) {
		return json_decode( $string );
	}	

	public static function update_post_meta( $id, $name, $value, $type = null ) {
		update_post_meta( $id, $name, $value );
	}

	public static function update_term_meta( $id, $name, $value, $type = null ) {
		update_term_meta( $id, $name, $value );	
	}

	public static function update_user_meta( $id, $name, $value, $type = null ) {
		update_user_meta( $id, $name, $value );	
	}

	public static function update_theme_option( $name, $value, $type ) {
		update_theme_option( $name, $value );		
	}
}