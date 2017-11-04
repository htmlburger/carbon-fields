<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Text field class.
 */
class Text_Field extends Field {

	/**
	 * {@inheritDoc}
	 */
	protected $allowed_attributes = array( 'max', 'maxLength', 'min', 'pattern', 'placeholder', 'readOnly', 'step', 'type' );

	function set_mask($mask) {
		$this->mask = $mask;
		return $this;
	}

	function to_json($load) {
		return array_merge( parent::to_json( $load ), array(
			'mask' => $this->mask,
		) );
	}
}
