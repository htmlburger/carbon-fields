<?php 

class Carbon_Field_Header_Scripts extends Carbon_Field_Textarea {
	function init() {
		$this->help_text(__('If you need to add scripts to your header, you should enter them here.', 'crb'));

		add_action('wp_head', array($this, 'print_scripts'));

		parent::init();
	}

	function print_scripts() {
		if ( !$this->store || !is_a($this->store, 'Carbon_DataStore_ThemeOptions') ) {
			return;
		}

		echo get_option($this->name);
	}
}
