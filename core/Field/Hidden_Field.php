<?php

namespace Carbon_Fields\Field;

/**
 * Hidden field class.
 */
class Hidden_Field extends Field {

	protected $hidden = false;

	/**
	 * Get hidden state
	 *
	 * @return bool
	 */
	public function get_hidden() {
		return $this->hidden;
	}

	/**
	 * This states configures if the field is shown in the backend.
	 *
	 * @param  bool  $hidden
	 * @return self  $this
	 */
	public function set_hidden( $hidden = true ) {
		$this->hidden = $hidden;
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
			'hidden' => $this->get_hidden()
		) );

		return $field_data;
	}
}
