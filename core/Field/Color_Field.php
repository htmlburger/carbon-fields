<?php

namespace Carbon_Fields\Field;

/**
 * Color picker field class.
 */
class Color_Field extends Field {
	/**
	 * Flag whether to enable alpha selection
	 *
	 * @var boolean
	 */
	protected $alpha_enabled = false;

	/**
	 * Array of hex colors to show in the color picker
	 *
	 * @var array<string>
	 */
	protected $palette = array();

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
			'alphaEnabled' => $this->get_alpha_enabled(),
			'palette' => $this->get_palette(),
		) );

		return $field_data;
	}

	/**
	 * Get color presets
	 *
	 * @return array<string>
	 */
	public function get_palette() {
		return $this->palette;
	}

	/**
	 * Set color presets
	 *
	 * @param  array<string> $palette
	 * @return self          $this
	 */
	public function set_palette( $palette ) {
		$this->palette = $palette;
		return $this;
	}

	/**
	 * Get whether alpha is enabled
	 *
	 * @return boolean
	 */
	public function get_alpha_enabled() {
		return $this->alpha_enabled;
	}

	/**
	 * Set whether alpha is enabled
	 *
	 * @param  boolean $enabled
	 * @return self    $this
	 */
	public function set_alpha_enabled( $enabled = true ) {
		$this->alpha_enabled = $enabled;
		return $this;
	}
}
