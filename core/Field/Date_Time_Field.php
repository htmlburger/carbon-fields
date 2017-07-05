<?php

namespace Carbon_Fields\Field;

/**
 * Date and time picker field class.
 */
class Date_Time_Field extends Time_Field {

	/**
	 * {@inheritDoc}
	 */
	protected $picker_options = array(
		'allowInput' => true,
		'enableTime' => true,
	);

	/**
	 * {@inheritDoc}
	 */
	protected $storage_format = 'Y-m-d H:i:s';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_php = 'Y-m-d g:i A';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_js = 'Y-m-d h:i K';
}
