<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if a post is on a specific hierarchy level
 *
 * Level 1 is considered the root level. Passed values have a forced minimum value of 1.
 */
class Post_Level_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post_id = $environment['post_id'];
		$post_level = count( get_post_ancestors( $post_id ) ) + 1;
		$value = $this->get_value();
		if ( is_numeric( $value ) ) {
			$value = max( 1, intval( $this->get_value() ) );
		}

		return $this->compare(
			$post_level,
			$this->get_comparison_operator(),
			$value
		);
	}
}
