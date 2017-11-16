<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if a term is on a specific hierarchy level
 *
 * Level 1 is considered the root level. Passed values have a forced minimum value of 1.
 */
class Term_Level_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$term = $environment['term'];
		$term_level = 1;
		if ( $term ) {
			$term_level = count( get_ancestors( $term->term_id, $term->taxonomy, 'taxonomy' ) ) + 1;
		}
		$value = $this->get_value();
		if ( is_numeric( $value ) ) {
			$value = max( 1, intval( $this->get_value() ) );
		}

		return $this->compare(
			$term_level,
			$this->get_comparison_operator(),
			$value
		);
	}
}
