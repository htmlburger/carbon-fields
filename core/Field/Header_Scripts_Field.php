<?php 

namespace Carbon_Fields\Field;

/**
 * Header scripts field class.
 * Intended only for use in theme options container.
 */
class Header_Scripts_Field extends Textarea_Field {
	/**
	 * Initialization actions
	 */
	function init() {
		$this->help_text(__('If you need to add scripts to your header, you should enter them here.', 'crb'));

		add_action('wp_head', array($this, 'print_scripts'));

		parent::init();
	}

	/**
	 * Display the field value in the front-end header.
	 */
	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_Fields\\Datastore\\Theme_Options_Datastore') ) {
			return;
		}

		echo get_option($this->name);
	}
}
