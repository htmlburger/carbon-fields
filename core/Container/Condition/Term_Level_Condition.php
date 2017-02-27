<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

/**
 * Check if a term is on a specific hierarchy level
 * 
 * Level 1 is considered the root level. Passed values have a forced minimum value of 1.
 */
class Term_Level_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparers( array( 
			App::resolve( 'container_condition_comparer_type_equality' ),
			App::resolve( 'container_condition_comparer_type_contain' ),
			App::resolve( 'container_condition_comparer_type_scalar' ),
			App::resolve( 'container_condition_comparer_type_regex' ),
			App::resolve( 'container_condition_comparer_type_custom' ),
		) );
	}
	
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
		$value = max( 1, intval( $this->get_value() ) );

		return $this->first_supported_comparer_is_correct(
			$term_level,
			$this->get_comparison_operator(),
			$value
		);
	}
}