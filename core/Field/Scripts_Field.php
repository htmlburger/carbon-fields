<?php

namespace Carbon_Fields\Field;

/**
 * Abstract scripts field class.
 * Intended only for use in theme options container.
 */
abstract class Scripts_Field extends Textarea_Field {
	/**
	 * Initialization actions
	 */
	public function init() {
		$this->help_text( $this->get_default_help_text() );

		add_action( $this->get_hook_name(), array( $this, 'print_scripts' ) );

		parent::init();
	}

	/**
	 * Display the field value in the front-end header.
	 */
	public function print_scripts() {
		if ( ! $this->get_datastore() || ! is_a( $this->get_datastore(), 'Carbon_Fields\\Datastore\\Theme_Options_Datastore' ) ) {
			return;
		}

		echo get_option( $this->name );
	}

	/**
	 * Default help text to be displayed for this type of field.
	 */
	abstract public function get_default_help_text();

	/**
	 * Action name to be hooked on.
	 */
	abstract public function get_hook_name();
}
