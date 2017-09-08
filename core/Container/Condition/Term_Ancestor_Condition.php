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
 *     Operator "CUSTOM" is passed an array of ancestor term ids
 */
class Term_Ancestor_Condition extends Term_Condition {

	public function is_fulfilled( $environment ) {
		$term_id = $environment['term_id'];
		$term = $environment['term'];
		$ancestors = array();

		if ( $term ) {
			$ancestors = array_map( 'intval', get_ancestors( $term_id, $term->taxonomy ) );
		}

		$value = $term_id;
		switch ( $this->get_comparison_operator() ) {
			case 'IN': // fallthrough intended
			case 'NOT IN':
				$value = $this->get_term_ids_from_full_term_descriptors( $this->get_value() );
				break;
		}

		return $this->compare(
			$ancestors,
			$this->get_comparison_operator(),
			$value
		);
	}
}