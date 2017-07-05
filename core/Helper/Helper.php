<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Helper functions and main initialization class.
 */
class Helper {

	/**
	 * Get a value formatted for end-users
	 *
	 * @param  int    $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param  string $container_type Container type to search in
	 * @param  string $container_id
	 * @param  string $field_name     Field name
	 * @return mixed
	 */
	public static function get_field_clone( $object_id, $container_type, $container_id, $field_name ) {
		$repository = \Carbon_Fields\Carbon_Fields::resolve( 'container_repository' );
		$field = null;
		if ( $container_id ) {
			$field = $repository->get_field_in_container( $field_name, $container_id );
		} else {
			$field = $repository->get_field_in_containers( $field_name, $container_type );
		}

		if ( ! $field ) {
			return null;
		}

		$clone = clone $field;
		if ( $object_id !== null ) {
			$clone->get_datastore()->set_object_id( $object_id );
		}
		return $clone;
	}

	/**
	 * Get a value formatted for end-users
	 *
	 * @param  int    $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param  string $container_type Container type to search in
	 * @param  string $container_id
	 * @param  string $field_name     Field name
	 * @return mixed
	 */
	public static function get_value( $object_id, $container_type, $container_id, $field_name ) {
		$field = static::get_field_clone( $object_id, $container_type, $container_id, $field_name );

		if ( ! $field ) {
			return '';
		}

		$field->load();
		return $field->get_formatted_value();
	}

	/**
	 * Set value for a field
	 *
	 * @param int    $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param string $container_type Container type to search in
	 * @param string $container_id
	 * @param string $field_name     Field name
	 * @param array $value Field expects a `value_set`; Complex_Field expects a `value_tree` - refer to DEVELOPMENT.md
	 */
	public static function set_value( $object_id, $container_type, $container_id, $field_name, $value ) {
		$field = static::get_field_clone( $object_id, $container_type, $container_id, $field_name );

		if ( ! $field ) {
			Incorrect_Syntax_Exception::raise( 'Could not find a field which satisfies the supplied pattern: ' . $field_name );
			return;
		}

		$field->set_value( $value );
		$field->save();
	}

	/**
	 * Shorthand for get_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_the_post_meta( $name, $container_id = '' ) {
		return static::get_post_meta( get_the_ID(), $name, $container_id );
	}

	/**
	 * Get post meta field for a post.
	 *
	 * @param  int    $id           Post ID.
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_post_meta( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'post_meta', $container_id, $name );
	}

	/**
	 * Set post meta field for a post.
	 *
	 * @param  int    $id           Post ID
	 * @param  string $name         Custom field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_post_meta( $id, $name, $value, $container_id = '' ) {
		return static::set_value( $id, 'post_meta', $container_id, $name, $value );
	}

	/**
	 * Get theme option field value.
	 *
	 * @param  string $name         Custom field name
	 * @param  string $container_id
	 * @return mixed  Option        value
	 */
	public static function get_theme_option( $name, $container_id = '' ) {
		return static::get_value( null, 'theme_options', $container_id, $name );
	}

