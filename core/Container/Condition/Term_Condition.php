<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Toolset\WP_Toolset;

/**
 * Tests for a specific term
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
 *     Operators "REGEX" and CUSTOM" are passed the term_id
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
	 * 
	 * @param WP_Toolset $wp_toolset
	 */
	public function __construct( WP_Toolset $wp_toolset ) {
		$this->wp_toolset = $wp_toolset;
		$this->set_comparers( array( 
			App::resolve( 'container_condition_comparer_type_equality' ),
			App::resolve( 'container_condition_comparer_type_contain' ),
			App::resolve( 'container_condition_comparer_type_regex' ),
			App::resolve( 'container_condition_comparer_type_custom' ),
		) );
	}
	
	/**
	 * Check if a post has a term
	 *
	 * @param  integer $post_id
	 * @param  integer $term_id
	 * @param  string  $term_taxonomy
	 * @return boolean
	 */
	protected function post_has_term( $post_id, $raw_term ) {
		$term = $this->wp_toolset->get_term_by_descriptor( $raw_term );
		return has_term( intval( $term->term_id ), $term->taxonomy, intval( $post_id ) );
	}
	
	/**
	 * Check if a post has any of the supplied terms
	 *
	 * @param  integer       $post_id
	 * @param  array<object> $term_id
	 * @return boolean
	 */
	protected function post_has_any_term( $post_id, $raw_terms ) {
		foreach ( $raw_terms as $raw_term ) {
			if ( $this->post_has_term( $post_id, $raw_term ) ) {
				return true;
			}
		}
		return false;
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

		return $this->first_supported_comparer_is_correct(
			$term_id,
			$this->get_comparison_operator(),
			$value->term_id
		);
	}
}