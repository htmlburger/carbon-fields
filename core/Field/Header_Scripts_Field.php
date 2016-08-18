<?php

namespace Carbon_Fields\Field;

/**
 * Header scripts field class.
 * Intended only for use in theme options container.
 */
class Header_Scripts_Field extends Scripts_Field {
	/**
	 * Default help text to be displayed for this type of field.
	 */
	public function get_default_help_text() {
		return __( 'If you need to add scripts to your header, you should enter them here.', 'carbon-fields' );
	}

	/**
	 * Action name to be hooked on.
	 */
	public function get_hook_name() {
		return 'wp_head';
	}
}
