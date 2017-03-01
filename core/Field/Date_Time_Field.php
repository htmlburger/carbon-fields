<?php

namespace Carbon_Fields\Field;

/**
 * Date and time picker field class.
 */
class Date_Time_Field extends Time_Field {

	/**
	 * Picker type.
	 *
	 * @var string
	 */
	protected $picker_type = 'datetimepicker';

	/**
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format = 'YYYY-MM-DD HH:mm:ss';
}
