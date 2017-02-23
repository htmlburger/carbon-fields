<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Scalar_Comparer extends Comparer {

	/**
	 * Supported comparison signs
	 *
	 * @var array<string>
	 */
	protected $supported_comparison_signs = array( '>', '>=', '<', '<=', '=', '!=' );

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param mixed $a
	 * @param mixed $b
	 * @return bool
	 */
	public function compare( $a, $b ) {
		switch ( $this->get_comparison_sign() ) {
			case '>':
				return $a > $b;
			case '>=':
				return $a >= $b;
			case '<':
				return $a < $b;
			case '<=':
				return $a <= $b;
			case '=':
				return $a === $b;
			case '!=':
				return $a !== $b;
		}
		return false;
	}
}