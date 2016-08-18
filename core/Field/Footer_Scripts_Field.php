<?php

namespace Carbon_Fields\Field;

/**
 * Footer scripts field class.
 * Intended only for use in theme options container.
 */
class Footer_Scripts_Field extends Scripts_Field {
	/**
	 * Default help text to be displayed for this type of field.
	 */
	public function get_default_help_text() {
		return __( 'If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.', 'carbon-fields' );
	}

	/**
	 * Action name to be hooked on.
	 */
	public function get_hook_name() {
		return 'wp_footer';
	}
}
