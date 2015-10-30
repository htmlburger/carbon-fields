<?php 

class Carbon_Field_Text extends Carbon_Field {
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}
