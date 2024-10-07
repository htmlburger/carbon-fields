<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Image field class.
 *
 * Allows selecting and saving a media attachment file,
 * where the image ID is saved in the database.
 */
class Image_Field extends File_Field {
	public $field_type = 'image';

	/**
	 * The size of the image preview
	 *
	 * @see set_preview_size()
	 * @var string|array
	 */
	protected $preview_size = [
		'width' => 130,
		'height' => 130,
	];

	/**
	 * Get the image preview size.
	 *
	 * @return  string|array
	 */
	public function get_preview_size() {
		return $this->preview_size;
	}

	/**
	 * Set the image preview size.
	 *
	 * @param  string|array  $size
	 * @return self  $this
	 */
	public function set_preview_size( $size ) {
		if ( is_array( $size ) ) {
			$this->preview_size = [
				'width' => $size[0],
				'height' => $size[1],
			];
		} else {
			$registered_image_sizes = get_intermediate_image_sizes();
			if ( ! in_array( $size, $registered_image_sizes ) ) {
				Incorrect_Syntax_Exception::raise( 'Image preview size is not found. Must be one of the following - ' . implode( ', ' , $registered_image_sizes ) . ' ("' . $size . '" passed).' );
			}

			$this->preview_size = [
				'width' => intval( get_option( "{$size}_size_w" ) ),
				'height' => intval( get_option( "{$size}_size_h" ) ),
			];
		}

		return $this;
	}

	/**
	 * {@inheritDoc}
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'preview_size' => $this->get_preview_size(),
		) );

		return $field_data;
	}
}
