<?php

namespace Carbon_Fields\Field;

/**
 * Radio buttons field class.
 */
class Radio_Field extends Select_Field {
	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e( 'no options', 'carbon-fields' ); ?></em>
		<# } else { #>
			<ul class="carbon-radio-list">
				<# _.each(options, function(option) { #>
					<li>
						<label>
							<input type="radio" name="{{{ name }}}" value="{{ option.value }}" {{{ option.value == value ? 'checked="checked"' : '' }}} />
							{{{ option.name }}}
						</label>
					</li>
				<# }) #>
			</ul>
		<# } #>
		<?php
	}
}
