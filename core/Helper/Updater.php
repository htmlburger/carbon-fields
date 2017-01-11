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

	public static function update_field( $context, $object_id, $field_name, $data, $value_type = null ) {
		self::load_containers( $context, $object_id );
		self::load_fields();
		
		if ( $object_id ) {
			$field_name = Helper::prepare_meta_name( $field_name );
		}

		self::$carbon_field = self::get_field_by_name( $field_name );

		if ( empty( self::$carbon_field ) ) {
			wp_die( sprintf( __( 'There is no <strong>%s</strong> Carbon Field.', 'crb' ), $field_name ) );
		}

		$carbon_field_type  = strtolower( self::$carbon_field->type );

		if ( $value_type && ( $carbon_field_type !== $value_type ) ) {
			wp_die( sprintf( __( 'The field <strong>%s</strong> is of type <strong>%s</strong>. You are passing <strong>%s</strong> value.', 'crb' ), $field_name, $carbon_field_type, $value_type ) );
		}
		
		if ( $object_id ) {
			self::$carbon_field->get_datastore()->set_id( $object_id );
		}

		self::update_carbon_field( $data, $value_type );
	}

	public static function update_carbon_field( $data, $type ) {
		$data = self::maybe_json_decode( $data );
		$name = self::$carbon_field->get_name();

		switch ( $type ) {
			case 'complex':
				$data = self::parse_complex_value( $data );
				break;

			case 'map':
			case 'map_with_address':
				$data = self::parse_map_value( $data );
				break;

			case 'association':
				$data = self::parse_association_value( $data );
				break;

			default:
		}

		self::$carbon_field->set_value_from_input( [ $name => $data ] );
		self::$carbon_field->save();
	}

	public static function parse_map_value( $data ) {
		if ( empty( $data ) ) {
			return null;
		}

		$expected = ['lat', 'lng', 'address', 'zoom' ];
		$keys     = array_keys( $data );
		$diff     = array_diff( $expected, $keys );
		$name     = self::$carbon_field->get_name();

		if ( ! empty( $diff ) ) {
			wp_die( __( 'Please make sure that the update array has the proper structure ( <strong>lat</strong>, <strong>lng</strong>, <strong>address</strong>, <strong>zoom</strong>)', 'crb' ) );
		}

		return $data;
	}

	public static function parse_association_value( $data ) {
		if ( empty( $data ) ) {
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

		}, $data );
		
		return $parsed_data;
	}

	public static function parse_complex_value( $data ) {
		if ( empty( $data ) ) {
			return null;
		}

		$parsed_data = [];
		
		foreach ( $data as $index => $group) {
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

	public static function load_containers( $type, $id = '' ) {
		if ( ! empty( Container::$active_containers ) ) {
			return;
		}

		do_action( 'carbon_trigger_containers_attach' );

		self::$validator = new Container_Validator();
		$type            = Helper::prepare_data_type_name( $type );

		if ( $type === 'Theme_Option' ) {
			$type = 'Theme_Options';
		}

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

	public static function get_field_by_name( $field_name ) {
		$field_array = array_filter( self::$fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );

		return array_pop( $field_array );
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

	public static function is_key_present( $key, $array ) {
		return isset( $array[ $key ] ) && $array[ $key ];
	}
}