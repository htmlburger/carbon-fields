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
	);

	/**
	 * {@inheritDoc}
	 */
	protected $storage_format = 'H:i:s';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_php = 'g:i:s A';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_js = 'h:i:S K';
}
