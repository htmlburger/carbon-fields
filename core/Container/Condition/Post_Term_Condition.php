<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\Toolset\WP_Toolset;

/**
 * Check if a post has a specific term
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
 *     Operator "CUSTOM" is passed the post id
 */
class Post_Term_Condition extends Term_Condition {

	/**
	 * Check if a post has a term
	 *
	 * @param  integer $post_id
	 * @param  array   $full_term_desriptor
	 * @return boolean
	 */
	protected function post_has_term( $post_id, $full_term_desriptor ) {
		$term = $full_term_desriptor['term_object'];
		return has_term( intval( $term->term_id ), $term->taxonomy, intval( $post_id ) );
	}

	/**
	 * Check if a post has any of the supplied terms
	 *
	 * @param  integer      $post_id
	 * @param  array<array> $full_term_desriptors
	 * @return boolean
	 */
	protected function post_has_any_term( $post_id, $full_term_desriptors ) {
		foreach ( $full_term_desriptors as $full_term_desriptor ) {
			if ( $this->post_has_term( $post_id, $full_term_desriptor ) ) {
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
		$post_id = $environment['post_id'];

		switch ( $this->get_comparison_operator() ) {
			case '=':
				return $this->post_has_term( $post_id, $this->get_value() );
				break;
			case '!=':
				return ! $this->post_has_term( $post_id, $this->get_value() );
				break;
			case 'IN':
				return $this->post_has_any_term( $post_id, $this->get_value() );
				break;
			case 'NOT IN':
				return ! $this->post_has_any_term( $post_id, $this->get_value() );
				break;
		}

		return $this->compare(
			$post_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}