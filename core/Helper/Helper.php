<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;
use WP_Query;

/**
 * Helper functions and main initialization class.
 */
class Helper {

	/**
	 * Get a field from a specific container type or id
	 *
	 * @param  string  $container_type Container type to search in. Optional if $container_id is supplied
	 * @param  string  $container_id   Container id to search in. Optional if $container_type is supplied
	 * @param  string  $field_name     Field name to search for
	 * @return \Carbon_Fields\Field\Field
	 */
	public static function get_field( $container_type, $container_id, $field_name ) {
		\Carbon_Fields\Carbon_Fields::verify_fields_registered();

		$repository = \Carbon_Fields\Carbon_Fields::resolve( 'container_repository' );
		if ( $container_id ) {
			return $repository->get_field_in_container( $field_name, $container_id );
		}
		return $repository->get_field_in_containers( $field_name, $container_type );
	}

	/**
	 * Get a clone of a field with a value loaded.
	 * WARNING: The datastore is cloned!
	 *
	 * @param  int    $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param  string $container_type Container type to search in. Optional if $container_id is supplied
	 * @param  string $container_id   Container id to search in. Optional if $container_type is supplied
	 * @param  string $field_name     Field name to search for
	 * @return \Carbon_Fields\Field\Field
	 */
	public static function get_field_clone( $object_id, $container_type, $container_id, $field_name ) {
		$field = static::get_field( $container_type, $container_id, $field_name );

		if ( ! $field ) {
			return null;
		}

		$clone = clone $field;
		if ( $object_id !== null ) {
			$clone->set_datastore( clone $clone->get_datastore(), $clone->has_default_datastore() );
			$clone->get_datastore()->set_object_id( $object_id );
		}
		return $clone;
	}

	/**
	 * Execute an action with a clone of a field with a value loaded.
	 * WARNING: The datastore reference is kept!
	 *
	 * @param  int      $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param  string   $container_type Container type to search in. Optional if $container_id is supplied
	 * @param  string   $container_id   Container id to search in. Optional if $container_type is supplied
	 * @param  string   $field_name     Field name to search for
	 * @param  \Closure $action         Action to execute
	 * @return void|mixed
	 */
	public static function with_field_clone( $object_id, $container_type, $container_id, $field_name, $action ) {
		$field = static::get_field( $container_type, $container_id, $field_name );

		if ( ! $field ) {
			return;
		}

		$clone = clone $field;
		$datastore = $clone->get_datastore();
		$datastore_object_id = $datastore->get_object_id();

		if ( $object_id !== null ) {
			$datastore->set_object_id( $object_id );
		}

		$result = $action($clone);

		if ( $object_id !== null ) {
			$datastore->set_object_id( $datastore_object_id );
		}

		return $result;
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
		return static::with_field_clone(
			$object_id,
			$container_type,
			$container_id,
			$field_name,
			function( $field ) {
				if ( ! $field ) {
					return '';
				}
				/** @var \Carbon_Fields\Field\Field $field */
				$field->load();
				return $field->get_formatted_value();
			}
		);
	}

	/**
	 * Set value for a field
	 *
	 * @param  int    $object_id      Object id to get value for (e.g. post_id, term_id etc.)
	 * @param  string $container_type Container type to search in
	 * @param  string $container_id
	 * @param  string $field_name     Field name
	 * @param  array  $value          Field expects a `value_set`. Complex_Field expects a `value_tree` - refer to DEVELOPMENT.md
	 * @return void
	 */
	public static function set_value( $object_id, $container_type, $container_id, $field_name, $value ) {
		static::with_field_clone(
			$object_id,
			$container_type,
			$container_id,
			$field_name,
			function( $field ) use ( $container_type, $container_id, $field_name, $value ) {
				if ( ! $field ) {
					$container_message = $container_id ? 'in container with id "' . $container_id . '"' : 'in containers of type "' . $container_type . '"';
					Incorrect_Syntax_Exception::raise( 'Could not find a field which satisfies the supplied pattern ' . $container_message . ': ' . $field_name );
					return;
				}
				/** @var \Carbon_Fields\Field\Field $field */
				$field->set_value( $value );
				$field->save();
			}
		);
	}

	/**
	 * Shorthand for get_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
	 */
	public static function get_the_post_meta( $name, $container_id = '' ) {
		return static::get_post_meta( get_the_ID(), $name, $container_id );
	}

	/**
	 * Get post meta field for a post.
	 *
	 * @param  int    $id           Post ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
	 */
	public static function get_post_meta( $id, $name, $container_id = '' ) {
		$id = apply_filters( 'carbon_get_post_meta_post_id', $id, $name, $container_id );
		return static::get_value( $id, 'post_meta', $container_id, $name );
	}

