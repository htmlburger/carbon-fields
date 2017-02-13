<?php

namespace Carbon_Fields\Helper;

use \Carbon_Fields\App;
use \Carbon_Fields\Datastore\Datastore;
use \Carbon_Fields\Exception\Incorrect_Syntax_Exception;

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
		$repository = App::resolve( 'container_repository' );
		$field = $repository->get_field_in_containers( $field_name, $container_type, false );
		$default_value = ''; // for consistency - get_post_meta returns an empty string when a meta key does not exist

		if ( ! $field ) {
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
	 * Set value for a field
	 *
	 * @param int $object_id Object id to get value for (e.g. post_id, term_id etc.)
	 * @param string $container_type Container type to search in
	 * @param string $field_name Field name
	 * @param array $value Refer to Complex_Field::set_value_tree() in case you wish to update a complex field
	 * @return bool
	 */
	public static function set_value( $object_id, $container_type, $field_name, $value ) {
		$repository = App::resolve( 'container_repository' );
		$field = $repository->get_field_in_containers( $field_name, $container_type, false );

		if ( ! $field ) {
			return false;
		}

		$clone = clone $field;
		if ( $object_id !== null ) {
			$clone->get_datastore()->set_id( $object_id );
		}

		if ( is_a( $clone, '\\Carbon_Fields\\Field\\Complex_Field' ) ) {
			$value = ( ! empty( $value ) ) ? $value : array( 'value_set' => array() );
			$clone->set_value_tree( $value );
			$clone->set_value( $value['value_set'] );
		} else {
			$clone->set_value( $value );
		}
		$clone->save();

		return true;
	}

	/**
	 * Shorthand for get_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_the_post_meta( $name ) {
		return static::get_post_meta( get_the_ID(), $name );
	}

	/**
	 * Get post meta field for a post.
	 *
	 * @param int    $id   Post ID.
	 * @param string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_post_meta( $id, $name ) {
		return static::get_value( $id, 'Post_Meta', $name );
	}

	/**
	 * Set post meta field for a post.
	 *
	 * @param int $id Post ID
	 * @param string $name Custom field name
	 * @param array $value
	 * @return bool Success
	 */
	public static function set_post_meta( $id, $name, $value ) {
		return static::set_value( $id, 'Post_Meta', $name, $value );
	}

	/**
	 * Get theme option field value.
	 *
	 * @param string $name Custom field name
	 * @return mixed Option value
	 */
	public static function get_theme_option( $name ) {
		return static::get_value( null, 'Theme_Options', $name );
	}

	/**
	 * Set theme option field value.
	 *
	 * @param string $name Field name
	 * @param array $value
	 * @return bool Success
	 */
	public static function set_theme_option( $name, $value ) {
		return static::set_value( null, 'Theme_Options', $name, $value );
	}

	/**
	 * Get term meta field for a term.
	 *
	 * @param  int    $id   Term ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_term_meta( $id, $name ) {
		return static::get_value( $id, 'Term_Meta', $name );
	}

	/**
	 * Set term meta field for a term.
	 *
	 * @param int $id Term ID
	 * @param string $name Field name
	 * @param array $value
	 * @return bool Success
	 */
	public static function set_term_meta( $id, $name, $value ) {
		return static::set_value( $id, 'Term_Meta', $name, $value );
	}

	/**
	 * Get user meta field for a user.
	 *
	 * @param  int    $id   User ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_user_meta( $id, $name ) {
		return static::get_value( $id, 'user_meta', $name );
	}

	/**
	 * Set user meta field for a user.
	 *
	 * @param int $id User ID
	 * @param string $name Field name
	 * @param array $value
	 * @return bool Success
	 */
	public static function set_user_meta( $id, $name, $value ) {
		return static::set_value( $id, 'user_meta', $name, $value );
	}

	/**
	 * Get comment meta field for a comment.
	 *
	 * @param  int    $id   Comment ID.
	 * @param  string $name Custom field name.
	 * @return mixed        Meta value.
	 */
	public static function get_comment_meta( $id, $name ) {
		return static::get_value( $id, 'comment_meta', $name );
	}

	/**
	 * Set comment meta field for a comment.
	 *
	 * @param int $id Comment ID
	 * @param string $name Field name
	 * @param array $value
	 * @return bool Success
	 */
	public static function set_comment_meta( $id, $name, $value ) {
		return static::set_value( $id, 'comment_meta', $name, $value );
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

	/**
	 * Get the relation type from an array similar to how meta_query works in WP_Query
	 * 
	 * @param array $array
	 * @param array<string> $allowed_relations
	 * @param string $relation_key
	 * @return string
	 */
	public static function get_relation_type_from_array( $array, $allowed_relations = array( 'AND', 'OR' ), $relation_key = 'relation' ) {
		$allowed_relations = array_values( $allowed_relations );
		$allowed_relations = array_map( 'strtoupper', $allowed_relations );
		$relation = isset( $allowed_relations[0] ) ? $allowed_relations[0] : '';

		if ( isset( $array[ $relation_key ] ) ) {
			$relation = strtoupper( $array[ $relation_key ] );
		}

		if ( ! in_array( $relation, $allowed_relations ) ) {
			Incorrect_Syntax_Exception::raise( 'Invalid relation type ' . $relation . '. ' .
			'The rule should be one of the following: "' . implode( '", "', $allowed_relations ) . '"' );
		}

		return $relation;
	}
}
