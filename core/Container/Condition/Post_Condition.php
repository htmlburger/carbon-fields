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
	 * @return bool
	 */
	public function is_fulfilled() {
		var_dump($this->get_value());
		if ( $this->get_value() === 1 ) {
			return true;
		}
		return $this->get_comparer()->compare( what?, $this->get_value() )
	}
}