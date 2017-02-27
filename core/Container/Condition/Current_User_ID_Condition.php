<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

/**
 * Check if the currently logged in user has a specific id
 */
class Current_User_ID_Condition extends Condition {

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
		$user_id = get_current_user_id();
		return $this->first_supported_comparer_is_correct(
			$user_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}