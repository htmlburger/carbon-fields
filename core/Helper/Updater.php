<?php 
namespace Carbon_Fields\Helper;

/**
* 
*/
class Updater {

	public static function updates_post_meta( $id, $name, $value ) {
		update_post_meta( $id, $name, $value );
	}

	public static function update_term_meta( $id, $name, $value ) {
		update_term_meta( $id, $name, $value );	
	}

	public static function update_user_meta( $id, $name, $value ) {
		update_user_meta( $id, $name, $value );	
	}

	public static function update_comment_meta( $id, $name, $value ) {
		update_comment_meta( $id, $name, $value );
	}

	public static function update_theme_option( $name, $value, $autoload = null ) {
		update_option( $name, $value, $autoload );		
	}

	public static function update_field( $field_type, $object_id, $field_name, $value, $value_type = null ) {

		$field_name = Helper::prepare_meta_name( $field_name );
		$values     = self::parse_value( $field_name, $value, $value_type );
		$args       = [ 
			'id'    => $object_id, 
			'name'  => '',
			'value' => '',
		];

		foreach ( $values as $name => $value ) {
			$args['name']  = $name;
			$args['value'] = $value;

			call_user_func_array( [ __CLASS__, "updates_{$field_type}"], $args );
		}
	}

	public static function update_option( $name, $value, $value_type = null, $autoload = null ) {

		$values = self::parse_value( $name, $value, $value_type );
		$args   = [ 
			'name'     => '',
			'value'    => '',
			'autoload' => $autoload,
		];

		foreach ( $values as $name => $value ) {
			$args['name']  = $name;
			$args['value'] = $value;

			call_user_func_array( [ __CLASS__, "update_theme_option"], $args );
		}
	}

	public static function parse_value( $name, $value, $type ) {
		$value        = self::maybe_json_decode( $value );
		$parsed_value = [];

		switch ( $type ) {
			case 'complex':
				
			break;

			case 'map':
			case 'map_with_address':
				$parsed_value[ $name]              = $value['lat'] . ',' . $value['lng'];
				$parsed_value[ $name . '-lat' ]     = isset( $value['lat'] ) ? strip_tags( $value['lat'] ) : '';
				$parsed_value[ $name . '-lng' ]     = isset( $value['lng'] ) ? strip_tags( $value['lng'] ) : '';
				$parsed_value[ $name . '-address' ] = isset( $value['address'] ) ? strip_tags( $value['address'] ) : '';
				$parsed_value[ $name . '-zoom' ]    = isset( $value['zoom'] ) ? strip_tags( $value['zoom'] ) : '';

			break;

			case 'association':
			
			break;

			default:
				$parsed_value[ $name ] = $value;
		}

		return $parsed_value;
	}

	public static function maybe_json_decode( $maybe_json ) {
		if ( self::is_json( $maybe_json ) ) {
			return json_decode( $maybe_json );
		}

		return $maybe_json;
	}

	public static function is_json( $string ) {
		return is_string( $string ) && is_array( json_decode( $string, true ) ) && ( json_last_error() === JSON_ERROR_NONE ) ? true : false;
	}	
}