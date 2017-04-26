<?php

namespace Carbon_Fields\Field;

/**
 * Date and time picker field class.
 */
class Date_Time_Field extends Time_Field {

	/**
	 * Picker options.
	 *
	 * @var array
	 */
	public $picker_options = array(
		'allowInput' => true,
		'enableTime' => true,
		'dateFormat' => 'Y-m-d h:i K',
	);

	/**
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format = 'Y-m-d H:i:S';
}
