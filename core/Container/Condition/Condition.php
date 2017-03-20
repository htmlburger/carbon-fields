<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Container\Fulfillable\Fulfillable;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base container condition class
 */
abstract class Condition implements Fulfillable {

	/**
	 * Condition value to check
	 * 
	 * @var mixed
	 */
	protected $value;

	/**
	 * Comparers to use for condition checking
	 * 
	 * @var array<Comparer>
	 */
	protected $comparers = array();

	/**
	 * Comparison string to use
	 * 
	 * @var string
	 */
	protected $comparison_operator = '';

	/**
	 * Constructor
	 *
	 * @param  array<Carbon_Fields\Container\Condition\Comparer\Comparer> $comparers
	 */
	public function __construct( $comparers ) {
		$this->set_comparers( $comparers );
	}
	
	/**
	 * Get the condition value
	 * 
	 * @return mixed
	 */
	public function get_value() {
		if ( $this->get_comparison_operator() !== 'CUSTOM' && is_callable( $this->value ) ) {
			return call_user_func( $this->value );
		}
		return $this->value;
	}
	
	/**
	 * Set the condition value
	 *
	 * @param mixed $value
	 * @return Condition $this
	 */
	public function set_value( $value ) {
		$this->value = $value;
		return $this;
	}
	
	/**
	 * Get the condition comparers
	 * 
	 * @return array<Comparer>
	 */
	protected function get_comparers() {
		return $this->comparers;
	}
	
	/**
	 * Set the condition comparers
	 *
	 * @param array<Comparer> $comparers
	 * @return Condition $this
	 */
	protected function set_comparers( $comparers ) {
		$this->comparers = $comparers;
		return $this;
	}
	
	/**
	 * Check if any comparer is correct for $a and $b
	 *
	 * @param mixed  $a
	 * @param string $comparison_operator
	 * @param mixed  $b
	 * @return bool
	 */
	protected function first_supported_comparer_is_correct( $a, $comparison_operator, $b ) {
		$comparers = $this->get_comparers();
		foreach ( $comparers as $comparer ) {
			if ( ! $comparer->supports_comparison_operator( $comparison_operator ) ) {
				continue;
			}
			return $comparer->is_correct( $a, $comparison_operator, $b );
		}

		Incorrect_Syntax_Exception::raise( 'Unsupported container condition comparison operator used: ' . $comparison_operator );
		return false;
	}

	/**
	 * Get comparison sign used
	 * 
	 * @return string
	 */
	public function get_comparison_operator() {
		return $this->comparison_operator;
	}

	/**
	 * Set comparison sign
	 * 
	 * @param string $comparison_operator
	 * @return Comparer $this
	 */
	public function set_comparison_operator( $comparison_operator ) {
		$this->comparison_operator = $comparison_operator;
		return $this;
	}
}