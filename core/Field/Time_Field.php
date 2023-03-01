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
	protected $storage_format = 'H:i:s';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_php = 'g:i:s A';

	/**
	 * {@inheritDoc}
	 */
	protected $input_format_js = 'h:i:S K';

	public function get_storage_format() {
		if ( $this->get_context() === 'block' ) {
			$this->input_format_js = "Y-m-d h:i:S K";

			return "Y-m-d H:i:s";
		}

		return $this->storage_format;
	}
}
