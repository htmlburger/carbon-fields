<?php 

namespace Carbon_Fields\Field;

class Header_Scripts_Field extends Textarea_Field {
	function init() {
		$this->help_text(__('If you need to add scripts to your header, you should enter them here.', 'crb'));

		add_action('wp_head', array($this, 'print_scripts'));

		parent::init();
	}

	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_Fields\\Datastore\\Theme_Options_Datastore') ) {
			return;
		}

		echo get_option($this->name);
	}
}
