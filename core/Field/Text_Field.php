<?php
namespace Carbon_Fields\Field;

/**
 * Text field class.
 */
class Text_Field extends Field {
	// Input field type attribute value. Defaults to text. Available types: text, email, url, number, password
	public $field_type = 'text';
	public $placeholder;

	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<input id="{{{ id }}}" type="{{{ field_type }}}" name="{{{ name }}}" value="{{ value }}" placeholder="{{ placeholder }}" class="regular-{{{ field_type }}}" />
		<?php
	}

	/**
	 * Change the type of the input
	 *
	 * @param string $type
	 */
	public function set_type( $type ) {
		$this->field_type = $type;
		return $this;
	}

	/**
	 * Set field placeholder text
	 *
	 * @param string $placeholder
	 * @return object $this
	 **/
	public function set_placeholder( $placeholder ) {
		$this->placeholder = $placeholder;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'placeholder' => $this->placeholder,
			'field_type' => $this->field_type
		) );
		return $field_data;
	}

}
?>
