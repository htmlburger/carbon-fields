<?php

namespace Carbon_Fields\Container\Fulfillable;

use Carbon_Fields\Container\Condition\Factory;
use Carbon_Fields\Container\Fulfillable\Translator\Array_Translator;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Fulfillable_Collection implements Fulfillable {

	/**
	 * Condition factory used to translated condition types
	 *
	 * @var Factory
	 */
	protected $condition_factory;

	/**
	 * Array translator used to support array representations of fulfillables
	 *
	 * @var Array_Translator
	 */
	protected $array_translator;

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
	protected $condition_type_list = array();

	/**
	 * Whether the condition type list is a whitelist or a blacklist
	 *
	 * @var bool
	 */
	protected $condition_type_list_whitelist = false;

	/**
	 * Constructor
	 *
	 * @param Factory          $condition_factory
	 * @param Array_Translator $array_translator
	 */
	public function __construct( Factory $condition_factory, Array_Translator $array_translator ) {
		$this->condition_factory = $condition_factory;
		$this->array_translator = $array_translator;
	}

	/**
	 * Create a new collection
	 *
	 * @return Fulfillable_Collection
	 */
	protected function create_collection() {
		return \Carbon_Fields\Carbon_Fields::resolve( 'container_condition_fulfillable_collection' );
	}

	/**
	 * Get an array of the fulfillables in this collection
	 *
	 * @return array<Fulfillable>
	 */
	public function get_fulfillables() {
		return $this->fulfillables;
	}

	/**
	 * Get array of allowed condition types
	 *
	 * @return array<string>
	 */
	public function get_condition_type_list() {
		return $this->condition_type_list;
	}

	/**
	 * Set array of allowed condition types
	 * WARNING: this will NOT remove already added conditions which are no longer allowed
	 *
	 * @param  array<string>          $condition_type_list
	 * @param  bool                   $whitelist
	 * @return Fulfillable_Collection $this
	 */
	public function set_condition_type_list( $condition_type_list, $whitelist ) {
		$this->condition_type_list_whitelist = $whitelist;
		$this->condition_type_list = $condition_type_list;
		$this->propagate_condition_type_list();
		return $this;
	}

	/**
	 * Check if conditions types list is a whitelist
	 *
	 * @return bool
	 */
	public function is_condition_type_list_whitelist() {
		return $this->condition_type_list_whitelist;
	}

	/**
	 * Check if condition type is allowed
	 *
	 * @param  string $condition_type
	 * @return bool
	 */
	public function is_condition_type_allowed( $condition_type ) {
		$in_list = in_array( $condition_type, $this->get_condition_type_list() );
		if ( $this->is_condition_type_list_whitelist() ) {
			return $in_list;
		}
		return ! $in_list;
	}

	/**
	 * Propagate allowed condition types to child collections
	 */
	protected function propagate_condition_type_list() {
		$condition_type_list = $this->get_condition_type_list();
		$fulfillables = $this->get_fulfillables();
		foreach ( $fulfillables as $fulfillable ) {
			if ( is_a( $fulfillable['fulfillable'], get_class() ) ) {
				$fulfillable->set_condition_type_list( $condition_type_list, $this->is_condition_type_list_whitelist() );
			}
		}
	}

	/**
	 * Shorthand for where with OR comparison
	 *
	 * @param  string|array|callable  $condition_type
	 * @param  string                 $comparison_operator Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @return Fulfillable_Collection $this
	 */
	public function or_where( $condition_type, $comparison_operator = '=', $value = null ) {
		$this->where( $condition_type, $comparison_operator, $value, 'OR' );
		return $this;
	}

	/**
	 * Add fulfillable with optional comparison_operator
	 * This method assumes there is no fulfillable that can be compared with literal NULL
	 *
	 * @param  string|array|callable  $condition_type
	 * @param  string                 $comparison_operator Can be skipped. Defaults to "="
	 * @param  mixed                  $value
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	public function where( $condition_type, $comparison_operator = '=', $value = null, $fulfillable_comparison = 'AND' ) {
		$args = func_get_args();
		if ( is_array( $condition_type ) ) {
			return $this->where_array( $condition_type, $fulfillable_comparison );
		}

		if ( $condition_type instanceof \Closure ) {
			return $this->where_collection( $condition_type, $fulfillable_comparison );
		}

		if ( ! $this->is_condition_type_allowed( $condition_type ) ) {
			Incorrect_Syntax_Exception::raise( 'Unsupported container condition used: ' . $condition_type );
			return $this;
		}

		if ( $value === null ) {
			// We do not have a supplied comparison_operator so we default to "="
			$value = $comparison_operator;
			$comparison_operator = '=';
		}

		$condition = $this->condition_factory->make( $condition_type );
		$condition->set_comparison_operator( $comparison_operator );
		$condition->set_value( $value );
		$this->add_fulfillable( $condition, $fulfillable_comparison );
		return $this;
	}

	/**
	 * Add a Fulfillable through array representation
	 *
	 * @param  array                  $fulfillable_as_array
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	protected function where_array( $fulfillable_as_array, $fulfillable_comparison) {
		$fulfillable = $this->array_translator->foreign_to_fulfillable( $fulfillable_as_array );
		$this->add_fulfillable( $fulfillable, $fulfillable_comparison );
		return $this;
	}

	/**
	 * Add a Fulfillable_Collection for nested logic
	 *
	 * @param  callable               $collection_callable
	 * @param  string                 $fulfillable_comparison
	 * @return Fulfillable_Collection $this
	 */
	protected function where_collection( $collection_callable, $fulfillable_comparison) {
		$collection = $this->create_collection();
		$collection->set_condition_type_list( $this->get_condition_type_list(), $this->is_condition_type_list_whitelist() );
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
	public function add_fulfillable( Fulfillable $fulfillable, $fulfillable_comparison ) {
		if ( ! in_array( $fulfillable_comparison, $this->supported_fulfillable_comparisons ) ) {
			Incorrect_Syntax_Exception::raise( 'Invalid fulfillable comparison passed: ' . $fulfillable_comparison );
			return;
		}

		$this->fulfillables[] = array(
			'fulfillable_comparison' => $fulfillable_comparison,
			'fulfillable' => $fulfillable,
		);
	}

	/**
	 * Remove fulfillable from collection
	 *
	 * @param Fulfillable $fulfillable
	 * @return bool Fulfillable found and removed
	 */
	public function remove_fulfillable( Fulfillable $fulfillable ) {
		$fulfillables = $this->get_fulfillables();
		foreach ( $fulfillables as $index => $fulfillable_tuple ) {
			if ( $fulfillable_tuple['fulfillable'] === $fulfillable ) {
				$fulfillables_copy = $fulfillables; // introduce a copy array to highlight array_splice mutation
				array_splice( $fulfillables_copy, $index, 1 );
				$this->fulfillables = array_values( $fulfillables_copy ); // make sure our array is indexed cleanly
				return true;
			}
		}
		return false;
	}

	/**
	 * Get a copy of the collection with conditions not in the whitelist filtered out
	 *
	 * @param  array<string>          $condition_whitelist
	 * @return Fulfillable_Collection
	 */
	public function filter( $condition_whitelist ) {
		$fulfillables = $this->get_fulfillables();

		$collection = $this->create_collection();
		foreach ( $fulfillables as $fulfillable_tuple ) {
			$fulfillable = $fulfillable_tuple['fulfillable'];
			$fulfillable_comparison = $fulfillable_tuple['fulfillable_comparison'];

			if ( is_a( $fulfillable, get_class() ) ) {
				$filtered_collection = $fulfillable->filter( $condition_whitelist );
				$filtered_collection_fulfillables = $filtered_collection->get_fulfillables();
				if ( empty( $filtered_collection_fulfillables ) ) {
					continue; // skip empty collections to reduce clutter
				}
				$collection->add_fulfillable( $filtered_collection, $fulfillable_comparison );
			} else {
				$type = $this->condition_factory->get_type( get_class( $fulfillable ) );
				if ( ! in_array( $type, $condition_whitelist ) ) {
					continue;
				}

				$fulfillable_clone = clone $fulfillable;
				$collection->add_fulfillable( $fulfillable_clone, $fulfillable_comparison );
			}
		}
		return $collection;
	}

	/**
	 * Get a copy of the collection with passed conditions evaluated into boolean conditions
	 * Useful when evaluating only certain condition types but preserving the rest
	 * or when passing dynamic conditions to the front-end
	 *
	 * @param  array<string>          $condition_types
	 * @param  array|boolean          $environment Environment array or a boolean value to force on conditions
	 * @param  array<string>          $comparison_operators Array of comparison operators to evaluate regardless of condition type
	 * @param  boolean                $condition_types_blacklist Whether the condition list should act as a blacklist
	 * @param  boolean                $comparison_operators_blacklist Whether the comparison operators list should act as a blacklist
	 * @return Fulfillable_Collection
	 */
	public function evaluate( $condition_types, $environment, $comparison_operators = array(), $condition_types_blacklist = false, $comparison_operators_blacklist = false ) {
		$fulfillables = $this->get_fulfillables();

		$collection = $this->create_collection();
		foreach ( $fulfillables as $fulfillable_tuple ) {
			$fulfillable = $fulfillable_tuple['fulfillable'];
			$fulfillable_comparison = $fulfillable_tuple['fulfillable_comparison'];

			if ( is_a( $fulfillable, get_class() ) ) {
				$evaluated_collection = $fulfillable->evaluate( $condition_types, $environment, $comparison_operators, $condition_types_blacklist, $comparison_operators_blacklist );
				$collection->add_fulfillable( $evaluated_collection, $fulfillable_comparison );
			} else {
				$type = $this->condition_factory->get_type( get_class( $fulfillable ) );
				$comparison_operator = $fulfillable->get_comparison_operator();

				$condition_type_match = in_array( $type, $condition_types );
				if ( $condition_types_blacklist ) {
					$condition_type_match = ! $condition_type_match;
				}

				$comparison_operator_match = in_array( $comparison_operator, $comparison_operators );
				if ( $comparison_operators_blacklist ) {
					$comparison_operator_match = ! $comparison_operator_match;
				}

				if ( $condition_type_match || $comparison_operator_match ) {
					$boolean_condition = $this->condition_factory->make( 'boolean' );
					$boolean_condition->set_comparison_operator( '=' );

					$value = is_bool( $environment ) ? $environment : $fulfillable->is_fulfilled( $environment );
					$boolean_condition->set_value( $value );
					$collection->add_fulfillable( $boolean_condition, $fulfillable_comparison );
				} else {
					$collection->add_fulfillable( clone $fulfillable, $fulfillable_comparison );
				}
			}
		}
		return $collection;
	}

	/**
	 * Check if all fulfillables are fulfilled taking into account their fulfillable comparison
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$fulfilled = true; // return true for empty collections
		$fulfillables = $this->get_fulfillables();

		foreach ( $fulfillables as $i => $fulfillable_tuple ) {
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