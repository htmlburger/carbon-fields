<?php

namespace Carbon_Fields\Container\Condition;

interface Fulfillable {

	/**
	 * Check if the condition is fulfilled
	 * 
	 * @return bool
	 */
	public function is_fulfilled();
}