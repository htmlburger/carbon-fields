<?php 

namespace Carbon_Fields\Field;

/**
 * Date picker field class.
 */
class Date_Field extends Field {

	/**
	 * Datepicker options
	 */
	public $options = array();

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
			'options' => $this->options,
		) );

		return $field_data;
	}

	/**
	 * The Underscore template of this field
	 **/
	public function template() {
		?>
		<div class="input-with-button">
			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-datepicker" />
			<span class="carbon-datepicker-trigger button icon-button hide-if-no-js"><?php _e( 'Date', 'carbon_fields' ); ?></span>
		</div>
		<?php
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public function admin_enqueue_scripts() {
		wp_enqueue_script( 'jquery-ui-datepicker' );

		wp_enqueue_style( 'jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css' );
		wp_enqueue_style( 'carbon-jquery-ui', \Carbon_Fields\URL . '/assets/css/jquery-ui.css' );
	}

	/**
	 * Set datepicker options 
	 */
	public function set_options( $options ) {
		$this->options = $options;

		return $this;
	}
}
