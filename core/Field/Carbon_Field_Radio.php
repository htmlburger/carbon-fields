<?php 

class Carbon_Field_Radio extends Carbon_Field_Select {
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
