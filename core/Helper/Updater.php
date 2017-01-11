<?php 
namespace Carbon_Fields\Helper;

use Carbon_Fields\Container\Container;
/**
* 
*/
class Updater {

	public static $containers;
	public static $validator;
	public static $fields;
	public static $carbon_field;

	public static function update_field( $field_type, $object_id, $field_name, $value, $value_type = null ) {
		$field_name = Helper::prepare_meta_name( $field_name );
		
		self::load_containers( $field_type, $object_id );
		self::load_fields();
		
		self::$carbon_field = self::get_current_field( $field_name );
		$carbon_field_type  = strtolower( self::$carbon_field->type );

		if ( $value_type &&  ( $carbon_field_type !== $value_type ) ) {
			// error
			return;
		}
		
		self::$carbon_field->get_datastore()->set_id( $object_id );
		self::update_carbon_field( $value, $value_type );
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

	public static function update_carbon_field( $value, $type ) {
		$value = self::maybe_json_decode( $value );

		switch ( $type ) {
			case 'complex':
				self::update_complex_field( $value );
				break;

			case 'map':
			case 'map_with_address':
				self::update_map_field( $value );
				break;

			case 'association':
				self::update_association_field( $value );
				break;

			default:
				self::$carbon_field->set_value( 'test' );
				self::$carbon_field->save();
		}
	}

	public static function update_map_field( $data ) {
		$expected     = ['lat', 'lng', 'address' ];
		$keys         = array_keys( $data );
		$diff         = array_diff( $expected, $keys );
		$name = self::$carbon_field->get_name();

		if ( ! empty( $diff ) ) {
			wp_die( __( 'Wrong array struckture', 'crb' ) );
		}

		self::$carbon_field->set_value_from_input( [ $name => $data ] );	
		self::$carbon_field->save();	
	}

	public static function update_association_field( $value ) {

		$parsed_value = [];
		
		// if ( ! isset( $item['id'] ) ) {
		// 	// Throw error
		// 	// exit
		// }

		// switch ( $item['type'] ) {
		// 	case 'user':
		// 		return 'user:user:' . $item['id'];
		// 		break;

		// 	case 'comment':
		// 		return 'comment:comment:' . $item['id'];
		// 		break;

		// 	case 'post':

		// 		if ( ! isset( $item['post_type'] ) || empty( $item['post_type'] ) ) {
		// 			// Throw error
		// 		}

		// 		return 'post:' . $item['post_type'] . ':' . $item['id'];
		// 		break;

		// 	case 'term':

		// 		if ( ! isset( $item['taxonomy'] ) || empty( $item['taxonomy'] ) ) {
		// 			// Throw error
		// 		}

		// 		return 'term:' . $item['taxonomy'] . ':' . $item['id'];
		// 		break;

		// 	default:
		// 		// Throw error
		// 		return [];
		// }

		self::$carbon_field->set_value( $parsed_value );
		self::$carbon_field->save();
	}

	public static function update_complex_field( $value ) {
		self::$carbon_field->set_value_from_input( [ self::$carbon_field->get_name() => $value] );
		self::$carbon_field->save();
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

	public static function load_containers( $type, $id ) {
		if ( ! empty( self::$containers ) ) {
			return;
		}

		do_action( 'carbon_trigger_containers_attach' );

		self::$validator = new Container_Validator();
		$type            = Helper::prepare_data_type_name( $type );

		self::$containers = array_filter( Container::$active_containers, function( $container ) use ( $type, $id ) {
			return self::$validator->is_valid_container( $container, $type, $id, false );
		} );
	}

	public static function load_fields() {
		$fields = array_map( function( $container ) {
			return $container->get_fields();
		}, self::$containers );

		self::$fields = call_user_func_array( 'array_merge', $fields );
	}

	public static function get_current_field( $field_name ) {
		$field_array = array_filter( self::$fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );

		return array_pop( $field_array );
	}

}