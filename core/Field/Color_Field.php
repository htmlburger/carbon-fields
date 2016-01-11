<?php 

namespace Carbon_Fields\Field;

/**
 * Color picker field class.
 */
class Color_Field extends Field {
	/**
	 * Underscore template of the field.
	 */
	public function template() {
		?>
		<div class="carbon-color-row">
			<div class="input-with-button">
				<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-color" />
				<span class="pickcolor button icon-button hide-if-no-js"><?php _e( 'Select a Color', 'carbon_fields' ); ?></span>
			</div>
			<div class="carbon-color-container hide-if-no-js"></div>
		</div>
		<?php
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public function admin_enqueue_scripts() {
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'iris' );
	}
}
