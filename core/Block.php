<?php

namespace Carbon_Fields;

/**
 * Block proxy factory class.
 * Used for shorter namespace access when creating a block.
 */
class Block extends Container {
	/**
	 * @see    \Carbon_Fields\Container\Container::factory()
	 * @return \Carbon_Fields\Container\Block_Container
	 */
	public static function make() {
		return call_user_func_array( array( parent::class, 'make' ), array_merge( array( 'block' ), func_get_args() ) );
	}
}