	/**
	 * Set post meta field for a post.
	 *
	 * @param  int    $id           Post ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_post_meta( $id, $name, $value, $container_id = '' ) {
		static::set_value( $id, 'post_meta', $container_id, $name, $value );
	}

	/**
	 * Get theme option field value.
	 *
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
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
		static::set_value( null, 'theme_options', $container_id, $name, $value );
	}

	/**
	 * Get network option field value for the main site.
	 *
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
	 */
	public static function get_the_network_option( $name, $container_id = '' ) {
		$id = defined( 'SITE_ID_CURRENT_SITE' ) ? SITE_ID_CURRENT_SITE : 1;
		return static::get_network_option( $id, $name, $container_id );
	}

	/**
	 * Get network option field value for a site.
	 *
	 * @param  string $id           Site ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
	 */
	public static function get_network_option( $id, $name, $container_id = '' ) {
		return static::get_value( $id, 'network', $container_id, $name );
	}

	/**
	 * Set network option field value for a site.
	 *
	 * @param  string $id           Site ID
	 * @param  string $name         Field name
	 * @param  array  $value
	 * @param  string $container_id
	 */
	public static function set_network_option( $id, $name, $value, $container_id = '' ) {
		static::set_value( $id, 'network', $container_id, $name, $value );
	}

	/**
	 * Get term meta field for a term.
	 *
	 * @param  int    $id           Term ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
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
		static::set_value( $id, 'term_meta', $container_id, $name, $value );
	}

	/**
	 * Get user meta field for a user.
	 *
	 * @param  int    $id           User ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
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
		static::set_value( $id, 'user_meta', $container_id, $name, $value );
	}

	/**
	 * Get comment meta field for a comment.
	 *
	 * @param  int    $id           Comment ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
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
		static::set_value( $id, 'comment_meta', $container_id, $name, $value );
	}

	/**
	 * Get nav menu item meta field for a nav menu item.
	 *
	 * @param  int    $id           Nav menu item ID
	 * @param  string $name         Field name
	 * @param  string $container_id
	 * @return mixed
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
		static::set_value( $id, 'nav_menu_item', $container_id, $name, $value );
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

	/**
	 * Return a partial regex pettern matching allowed field name characters
	 *
	 * @return string
	 */
	public static function get_field_name_characters_pattern() {
		return 'a-z0-9_\-';
	}

	/**
	 * Get an attachment ID given a file URL
	 * Modified version of https://wpscholar.com/blog/get-attachment-id-from-wp-image-url/
	 *
	 * @static
	 * @access public
	 *
	 * @param  string  $url
	 * @return integer
	 */
	public static function get_attachment_id( $url ) {
		$attachment_id = 0;
		$dir           = wp_upload_dir();

		/**
		 * Filters the attachment URL from which the attachment ID is being determined.
		 *
		 * @since 3.0.0
		 *
		 * @param string $url
		 */
		$url = apply_filters( 'carbon_fields_attachment_id_base_url', $url );

		$filename = basename( $url );

		if ( strpos( $url, $dir['baseurl'] . '/' ) !== false ) {
			$query_args = array(
				'post_type'   => 'attachment',
				'post_status' => 'inherit',
				'fields'      => 'ids',
				'meta_query'  => array(
					array(
						'value'   => $filename,
						'compare' => 'LIKE',
						'key'     => '_wp_attachment_metadata',
					),
				)
			);

			$query = new WP_Query( $query_args );

			if ( $query->have_posts() ) {
				foreach ( $query->posts as $post_id ) {
					$meta                = wp_get_attachment_metadata( $post_id );
					$original_file       = basename( $meta['file'] );
					$cropped_image_files = wp_list_pluck( $meta['sizes'], 'file' );

					if ( $original_file === $filename || in_array( $filename, $cropped_image_files ) ) {
						$attachment_id = intval( $post_id );

						break;
					}
				}
			}
		}

		/**
		 * Filters the attachment id found from the passed attachment URL.
		 *
		 * @since 3.0.0
		 *
		 * @param  integer $attachment_id
		 * @param  string  $url
		 */
		return apply_filters( 'carbon_fields_attachment_id_from_url', $attachment_id, $url );
	}

