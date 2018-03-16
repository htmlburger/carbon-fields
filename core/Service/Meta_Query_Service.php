<?php

namespace Carbon_Fields\Service;

use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Toolset\Key_Toolset;
use Carbon_Fields\Value_Set\Value_Set;

/*
 * Service which provides the ability to do meta queries for multi-value fields and nested fields
 */
class Meta_Query_Service extends Service {

	/**
	 * Prefix to hook for when replacing "meta_key = " with "meta_key LIKE " in post queries
	 */
	const META_KEY_PREFIX = 'carbon_fields:';

	/**
	 * Container repository to get field references from
	 *
	 * @var ContainerRepository
	 */
	protected $container_repository;

	/**
	 * Key Toolset for key generation and comparison utilities
	 *
	 * @var Key_Toolset
	 */
	protected $key_toolset;

	public function __construct( ContainerRepository $container_repository, Key_Toolset $key_toolset ) {
		$this->container_repository = $container_repository;
		$this->key_toolset = $key_toolset;
	}

	/**
	 * Enable meta query filtering
	 */
	protected function enabled() {
		add_filter( 'get_meta_sql', array( $this, 'filter_get_meta_sql' ), 10, 1 );

		add_action( 'pre_get_posts', array( $this, 'hook_pre_get_posts' ) );
		add_action( 'pre_get_terms', array( $this, 'hook_pre_get_terms' ) );
		add_action( 'pre_get_users', array( $this, 'hook_pre_get_users' ) );
	}

	/**
	 * Disable meta query filtering
	 */
	protected function disabled() {
		remove_filter( 'get_meta_sql', array( $this, 'filter_get_meta_sql' ) );

		remove_action( 'pre_get_posts', array( $this, 'hook_pre_get_posts' ) );
		remove_action( 'pre_get_terms', array( $this, 'hook_pre_get_terms' ) );
		remove_action( 'pre_get_users', array( $this, 'hook_pre_get_users' ) );
	}

	/**
	 * Recursive function to replace meta keys in meta_query arrays
	 *
	 * @return array
	 */
	protected function filter_meta_query_array( $condition, $container_type ) {
		if ( ! is_array( $condition ) ) {
			return $condition;
		}

		if ( ! isset( $condition['key'] ) ) {
			// we are dealing with a nested array - recurse
			foreach ( $condition as $key => $value ) {
				$condition[ $key ] = $this->filter_meta_query_array( $value, $container_type );
			}
			return $condition;
		}

		$field_name = preg_replace( '/^_/', '', $condition['key'] );
		$field = $this->container_repository->get_field_in_containers( $field_name, $container_type );
		$property = isset( $condition['carbon_field_property'] ) ? $condition['carbon_field_property'] : Value_Set::VALUE_PROPERTY;

		// bail if we cannot find the field
		if ( $field !== null ) {
			$storage_key = $this->key_toolset->get_storage_key_with_index_wildcards(
				$field->is_simple_root_field(),
				array_merge( $field->get_hierarchy(), array( $field->get_base_name() ) ),
				$property
			);
			$condition['key'] = static::META_KEY_PREFIX . $storage_key;
		}

		return $condition;
	}

	protected function get_meta_key_replace_regex() {
		return '/(meta_key)\s*=\s*([\'"]*)' . preg_quote( static::META_KEY_PREFIX, '/' ) . '/';
	}

	public function filter_get_meta_sql( $sql ) {
		if ( strpos( $sql['where'], static::META_KEY_PREFIX ) !== false ) {
			$sql['where'] = preg_replace( $this->get_meta_key_replace_regex(), '$1 LIKE $2', $sql['where'] );
		}
		return $sql;
	}

	/**************************************************
	 * WP_QUERY                                       *
	 **************************************************/

	/**
	 * Hook to pre_get_posts to filter the meta_query array
	 */
	public function hook_pre_get_posts( $query ) {
		$meta_query = $query->get( 'meta_query' );
		if ( ! empty( $meta_query ) ) {
			$meta_query = $this->filter_meta_query_array( $meta_query, 'post_meta' );
			$query->set( 'meta_query', $meta_query );
		}
	}

	/**************************************************
	 * WP_TERM_QUERY                                  *
	 **************************************************/

	/**
	 * Hook to pre_get_terms to filter the meta_query array
	 */
	public function hook_pre_get_terms( $query ) {
		$meta_query = ! empty( $query->query_vars['meta_query'] ) ? $query->query_vars['meta_query'] : array();
		if ( ! empty( $meta_query ) ) {
			$meta_query = $this->filter_meta_query_array( $meta_query, 'term_meta' );
			$query->query_vars['meta_query'] = $meta_query;
		}
	}

	/**************************************************
	 * WP_USER_QUERY                                  *
	 **************************************************/

	/**
	 * Hook to pre_get_users to filter the meta_query array
	 */
	public function hook_pre_get_users( $query ) {
		$meta_query = $query->get( 'meta_query' );
		if ( ! empty( $meta_query ) ) {
			$meta_query = $this->filter_meta_query_array( $meta_query, 'user_meta' );
			$query->set( 'meta_query', $meta_query );
		}
	}
}
