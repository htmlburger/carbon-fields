<?php

namespace Carbon_Fields\Field;

/**
 * Textarea field class.
 */
class Textarea_Field extends Field {
	protected $height = 170;
	protected $rows = 5;

	/**
	 * Change the number of rows of this field.
	 *
	 * @param integer $rows Number of rows
	 */
	public function set_rows( $rows = 0 ) {
		$this->rows = absint( $rows );
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
			'rows' => $this->rows,
			'height' => $this->height,
		) );

		return $field_data;
	}
}
