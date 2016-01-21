<?php 

namespace Carbon_Fields\Field;

/**
 * Broken field class.
 */
class Broken_Field extends Field {

	function template() {
		_e( 'This field is misconfigured', 'carbon_fields' );

		parent::template();
	}

}