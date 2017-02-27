<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Toolset\WP_Toolset;

/**
 * Check if term is of a specific taxonomy
 */
class Term_Taxonomy_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparers( array( 
			App::resolve( 'container_condition_comparer_type_equality' ),
			App::resolve( 'container_condition_comparer_type_contain' ),
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
		$taxonomy = $environment['taxonomy'];
		return $this->first_supported_comparer_is_correct(
			$taxonomy,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}