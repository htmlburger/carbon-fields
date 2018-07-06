<?php

namespace Carbon_Fields\Container\Condition\Comparer;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Contain_Comparer extends Comparer {

	/**
	 * Supported comparison signs
	 *
	 * @var array<string>
	 */
	protected $supported_comparison_operators = array( 'IN', 'NOT IN' );

	/**
	 * Check if comparison is true for $a and $b
	 *
	 * @param mixed  $a
	 * @param string $comparison_operator
	 * @param mixed  $b
	 * @return bool
	 */
	public function is_correct( $a, $comparison_operator, $b ) {
		if ( ! is_array( $b ) ) {
			// @codingStandardsIgnoreStart
			Incorrect_Syntax_Exception::raise( 'Supplied comparison value is not an array: ' . print_r( $b, true ) );
			// @codingStandardsIgnoreEnd
			return false;
		}

		switch ( $comparison_operator ) {
			case 'IN':
				return in_array( $a, $b, true );
			case 'NOT IN':
				return ! in_array( $a, $b, true );
		}
		return false;
	}
}