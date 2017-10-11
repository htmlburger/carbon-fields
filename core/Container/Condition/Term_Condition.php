<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Toolset\WP_Toolset;

/**
 * Check for a specific term
 *
 * Accepts the following values:
 *     Operators "=" and "!=":
 *         array(
 *             'value'=>...,
 *             'taxonomy'=>...,
 *             ['field'=>...] // "slug", "term_id" etc. - see get_term_by()
 *         )
 *
 *     Operators "IN" and "NOT IN":
 *         array(
 *             array(
 *                 'value'=>...,
 *                 'taxonomy'=>...,
 *                 ['field'=>...]
 *             ),
 *             ...
 *         )
 *
 *     Operator "CUSTOM" is passed the term_id
 */
class Term_Condition extends Condition {

	/**
	 * WP_Toolset to fetch term data with
	 *
	 * @var WP_Toolset
	 */
	protected $wp_toolset;

	/**
	 * Constructor
	 */
	public function __construct( $wp_toolset ) {
		$this->wp_toolset = $wp_toolset;
	}

	/**
	 * Get the condition value
	 *
	 * @return mixed
	 */
	public function get_value() {
		$value = parent::get_value();
		if ( is_array( $value ) ) {
			if ( isset( $value['value'] ) ) {
				$value = $this->wp_toolset->wildcard_term_descriptor_to_full_term_descriptor( $value );
			} else {
				$value = array_map( array( $this->wp_toolset, 'wildcard_term_descriptor_to_full_term_descriptor' ), $value );
			}
		}
		return $value;
	}

	/**
	 * Pluck term id from a full term descriptor
	 *
	 * @param  array   $full_term_descriptor
	 * @return integer
	 */
	protected function get_term_id_from_full_term_descriptor( $full_term_descriptor ) {
		return intval( $full_term_descriptor['term_object']->term_id );
	}

	/**
	 * Pluck term ids from array of full term descriptors
	 *
	 * @param  array          $full_term_descriptors
	 * @return array<integer>
	 */
	protected function get_term_ids_from_full_term_descriptors( $full_term_descriptors ) {
		return array_map( array( $this, 'get_term_id_from_full_term_descriptor' ), $full_term_descriptors );
	}

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$term_id = $environment['term_id'];

		switch ( $this->get_comparison_operator() ) {
			case '=':
				$value_term_id = $this->get_term_id_from_full_term_descriptor( $this->get_value() );
				return $term_id == $value_term_id;
				break;
			case '!=':
				$value_term_id = $this->get_term_id_from_full_term_descriptor( $this->get_value() );
				return $term_id != $value_term_id;
				break;
			case 'IN':
				$value_term_ids = $this->get_term_ids_from_full_term_descriptors( $this->get_value() );
				return in_array( $term_id, $value_term_ids );
				break;
			case 'NOT IN':
				$value_term_ids = $this->get_term_ids_from_full_term_descriptors( $this->get_value() );
				return ! in_array( $term_id, $value_term_ids );
				break;
		}

		return $this->compare(
			$term_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}
