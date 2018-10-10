<?php

namespace Carbon_Fields\Field\Association;

use WP_Query;
use WP_Term_Query;
use WP_User_Query;
use WP_Comment_Query;

trait Queries_Options {
	public function get_post_options_sql( $args = array() ) {
		$type        = $args['type'];
		$post_type   = $args['post_type'];
		$search_term = $args['term'];

		unset( $args['type'], $args['post_type'], $args['term'] );

		/**
		 * Filter the default query when fetching posts for a particular field.
		 *
		 * @param array $args The parameters, passed to WP_Query::__construct().
		 */
		$filter_name = 'carbon_fields_association_field_options_' . $this->get_base_name() . '_' . $type . '_' . $post_type;

		$args = apply_filters( $filter_name, array(
			'post_type'        => $post_type,
			'posts_per_page'   => 1,
			'fields'           => 'ids',
			'suppress_filters' => false,
			's'                => $search_term,
		) );

		add_filter( 'posts_fields_request', array( $this, 'get_post_options_sql_select_clause' ) );

		add_filter( 'posts_groupby_request', '__return_empty_string' );
		add_filter( 'posts_orderby_request', '__return_empty_string' );
		add_filter( 'post_limits_request', '__return_empty_string' );

		$posts_query = new WP_Query( $args );

		remove_filter( 'posts_fields_request', array( $this, 'get_post_options_sql_select_clause' ) );

		remove_filter( 'posts_groupby_request', '__return_empty_string' );
		remove_filter( 'posts_orderby_request', '__return_empty_string' );
		remove_filter( 'post_limits_request', '__return_empty_string' );

		return $posts_query->request;
	}

	public function get_post_options_sql_select_clause( $fields ) {
		global $wpdb;

		return $fields . " , `{$wpdb->posts}`.`post_title` AS `title`, 'post' AS `type`, `{$wpdb->posts}`.`post_type` AS `subtype` ";
	}

	public function get_term_options_sql( $args = array() ) {
		$type        = $args['type'];
		$taxonomy    = $args['taxonomy'];
		$search_term = $args['term'];

		unset( $args['type'], $args['taxonomy'], $args['term'] );

		/**
		 * Filter the default parameters when fetching terms for a particular field.
		 *
		 * @param array $args The parameters, passed to WP_Term_Query::__construct().
		 */
		$filter_name = 'carbon_fields_association_field_options_' . $this->get_base_name() . '_' . $type . '_' . $taxonomy;

		$args = apply_filters( $filter_name, array(
			'hide_empty'             => 0,
			'fields'                 => 'count',
			'number'                 => 1,
			'search'                 => $search_term,
			'update_term_meta_cache' => false,
		) );

		add_filter( 'get_terms_fields', array( $this, 'get_term_options_sql_select_clause' ) );
		add_filter( 'terms_clauses', array( $this, 'get_term_options_sql_clauses' ) );

		$terms_query = new WP_Term_Query( $args );

		remove_filter( 'get_terms_fields', array( $this, 'get_term_options_sql_select_clause' ) );
		remove_filter( 'terms_clauses', array( $this, 'get_term_options_sql_clauses' ) );

		return $terms_query->request;
	}

	public function get_term_options_sql_select_clause( $fields ) {
		return array( '`t`.`term_id` AS `ID`', '`t`.`name` AS `title`', '\'term\' as `type`', '`tt`.`taxonomy` AS `subtype`' );
	}

	public function get_term_options_sql_clauses( $clauses ) {
		unset( $clauses['orderby'], $clauses['order'], $clauses['limits'] );

		return $clauses;
	}

	public function get_user_options_sql( $args = array() ) {
		global $wpdb;

		$type        = $args['type'];
		$search_term = $args['term'];

		unset( $args['type'], $args['term'], $args['subtype'] );

		/**
		 * Filter the default parameters when fetching terms for a particular field.
		 *
		 * @param array $args The parameters, passed to WP_User_Query::__construct().
		 */
		$filter_name = 'carbon_fields_association_field_options_' . $this->get_base_name() . '_' . $type;

		$args = apply_filters( $filter_name, array(
			'fields' => 'ID',
			'number' => 1,
			'search' => $search_term,
		) );

		$users_query = new WP_User_Query;
		$users_query->prepare_query( $args );

		return "SELECT `{$wpdb->users}`.`ID`, '' AS `title`, 'user' AS `type`, 'user' AS `subtype` {$users_query->query_from} {$users_query->query_where}";
	}

	public function get_comment_options_sql( $args = array() ) {
		$type        = $args['type'];
		$search_term = $args['term'];

		unset( $args['type'], $args['term'], $args['subtype'] );

		/**
		 * Filter the default parameters when fetching comments for a particular field.
		 *
		 * @param array $args The parameters, passed to get_comments().
		 */
		$filter_name = 'carbon_fields_association_field_options_' . $this->get_base_name() . '_' . $type;

		$args = apply_filters( $filter_name, array(
			'fields' => 'ids',
			'number' => 1,
			'search' => $search_term,
		) );

		add_filter( 'comments_clauses', array( $this, 'get_comments_clauses' ) );

		$comments_query = new WP_Comment_Query;
		$comments_query->query( $args );

		remove_filter( 'comments_clauses', array( $this, 'get_comments_clauses' ) );
		

		return $comments_query->request;
	}

	public function get_comments_clauses( $clauses ) {
		global $wpdb;

		$clauses['fields'] = " {$wpdb->comments}.`comment_ID` AS `ID`, '' AS `title`, 'comment' AS `type`, 'comment' AS `subtype` ";

		unset( $clauses['orderby'], $clauses['limits'], $clauses['groupby'] );

		return $clauses;
	}
}
