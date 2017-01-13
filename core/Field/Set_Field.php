<?php

namespace Carbon_Fields\Field;

/**
 * Set field class.
 * Allows to create a set of checkboxes where multiple can be selected.
 */
class Set_Field extends Predefined_Options_Field {
	/**
	 * The options limit.
	 *
	 * @var int
	 */
	protected $limit_options = 0;

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 **/
	public function set_value_from_input( $input = null ) {
		if ( is_null( $input ) ) {
			$input = $_POST;
		}

		if ( ! isset( $input[ $this->name ] ) ) {
			$this->set_value( null );
		} else {
			$value = stripslashes_deep( $input[ $this->name ] );
			if ( is_array( $value ) ) {
				$value = array_values( $value );
			}
			$this->set_value( $value );
		}
	}

	/**
	 * Set the number of the options to be displayed at the initial field display.
	 *
	 * @param  int $limit
	 */
	public function limit_options( $limit ) {
		$this->limit_options = $limit;
		return $this;
	}

	/**
	 * Retrieve the field value(s).
	 *
	 * @return array
	 */
	public function get_value() {
		if ( $this->value === false ) {
			return $this->set_value( $this->default_value );
		}

		if ( !is_array( $this->value ) ) {
			$this->value = maybe_unserialize( $this->value );
			if ( !is_array( $this->value ) ) {
				if ( is_null( $this->value ) ) {
					return array();
				}
				return array( $this->value );
			}
		}

		return (array) $this->value;
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
			'limit_options' => $this->limit_options,
			'options' => $this->parse_options( $this->get_options() ),
		) );

		return $field_data;
	}

	/**
	 * The Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e( 'no options', 'carbon-fields' ); ?></em>
		<# } else { #>
			<div class="carbon-set-list">
				<# _.each(options, function(option, i) { #>
					<# 
						var selected = jQuery.inArray(String(option.value), value) > -1;
						var counter = i + 1;
						var exceed = limit_options > 0 && counter > limit_options;
						var last = options.length === counter;
					#>

					<p {{{ exceed ? 'style="display:none"' : '' }}}>
						<label>
							<input type="checkbox" name="{{{ name }}}[{{{ i }}}]" value="{{ option.value }}" {{{ selected ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</p>

					<# if (!exceed && !last && counter == limit_options) { #>
						<p>... <a href="#" class="carbon-set-showall"><?php _e( 'Show All Options', 'carbon-fields' ); ?></a></p>
					<# } #>
				<# }) #>
			</div>
		<# } #>
		<?php
	}
}
