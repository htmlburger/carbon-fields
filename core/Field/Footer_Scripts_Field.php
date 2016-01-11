<?php 

namespace Carbon_Fields\Field;

/**
 * Footer scripts field class.
 * Intended only for use in theme options container.
 */
class Footer_Scripts_Field extends Textarea_Field {
	/**
	 * Initialization actions
	 */
	public function init() {
		$this->help_text( __( 'If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.', 'carbon_fields' ) );

		add_action( 'wp_footer', array( $this, 'print_scripts' ) );

		parent::init();
	}

	/**
	 * Display the field value in the front-end footer.
	 */
	public function print_scripts() {
		if ( ! $this->store || ! is_a( $this->store, 'Carbon_Fields\\Datastore\\Theme_Options_Datastore' ) ) {
			return;
		}

		echo get_option( $this->name );
	}
}
