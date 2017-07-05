<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check is post is of specific type
 */
class Post_Type_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post_type = $environment['post_type'];
		return $this->compare(
			$post_type,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}