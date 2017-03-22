<?php

namespace Carbon_Fields\Field;

/**
 * Date picker field class.
 */
class Date_Field extends Field {

	/**
	 * Picker type.
	 *
	 * @var string
	 */
	protected $picker_type = 'datepicker';

	/**
	 * Picker options.
	 *
	 * @var array
	 */
	public $picker_options = array(
		'dateFormat' => 'yy-mm-dd',
	);

	/**
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format = 'YYYY-MM-DD';

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'storage_format' => $this->storage_format,
			'picker_type' => $this->picker_type,
			'picker_options' => $this->picker_options,
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
	public function set_picker_options( $options ) {
		$this->picker_options = array_replace( $this->picker_options, $options );
		return $this;
	}
}
