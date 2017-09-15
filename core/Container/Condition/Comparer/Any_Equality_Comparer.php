<?php

namespace Carbon_Fields\Container\Condition\Comparer;

class Any_Equality_Comparer extends Comparer {

	/**
	 * Supported comparison signs
	 *
	 * @var array<string>
	 */
	protected $supported_comparison_operators = array( '=', '!=' );

	/**
	 * Check if comparison is true for $a and $b
	 *
	 * @param mixed  $a
	 * @param string $comparison_operator
	 * @param mixed  $b
	 * @return bool
	 */
	public function is_correct( $a, $comparison_operator, $b ) {
		switch ( $comparison_operator ) {
			case '=':
				return in_array( $b, $a );
			case '!=':
				return ! in_array( $b, $a );
		}
		return false;
	}
}