<?php 
namespace Carbon_Fields\Updater;

use Carbon_Fields\Container\Container;
use Carbon_Fields\Container\Container_Validator;
use Carbon_Fields\Helper\Helper;

/**
* Class for updating meta data/theme options
*/
class Updater {

	/**
	 * Relevant containers
	 * 
	 * @var arrat
	 */
	public static $containers;

	/**
	 * Instance of the Container_Validator class
	 * 
	 * @var object
	 */
	public static $validator;

	/**
	 * The fields that belong
	 * to the $containers
	 * 
	 * @var array
	 */
	public static $fields;

	/**
	 * Map for classes parsing
	 * special input types
	 * 
	 * @var array
	 */
	public static $value_types = array(
		'complex'          => 'Complex_Value_Parser',
		'association'      => 'Association_Value_Parser',
		'map'              => 'Map_Value_Parser',
		'map_with_address' => 'Map_Value_Parser',
	);

	/**
	 * Flag indicating whether the update call
	 * is initialized by a REST request
	 * 
	 * @var boolean
	 */
	public static $is_rest_request = false;

	/**
	 * Load containers and fields, based on params
	 * 
	 * @param  string $context   
	 * @param  string $object_id 
	 */
	public static function boot( $context, $object_id = '' ) {
		self::$validator = new Container_Validator();
		self::load_containers( $context, $object_id );
		self::load_fields();
	}

	/**
	 * Update Carbon Field
	 * 
	 * @param  string $context    post_meta|term_meta|user_meta|comment_meta|theme_option
	 * @param  string $object_id  
	 * @param  string $field_name 
	 * @param  mixed $input       string|array|json
	 * @param  string $value_type complex|map|map_with_address|association|null
	 */
	public static function update_field( $context, $object_id = '', $field_name, $input, $value_type = null ) {
		self::boot( $context, $object_id );

		$is_option    = true;
		$field_name   = $object_id ? Helper::prepare_meta_name( $field_name ) : $field_name;
		$carbon_field = self::get_field_by_name( $field_name );

		if ( $object_id ) {
			$carbon_field->get_datastore()->set_id( $object_id );
			$is_option = false;
		}	

		$carbon_field_type  = strtolower( $carbon_field->type );

		if ( $value_type && ( $carbon_field_type !== $value_type ) ) {
			throw new \Exception( printf( __( 'The field <strong>%s</strong> is of type <strong>%s</strong>. You are passing <strong>%s</strong> value.', 'crb' ), $field_name, $carbon_field_type, $value_type ) );
		}

		$input = self::maybe_json_decode( $input );
		$class = __NAMESPACE__ . '\\' . ( isset( self::$value_types[ $carbon_field_type ] ) ? self::$value_types[ $carbon_field_type ] : 'Value_Parser' );
		$input = $class::parse( $input, $is_option );

		$carbon_field->set_value_from_input( array( $field_name => $input ) );
		$carbon_field->save();
	}

	/**
	 * Load all appropriate containers
	 * 
	 * @param  string $type
	 * @param  string $id  
	 */
	public static function load_containers( $type, $id = '' ) {
		if ( empty( Container::$active_containers ) ) {
			do_action( 'carbon_trigger_containers_attach' );
		}

		$type = self::normalize_type( $type );

		self::$containers = array_filter( Container::$active_containers, function( $container ) use ( $type, $id ) {
			return self::$validator->is_valid_container( $container, $type, $id, self::$is_rest_request );
		} );
	}

	/**
	 * Extract all fields
	 * from the containers
	 */
	public static function load_fields() {
		$fields = array_map( function( $container ) {
			return $container->get_fields();
		}, self::$containers );

		self::$fields = call_user_func_array( 'array_merge', $fields );
	}

	/**
	 * Retrieve Carbon Field by name
	 * 
	 * @param  string $field_name 
	 * @return object
	 */
	public static function get_field_by_name( $field_name ) {
		$field_array = array_filter( self::$fields, function( $field ) use ( $field_name ) { 
			return $field->get_name() === $field_name;
		} );

		if ( empty( $field_array ) ) {
			throw new \Exception( sprintf( __( 'There is no <strong>%s</strong> Carbon Field.', 'crb' ), $field_name ) );
		}

		return array_pop( $field_array );
	}

	/**
	 * Normalize type
	 * 
	 * @param  string $type 
	 * @return string       
	 */
	public static function normalize_type( $type ) {
		$type = Helper::prepare_data_type_name( $type );

		if ( $type === 'Theme_Option' ) {
			$type = 'Theme_Options';
		}

		return $type;
	}

	/**
	 * Decode json
	 * 
	 * @param  mixed $maybe_json
	 * @return array
	 */
	public static function maybe_json_decode( $maybe_json ) {
		if ( self::is_json( $maybe_json ) ) {
			return json_decode( $maybe_json );
		}

		return $maybe_json;
	}

	/**
	 * is_json
	 * 
	 * @param  string  $string
	 * @return boolean       
	 */
	public static function is_json( $string ) {
		return is_string( $string ) && is_array( json_decode( $string, true ) ) && ( json_last_error() === JSON_ERROR_NONE ) ? true : false;
	}
}