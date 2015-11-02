<?php 

namespace Carbon_Fields\Field;

class Text_Field extends Base_Field {
	function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}
