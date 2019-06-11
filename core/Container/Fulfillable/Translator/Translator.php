<?php

namespace Carbon_Fields\Container\Fulfillable\Translator;

use Carbon_Fields\Container\Fulfillable\Fulfillable;
use Carbon_Fields\Container\Fulfillable\Fulfillable_Collection;
use Carbon_Fields\Container\Condition\Condition;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

abstract class Translator {

	/**
	 * Translate a Fulfillable to foreign data
	 *
	 * @param  Fulfillable $fulfillable
	 * @return mixed
	 */
	public function fulfillable_to_foreign( Fulfillable $fulfillable ) {
		if ( $fulfillable instanceof Condition ) {
			return $this->condition_to_foreign( $fulfillable );
		}

		if ( $fulfillable instanceof Fulfillable_Collection ) {
			return $this->fulfillable_collection_to_foreign( $fulfillable );
		}

		Incorrect_Syntax_Exception::raise( 'Attempted to translate an unsupported object: ' . print_r( $fulfillable, true ) );
		return null;
	}

	/**
	 * Translate a Condition to foreign data
	 *
	 * @param  Condition $condition
	 * @return mixed
	 */
	abstract protected function condition_to_foreign( Condition $condition );

	/**
	 * Translate a Fulfillable_Collection to foreign data
	 *
	 * @param  Fulfillable_Collection $fulfillable_collection
	 * @return mixed
	 */
	abstract protected function fulfillable_collection_to_foreign( Fulfillable_Collection $fulfillable_collection );

	/**
	 * Translate foreign data to a Fulfillable
	 *
	 * @param  mixed       $foreign
	 * @return Fulfillable
	 */
	abstract public function foreign_to_fulfillable( $foreign );
}
