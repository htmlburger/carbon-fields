<?php

namespace Carbon_Fields\Field;

/**
 * Email field class.
 */
class Email_Field extends Field {
	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<input id="{{{ id }}}" type="email" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}
}
