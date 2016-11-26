<?php

namespace Carbon_Fields\Field;

/**
 * Fontawesome dropdown field class.
 */
class Font_Awesome_Field extends Select_Field {
	// Version of Font Awesome used
	const VERSION = '4.7.0';
	
	/**
	 * Hook administration scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		wp_enqueue_style('font-awesome', \Carbon_Fields\URL . '/assets/font-awesome.min.css');
	}
	
	/**
	 * Set the options of this field.
	 * The options should be read-only
	 *
	 * @param array|callable $options added for parent compatibility
	 */
	public function set_options( $options = null ) {
		Incorrect_Syntax_Exception::raise( 'The options for the Font Awesome field are read-only' );

		return $this;
	}
	
	/**
	 * Add new options to this field.
	 * The options should be read-only
	 *
	 * @param array|callable $options added for parent compatibility
	 */
	public function add_options( $options = null ) {
		$this->set_options($options);

		return $this;
	}
	
	protected function load_options() {
		$icons_json = file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'fa-json.json');
		$icons = json_decode($icons_json);
		
		$this->options = $icons;
	}
}
