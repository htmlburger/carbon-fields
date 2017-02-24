<?php

namespace Carbon_Fields\Container\Condition\Translator;

use Carbon_Fields\Container\Condition\Fulfillable;
use Carbon_Fields\Container\Condition\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Condition;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

abstract class Translator {

	/**
	 * Translate a Fulfillable
	 * 
	 * @param  Fulfillable $fulfillable
	 * @return mixed
	 */
	public function translate( Fulfillable $fulfillable ) {
		if ( is_a( $fulfillable, 'Carbon_Fields\\Container\\Condition\\Condition' ) ) {
			return $this->translate_condition( $fulfillable );
		}

		if ( is_a( $fulfillable, 'Carbon_Fields\\Container\\Condition\\Fulfillable_Collection' ) ) {
			return $this->translate_fulfillable_collection( $fulfillable );
		}

		Incorrect_Syntax_Exception::raise( 'Attempted to translate an unsupported object: ' . print_r( $fulfillable, true ) );
	}

	/**
	 * Translate a Condition
	 * 
	 * @param  Condition $condition
	 * @return mixed
	 */
	abstract public function translate_condition( Condition $condition );

	/**
	 * Translate a Fulfillable_Collection
	 * 
	 * @param  Fulfillable_Collection $fulfillable_collection
	 * @return mixed
	 */
	abstract public function translate_fulfillable_collection( Fulfillable_Collection $fulfillable_collection );
}
