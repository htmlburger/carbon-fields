<?php

namespace Carbon_Fields\Container\Condition;

abstract class Condition implements Fulfillable {

	/**
	 * Condition value to check
	 * 
	 * @var mixed
	 */
	protected $value;

	/**
	 * Comparer to use for condition checking
	 * 
	 * @var Comparer
	 */
	protected $comparer;
	
	/**
	 * Get the condition value
	 * 
	 * @return mixed
	 */
	public function get_value() {
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
	 * Get the condition comparer
	 * 
	 * @return Comparer
	 */
	public function get_comparer() {
		return $this->comparer;
	}
	
	/**
	 * Set the condition comparer
	 *
	 * @param Comparer $comparer
	 * @return Condition $this
	 */
	public function set_comparer( $comparer ) {
		$this->comparer = $comparer;
		return $this;
	}
}