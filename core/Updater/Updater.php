<?php 
namespace Carbon_Fields\Updater;

use Carbon_Fields\Container\Container;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Helper\Container_Validator;

/**
* 
*/
class Updater {

	public static $containers;
	public static $validator;
	public static $fields;
	public static $carbon_field;
	
	public static $value_types = [
		'Complex_Value_Parser'     => 'complex',
		'Association_Value_Parser' => 'association',
		'Map_Value_Parser'         => 'map',
	];

	public static function boot( $context, $object_id = '' ) {
		self::$validator = new Container_Validator();
		self::load_containers( $context, $object_id );
		self::load_fields();
	}

	public static function update_field( $context, $object_id, $field_name, $input, $value_type = null ) {
		self::boot( $context, $object_id );

		$field_name = $object_id ? Helper::prepare_meta_name( $field_name ) : $field_name;
		self::$carbon_field = self::get_field_by_name( $field_name );
		
		if ( $object_id ) {
			self::$carbon_field->get_datastore()->set_id( $object_id );
		}	

		$carbon_field_type  = strtolower( self::$carbon_field->type );

		if ( $value_type && ( $carbon_field_type !== $value_type ) ) {
			wp_die( sprintf( __( 'The field <strong>%s</strong> is of type <strong>%s</strong>. You are passing <strong>%s</strong> value.', 'crb' ), $field_name, $carbon_field_type, $value_type ) );
		}

		self::update_carbon_field( $input, $value_type );
	}

	public static function update_carbon_field( $input, $type ) {
		$input = self::maybe_json_decode( $input );
		$name  = self::$carbon_field->get_name();
		$class = __NAMESPACE__ . '\\' . ( array_search( $type, self::$value_types ) ?: 'Value_Parser' );
		$input = $class::parse( $input );

		self::$carbon_field->set_value_from_input( [ $name => $input ] );
		self::$carbon_field->save();
	}

	public static function load_containers( $type, $id = '' ) {
		if ( empty( Container::$active_containers ) ) {
			do_action( 'carbon_trigger_containers_attach' );
		}

		$type = self::normalize_type( $type );

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

		if ( empty( $field_array ) ) {
			wp_die( sprintf( __( 'There is no <strong>%s</strong> Carbon Field.', 'crb' ), $field_name ) );
		}

		return array_pop( $field_array );
	}

	public static function normalize_type( $type ) {
		$type = Helper::prepare_data_type_name( $type );

		if ( $type === 'Theme_Option' ) {
			$type = 'Theme_Options';
		}

		return $type;
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