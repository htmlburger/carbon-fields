<?php 

namespace Carbon_Fields\Field;

/**
 * Set field class.
 * Allows to create a set of checkboxes where multiple can be selected.
 */
class Set_Field extends Field {
	protected $limit_options = 0;

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
			return array();
		}

		$this->load_options();

		if ( ! is_array( $this->value ) ) {
			$this->value = maybe_unserialize( $this->value );
			if ( ! is_array( $this->value ) ) {
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

		$this->load_options();

		$field_data = array_merge( $field_data, array(
			'limit_options' => $this->limit_options,
			'options' => $this->parse_options( $this->options ),
		) );

		return $field_data;
	}

	/**
	 * The Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e( 'no options', 'carbon_fields' ); ?></em>
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
							<input type="checkbox" name="{{{ name }}}[]" value="{{ option.value }}" {{{ selected ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</p>

					<# if (!exceed && !last && counter == limit_options) { #>
						<p>... <a href="#" class="carbon-set-showall"><?php _e( 'Show All Options', 'carbon_fields' ); ?></a></p>
					<# } #>
				<# }) #>
			</div>
		<# } #>
		<?php
	}
}
