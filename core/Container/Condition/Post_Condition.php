<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

class Post_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparer( App::resolve( 'container_condition_comparer_type_boolean' ) );
	}

	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		return $this->get_comparer()->compare( $environment['post']->ID, $this->get_value() );
	}
}