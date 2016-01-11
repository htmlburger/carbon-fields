<?php 

namespace Carbon_Fields\Field;

/**
 * Single checkbox field class.
 */
class Checkbox_Field extends Field {
	/**
	 * The value that is saved in the database when
	 * this checkbox field is enabled.
	 * 
	 * @var string
	 */
	protected $option_value = 'yes';

	/**
	 * Modify the option value.
	 * 
	 * @param string $value New value
	 */
	public function set_option_value( $value ) {
		$this->option_value = $value;
		return $this;
	}

	/**
	 * Load the field value from an input array based on it's name.
	 * If not enabled, set to empty string for easier data querying.
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 **/
	public function set_value_from_input( $input = null ) {
		parent::set_value_from_input( $input );
		if ( $this->get_value() === null ) {
			$this->set_value( '' );
		}
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * In addition to default data, option value and label are added.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'option_value' => $this->option_value,
			'option_label' => parent::get_label(),
		) );

		return $field_data;
	}

	/**
	 * Underscore template of the field.
	 */
	public function template() {
		?>
		<label>
			<input type="checkbox" name="{{{ name }}}" value="{{ option_value }}" {{{ option_value == value ? 'checked="checked"' : '' }}} />
			{{{ option_label }}}
		</label>
		<?php
	}

	/**
	 * Get the field label.
	 * Label here is empty because it is displayed in the underscore template.
	 * 
	 * @return string Label of the field.
	 */
	public function get_label() {
		return '';
	}

	/**
	 * Whether this field is required.
	 * A single checkbox field is non-required by design.
	 * 
	 * @return boolean false
	 */
	public function is_required() {
		return false;
	}
}
