<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check for a specific post id
 */
class Post_ID_Condition extends Condition {
	
	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post_id = $environment['post_id'];
		return $this->first_supported_comparer_is_correct(
			$post_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}