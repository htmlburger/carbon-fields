<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Field\Group_Field;

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
	 * @param  string $type      Custom field type.
	 * @param  int    $id        ID.
	 */
	public static function update_field_value( $data_type, $name, $value, $type = null, $id ) {
		$datastore_name = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $data_type ) ) );

		// Default Field Type
		if ( empty( $type ) ) {
			$type = 'text';
		}

		$field = Field::make( $type, $name );

		switch ( $type ) {
			case 'complex':
				$groups = array();

				// Initialize $field object
				$groups = self::get_complex_groups( $value );
				self::initialize_complex_groups( $field, $groups, $data_type, $id );

				// Convert input data format
				$formatted_value = self::maybe_parse_complex( $value );

				$field->set_value_from_input( array(
					$name => $formatted_value,
				) );
			break;

			case 'map':
			case 'map_with_address':
				$field->set_value( $value );
			break;

			case 'association':
				$formatted_value = self::maybe_parse_association( $value );

				$field->set_value( $formatted_value );
			break;

			case 'relationship':
				$formatted_value = array_map( 'strval', array_values( $value ) );

				$field->set_value( $formatted_value );
			break;

			default:
				$field->set_value( $value );
		}

		// Setup Datastore, must run just before save()
		if ( ! $field->get_datastore() ) {
			$datastore = Datastore::factory( $data_type );
			$datastore->set_id( $id );

			$field->set_datastore( $datastore );
		}

		$field->save();
	}

	/**
	 * Return Complex Groups and all Fields associated with them, that are present in the input data
	 *
	 * @param  mixed $complex_array Maybe array of complex values
	 * @return array $groups Array of all groups=>fields
	 */
	public static function get_complex_groups( $complex_array ) {
		$groups = array();

		if ( ! is_array( $complex_array ) ) {
			return $groups;
		}

		if ( ! self::is_complex( $complex_array ) ) {
			return $groups;
		}

		foreach ( $complex_array as $index => $complex_row ) {

			$type = $complex_row['_type'];
			if ( empty( $groups[$type] ) ) {
				$groups[$type] = array();
			}

			foreach ( $complex_row as $field_key => $field_value ) {
				if ( $field_key === '_type' ) {
					continue;
				}

				if ( self::is_complex( $field_value ) ) {
					$groups[$type][$field_key] = self::get_complex_groups( $field_value, $groups );
				} else {
					$groups[$type][$field_key] = self::get_field_type( $field_value );
				}
			}
		}

		return $groups;
	}

	/**
	 * Register Field Groups
	 *
	 * @param  mixed  $complex_field Refference to Complex Field object
	 * @param  array  $groups        Array of already existing groups (generated by the get_complex_groups)
	 * @param  string $data_type     Data type.
	 * @param  int    $id            ID.
	 */
	public static function initialize_complex_groups( &$complex_field, $groups, $data_type, $id ) {
		if ( ! is_array( $groups ) ) {
			return;
		}

		foreach ( $groups as $group_label => $group_fields ) {
			$current_group_fields = array();

			foreach ( $group_fields as $field_name => $field_type ) {
				// Recursively walk complex fields
				if ( is_array( $field_type ) ) {
					$tmp_field = Field::make( 'complex', $field_name );
					self::initialize_complex_groups( $tmp_field, $field_type, $data_type, $id );
				} else {
					$tmp_field = Field::make( $field_type, $field_name );
				}

				if ( ! $tmp_field->get_datastore() ) {
					$datastore = Datastore::factory( $data_type );
					$datastore->set_id( $id );

					$tmp_field->set_datastore( $datastore );
				}

				$current_group_fields[] = $tmp_field;
			}

			$complex_field->add_fields( $group_label, $current_group_fields );
		}
	}

	/**
	 * Recursively Build an array of complex field values, that matches the Post Data when normally publishing complex entries
	 *
	 * @param  mixed  $complex_array  Maybe Complex array
	 * @return mixed                  Formatted array or Original input
	 */
	public static function maybe_parse_complex( $complex_array ) {
		// Check if the current entry is complex entry
		if ( ! is_array( $complex_array ) ) {
			return $complex_array;
		}

		$complex_array = self::maybe_parse_association( $complex_array );

		if ( ! self::is_complex( $complex_array ) ) {
			return $complex_array;
		}

		$new_complex_array = array();
		foreach ( $complex_array as $index => $complex_row ) {
			$new_complex_row = array();

			foreach ( $complex_row as $field_key => $field_value ) {
				$field_key = $field_key[0] == '_' ? $field_key: '_' . $field_key;

				if ( $field_key === '_type' ) {
					$new_complex_row['group'] = $field_value;
					continue;
				}

				$new_complex_row[$field_key] = self::maybe_parse_complex( $field_value );
			}

			$new_complex_array[$index] = $new_complex_row;
		}

		return $new_complex_array;
	}

	/**
	 * Parse an Association array to an array of strings containing "type:subtype:id"
	 *
	 * @param  mixed $value Maybe Association array
	 * @return mixed        Formatted array or Original input
	 */
	public static function maybe_parse_association( $association_array ) {
		// Check if the current entry is association entry
		if ( ! is_array( $association_array ) ) {
			return $association_array;
		}

		$formatted_value = array();
		foreach ( $association_array as $index => $data ) {
			if ( self::is_association( $data ) ) {
				$formatted_value[$index] = array(
					0 => $data['type'],
					1 => !empty( $data['post_type'] ) ? $data['post_type'] : $data['taxonomy'],
					2 => strval( $data['id'] ),
				);

				$formatted_value[$index] = implode( ':', $formatted_value[$index] );
			} else {
				$formatted_value[$index] = $data;
			}
		}

		return $formatted_value;
	}

	/**
	 * Return the field type
	 */
	public static function get_field_type( $value ) {
		// Default Field Type
		$type = 'text';

		if ( !empty( $value['_field_type'] ) ) {
			$type = $value['_field_type'];
		} elseif ( self::is_map( $value ) ) {
			$type = 'map';
		} elseif ( self::is_association( $value ) ) {
			$type = 'association';
		}

		return $type;
	}

	/**
	 * Check if a given array contains Complex field data
	 *
	 * @param  mixed $value Maybe Complex values array
	 * @return bool         True if $value is Complex array
	 */
	public static function is_complex( $value ) {
		return ! empty( $value[0] ) && ! empty( $value[0]['_type'] );
	}

	/**
	 * Check if a given array contains Association field data
	 *
	 * @param  mixed $value Maybe Association array
	 * @return bool         True if $value is Association array
	 */
	public static function is_association( $value ) {
		return !empty( $value['type'] )
			&& ( !empty( $value['post_type'] ) || !empty( $value['taxonomy'] ) )
			&& !empty( $value['id'] );
	}

	/**
	 * Check if a given array contains Map field data
	 *
	 * @param  mixed $value Maybe Map array
	 * @return bool         True if $value is Map array
	 */
	public static function is_map( $value ) {
		return !empty( $value['lat'] ) && !empty( $value['lng'] );
	}
}
