<?php

namespace Carbon_Fields\Field;

/**
 * Date picker field class.
 */
class Date_Field extends Field {

	/**
	 * Datepicker options
	 */
	public $datepicker_options = array();

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'options' => $this->datepicker_options,
		) );

		return $field_data;
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_script( 'jquery-ui-datepicker' );

		wp_enqueue_style( 'jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css', array(), \Carbon_Fields\VERSION );
	}

	/**
	 * Set datepicker options
	 */
	public function set_datepicker_options( $options ) {
		$this->datepicker_options = $options;

		return $this;
	}
}
