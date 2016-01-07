<?php 

namespace Carbon_Fields\Field;

/**
 * Image field class.
 * Allows selecting and saving a media attachment file,
 * where the image URL is saved in the database.
 */
class Image_Field extends Attachment_Field {
	public $field_type = 'image';
	public $value_type = 'url';
	
	/**
	 * Administration initialization actions
	 */
	function admin_init() {
		$this->button_label = __('Select Image', 'crb');
		$this->window_button_label = __('Select Image', 'crb');
		$this->window_label = __('Images', 'crb');

		parent::admin_init();
	}
}
