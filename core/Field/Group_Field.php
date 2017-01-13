<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Group_Field {
	/**
	 * Unique group identificator. Generated randomly.
	 *
	 * @var string
	 */
	protected $group_id;

	/**
	 * Sanitized group name.
	 *
	 * @var string
	 */
	protected $name;

	/**
	 * Group label, used during rendering.
	 *
	 * @var string
	 */
	protected $label;

	/**
	 * Group label underscore template.
	 *
	 * @var string
	 */
	protected $label_template;

	/**
	 * Group fields.
	 *
	 * @var array
	 */
	protected $fields = array();

	/**
	 * List of registered unique field names
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	protected $registered_field_names = array();

	/**
	 * Create a group field with the specified name and label.
	 *
	 * @param string $name
	 * @param string $label
	 * @param array  $fields
	 */
	public function __construct( $name, $label, $fields ) {
		$this->set_name( $name );
		$this->set_label( $label );
		$this->add_fields( $fields );

		// Pick random ID
		$random_string = md5( mt_rand() . $this->get_name() . $this->get_label() );
		$random_string = substr( $random_string, 0, 5 ); // 5 chars should be enough
		$this->group_id = 'carbon-group-' . $random_string;
	}

	/**
	 * Add a group of fields.
	 *
	 * @param array $fields
	 */
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

	/**
	 * Fields attribute getter.
	 *
	 * @return array
	 */
	public function get_fields() {
		return $this->fields;
	}

	/**
	 * Return the names of all fields.
	 *
	 * @return array
	 */
	public function get_field_names() {
		$names = array();

		foreach ( $this->fields as $field ) {
			$names[] = $field->get_name();
		}

		return $names;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
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
			'group_id' => $this->get_group_id(),
			'name' => $this->get_name(),
			'label' => $this->get_label(),
			'fields' => $fields_data,
		);

		return $group_data;
	}

	/**
	 * Group ID attribute getter.
	 *
	 * @return string
	 */
	public function get_group_id() {
		return $this->group_id;
	}

	/**
	 * Set the group label.
	 *
	 * @param string $label If null, the label will be generated from the group name
	 */
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

	/**
	 * Label attribute getter.
	 *
	 * @return string
	 */
	public function get_label() {
		return $this->label;
	}

	/**
	 * Set the Underscore label template.
	 *
	 * @param string $template
	 */
	public function set_label_template( $template ) {
		$this->label_template = $template;
	}

	/**
	 * Set the Underscore label template.
	 *
	 * @return string
	 */
	public function get_label_template() {
		return $this->label_template;
	}

	/**
	 * Print the label Underscore template.
	 */
	public function template_label() {
		echo $this->label_template;
	}

	/**
	 * Set the group name.
	 *
	 * @param string $name  Group name, either sanitized or not
	 */
	public function set_name( $name ) {
		$name = preg_replace( '~\s+~', '_', strtolower( $name ) );
		if ( substr( $name, 0, 1 ) != '_' ) {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$this->name = $name;
	}

	/**
	 * Return the group name.
	 *
	 * @return string
	 */
	public function get_name() {
		return $this->name;
	}

	/**
	 * Assign a DataStore instance for all group fields.
	 *
	 * @param object $datastore
	 */
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		foreach ( $this->fields as $field ) {
			$field->set_datastore( $datastore, $set_as_default );
		}
	}

	/**
	 * Set a prefix for all group fields.
	 *
	 * @param string $prefix
	 */
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
	 */
	public function verify_unique_field_name( $name ) {
		if ( in_array( $name, $this->registered_field_names ) ) {
			Incorrect_Syntax_Exception::raise( 'Field name "' . $name . '" already registered' );
		}

		$this->registered_field_names[] = $name;
	}
}
