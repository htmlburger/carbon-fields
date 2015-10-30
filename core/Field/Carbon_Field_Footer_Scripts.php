<?php 

class Carbon_Field_Footer_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your footer (like Google Analytics tracking code), you should enter them in this box.', 'crb'));

		add_action('wp_footer', array($this, 'print_scripts'));

		parent::init();
	}

	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}

		echo get_option($this->name);
	}
}
