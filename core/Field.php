<?php

namespace Carbon_Fields;

use Carbon_Fields\Field\Field as Abstract_Field;

/**
 * Field proxy factory class.
 * Used for shorter namespace access when creating a field.
 **/
class Field {
	/**
	 * A proxy for the abstract field factory method.
	 *
	 * @see Carbon_Fields\Field\Field::factory()
	 **/
	public static function factory( $type, $name, $label = null ) {
		return Abstract_Field::factory( $type, $name, $label );
	}

	/**
	 * An alias of factory().
	 *
	 * @see Field::factory()
	 **/
	public static function make( $type, $name, $label = null ) {
		return self::factory( $type, $name, $label );
	}
}
