<?php

namespace Carbon_Fields\Field;

/**
 * Text field class.
 */
class Text_Field extends Field {
	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}
