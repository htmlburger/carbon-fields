<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Tests if a post has a term
 * Accepts the following values:
 *
 * Operators "=" and "!=":
 *     array(
 *         'value'=>...,
 *         'taxonomy'=>...,
 *         ['field'=>...] // "slug", "term_id" etc. - see get_term_by()
 *     )
 * 
 * Operators "IN" and "NOT IN":
 *     array(
 *         array(
 *             'value'=>...,
 *             'taxonomy'=>...,
 *             ['field'=>...]
 *         ),
 *         ...
 *     )
 * 
 * Operator "CUSTOM" is passed the post_id
 */
class Term_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparers( array( 
			// Only support the custom comparer as this condition has it's own comparison methods
			App::resolve( 'container_condition_comparer_type_custom' ),
		) );
	}
	
	/**
	 * Get a term according to array of options (field, value, taxonomy)
	 *
	 * @param  array     $property_array
	 * @return Condition $this
	 */
	protected function property_array_to_term( $property_array ) {
		if ( ! is_array( $property_array ) || ! isset( $property_array['value'] ) || ! isset( $property_array['taxonomy'] ) ) {
			Incorrect_Syntax_Exception::raise( 'Term_Condition value passed is invalid. Please supply an array with a "value" and a "taxonomy" key: ' . print_r( $property_array, true ) );
		}

		$value = $property_array['value'];
		$field = isset( $property_array['field'] ) ? $property_array['field'] : 'term_id';
		$taxonomy = $property_array['taxonomy'];
		$term = get_term_by( $field, $value, $taxonomy );

		if ( ! $term ) {
			Incorrect_Syntax_Exception::raise( 'Failed to load term passed to term condition for: ' . print_r( $property_array, true ) );
		}

		return $term;
	}
	
	/**
	 * Check if a post has a term
	 *
	 * @param  integer $post_id
	 * @param  integer $term_id
	 * @param  string  $term_taxonomy
	 * @return boolean
	 */
	protected function post_has_term( $post_id, $raw_term ) {
		$term = $this->property_array_to_term( $raw_term );
		return has_term( intval( $term->term_id ), $term->taxonomy, intval( $post_id ) );
	}
	
	/**
	 * Check if a post has any of the supplied terms
	 *
	 * @param  integer       $post_id
	 * @param  array<object> $term_id
	 * @return boolean
	 */
	protected function post_has_any_term( $post_id, $raw_terms ) {
		foreach ( $raw_terms as $raw_term ) {
			if ( $this->post_has_term( $post_id, $raw_term ) ) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post = $environment['post'];
		$post_id = is_object( $post ) ? intval( $post->ID ) : 0;
		
		switch ( $this->get_comparison_operator() ) {
			case '=':
				return $this->post_has_term( $post_id, $this->get_value() );
				break;
			case '!=':
				return ! $this->post_has_term( $post_id, $this->get_value() );
				break;
			case 'IN':
				return $this->post_has_any_term( $post_id, $this->get_value() );
				break;
			case 'NOT IN':
				return ! $this->post_has_any_term( $post_id, $this->get_value() );
				break;
		}

		return $this->first_supported_comparer_is_correct(
			$post_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}