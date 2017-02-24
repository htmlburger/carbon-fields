<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

class Post_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparers( array( 
			App::resolve( 'container_condition_comparer_type_equality' ),
			App::resolve( 'container_condition_comparer_type_contain' ),
		) );
	}

	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		return $this->any_comparer_is_correct( $environment['post']->ID, $this->get_comparison_operator(), $this->get_value() );
	}
}