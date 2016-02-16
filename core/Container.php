<?php 

namespace Carbon_Fields;

use Carbon_Fields\Container\Container as Abstract_Container;

/**
 * Container proxy factory class.
 * Used for shorter namespace access when creating a container.
 **/
class Container {
	/**
	 * A proxy for the abstract container factory method.
	 *
	 * @see Carbon_Fields\Container\Container::factory()
	 **/
	public static function factory( $type, $name, $label = null ) {
		return Abstract_Container::factory( $type, $name, $label );
	}

	/**
	 * An alias of factory().
	 *
	 * @see Container::factory()
	 **/
	public static function make( $type, $name, $label = null ) {
		return self::factory( $type, $name, $label );
	}
}
