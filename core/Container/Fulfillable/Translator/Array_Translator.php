<?php

namespace Carbon_Fields\Container\Fulfillable\Translator;

use Carbon_Fields\Container\Condition\Factory;
use Carbon_Fields\Container\Fulfillable\Fulfillable;
use Carbon_Fields\Container\Fulfillable\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Condition;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

class Array_Translator extends Translator {

	/**
	 * Condition factory used to translated condition types
	 *
	 * @var Factory
	 */
	protected $condition_factory;

	/**
	 * Constructor
	 *
	 * @param Factory $condition_factory
	 */
	public function __construct( Factory $condition_factory ) {
		$this->condition_factory = $condition_factory;
	}

	/**
	 * {@inheritDoc}
	 */
	protected function condition_to_foreign( Condition $condition ) {
		return array(
			'type' => $this->condition_factory->get_type( get_class( $condition ) ),
			'compare' => $condition->get_comparison_operator(),
			'value' => $condition->get_value(),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function fulfillable_collection_to_foreign( Fulfillable_Collection $fulfillable_collection ) {
		$fulfillables = $fulfillable_collection->get_fulfillables();
		if ( empty( $fulfillables ) ) {
			return array();
		}

		$collection = array(
			'relation' => 'AND',
		);

		$relations = array();
		foreach ( $fulfillables as $fulfillable_tuple ) {
			$comparison = $fulfillable_tuple['fulfillable_comparison'];
			$fulfillable = $fulfillable_tuple['fulfillable'];

			if ( ! isset( $relations[ $comparison ] ) ) {
				$relations[ $comparison ] = array();
			}

			$relations[ $comparison ][] = $this->fulfillable_to_foreign( $fulfillable );
		}

		if ( ! empty( $relations['OR'] ) ) {
			$collection['relation'] = 'OR';
		}
		foreach ( $relations as $relation => $fulfillables ) {
			$collection[] = array( 'relation' => $relation ) + $fulfillables;
		}

		if ( count( $relations ) === 1 ) {
			// we only have one relation group so we simplify the fulfillables with 1 level
			$collection = $collection[0];
		}

		return array_filter( $collection );
	}

	/**
	 * {@inheritDoc}
	 */
	public function foreign_to_fulfillable( $foreign ) {
		if ( ! is_array( $foreign ) ) {
			Incorrect_Syntax_Exception::raise( 'Invalid data passed to array condition translator: ' . print_r( $foreign, true ) );
			return null;
		}

		if ( isset( $foreign['type'] ) ) {
			return $this->foreign_to_native_condition( $foreign );
		}

		return $this->foreign_to_native_fulfillable_collection( $foreign );
	}

	/**
	 * Translate a Condition
	 *
	 * @param  array     $foreign
	 * @return Condition
	 */
	protected function foreign_to_native_condition( $foreign ) {
		$condition_type = $foreign['type'];
		$comparison_operator = isset( $foreign['compare'] ) ? $foreign['compare'] : '=';
		$value = isset( $foreign['value'] ) ? $foreign['value'] : '';

		$condition = $this->condition_factory->make( $condition_type );
		$condition->set_comparison_operator( $comparison_operator );
		$condition->set_value( $value );
		return $condition;
	}

	/**
	 * Translate a Fulfillable_Collection
	 *
	 * @param  array                  $foreign
	 * @return Fulfillable_Collection
	 */
	protected function foreign_to_native_fulfillable_collection( $foreign ) {
		$fulfillable_comparison = isset( $foreign['relation'] ) ? $foreign['relation'] : 'AND';
		$collection = \Carbon_Fields\Carbon_Fields::resolve( 'container_condition_fulfillable_collection' );
		foreach ( $foreign as $key => $value ) {
			if ( $key === 'relation' ) {
				continue; // ignore the relation key - we are only interested in condition definitions
			}
			$collection->add_fulfillable( $this->foreign_to_fulfillable( $value ), $fulfillable_comparison );
		}
		return $collection;
	}
}
