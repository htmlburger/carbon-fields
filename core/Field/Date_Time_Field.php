<?php

namespace Carbon_Fields\Field;

/**
 * Date and time picker field class.
 */
class Date_Time_Field extends Time_Field {

	/**
	 * Value storage format
	 *
	 * @var string
	 */
	protected $storage_format = 'Y-m-d H:i:s';

	/**
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format_js = 'YYYY-MM-DD HH:mm:ss';

	protected $timepicker_type = 'datetimepicker';
}
