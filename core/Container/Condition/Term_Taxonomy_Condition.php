<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if term is of a specific taxonomy
 */
class Term_Taxonomy_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$taxonomy = $environment['taxonomy'];
		return $this->compare(
			$taxonomy,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}