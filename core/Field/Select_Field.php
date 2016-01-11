<?php 

namespace Carbon_Fields\Field;

/**
 * Select dropdown field class.
 */
class Select_Field extends Field {
	/**
	 * Set the options of this field.
	 * Accepts either array of data or a callback that returns the data.
	 * 
	 * @param array|callable $options 
	 */
	public function set_options( $options ) {
		$this->_set_options( $options );
		return $this;
	}

	/**
	 * Add new options to this field.
	 * Accepts either array of data or a callback that returns the data.
	 * 
	 * @param array|callbacle $options
	 */
	public function add_options( $options ) {
		$this->_add_options( $options );
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
		$this->load_options();

		$field_data = array_merge( $field_data, array(
			'options' => $this->parse_options( $this->options ),
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e( 'no options', 'carbon_fields' ); ?></em>
		<# } else { #>
			<select id="{{{ id }}}" name="{{{ name }}}">
				<# _.each(options, function(option) { #>
					<option value="{{ option.value }}" {{{ option.value == value ? 'selected="selected"' : '' }}}>
						{{{ option.name }}}
					</option>
				<# }) #>
			</select>
		<# } #>
		<?php
	}
}
