<?php

namespace Carbon_Fields\Field;

/**
 * Radio buttons field class.
 */
class Radio_Image_Field extends Select_Field {
	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php esc_html_e( 'no options', 'carbon-fields' ); ?></em>
		<# } else { #>
			<div class="carbon-radio-image-list">
				<# _.each(options, function(option) { #>
					<div class="carbon-radio-image-item">
						<label>
							<input type="radio" name="{{{ name }}}" value="{{ option.value }}" {{{ option.value == value ? 'checked="checked"' : '' }}} />

							<figure class="carbon-radio-image-holder">
								<img src="{{{ option.name }}}" />
							</figure>
						</label>
					</div>
				<# }) #>
			</div>
		<# } #>
		<?php
	}
}
