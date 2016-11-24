<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Templater\Templater;
use Carbon_Fields\Manager\Sidebar_Manager;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Helper functions and main initialization class.
 */
class Update_Meta_Helper {
	/**
	 * Create a new meta helper.
	 */
	public function __construct() {
	}

	/**
	 * Update post meta field for a post.
	 *
	 * @param  int    $id    Post ID.
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_post_meta( $id, $name, $value, $type = null ) {
		$name = $name[0] == '_' ? $name : '_' . $name;

		return self::update_field_value( 'post_meta', $name, $value, $type, $id );
	}

	/**
	 * Shorthand for update_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_the_post_meta( $name, $value, $type = null ) {
		return self::update_post_meta( get_the_ID(), $name, $value, $type );
	}

	/**
	 * Update theme option field value.
	 *
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_theme_option( $name, $value, $type = null ) {
		return self::update_field_value( 'theme_options', $name, $value, $type );
	}

	/**
	 * Update term meta field for a term.
	 *
	 * @param  int    $id    Term ID.
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_term_meta( $id, $name, $value, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::update_field_value( 'term_meta', $name, $value, $type, $id );
	}

	/**
	 * Update user meta field for a user.
	 *
	 * @param  int    $id    User ID.
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_user_meta( $id, $name, $value, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::update_field_value( 'user_meta', $name, $value, $type, $id );
	}

	/**
	 * Update comment meta field for a comment.
	 *
	 * @param  int    $id    Comment ID.
	 * @param  string $name  Custom field name.
	 * @param  mixed  $value Custom field content.
	 * @param  string $type  Custom field type (optional).
	 */
	public static function update_comment_meta( $id, $name, $value, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::update_field_value( 'comment_meta', $name, $value, $type, $id );
	}

	/**
	 * Update a certain field value from the database.
	 * Handles the logic for different field types.
	 *
	 * @param  string $data_type Data type.
	 * @param  string $name      Custom field name.
	 * @param  mixed  $value     Custom field content.
	 * @param  string $type      Custom field type (optional).
	 * @param  int    $id        ID (optional).
	 */
	public static function update_field_value( $data_type, $name, $value, $type = null, $id = null ) {
		// update_field_value( 'post_meta', $name, $value, $type, $id )
		$datastore_name = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $data_type ) ) );

		// Default Field Type
		if ( empty( $type ) ) {
			$type = 'text';
		}

		$field = Field::make( $type, $name );

		if ( ! $field->get_datastore() ) {
			$datastore = Datastore::factory( $data_type );
			$datastore->set_id( $id );

			$field->set_datastore( $datastore );
		}

		switch ( $type ) {
			case 'complex':
				self::update_complex_fields( $datastore_name, $name, $value, $id );
			break;

			case 'map':
			case 'map_with_address':
				$field->set_value( $value );
			break;

			case 'association':
				$field->set_value( $value );
				// $raw_value = self::update_field_value_by_store( $data_type, $name, $id );
				// $value = self::parse_relationship_field( $raw_value, $type );
			break;

			default:
				$field->set_value( $value );
		}

		$field->save();
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
	public static function update_complex_field_regex( $field_name, $group_names = array(), $field_names = array() ) {
		if ( ! empty( $group_names ) ) {
			$group_regex = self::preg_quote_array( $group_names );
		} else {
			$group_regex = '\w*';
		}

		if ( ! empty( $field_names ) ) {
			$field_regex = self::preg_quote_array( $field_names );
		} else {
			$field_regex = '.*?';
		}

		return '~^' . preg_quote( $field_name, '~' ) . '(?P<group>' . $group_regex . ')-_?(?P<key>' . $field_regex . ')_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~';
	}

	/**
	 * Update the complex field data for a certain field.
	 *
	 * @param  string $type Datastore type.
	 * @param  string $name Name of the field.
	 * @param  int    $id   ID of the entry (optional).
	 * @return array        Complex data entries.
	 */
	public static function update_complex_fields( $type, $name, $value, $id = null ) {
		$datastore = Datastore::factory( $type );

		if ( $id !== null ) {
			$datastore->set_id( $id );
		}

		$group_rows = $datastore->load_values( $name );
		$input_groups = array();

		foreach ( $group_rows as $row ) {
			if ( ! preg_match( self::update_complex_field_regex( $name ), $row['field_key'], $field_name ) ) {
					continue;
			}

			$row['field_value'] = maybe_unserialize( $row['field_value'] );

			// backward compatibility for Relationship field
			$row['field_value'] = self::parse_relationship_field( $row['field_value'] );

			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			if ( ! empty( $field_name['trailing'] ) ) {
				$input_groups = self::expand_nested_field( $input_groups, $row, $field_name );
			} else if ( ! empty( $field_name['sub'] ) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		self::ksort_recursive( $input_groups );

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
		if ( ! preg_match( self::update_complex_field_regex( $field_name['key'] ), $subfield_key_token, $subfield_name ) ) {
			return $input_groups;
		}

		$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];

		if ( ! empty( $subfield_name['trailing'] ) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = self::expand_nested_field( $input_groups[ $field_name['index'] ][ $field_name['key'] ], $row, $subfield_name );
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
			self::ksort_recursive( $array[ $key ], $sort_flags );
		}

		return true;
	}
}
