<?php

namespace Carbon_Fields\Container\Fulfillable;

interface Fulfillable {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment );
}