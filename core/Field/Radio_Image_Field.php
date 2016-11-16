<?php

namespace Carbon_Fields\Field;

/**
 * Images as radio buttons field class.
 */
class Radio_Image_Field extends Predefined_Options_Field {
	/**
     * Check if there are callbacks and populate the options
     * Overrided to not modify the field options
     */
	protected function load_options() {
		if ( empty( $this->options ) ) {
			return false;
		}

        $options = $this->options;

		if ( is_callable( $options ) ) {
			$options = call_user_func( $options );
			if ( ! is_array( $options ) ) {
				$options = array();
			}
		}

		$this->options = $options;
	}

	/**
     * Changes the options array structure. This is needed to keep the array items order when it is JSON encoded.
     * Will also work with a callable that returns an array.
     * Overrided to prevent losing other data in an option array
     *
     * @param array|callable $options
     * @return array
     */
	public function parse_options( $options ) {
		$parsed = array();

		if ( is_callable( $options ) ) {
			$options = call_user_func( $options );
		}

        foreach ( $options as $item ) {
            $tmp = $item['name'];
            $item['name'] = $item['value'];
            $item['value'] = $tmp;
            $parsed[] = $item;
		}

		return $parsed;
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
			<em><?php _e( 'no options', 'carbon-fields' ); ?></em>
		<# } else { #>
			<ul class="carbon-radio-list carbon-radio-image-list">
				<# _.each(options, function(option) { #>
					<li>
						<label>
                                                        <img class="carbon-radio-image" src="{{{ option.imgUrl }}}" title="{{{ option.name }}}">
							<input type="radio" name="{{{ name }}}" value="{{ option.value }}" {{{ option.value == value ? 'checked="checked"' : '' }}} />
						</label>
					</li>
				<# }) #>
			</ul>
		<# } #>
		<?php
	}
}
