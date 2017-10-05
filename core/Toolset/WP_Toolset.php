<?php

namespace Carbon_Fields\Toolset;

use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

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
		if ( ! $term ) {
			return 'N/A';
		}
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

	/**
	 * Get term object for descriptor array
	 *
	 * @param array $term_descriptor
	 * @return object
	 */
	public function get_term_by_descriptor( $term_descriptor ) {
		if ( ! is_array( $term_descriptor ) || ! isset( $term_descriptor['value'] ) || ! isset( $term_descriptor['taxonomy'] ) ) {
			Incorrect_Syntax_Exception::raise( 'Term descriptor passed is invalid. Please supply an array with a "value" and a "taxonomy" key: ' . print_r( $term_descriptor, true ) );
			return null;
		}

		$value = $term_descriptor['value'];
		$field = isset( $term_descriptor['field'] ) ? $term_descriptor['field'] : 'id';
		$taxonomy = $term_descriptor['taxonomy'];
		$term = get_term_by( $field, $value, $taxonomy );

		if ( ! $term ) {
			Incorrect_Syntax_Exception::raise( 'Failed to load term for descriptor: ' . print_r( $term_descriptor, true ) );
			return new \WP_Term( new \stdClass() );
		}

		return $term;
	}

	/**
	 * Decorate any term descriptor to include the full term and taxonomy objects
	 *
	 * @return mixed
	 */
	public function wildcard_term_descriptor_to_full_term_descriptor( $descriptor ) {
		if ( ! isset( $descriptor['field'] ) ) {
			$descriptor['field'] = 'id';
		}

		$term = $this->get_term_by_descriptor( $descriptor );
		$descriptor['term_object'] = $term;
		$descriptor['taxonomy_object'] = get_taxonomy( $term->taxonomy );
		return $descriptor;
	}
}
