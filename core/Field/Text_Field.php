<?php 

namespace Carbon_Fields\Field;

class Text_Field extends Field {
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}
