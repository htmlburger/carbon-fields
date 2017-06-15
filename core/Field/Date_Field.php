<?php

namespace Carbon_Fields\Field;

/**
 * Date picker field class.
 */
class Date_Field extends Field {

	/**
	 * Picker options.
	 *
	 * @var array
	 */
	protected $picker_options = array(
		'allowInput' => true,
		'dateFormat' => 'Y-m-d',
	);

	/**
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format = 'Y-m-d';

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'storage_format' => $this->get_storage_format(),
			'picker_options' => $this->get_picker_options(),
		) );

		return $field_data;
	}

	/**
	 * Get storage format
	 *
	 * @return string
	 */
	public function get_storage_format() {
		return $this->storage_format;
	}

	/**
	 * Set storage format
	 *
	 * @param  string $storage_format
	 * @return Field  $this
	 */
	public function set_storage_format( $storage_format ) {
		$this->storage_format = $storage_format;
		return $this;
	}

	/**
	 * Returns the picker options.
	 * 
	 * @return array
	 */
	public function get_picker_options() {
		return $this->picker_options;
	}

	/**
	 * Set datepicker options
	 * 
	 * @param  array $options
	 * @return Field $this
	 */
	public function set_picker_options( $options ) {
		$this->picker_options = array_replace( $this->picker_options, $options );
		return $this;
	}
}
