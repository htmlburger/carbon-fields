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
	public function admin_init() {
		$this->button_label = __( 'Select Image', 'carbon_fields' );
		$this->window_button_label = __( 'Select Image', 'carbon_fields' );
		$this->window_label = __( 'Images', 'carbon_fields' );

		parent::admin_init();
	}
}
