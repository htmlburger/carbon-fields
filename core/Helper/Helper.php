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
	 * @see \Carbon_Fields\Container\Container::get_field_by_name()
	 * 
	 * @param int $object_id Object id to get value for (e.g. post_id, term_id etc.)
	 * @param string $container_type Container type to search in
	 * @param string $field_name Field name or slash-separated hierarchy of complex fields
	 * @return mixed
	 */
	public static function get_value( $object_id, $container_type, $field_name ) {
		$repository = App::ioc( 'container_repository' );
		$containers = $repository->get_containers();
		$container = null;
		$field = null;
		$default_value = ''; // for consistency - get_post_meta returns an empty string when a meta key does not exist

		foreach ( $containers as $c ) {
			if ( $c->type === $container_type ) {
				$container = $c;
				break;
			}
		}

		if ( !$container ) {
			return $default_value;
		}

		$fields = $container->get_fields();
		foreach ( $fields as $f ) {
			if ( $f->get_name() === $field_name ) {
				$field = $f;
				break;
			}
		}
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

	/**************************************************
	 *                                                *
	 * LEGACY METHODS                                 *
	 *                                                *
	 **************************************************/

	/**
	 * Retrieve a certain field value from the database.
	 * Handles the logic for different field types.
	 *
	 * @param  string $data_type Data type.
	 * @param  string $name      Custom field name.
	 * @param  string $type      Custom field type (optional).
	 * @param  int    $id        ID (optional).
	 * @return mixed             Meta value.
	 */
	public static function get_field_value( $data_type, $name, $type = null, $id = null ) {
		$datastore_name = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $data_type ) ) );

		switch ( $type ) {
			case 'complex':
				$value = static::get_complex_fields( $datastore_name, $name, $id );
			break;

			case 'map':
				$value = array(
					'lat' => (float) static::get_field_value_by_datastore( $data_type, $name . '-lat', $id ),
					'lng' => (float) static::get_field_value_by_datastore( $data_type, $name . '-lng', $id ),
					'address' => static::get_field_value_by_datastore( $data_type, $name . '-address', $id ),
					'zoom' => (int) static::get_field_value_by_datastore( $data_type, $name . '-zoom', $id ),
				);

				if ( ! array_filter( $value ) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = static::get_field_value_by_datastore( $data_type, $name, $id );
				$value = static::parse_relationship_field( $raw_value, $type );
			break;

			default:
				$value = static::get_field_value_by_datastore( $data_type, $name, $id );

				// backward compatibility for the old Relationship field
				$value = static::maybe_old_relationship_field( $value );
		}

		return $value;
	}

	/**
	 * Retrieve a certain field value from the database.
	 * Handles the logic for different datastores (containers).
	 *
	 * @param  string $datastore_type Datastore type.
	 * @param  string $name       Custom field name.
	 * @param  int    $id         ID (optional).
	 * @return mixed              Meta value.
	 */
	public static function get_field_value_by_datastore( $datastore_type, $name, $id = null ) {
		$args = array( $id, $name, true );
		$function = '';

		switch ( $datastore_type ) {
			case 'post_meta':
				$function = 'get_post_meta';
			break;

			case 'user_meta':
				$function = 'get_user_meta';
			break;

			case 'comment_meta':
				$function = 'get_comment_meta';
			break;

			case 'term_meta':
				$function = 'get_metadata';
				$args = array( 'term', $id, $name, true );
			break;

			case 'theme_options':
				$function = 'get_option';
				$args = array( $name );
			break;
		}

		if ( ! empty( $function ) && function_exists( $function ) ) {
			return call_user_func_array( $function, $args );
		}

		return false;
	}

	/**
	 * Build a string of concatenated pieces for an OR regex.
	 *
	 * @param  array  $pieces Pieces
	 * @param  string $glue   Glue between the pieces
	 * @return string         Result string
	 */
	public static function preg_quote_array( $pieces, $glue = '|' ) {
		$pieces = array_map( 'preg_quote', $pieces, array( '~' ) );

		return implode( $glue, $pieces );
	}

	/**
	 * Build the regex for parsing a certain complex field.
	 *
	 * @param  string $field_name  Name of the complex field.
	 * @param  array  $group_names Array of group names.
	 * @param  array  $field_names Array of subfield names.
	 * @return string              Regex
	 */
	public static function get_complex_field_regex( $field_name, $group_names = array(), $field_names = array() ) {
		if ( ! empty( $group_names ) ) {
			$group_regex = static::preg_quote_array( $group_names );
		} else {
			$group_regex = '\w*';
		}

		if ( ! empty( $field_names ) ) {
			$field_regex = static::preg_quote_array( $field_names );
		} else {
			$field_regex = '.*?';
		}

		return '~^' . preg_quote( $field_name, '~' ) . '(?P<group>' . $group_regex . ')-_?(?P<key>' . $field_regex . ')_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~';
	}

	/**
	 * Retrieve the complex field data for a certain field.
	 *
	 * @param  string $type Datastore type.
	 * @param  string $name Name of the field.
	 * @param  int    $id   ID of the entry (optional).
	 * @return array        Complex data entries.
	 */
	public static function get_complex_fields( $type, $name, $id = null ) {
		$datastore = Datastore::factory( $type );

		if ( $id !== null ) {
			$datastore->set_id( $id );
		}

		$group_rows = $datastore->load_values( $name );
		$input_groups = array();

		foreach ( $group_rows as $row ) {
			if ( ! preg_match( static::get_complex_field_regex( $name ), $row['field_key'], $field_name ) ) {
					continue;
			}

			$row['field_value'] = maybe_unserialize( $row['field_value'] );

			// backward compatibility for Relationship field
			$row['field_value'] = static::parse_relationship_field( $row['field_value'] );

			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			if ( ! empty( $field_name['trailing'] ) ) {
				$input_groups = static::expand_nested_field( $input_groups, $row, $field_name );
			} else if ( ! empty( $field_name['sub'] ) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		static::ksort_recursive( $input_groups );

		return $input_groups;
	}

	/**
	 * Recursively expand the subfields of a complex field.
	 *
	 * @param  array $input_groups Input groups.
	 * @param  array $row          Data row (key and value).
	 * @param  array $field_name   Field name pieces.
	 * @return array               Expanded data.
	 */
	public static function expand_nested_field( $input_groups, $row, $field_name ) {
		$subfield_key_token = $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'];
		if ( ! preg_match( static::get_complex_field_regex( $field_name['key'] ), $subfield_key_token, $subfield_name ) ) {
			return $input_groups;
		}

		$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];

		if ( ! empty( $subfield_name['trailing'] ) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = static::expand_nested_field( $input_groups[ $field_name['index'] ][ $field_name['key'] ], $row, $subfield_name );
		} else if ( ! empty( $subfield_name['sub'] ) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ][ $subfield_name['sub'] ] = $row['field_value'];
		} else {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ] = $row['field_value'];
		}

		return $input_groups;
	}

	/**
	 * Parse the raw value of the relationship and association fields.
	 *
	 * @param  string $raw_value Raw relationship value.
	 * @param  string $type      Field type.
	 * @return array             Array of parsed data.
	 */
	public static function parse_relationship_field( $raw_value = '', $type = '' ) {
		if ( $raw_value && is_array( $raw_value ) ) {
			$value = array();
			foreach ( $raw_value as $raw_value_item ) {
				if ( is_string( $raw_value_item ) && strpos( $raw_value_item, ':' ) !== false ) {
					$item_data = explode( ':', $raw_value_item );
					$item = array(
						'id' => $item_data[2],
						'type' => $item_data[0],
					);

					if ( $item_data[0] === 'post' ) {
						$item['post_type'] = $item_data[1];
					} elseif ( $item_data[0] === 'term' ) {
						$item['taxonomy'] = $item_data[1];
					}

					$value[] = $item;
				} elseif ( $type === 'association' ) {
					$value[] = array(
						'id' => $raw_value_item,
						'type' => 'post',
						'post_type' => get_post_type( $raw_value_item ),
					);
				} else {
					$value[] = $raw_value_item;
				}
			}

			$raw_value = $value;
		}

		return $raw_value;
	}

	/**
	 * Detect if using the old way of storing the relationship field values.
	 * If so, parse them to the new way of storing the data.
	 *
	 * @param  mixed $value Old field value.
	 * @return mixed        New field value.
	 */
	public static function maybe_old_relationship_field( $value ) {
		if ( is_array( $value ) && ! empty( $value ) && ! empty( $value[0] ) ) {
			if ( preg_match( '~^\w+:\w+:\d+$~', $value[0] ) ) {
				$new_value = array();
				foreach ( $value as $value_entry ) {
					$pieces = explode( ':', $value_entry );
					$new_value[] = $pieces[2];
				}
				$value = $new_value;
			}
		}

		return $value;
	}

	/**
	 * Recursive sorting function by array key.
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
			static::ksort_recursive( $array[ $key ], $sort_flags );
		}

		return true;
	}
}
