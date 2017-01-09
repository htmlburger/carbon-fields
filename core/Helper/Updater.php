<?php 
namespace Carbon_Fields\Helper;

/**
* 
*/
class Updater {

	public static function update_post_meta( $id, $name, $value, $type = null ) {
		$name  = Helper::prepare_meta_name( $name );
		$value = self::parse_value( $value );

		update_post_meta( $id, $name, $value );
	}

	public static function update_term_meta( $id, $name, $value, $type = null ) {
		$name  = Helper::prepare_meta_name( $name );
		$value = self::parse_value( $value );

		update_term_meta( $id, $name, $value );	
	}

	public static function update_user_meta( $id, $name, $value, $type = null ) {
		$name  = Helper::prepare_meta_name( $name );
		$value = self::parse_value( $value );

		update_user_meta( $id, $name, $value );	
	}

	public static function update_comment_meta( $id, $name, $value, $type = null ) {
		$name  = Helper::prepare_meta_name( $name );
		$value = self::parse_value( $value );

		update_comment_meta( $id, $name, $value );
	}

	public static function update_theme_option( $name, $value, $type, $autoload = null ) {
		$value = self::parse_value( $value );

		update_option( $name, $value, $autoload );		
	}

	public static function parse_value( $value, $type ) {
		$value = self::maybe_json_decode( $value );

		switch ( $type ) {
			case 'complex':
				
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
}