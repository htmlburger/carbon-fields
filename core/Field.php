<?php

namespace Carbon_Fields;

/**
 * Field proxy factory class.
 * Used for shorter namespace access when creating a field.
 */
class Field {

	/**
	 * A proxy for the abstract field factory method.
	 *
	 * @see    \Carbon_Fields\Field\Field::factory()
	 * @return \Carbon_Fields\Field\Field
	 */
	public static function factory() {
		return call_user_func_array( array( '\Carbon_Fields\Field\Field', 'factory' ), func_get_args() );
	}

	/**
	 * An alias of factory().
	 *
	 * @see    \Carbon_Fields\Field\Field::factory()
	 * @return \Carbon_Fields\Field\Field
	 */
	public static function make() {
		return call_user_func_array( array( get_class(), 'factory' ), func_get_args() );
	}
}
