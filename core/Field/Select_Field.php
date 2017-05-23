<?php

namespace Carbon_Fields\Field;

/**
 * Select dropdown field class.
 */
class Select_Field extends Predefined_Options_Field {
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
			'options' => $this->parse_options( $this->get_options() ),
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e( 'no options', 'carbon-fields' ); ?></em>
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
