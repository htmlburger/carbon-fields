<?php 

namespace Carbon_Fields\Field;

/**
 * Multiselect field class (represented as checkboxes).
 */
class Multiselect_Field extends Select_Field {
	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		if ( ! empty( $field_data['value'] ) ) {
			$cleaned_values = array();
			$database_values = maybe_unserialize( $field_data['value'] );
			foreach ( $database_values as $value ) {
				// checkbox values are saved as strings in database -> convert to integer
				$cleaned_values[] = intval( $value );
			}
			$field_data['value'] = $cleaned_values;
		}

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
				<# _.each(options, function(option) { #>
					<label>
						<input type="checkbox" name="{{{ name }}}[]" value="{{ option.value }}" {{{ _.contains(value, option.value) ? 'checked="checked"' : '' }}} />
						{{{ option.name }}}
					</label>
				<# }) #>
		<# } #>
		<?php
	}
}
