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
		$is_page_for_posts = intval( $post_id ) === intval( get_option( 'page_for_posts' ) );

		$post_template = get_post_meta( $post_id, '_wp_page_template', true );
		if ( ! $post_template || $is_page_for_posts ) {
			$post_template = 'default';
		}

		return $this->compare(
			$post_template,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}