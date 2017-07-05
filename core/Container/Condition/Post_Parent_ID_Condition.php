<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if post has a specific parent
 */
class Post_Parent_ID_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post = $environment['post'];
		$post_parent_id = is_object( $post ) ? intval( $post->post_parent ) : 0;

		return $this->compare(
			$post_parent_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}