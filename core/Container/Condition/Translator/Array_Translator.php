<?php

namespace Carbon_Fields\Container\Condition\Translator;

use Carbon_Fields\Container\Condition\Fulfillable;
use Carbon_Fields\Container\Condition\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Condition;

class Array_Translator extends Translator {

	/**
	 * Translate a Condition
	 * 
	 * @param  Condition $condition
	 * @return mixed
	 */
	public function translate_condition( Condition $condition ) {
		return array(
			'type' => $condition->get_type(),
			'compare' => $condition->get_comparison_operator(),
			'value' => $condition->get_value(),
		);
	}

	/**
	 * Translate a Fulfillable_Collection
	 * 
	 * @param  Fulfillable_Collection $fulfillable_collection
	 * @return mixed
	 */
	public function translate_fulfillable_collection( Fulfillable_Collection $fulfillable_collection ) {
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

			$relations[ $comparison ][] = $this->translate( $fulfillable );
		}

		if ( ! empty( $relations['OR'] ) ) {
			$collection['relation'] = 'OR';
		}
		foreach ( $relations as $relation => $conditions ) {
			$collection[] = array( 'relation' => $relation ) + $conditions;
		}

		if ( count( $relations ) === 1 ) {
			$collection = $collection[0]; // simplify by reducing with 1 level
		}

		return array_filter( $collection );
	}
}