	/**
	 * Returns attachment metadata from an ID.
	 *
	 * @static
	 * @access public
	 *
	 * @param  string  $id
	 * @param  string  $type Value Type. Can be either id or url.
	 * @return array
	 */
	public static function get_attachment_metadata( $id, $type ) {
		$attachment_metadata = array(
			'id'        => 0,
			'thumb_url' => '',
			'file_type' => '',
			'file_name' => '',
		);

		// when `$type` is set to 'url' the `$id` will hold the url, not the id
		if ( $type === 'url' ) {
			$attachment_id = static::get_attachment_id( $id );

			if ( $attachment_id === 0 ) {
				$attachment_metadata['thumb_url'] = $id;
			}

			$id = $attachment_id;
		}

		$attachment = get_post( $id );

		if ( ! $attachment ) {
			/**
			 * Filter the metadata for the attachment in case the attachment post is not found.
			 *
			 * @since 3.0.0
			 *
			 * @param array           $attachment_metadata  The attachment metadata.
			 * @param integer|string  $id                   The attachment ID. Either attachment post ID or attachment url.
			 * @param string          $type                 The type of `$id` passed. Either 'id' or 'url'.
			 */
			return apply_filters( 'carbon_fields_attachment_not_found_metadata', $attachment_metadata, $id, $type );
		}

		$attachment_metadata['id']        = intval( $id );
		$attachment_metadata['file_url']  = is_numeric( $id ) ? wp_get_attachment_url( $id ) : $id;
		$attachment_metadata['file_name'] = basename( $attachment_metadata['file_url'] );
		$attachment_metadata['filetype']  = wp_check_filetype( $attachment_metadata['file_url'] );
		$attachment_metadata['file_type'] = preg_replace( '~\/.+$~', '', $attachment_metadata['filetype']['type'] ); // image, video, etc..

		if ( $attachment_metadata['file_type'] == 'image' ) {
			$attachment_metadata['thumb_url'] = $attachment_metadata['file_url'];

			if ( $type == 'id' ) {
				$attachment_metadata['thumb_url'] = wp_get_attachment_thumb_url( $id );
			}
		} else {
			$attachment_metadata['thumb_url'] = wp_mime_type_icon( $id );
		}

		/**
		 * Filter the metadata for the attachment.
		 *
		 * @since 3.0.0
		 *
		 * @param array           $attachment_metadata  The attachment metadata.
		 * @param integer|string  $id                   The attachment ID. Either attachment post ID or attachment url.
		 * @param string          $type                 The type of `$id` passed. Either 'id' or 'url'.
		 */
		return apply_filters( 'carbon_fields_attachment_metadata', $attachment_metadata, $id, $type );
	}

	/**
	 * Get the current $_POST or $_GET input array with compacted input values merged in
	 *
	 * @return array
	 */
	public static function input() {
		$input = ( isset( $_SERVER['REQUEST_METHOD'] ) && $_SERVER['REQUEST_METHOD'] === 'POST' ) ? $_POST : $_GET;
		$input = stripslashes_deep( $input );

		if ( \Carbon_Fields\COMPACT_INPUT ) {
			$input = static::expand_compacted_input( $input );
		}

		return $input;
	}

	/**
	 * Get a copy of the passed array with compacted input values merged in
	 *
	 * @param  array $input
	 * @return array
	 */
	public static function expand_compacted_input( $input ) {
		if ( isset( $input[ \Carbon_Fields\COMPACT_INPUT_KEY ] ) ) {
			$inputs = $input[ \Carbon_Fields\COMPACT_INPUT_KEY ];
			$input = array_merge( $input, $inputs );
		}
		return $input;
	}

	/**
	 * Get valid input from an input array compared to predefined options
	 *
	 * @param  array $input
	 * @param  array $options
	 * @return array
	 */
	public static function get_valid_options( $input, $options ) {
		// enfore comparison to be string so we do not get unexpected matches
		// for cases such as "string without any numbers" == 0
		// in array_search()
		$search_options = array_map( 'strval', $options );

		$valid_input = array();
		foreach ( $input as $raw_value ) {
			$index = array_search( strval( $raw_value ), $search_options, true );

			if ( $index === false ) {
				continue;
			}

			$valid_input[] = $options[ $index ];
		}
		return $valid_input;
	}

	/**
	 * Get an array of active sidebars
	 *
	 * @return array
	 */
	public static function get_active_sidebars() {
		global $wp_registered_sidebars;

		$sidebars = array();

		foreach ( $wp_registered_sidebars as $sidebar ) {
			// Check if we have inactive sidebars
			if ( isset( $sidebar['class'] ) && strpos( $sidebar['class'], 'inactive-sidebar' ) !== false ) {
				continue;
			}

			$sidebars[] = array(
				'id'   => $sidebar['id'],
				'name' => $sidebar['name'],
			);
		}

		return $sidebars;
	}
}
