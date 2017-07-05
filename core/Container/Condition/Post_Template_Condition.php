<?php

namespace Carbon_Fields\Container\Condition;

/**
 * Check if post has a specific template
 *
 * Pass "default" as the value for the default post template
 */
class Post_Template_Condition extends Condition {

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

		return $this->compare(
			$post_template,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}