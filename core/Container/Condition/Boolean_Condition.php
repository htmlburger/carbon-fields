<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Internal boolean (always true) condition
 */
class Boolean_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		return $this->compare(
			true,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}