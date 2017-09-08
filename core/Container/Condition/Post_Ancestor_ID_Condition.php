<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if post has a specific ancestor
 */
class Post_Ancestor_ID_Condition extends Condition {

	/**
	 * Check if the condition is fulfilled
	 *
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post_id = $environment['post_id'];
		$post = $environment['post'];
		$ancestors = array();

		if ( $post ) {
			$ancestors = array_map( 'intval', get_ancestors( $post_id, $post->post_type ) );
		}

		return $this->compare(
			$ancestors,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}