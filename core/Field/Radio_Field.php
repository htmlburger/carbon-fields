<?php 

namespace Carbon_Fields\Field;

class Radio_Field extends Select_Field {
	function template() {
		?>
		<# if (_.isEmpty(options)) { #>
			<em><?php _e('no options', 'crb'); ?></em>
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
