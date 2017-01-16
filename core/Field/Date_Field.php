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
	 * This data will be available in the Underscore template and the Backbone Model.
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
	 * The Underscore template of this field
	 **/
	public function template() {
		?>
		<div class="carbon-field-group">
			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-field-group-input carbon-datepicker" />

			<div class="carbon-field-group-button">
				<span class="carbon-datepicker-trigger button hide-if-no-js"><?php _e( 'Select Date', 'carbon-fields' ); ?></span>
			</div>
		</div>
		<?php
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_script( 'jquery-ui-datepicker' );

		wp_enqueue_style( 'jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css', array(), \Carbon_Fields\VERSION );
	}

	/**
	 * This method is deprecated since it conflicts with the options concept in predefined option fields.
	 *
	 * @deprecated
	 */
	public function set_options( $options ) {
		return $this->set_datepicker_options( $options );
	}

	/**
	 * Set datepicker options
	 */
	public function set_datepicker_options( $options ) {
		$this->datepicker_options = $options;

		return $this;
	}
}
