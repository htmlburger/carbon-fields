<?php

namespace Carbon_Fields\Container\Condition\Comparer;

abstract class Comparer {

	/**
	 * Supported comparison signs
	 *
	 * @var array<string>
	 */
	protected $supported_comparison_operators = array();

	/**
	 * Check if comparer supports the specified comparison sign
	 *
	 * @param string $comparison_operator
	 * @return bool
	 */
	public function supports_comparison_operator( $comparison_operator ) {
		return in_array( $comparison_operator, $this->supported_comparison_operators );
	}

	/**
	 * Check if comparison is true for $a and $b
	 *
	 * @param mixed  $a
	 * @param string $comparison_operator
	 * @param mixed  $b
	 * @return bool
	 */
	abstract public function is_correct( $a, $comparison_operator, $b );
}