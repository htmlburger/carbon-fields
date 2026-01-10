<?php

namespace Carbon_Fields\Field;

/**
 * Radio buttons field class.
 */
class Radio_Field extends Select_Field {

	/**
	 * Allowed HTML attributes for the field.
	 *
	 * @var string[]
	 */
	protected $allowed_attributes = [ 'disabled' ];

}