	/**
	 * Set theme option field value.
	 *
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_theme_option( $name, $value, $container_id = '' ) {
		return static::set_value( null, 'theme_options', $container_id, $name, $value );
	}

	/**
	 * Get term meta field for a term.
	 *
	 * @param  int    $id           Term ID.
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_term_meta( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'term_meta', $container_id, $name );
	}

	/**
	 * Set term meta field for a term.
	 *
	 * @param  int    $id           Term ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_term_meta( $id, $name, $value, $container_id = '' ) {
		return static::set_value( $id, 'term_meta', $container_id, $name, $value );
	}

	/**
	 * Get user meta field for a user.
	 *
	 * @param  int    $id           User ID.
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_user_meta( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'user_meta', $container_id, $name );
	}

	/**
	 * Set user meta field for a user.
	 *
	 * @param  int    $id           User ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_user_meta( $id, $name, $value, $container_id = '' ) {
		return static::set_value( $id, 'user_meta', $container_id, $name, $value );
	}

	/**
	 * Get comment meta field for a comment.
	 *
	 * @param  int    $id           Comment ID.
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_comment_meta( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'comment_meta', $container_id, $name );
	}

	/**
	 * Set comment meta field for a comment.
	 *
	 * @param  int    $id           Comment ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_comment_meta( $id, $name, $value, $container_id = '' ) {
		return static::set_value( $id, 'comment_meta', $container_id, $name, $value );
	}

	/**
	 * Get nav menu item meta field for a nav menu item.
	 *
	 * @param  int    $id           Nav menu item ID.
	 * @param  string $name         Custom field name.
	 * @param  string $container_id
	 * @return mixed  Meta value.
	 */
	public static function get_nav_menu_item_meta( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'nav_menu_item', $container_id, $name );
	}

	/**
	 * Set nav menu item meta field for a nav menu item.
	 *
	 * @param  int    $id           Nav menu item ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_nav_menu_item_meta( $id, $name, $value, $container_id = '' ) {
		return static::set_value( $id, 'nav_menu_item', $container_id, $name, $value );
	}

	/**
	 * Recursive sorting function by array key.
	 *
	 * @param  array   &$array     The input array.
	 * @param  int     $sort_flags Flags for controlling sorting behavior.
	 * @return boolean
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
	 * @param  array         $array
	 * @param  array<string> $allowed_relations
	 * @param  string        $relation_key
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

	/**
	 * Normalize a label by updating case, stripping common prefixes etc.
	 *
	 * @param  string $label
	 * @return string
	 */
	public static function normalize_label( $label ) {
		// remove the leading underscore(if it's there)
		$label = preg_replace( '~^_~', '', $label );

		// remove the leading "crb_"(if it's there)
		$label = preg_replace( '~^crb_~', '', $label );

		// split the name into words and make them capitalized
		$label = mb_convert_case( str_replace( '_', ' ', $label ), MB_CASE_TITLE );

		return $label;
	}

	/**
	 * Normalize a type string representing an object type
	 *
	 * @param  string $type
	 * @return string
	 */
	public static function normalize_type( $type ) {
		$normalized_type = str_replace( ' ', '_', $type );
		$normalized_type = preg_replace( '/[_\s]+/', '_', $normalized_type );
		$normalized_type = preg_replace( '/^_|_$/', '', $normalized_type );
		$normalized_type = strtolower( $normalized_type );
		return $normalized_type;
	}

	/**
	 * Convert a string representing an object type to a fully qualified class name
	 *
	 * @param  string $type
	 * @param  string $namespace
	 * @param  string $class_suffix
	 * @return string
	 */
	public static function type_to_class( $type, $namespace = '', $class_suffix = '' ) {
		$classlike_type = static::normalize_type( $type );
		$classlike_type = str_replace( '_', ' ', $classlike_type );
		$classlike_type = ucwords( $classlike_type );
		$classlike_type = str_replace( ' ', '_', $classlike_type );

		$class = $classlike_type . $class_suffix;
		if ( $namespace ) {
			$class = $namespace . '\\' . $class;
		}

		return $class;
	}

	/**
	 * Convert a string representing an object type to a fully qualified class name
	 *
	 * @param  string $class
	 * @param  string $class_suffix
	 * @return string
	 */
	public static function class_to_type( $class, $class_suffix = '' ) {
		$reflection = new \ReflectionClass( $class );
		$type = $reflection->getShortName();

		if ( $class_suffix ) {
			$type = preg_replace( '/(' . preg_quote( $class_suffix, '/' ) . ')$/i', '', $type );
		}

		$type = static::normalize_type( $type );

		return $type;
	}

	/**
	 * Get an array of sanitized html classes
	 *
	 * @param  string|array<string> $classes
	 * @return array<string>
	 */
	public static function sanitize_classes( $classes ) {
		if ( ! is_array( $classes ) ) {
			$classes = array_values( array_filter( explode( ' ', $classes ) ) );
		}
		$classes = array_map( 'sanitize_html_class', $classes );
		return $classes;
	}

	/**
	 * Check if an id or name for containers and fields is valid
	 *
	 * @param  string  $id
	 * @return boolean
	 */
	public static function is_valid_entity_id( $id ) {
		return ! empty( $id ) && preg_match( '/\A[a-z0-9_\-]+\z/', $id );
	}
}
