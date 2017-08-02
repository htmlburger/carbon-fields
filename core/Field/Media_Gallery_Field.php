<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Value_Set\Value_Set;

/**
 * Set field class.
 * Allows to create a set of checkboxes where multiple can be selected.
 */
class Media_Gallery_Field extends Predefined_Options_Field {

	public $button_label = '';

	public $window_button_label = '';

	public $window_label = '';

	public $value_type = 'id';

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Create a field from a certain type with the specified label.
	 *
	 * @param string $type  Field type
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	public function __construct( $type, $name, $label ) {
		$this->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES ) );
		parent::__construct( $type, $name, $label );
	}

	/**
	 * Admin initialization actions
	 */
	public function admin_init() {
		$this->button_label = __( 'Select File', 'carbon-fields' );
		$this->window_button_label = __( 'Select File', 'carbon-fields' );
		$this->window_label = __( 'Files', 'carbon-fields' );
	}

	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param  array $input Array of field names and values.
	 * @return Field $this
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->name ] ) ) {
			$this->set_value( array() );
		} else {
			$value = stripslashes_deep( $input[ $this->name ] );
			if ( is_array( $value ) ) {
				$value = array_values( $value );
			}
			$this->set_value( $value );
		}
		return $this;
	}

	/**
	 * Converts the field values into a usable associative array.
	 *
	 * @access protected
	 * @return array
	 */
	protected function value_to_json() {
		$value_set = $this->get_value();
		$value = array();
		$value_meta = array();

		foreach ( $value_set as $attachment_id ) {
			$url       = is_numeric( $attachment_id ) ? wp_get_attachment_url( $attachment_id ) : $attachment_id;
			$file_name = basename( $url );
			$filetype  = wp_check_filetype( $url );

			$file_ext  = $filetype['ext']; // png, mp3, etc..
			$file_type = preg_replace( '~\/.+$~', '', $filetype['type'] ); // image, video, etc..

			$default_thumb_url = wp_mime_type_icon( $attachment_id );

			if ( $file_type == 'image' ) {
				$thumb_src = wp_get_attachment_image_src( $attachment_id, 'thumbnail' );
				$thumb_url = $thumb_src[0];
			} else {
				$thumb_url = $default_thumb_url;
			}

			$value[] = absint( $attachment_id );

			$value_meta[ absint( $attachment_id ) ] = [
				'thumb_url'         => $thumb_url,
				'default_thumb_url' => $default_thumb_url,
				'file_ext'          => $file_ext,
				'file_type'         => $file_type,
				'file_name'         => $file_name,
				'file_url'          => $url,
			];
		}

		return array(
			'value'      => $value,
			'value_meta' => $value_meta,
		);
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, $this->value_to_json(), array(
			'options'             => $this->parse_options( $this->get_options() ),
			'value_type'          => $this->value_type,
			'button_label'        => $this->button_label,
			'window_label'        => $this->window_label,
			'window_button_label' => $this->window_button_label,
		) );

		return $field_data;
	}
}
