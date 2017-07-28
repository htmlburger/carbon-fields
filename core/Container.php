<?php

namespace Carbon_Fields;

/**
 * Container proxy factory class.
 * Used for shorter namespace access when creating a container.
 */
class Container {

	/**
	 * A proxy for the abstract container factory method.
	 *
	 * @see    Carbon_Fields\Container\Container::factory()
	 * @return Carbon_Fields\Container\Container
	 */
	public static function factory() {
		return call_user_func_array( array( '\Carbon_Fields\Container\Container', 'factory' ), func_get_args() );
	}

	/**
	 * An alias of factory().
	 *
	 * @see    Container::factory()
	 * @return Carbon_Fields\Container\Container
	 */
	public static function make() {
		return call_user_func_array( array( get_class(), 'factory' ), func_get_args() );
	}
}
