<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Fulfillable_Collection implements Fulfillable {

	/**
	 * Array of fulfillables in this collection
	 * 
	 * @var array<array>
	 */
	protected $fulfillables = array();

	/**
	 * Supported fulfillable comparisons
	 * 
	 * @var array<string>
	 */
	protected $supported_fulfillable_comparisons = array( 'AND', 'OR' );
	
	/**
	 * Shorthand for when with AND comparison
	 * 
	 * @param  string|Closure         $condition_type
	 * @param  stirng                 $comparison_sign Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @return Fulfillable_Collection $this
	 */
	public function and_when( $condition_type, $comparison_sign = '=', $value = null ) {
		$this->when( $condition_type, $comparison_sign, $value, 'AND' );
		return $this;
	}
	
	/**
	 * Shorthand for when with OR comparison
	 * 
	 * @param  string|Closure         $condition_type
	 * @param  stirng                 $comparison_sign Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @return Fulfillable_Collection $this
	 */
	public function or_when( $condition_type, $comparison_sign = '=', $value = null ) {
		$this->when( $condition_type, $comparison_sign, $value, 'OR' );
		return $this;
	}

	/**
	 * Add fulfillable with optional comparison_sign
	 * This method assumes there is no fulfillable that can be compared with literal NULL
	 * 
	 * @param  string|Closure         $condition_type
	 * @param  stirng                 $comparison_sign Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	public function when( $condition_type, $comparison_sign = '=', $value = null, $fulfillable_comparison = 'AND' ) {
		if ( $condition_type instanceof \Closure ) {
			return $this->whenCollection( $condition_type, $fulfillable_comparison );
		}

		if ( $value === null ) {
			// We do not have a supplied comparison_sign so we default to "="
			$value = $comparison_sign;
			$comparison_sign = '=';
		}

		try {
			$ioc_identifier = 'container_condition_type_' . $condition_type;
			$condition = App::resolve( $ioc_identifier );
			$condition->set_value( $value );
			$condition->get_comparer()->set_comparison_sign( $comparison_sign );
			$this->add_fulfillable( $condition, $fulfillable_comparison );
		} catch ( \InvalidArgumentException $e ) {
			Incorrect_Syntax_Exception::raise( 'Unknown container condition used: ' . $condition_type );
		}
		return $this;
	}

	/**
	 * Add a Fulfillable_Collection for nested logic
	 *
	 * @param  Closure                $collection_closure
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	protected function whenCollection( \Closure $collection_closure, $fulfillable_comparison) {
		$collection = new static();
		$collection_closure( $collection );
		$this->add_fulfillable( $collection, $fulfillable_comparison );
		return $this;
	}

	/**
	 * Add fulfillable to collection
	 * 
	 * @param Fulfillable $fulfillable
	 * @param string      $fulfillable_comparison See static::$supported_fulfillable_comparisons
	 */
	protected function add_fulfillable( Fulfillable $fulfillable, $fulfillable_comparison ) {
		if ( ! in_array( $fulfillable_comparison, $this->supported_fulfillable_comparisons ) ) {
			Incorrect_Syntax_Exception::raise( 'Invalid fulfillable comparison passed: ' . $fulfillable_comparison );
		}

		$this->fulfillables[] = array(
			'fulfillable' => $fulfillable,
			'fulfillable_comparison' => $fulfillable_comparison,
		);
	}

	/**
	 * Remove fulfillable from collection
	 * 
	 * @param Fulfillable $fulfillable
	 * @return bool Fulfillable found and removed
	 */
	protected function remove_fulfillable( Fulfillable $fulfillable ) {
		foreach ( $this->fulfillables as $index => $fulfillable_tuple ) {
			if ( $fulfillable_tuple['fulfillable'] === $fulfillable ) {
				$fulfillables_copy = $this->fulfillables; // introduce a copy array to highlight array_splice mutation
				array_splice( $fulfillables_copy, $index, 1 );
				$this->fulfillables = array_values( $fulfillables_copy ); // make sure our array is indexed cleanly
				return true;
			}
		}
		return false;
	}
	
	/**
	 * Check if all fulfillables are fulfilled taking into account their fulfillable comparison
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$fulfilled = true;
		foreach ( $this->fulfillables as $i => $fulfillable_tuple ) {
			$fulfillable = $fulfillable_tuple['fulfillable'];
			$fulfillable_comparison = $fulfillable_tuple['fulfillable_comparison'];

			if ( $i === 0 ) {
				// Ignore first comparison as we need a base fulfillment value
				$fulfilled = $fulfillable->is_fulfilled( $environment );
				continue;
			}

			// minor optimization - avoid unnecessary AND check if $fulfilled is currently false
			// false && whatever is always false
			if ( $fulfillable_comparison === 'AND' && $fulfilled ) {
				$fulfilled = $fulfillable->is_fulfilled( $environment );
			}

			// minor optimization - avoid unnecessary OR check if $fulfilled is currently true
			// true || whatever is always true
			if ( $fulfillable_comparison === 'OR' && ! $fulfilled ) {
				$fulfilled = $fulfillable->is_fulfilled( $environment );
			}
		}
		return $fulfilled;
	}
}