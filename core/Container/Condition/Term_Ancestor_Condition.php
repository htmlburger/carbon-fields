<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if term has a specific ancestor
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
class Term_Ancestor_Condition extends Term_Condition {

	public function is_fulfilled( $environment ) {
		$term_id = $environment['term_id'];
		$term = $environment['term'];
		$ancestors = array();

		if ( $term ) {
			$ancestors = array_map( 'intval', get_ancestors( $term_id, $term->taxonomy ) );
		}

		switch ( $this->get_comparison_operator() ) {
			case '=':
				return in_array( $term_id, $ancestors );
				break;
			case '!=':
				return ! in_array( $term_id, $ancestors );
				break;
			case 'IN':
				$possible_ancestors = $this->get_term_ids_from_full_term_descriptors( $this->get_value() );
				return ! empty( array_intersect( $possible_ancestors, $ancestors ) );
				break;
			case 'NOT IN':
				$possible_ancestors = $this->get_term_ids_from_full_term_descriptors( $this->get_value() );
				return empty( array_intersect( $possible_ancestors, $ancestors ) );
				break;
		}

		return $this->compare(
			$term_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}