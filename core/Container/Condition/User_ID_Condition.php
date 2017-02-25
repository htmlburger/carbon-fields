<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

class User_ID_Condition extends Condition {

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
		$user_id = $environment['user_id'];
		return $this->first_supported_comparer_is_correct(
			$user_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}