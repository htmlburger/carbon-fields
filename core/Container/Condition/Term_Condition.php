<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;
use Carbon_Fields\Toolset\WP_Toolset;

/**
 * Check for a specific term
 * 
 * Accepts the following values:
 *     Operators "=" and "!=":
 *         array(
 *             'value'=>...,
 *             'taxonomy'=>...,
 *             ['field'=>...] // "slug", "term_id" etc. - see get_term_by()
 *         )
 *     
 *     Operators "IN" and "NOT IN":
 *         array(
 *             array(
 *                 'value'=>...,
 *                 'taxonomy'=>...,
 *                 ['field'=>...]
 *             ),
 *             ...
 *         )
 *     
 *     Operators "REGEX" and CUSTOM" are passed the term_id
 */
class Term_Condition extends Condition {

	/**
	 * WP_Toolset to fetch term data with
	 * 
	 * @var WP_Toolset
	 */
	protected $wp_toolset;

	/**
	 * Constructor
	 *
	 * @param  array<Carbon_Fields\Container\Condition\Comparer\Comparer> $comparers
	 */
	public function __construct( $comparers ) {
		$this->wp_toolset = App::resolve( 'wp_toolset' );
		parent::__construct( $comparers );
	}
	
	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$term_id = $environment['term_id'];
		$value = $this->wp_toolset->get_term_by_descriptor( $this->get_value() );

		return $this->first_supported_comparer_is_correct(
			$term_id,
			$this->get_comparison_operator(),
			$value->term_id
		);
	}
}