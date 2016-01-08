<?php 

namespace Carbon_Fields\Field;

/**
 * Textarea field class.
 */
class Textarea_Field extends Field {
	protected $height = 170;
	protected $rows = 0;

	/**
	 * Set the height of the field.
	 * Deprecated in favor of set_rows()
	 *
	 * @deprecated
	 * 
	 * @param integer $height Height (in pixels)
	 */
	public function set_height( $height = 170 ) {
		$min_height = 28;
		$this->height = max( intval( $height ), $min_height );
		return $this;
	}

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
	 * This data will be available in the Underscore template and the Backbone Model.
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

	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<textarea id="{{{ id }}}" name="{{{ name }}}" {{{ rows ? 'rows="' + rows + '"' : 'style="height: ' + height + 'px;"' }}}>{{ value }}</textarea>
		<?php
	}
}
