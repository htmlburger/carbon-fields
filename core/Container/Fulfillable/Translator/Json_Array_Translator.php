<?php

namespace Carbon_Fields\Container\Fulfillable\Translator;

use Carbon_Fields\Container\Fulfillable\Fulfillable_Collection;

class Json_Array_Translator extends Array_Translator {

	/**
	 * Translate a Fulfillable_Collection
	 *
	 * @param  Fulfillable_Collection $fulfillable_collection
	 * @return mixed
	 */
	protected function fulfillable_collection_to_foreign( Fulfillable_Collection $fulfillable_collection ) {
		$collection = parent::fulfillable_collection_to_foreign( $fulfillable_collection );
		$collection = $this->wrap_conditions( $collection );

		return $collection;
	}

	/**
	 * Make conditions friendly for frontend.
	 *
	 * @param  array $collection
	 * @return array
	 */
	protected function wrap_conditions( $collection ) {
		$conditions = array();

		foreach ( $collection as $key => $value ) {
			if ( $key === 'relation' ) {
				continue;
			}

			if ( isset( $value['relation'] ) ) {
				$conditions[] = $this->wrap_conditions( $value );
			} else {
				$conditions[] = $value;
			}
		}

		return array(
			'relation' => $collection['relation'],
			'conditions' => $conditions,
		);
	}
}
