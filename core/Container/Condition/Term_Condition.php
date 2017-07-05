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
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$term_id = $environment['term_id'];
		$value = $this->wp_toolset->get_term_by_descriptor( $this->get_value() );

		return $this->compare(
			$term_id,
			$this->get_comparison_operator(),
			$value->term_id
		);
	}
}