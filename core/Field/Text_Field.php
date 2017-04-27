<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Text field class.
 */
class Text_Field extends Field {
	
	/**
	 * Key-value array of attribtues and their values
	 * 
	 * @var array
	 */
	protected $attributes = array(
		'type' => 'text',
	);

	/**
	 * Array of attributes the user is allowed to change
	 * 
	 * @var array<string>
	 */
	protected $allowed_attributes = array( 'max', 'maxlength', 'min', 'pattern', 'placeholder', 'readonly', 'step', 'type' );

	/**
	 * Set attribute and it's value
	 * 
	 * @param string $name
	 * @param string $value
	 * @return Field $this
	 */
	public function set_attribute( $name, $value = '' ) {
		if ( ! in_array( $name, $this->allowed_attributes ) ) {
			Incorrect_Syntax_Exception::raise( 'Only the following attributes are allowed: ' . implode( ', ', $this->allowed_attributes ) . '.' );
			return $this;
		}
		$this->attributes[ $name ] = $value;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'attributes' => $this->attributes,
		) );

		return $field_data;
	}
}
