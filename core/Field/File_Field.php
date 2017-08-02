<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Helper\Helper;


/**
 * File upload field class.
 *
 * Allows selecting and saving a media attachment file,
 * where the file ID is saved in the database.
 */
class File_Field extends Field {

	public $button_label = '';

	public $window_button_label = '';

	public $window_label = '';

	// empty for all types. available types: audio, video, image and all WordPress-recognized mime types
	public $field_type = '';

	// alt, author, caption, dateFormatted, description, editLink, filename, height, icon, id, link, menuOrder, mime, name, status, subtype, title, type, uploadedTo, url, width
	public $value_type = 'id';

	/**
	 * Admin initialization actions
	 */
	public function admin_init() {
		$this->button_label = __( 'Select File', 'carbon-fields' );
		$this->window_button_label = __( 'Select File', 'carbon-fields' );
		$this->window_label = __( 'Files', 'carbon-fields' );
	}

	/**
	 * Change the type of the field
	 *
	 * @param string $type
	 */
	public function set_type( $type ) {
		$this->field_type = $type;
		return $this;
	}

	/**
	 * Change the value type of the field.
	 *
	 * @param string $value_type
	 */
	public function set_value_type( $value_type ) {
		$this->value_type = $value_type;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$value = $this->get_value();
		$attachment_metadata = Helper::get_attachment_metadata( $value, $this->value_type );

		$field_data = array_merge( $field_data, $attachment_metadata, array(
			'button_label'        => $this->button_label,
			'window_button_label' => $this->window_button_label,
			'window_label'        => $this->window_label,
			'type_filter'         => $this->field_type,
			'value_type'          => $this->value_type,
		) );

		return $field_data;
	}
}
