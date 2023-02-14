<?php

namespace Carbon_Fields;

/**
 * Block proxy factory class.
 * Used for shorter namespace access when creating a block.
 */
class Block extends Container {
	/**
	 * {@inheritDoc}
	 */
	public static function make() {
		return call_user_func_array( array( get_parent_class(), 'make' ), array_merge( array( 'block' ), func_get_args() ) );
	}
}
