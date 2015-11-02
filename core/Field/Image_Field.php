<?php 

namespace Carbon_Fields\Field;

class Image_Field extends Attachment_Field {
	public $field_type = 'image';
	public $value_type = 'url';
	
	function admin_init() {
		$this->button_label = __('Select Image', 'crb');
		$this->window_button_label = __('Select Image', 'crb');
		$this->window_label = __('Images', 'crb');

		parent::admin_init();
	}
}
