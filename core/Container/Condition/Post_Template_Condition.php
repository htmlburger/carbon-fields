<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

/**
 * Check if post has a specific template
 * 
 * Pass "default" as the value for the default post template
 */
class Post_Template_Condition extends Condition {

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
		$post_id = $environment['post_id'];
		$post_template = get_post_meta( $post_id, '_wp_page_template', true );
		$post_template = $post_template ? $post_template : 'default';

		return $this->first_supported_comparer_is_correct(
			$post_template,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}