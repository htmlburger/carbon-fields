<?php

namespace Carbon_Fields\Toolset;

/**
 * Provides common tools when dealing with WordPress data such as posts, terms etc.
 */
class WP_Toolset {

	/**
	 * Get post title
	 *
	 * @param int $id
	 * @return string $title The title of the item.
	 */
	public function get_post_title( $id ) {
		return get_the_title( $id );
	}

	/**
	 * Get term title
	 *
	 * @param int $id
	 * @param string $subtype
	 * @return string $title The title of the item.
	 */
	public function get_term_title( $id, $subtype = '' ) {
		$term = get_term_by( 'id', $id, $subtype );
		return $term->name;
	}

	/**
	 * Get user title
	 *
	 * @param int $id
	 * @return string $title The title of the item.
	 */
	public function get_user_title( $id ) {
		return get_the_author_meta( 'user_login', $id );
	}

	/**
	 * Get comment title
	 *
	 * @param int $id
	 * @return string $title The title of the item.
	 */
	public function get_comment_title( $id ) {
		return get_comment_text( $id );
	}
}
