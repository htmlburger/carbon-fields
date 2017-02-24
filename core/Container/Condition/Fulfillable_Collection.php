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
	 * Array of supported fulfillable comparisons
	 * 
	 * @var array<string>
	 */
	protected $supported_fulfillable_comparisons = array( 'AND', 'OR' );

	/**
	 * Array of allowed condition types which propagate to child collections
	 * 
	 * @var array<string>
	 */
	protected $allowed_condition_types = array();

	/**
	 * Get condition type identifier for use in the IoC container
	 * 
	 * @param  string $condition_type
	 * @return string
	 */
	protected function get_condition_type_identifier( $condition_type ) {
		$identifier = 'container_condition_type_' . $condition_type;
		return $identifier;
	}

	/**
	 * Get array of allowed condition types
	 * 
	 * @return array<string>
	 */
	public function get_allowed_condition_types() {
		return $this->allowed_condition_types;
	}

	/**
	 * Set array of allowed condition types
	 * 
	 * @param  array<string>          $allowed_condition_types
	 * @return Fulfillable_Collection $this
	 */
	public function set_allowed_condition_types( $allowed_condition_types ) {
		// Verify all allowed condition types exist
		foreach ( $allowed_condition_types as $condition_type ) {
			$identifier = $this->get_condition_type_identifier( $condition_type );
			if ( ! App::has( $identifier ) ) {
				Incorrect_Syntax_Exception::raise( 'Unknown container condition type allowed: ' . $condition_type );
			}
		}
		
		$this->allowed_condition_types = $allowed_condition_types;
		$this->propagate_allowed_condition_types();
		return $this;
	}

	/**
	 * Propagate allowed condition types to child collections
	 */
	public function propagate_allowed_condition_types() {
		$allowed_condition_types = $this->get_allowed_condition_types();
		foreach ( $this->fulfillables as $fulfillable ) {
			if ( is_a( $fulfillable, get_class() ) ) {
				$fulfillable->set_allowed_condition_types( $allowed_condition_types );
			}
		}
	}
	
	/**
	 * Shorthand for when with AND comparison
	 * 
	 * @param  string|callable        $condition_type
	 * @param  string                 $comparison_operator Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @return Fulfillable_Collection $this
	 */
	public function and_when( $condition_type, $comparison_operator = '=', $value = null ) {
		$this->when( $condition_type, $comparison_operator, $value, 'AND' );
		return $this;
	}
	
	/**
	 * Shorthand for when with OR comparison
	 * 
	 * @param  string|callable        $condition_type
	 * @param  string                 $comparison_operator Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @return Fulfillable_Collection $this
	 */
	public function or_when( $condition_type, $comparison_operator = '=', $value = null ) {
		$this->when( $condition_type, $comparison_operator, $value, 'OR' );
		return $this;
	}

	/**
	 * Add fulfillable with optional comparison_operator
	 * This method assumes there is no fulfillable that can be compared with literal NULL
	 * 
	 * @param  string|callable        $condition_type
	 * @param  string                 $comparison_operator Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	public function when( $condition_type, $comparison_operator = '=', $value = null, $fulfillable_comparison = 'AND' ) {
		if ( is_callable( $condition_type ) ) {
			return $this->whenCollection( $condition_type, $fulfillable_comparison );
		}

		if ( ! in_array( $condition_type, $this->allowed_condition_types ) ) {
			Incorrect_Syntax_Exception::raise( 'Unsupported container condition used: ' . $condition_type );
		}

		if ( $value === null ) {
			// We do not have a supplied comparison_operator so we default to "="
			$value = $comparison_operator;
			$comparison_operator = '=';
		}

		$ioc_identifier = $this->get_condition_type_identifier( $condition_type );
		$condition = App::resolve( $ioc_identifier );
		$condition->set_comparison_operator( $comparison_operator );
		$condition->set_value( $value );
		$this->add_fulfillable( $condition, $fulfillable_comparison );
		return $this;
	}

	/**
	 * Add a Fulfillable_Collection for nested logic
	 *
	 * @param  callable               $collection_callable
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	protected function whenCollection( $collection_callable, $fulfillable_comparison) {
		$collection = new static();
		$collection->set_allowed_condition_types( $this->get_allowed_condition_types() );
		$collection_callable( $collection );
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
		$fulfilled = true; // return true for empty collections

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