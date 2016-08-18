<?php

namespace Carbon_Fields\Field;

/**
 * Broken field class.
 */
class Broken_Field extends Field {

	public function template() {
		_e( 'This field is misconfigured', 'carbon-fields' );

		parent::template();
	}
}
