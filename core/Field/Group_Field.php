<?php 

namespace Carbon_Fields\Field;

use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Group_Field {
	protected $name;
	protected $label;
	protected $fields = array();

	/**
	 * List of registered unique field names
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	protected $registered_field_names = array();

	public function add_fields( $fields ) {
		foreach ( $fields as $field ) {
			if ( ! is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
				Incorrect_Syntax_Exception::raise( 'Object must be of type ' . __NAMESPACE__ . '\\Field' );
			}

			// verify name validity
			if ( preg_match( '~_\d+~', $field->get_name() ) ) {
				Incorrect_Syntax_Exception::raise( 'Subfield names cannot contain underscore followed by a digit(s). Replace "' . ltrim( $field->get_name(), '_' ) . '" with "' . ltrim( preg_replace( '~_+(\d+)~', '$1', $field->get_name() ), '_' ) . '"' );
			}

			$this->verify_unique_field_name( $field->get_name() );
		}

		$this->fields = array_merge( $this->fields, $fields );
	}

	public function get_fields() {
		return $this->fields;
	}

	public function get_field_names() {
		$names = array();

		foreach ( $this->fields as $field ) {
			$names[] = $field->get_name();
		}

		return $names;
	}

	public function to_json( $load ) {
		$fields_data = array();

		foreach ( $this->get_fields() as $field ) {
			// The field default value should be set manually if the field is not loaded
			if ( ! $load ) {
				if ( $field->get_value() === null ) {
					$field->set_value( $field->get_default_value() );
				}
			}

			$fields_data[] = $field->to_json( $load );
		}

		$group_data = array(
			'name' => $this->get_name(),
			'label' => $this->get_label(),
			'fields' => $fields_data,
		);

		return $group_data;
	}

	public function set_label( $label ) {
		// Try to guess field label from it's name
		if ( is_null( $label ) ) {
			// remove the leading underscore(if it's there)
			$label = preg_replace( '~^_~', '', $this->name );

			// remove the leading "crb_"(if it's there)
			$label = preg_replace( '~^crb_~', '', $label );

			// split the name into words and make them capitalized
			$label = ucwords( str_replace( '_', ' ', $label ) );
		}

		$this->label = $label;
	}

	public function get_label() {
		return $this->label;
	}

	public function set_name( $name ) {
		$name = preg_replace( '~\s+~', '_', strtolower( $name ) );
		if ( substr( $name, 0, 1 ) != '_' ) {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$this->name = $name;
	}

	public function get_name() {
		return $this->name;
	}

	public function set_datastore( Datastore_Interface $store ) {
		foreach ( $this->fields as $field ) {
			if ( ! $field->get_datastore() ) {
				$field->set_datastore( $store );
			}
		}
	}

	public function set_prefix( $prefix ) {
		foreach ( $this->fields as $field ) {
			$field->set_prefix( $prefix );
		}
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 **/
	public function verify_unique_field_name( $name ) {
		if ( in_array( $name, $this->registered_field_names ) ) {
			Incorrect_Syntax_Exception::raise( 'Field name "' . $name . '" already registered' );
		}

		$this->registered_field_names[] = $name;
	}
}
