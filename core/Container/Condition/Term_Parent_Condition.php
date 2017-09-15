<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if term has a specific parent
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
 *     Operator "CUSTOM" is passed the parent term_id
 */
class Term_Parent_Condition extends Term_Condition {

	public function is_fulfilled( $environment ) {
		$term = $environment['term'];
		$parent_term_id = $term ? intval( $term->parent ) : 0;

		$value = $this->get_value();
		switch ( $this->get_comparison_operator() ) {
			case '=': // fallthrough intended
			case '!=':
				$value = $this->get_term_id_from_full_term_descriptor( $value );
				break;

			case 'IN': // fallthrough intended
			case 'NOT IN':
				$value = $this->get_term_ids_from_full_term_descriptors( $value );
				break;
		}

		return $this->compare(
			$parent_term_id,
			$this->get_comparison_operator(),
			$value
		);
	}
}