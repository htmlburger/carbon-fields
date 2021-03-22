<?php

namespace Carbon_Fields\Field;

/**
 * Oembed field class.
 */
class Oembed_Field extends Field {

	/**
	 * Enqueue scripts and styles in admin
	 * Called once per field type
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_script( 'wp-api' );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'value' => $this->get_value(),
		) );

		return $field_data;
	}
}
