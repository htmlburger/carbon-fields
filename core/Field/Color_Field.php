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
		<div class="carbon-color">
			<span class="pickcolor button carbon-color-button hide-if-no-js">
				<span class="carbon-color-preview"></span>

				<span class="carbon-color-button-text"><?php _e( 'Select a Color', 'carbon-fields' ); ?></span>
			</span>

			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-color-field" />

			<div class="carbon-color-container hide-if-no-js"></div>
		</div>
		<?php
	}

	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'iris' );
	}
}
