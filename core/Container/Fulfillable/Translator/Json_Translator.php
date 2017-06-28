<?php

namespace Carbon_Fields\Container\Fulfillable\Translator;

use Carbon_Fields\Container\Fulfillable\Fulfillable;

class Json_Translator extends Array_Translator {

	/**
	 * {@inheritDoc}
	 */
	public function fulfillable_to_foreign( Fulfillable $fulfillable ) {
		$result = parent::fulfillable_to_foreign( $fulfillable );
		return $this->foreign_to_json( $result );
	}

	/**
	 * Make conditions friendly for json-based frontend.
	 *
	 * @param  array $foreign
	 * @return array
	 */
	protected function foreign_to_json( $foreign ) {
		if ( empty( $foreign ) ) {
			return array(
				'relation' => 'AND',
				'conditions' => array(),
			);
		}

		if ( ! isset( $foreign['relation'] ) ) {
			return $foreign;
		}

		$conditions = array();

		foreach ( $foreign as $key => $value ) {
			if ( $key === 'relation' ) {
				continue;
			}

			if ( isset( $value['relation'] ) ) {
				$conditions[] = $this->foreign_to_json( $value );
			} else {
				if ( isset( $value['type'] ) ) {
					$conditions[] = $value;
				} else {
					$conditions = array_merge( $conditions, $value );
				}
			}
		}

		return array(
			'relation' => $foreign['relation'],
			'conditions' => $conditions,
		);
	}
}
