<?php

namespace Carbon_Fields\Field;

/**
 * Color picker field class.
 */
class Color_Field extends Field {

	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'iris' );
	}
}
