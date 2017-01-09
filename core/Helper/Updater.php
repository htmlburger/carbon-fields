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
				$parsed_value = self::parse_map_value( $value, $name );
				break;

			case 'association':
				$parsed_value[ $name ] = array_map( [ __CLASS__, 'parse_association_value' ], $value );
				break;

			default:
				$parsed_value[ $name ] = $value;
		}

		return $parsed_value;
	}

	public static function parse_map_value( $data, $name ) {
		$expected     = ['lat', 'lng', 'address' ];
		$keys         = array_keys( $data );
		$diff         = array_diff( $expected, $keys );
		$parsed_value = [];

		if ( !empty( $diff ) ) {
			wp_die( __( 'Wrong array struckture', 'crb' ) );
		}

		$parsed_value[ $name]               = $data['lat'] . ',' . $data['lng'];
		$parsed_value[ $name . '-lat' ]     = strip_tags( $data['lat'] );
		$parsed_value[ $name . '-lng' ]     = strip_tags( $data['lng'] );
		$parsed_value[ $name . '-address' ] = strip_tags( $data['address'] );
		$parsed_value[ $name . '-zoom' ]    = strip_tags( $data['zoom'] );

		return $parsed_value;
	}

	public static function parse_association_value( $item ) {

		if ( ! isset( $item['id'] ) ) {
			// Throw error
			// exit
		}

		switch ( $item['type'] ) {
			case 'user':
				return 'user:user:' . $item['id'];
				break;

			case 'comment':
				return 'comment:comment:' . $item['id'];
				break;

			case 'post':

				if ( ! isset( $item['post_type'] ) || empty( $item['post_type'] ) ) {
					// Throw error
				}

				return 'post:' . $item['post_type'] . ':' . $item['id'];
				break;

			case 'term':

				if ( ! isset( $item['taxonomy'] ) || empty( $item['taxonomy'] ) ) {
					// Throw error
				}

				return 'term:' . $item['taxonomy'] . ':' . $item['id'];
				break;

			default:
				// Throw error
				return [];
		}
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