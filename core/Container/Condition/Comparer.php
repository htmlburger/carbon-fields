<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

abstract class Comparer {

	/**
	 * Supported comparison signs
	 *
	 * @var array<string>
	 */
	protected $supported_comparison_signs = array();

	/**
	 * Comparison string to use
	 * 
	 * @var string
	 */
	protected $comparison_sign = '';

	/**
	 * Get comparison sign used
	 * 
	 * @return string
	 */
	public function get_comparison_sign() {
		return $this->comparison_sign;
	}

	/**
	 * Set comparison sign
	 * 
	 * @param string $comparison_sign
	 * @return Comparer $this
	 */
	public function set_comparison_sign( $comparison_sign ) {
		if ( ! in_array( $comparison_sign, $this->supported_comparison_signs ) ) {
			Incorrect_Syntax_Exception::raise( 'Unsupported comparison sign used: ' . $comparison_sign );
		}
		$this->comparison_sign = $comparison_sign;
		return $this;
	}

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param mixed $a
	 * @param mixed $b
	 * @return bool
	 */
	abstract public function compare( $a, $b );
}