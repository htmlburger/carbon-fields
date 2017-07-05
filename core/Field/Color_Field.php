<?php

namespace Carbon_Fields\Field;

/**
 * Color picker field class.
 */
class Color_Field extends Field {

	/**
	 * Array of hex colors to show in the color picker
	 * @var array<string>
	 */
	protected $palette = array();

	/**
	 * Set color presets
	 *
	 * @param array<string> $palette
	 * @return Field $this
	 */
	public function set_palette( $palette ) {
		$this->palette = $palette;
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

		$field_data = array_merge( $field_data, array(
			'palette' => $this->palette,
		) );

		return $field_data;
	}
}
