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
	public static function factory( $type, $name ) {
		return Abstract_Container::factory( $type, $name );
	}

	/**
	 * An alias of factory().
	 *
	 * @see Container::factory()
	 **/
	public static function make( $type, $name ) {
		return self::factory( $type, $name );
	}
}
