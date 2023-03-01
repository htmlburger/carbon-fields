<?php

namespace Carbon_Fields\Field;

/**
 * Time picker field class.
 */
class Time_Field extends Date_Field {
	/**
	 * {@inheritDoc}
	 */
	protected $picker_options = array(
		'allowInput' => true,
		'enableTime' => true,
		'noCalendar' => true,
		'enableSeconds' => true,
		'altInput' => true,
		'altFormat' => "h:i:S K",
	);

	/**
	 * {@inheritDoc}
	 */
	protected $storage_format = 'Y-m-d H:i:s';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_php = 'g:i:s A';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_js = 'Y-m-d h:i:S K';
}
