<?php

namespace Carbon_Fields\Container\Condition\Comparer;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Any_Contain_Comparer extends Comparer {

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
			Incorrect_Syntax_Exception::raise( 'Supplied comparison value is not an array: ' . print_r( $b, true ) );
			return false;
		}

		$intersection = array_intersect( $a, $b );

		switch ( $comparison_operator ) {
			case 'IN':
				return ! empty( $intersection );
			case 'NOT IN':
				return empty( $intersection );
		}

		return false;
	}
}
