<?php

namespace Carbon_Fields\Helper;

use \Carbon_Fields\App;
use \Carbon_Fields\Datastore\Datastore;

/**
 * Helper functions and main initialization class.
 */
class Helper {

	/**
	 * Get a value formatted for end-users
	 *
	 * @param int $object_id Object id to get value for (e.g. post_id, term_id etc.)
	 * @param string $container_type Container type to search in
	 * @param string $field_name Field name
	 * @return mixed
	 */
	public static function get_value( $object_id, $container_type, $field_name ) {
		$repository = App::ioc( 'container_repository' );
		$field = $repository->get_field_in_containers( $field_name, $container_type, false );
		$default_value = ''; // for consistency - get_post_meta returns an empty string when a meta key does not exist

		if ( !$field ) {
			return $default_value;
		}

		$clone = clone $field;
		if ( $object_id !== null ) {
			$clone->get_datastore()->set_id( $object_id );
		}
		$clone->load();
		return $clone->get_formatted_value();
	}

	/**
	 * Retrieve post meta field for a post.
	 *
	 * @param  int    $id   Post ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_post_meta( $id, $name ) {
		return static::get_value( $id, 'Post_Meta', $name );
	}

	/**
	 * Shorthand for get_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_the_post_meta( $name ) {
		return static::get_value( get_the_ID(), 'Post_Meta', $name );
	}

	/**
	 * Retrieve theme option field value.
	 *
	 * @param  string $name Custom field name.
	 * @return mixed        Option value.
	 */
	public static function get_theme_option( $name ) {
		return static::get_value( null, 'Theme_Options', $name );
	}

	/**
	 * Retrieve term meta field for a term.
	 *
	 * @param  int    $id   Term ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_term_meta( $id, $name ) {
		return static::get_value( $id, 'Term_Meta', $name );
	}

	/**
	 * Retrieve user meta field for a user.
	 *
	 * @param  int    $id   User ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_user_meta( $id, $name ) {
		return static::get_value( $id, 'user_meta', $name );
	}

	/**
	 * Retrieve comment meta field for a comment.
	 *
	 * @param  int    $id   Comment ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_comment_meta( $id, $name ) {
		return static::get_value( $id, 'comment_meta', $name );
	}

	/**
	 * Recursive sorting function by array key.
	 * 
	 * @param  array  &$array     The input array.
	 * @param  int    $sort_flags Flags for controlling sorting behavior.
	 * @return array              Sorted array.
	 */
	public static function ksort_recursive( &$array, $sort_flags = SORT_REGULAR ) {
		if ( ! is_array( $array ) ) {
			return false;
		}
		ksort( $array, $sort_flags );
		foreach ( $array as $key => $value ) {
			self::ksort_recursive( $array[ $key ], $sort_flags );
		}
		return true;
	}
}
