<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Value_Set\Value_Set;

/**
 * Association field class.
 * Allows selecting and manually sorting entries from various types:
 *  - Posts
 *  - Terms
 *  - Users
 *  - Comments
 */
class Association_Field extends Field {
	use Association\Queries_Options,
		Association\Formats_Options;

	/**
	 * WP_Toolset instance for WP data loading
	 *
	 * @var Carbon_Fields\Toolset\WP_Toolset
	 */
	protected $wp_toolset;

	/**
	 * Min number of selected items allowed. -1 for no limit
	 *
	 * @var integer
	 */
	protected $min = -1;

	/**
	 * Max number of selected items allowed. -1 for no limit
	 *
	 * @var integer
	 */
	protected $max = -1;

	/**
	 * Max items per page. -1 for no limit
	 *
	 * @var integer
	 */
	protected $items_per_page = 10;

	/**
	 * Allow items to be added multiple times
	 *
	 * @var boolean
	 */
	protected $duplicates_allowed = false;

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Types of entries to associate with.
	 * @var array
	 */
	protected $types = array(
		array(
			'type' => 'post',
			'post_type' => 'post',
		),
	);

	/**
	 * Create a field from a certain type with the specified label.
	 *
	 * @param string $type  Field type
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	public function __construct( $type, $name, $label ) {
		$this->wp_toolset = \Carbon_Fields\Carbon_Fields::resolve( 'wp_toolset' );
		$this->set_value_set( new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'type' => '', 'subtype' => '', 'id' => 0 ) ) );
		parent::__construct( $type, $name, $label );
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_value_from_input( $input ) {
		$value = array();
		if ( isset( $input[ $this->get_name() ] ) ) {
			$value = stripslashes_deep( $input[ $this->get_name() ] );
			if ( is_array( $value ) ) {
				$value = array_values( $value );
			}
		}
		$this->set_value( $value );
		return $this;
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_value( $value ) {
		$value = $this->value_string_array_to_value_set( $value );
		return parent::set_value( $value );
	}

	/**
	 * Get value string for legacy value
	 *
	 * @return string
	 */
	protected function get_value_string_for_legacy_value( $legacy_value ) {
		$entry_type = 'post';
		$entry_subtype = 'post';

		// attempt to find a suitable type that is registered to this field as post type is not stored for legacy data
		foreach ( $this->types as $type ) {
			if ( $type['type'] === $entry_type ) {
				$entry_subtype = $type['post_type'];
				break;
			}
		}

		return $entry_type . ':' . $entry_subtype . ':' . $legacy_value;
	}

	/**
	 * Convert a colon:separated:string into its expected components
	 * Used for backwards compatibility to CF 1.5
	 *
	 * @param string $value_string
	 * @return array
	 */
	protected function value_string_to_property_array( $value_string ) {
		if ( is_numeric( $value_string ) ) {
			// we are dealing with legacy data that only contains a post ID
			$value_string = $this->get_value_string_for_legacy_value( $value_string );
		}

		$value_pieces = explode( ':', $value_string );
		$type = isset( $value_pieces[0] ) ? $value_pieces[0] : 'post';
		$subtype = isset( $value_pieces[1] ) ? $value_pieces[1] : 'post';
		$id = isset( $value_pieces[2] ) ? $value_pieces[2] : 0;

		$property_array = array(
			Value_Set::VALUE_PROPERTY => $value_string,
			'type' => $type,
			'subtype' => $subtype,
			'id' => intval( $id ),
		);
		return $property_array;
	}

	/**
	 * Convert a colon:separated:string into its expected components
	 * Used for backwards compatibility to CF 1.5
	 *
	 * @param array $value_string_array
	 * @return array<array>
	 */
	protected function value_string_array_to_value_set( $value_string_array ) {
		$value_set = array();
		foreach ( $value_string_array as $raw_value_entry ) {
			$value_string = $raw_value_entry;

			if ( is_array( $raw_value_entry ) ) {
				if ( isset( $raw_value_entry['type'] ) ) {
					// array is already in suitable format
					$value_set[] = $raw_value_entry;
					continue;
				}
				$value_string = $raw_value_entry[ Value_Set::VALUE_PROPERTY ];
			}
			$value_string = trim( $value_string );
			if ( empty( $value_string ) ) {
				continue;
			}

			$property_array = $this->value_string_to_property_array( $value_string );
			$value_set[] = $property_array;
		}

		return $value_set;
	}

	/**
	 * Generate the item options.
	 *
	 * @access public
	 *
	 * @param  array $args
	 * @return array $options The selectable options of the association field.
	 */
	public function get_options( $args = array() ) {
		global $wpdb;

		$args = wp_parse_args( $args, [
			'page' => 1,
			'term' => '',
		] );

		$sql_queries = [];

		foreach ( $this->types as $type ) {
			$type_args = array_merge( $type, [
				'term' => $args['term'],
			] );

			$callback = "get_{$type['type']}_options_sql";

			$sql_statement = $this->$callback( $type_args );

			$sql_queries[] = $sql_statement;
		}

		$sql_queries = implode( " UNION ", $sql_queries );

		$per_page = $this->get_items_per_page();
		$offset   = ($args['page'] - 1) * $per_page;

		$sql_queries .= " ORDER BY `title` ASC LIMIT {$per_page} OFFSET {$offset}";

		$results = $wpdb->get_results( $sql_queries );

		$options = [];

		foreach ( $results as $result ) {
			$callback = "format_{$result->type}_option";

			$options[] = $this->$callback( $result );
		}

		/**
		 * Filter the final list of options, available to a certain association field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the association field.
		 */
		$options = apply_filters( 'carbon_fields_association_field_options', $options, $this->get_base_name() );

		return $options;
	}

	/**
	 * Modify the types.
	 *
	 * @param  array $types New types
	 * @return self  $this
	 */
	public function set_types( $types ) {
		$this->types = $types;
		return $this;
	}

	/**
	 * Get the minimum allowed number of selected entries.
	 *
	 * @return int
	 */
	public function get_min() {
		return $this->min;
	}

	/**
	 * Set the minimum allowed number of selected entries.
	 *
	 * @param  int   $min
	 * @return self  $this
	 */
	public function set_min( $min ) {
		$this->min = intval( $min );
		return $this;
	}

	/**
	 * Get the maximum allowed number of selected entries.
	 *
	 * @return int
	 */
	public function get_max() {
		return $this->max;
	}

	/**
	 * Set the maximum allowed number of selected entries.
	 *
	 * @param  int   $max
	 * @return self  $this
	 */
	public function set_max( $max ) {
		$this->max = intval( $max );
		return $this;
	}

	/**
	 * Set the items per page.
	 *
	 * @param  int   $items_per_page
	 * @return self  $this
	 */
	public function set_items_per_page( $items_per_page ) {
		$this->items_per_page = intval( $items_per_page );
		return $this;
	}

	/**
	 * Get the items per page.
	 *
	 * @param  int   $items_per_page
	 * @return self  $this
	 */
	public function get_items_per_page() {
		return $this->items_per_page;
	}

	/**
	 * Get whether entry duplicates are allowed.
	 *
	 * @return boolean
	 */
	public function get_duplicates_allowed() {
		return $this->duplicates_allowed;
	}

	/**
	 * Set whether entry duplicates are allowed.
	 *
	 * @param  boolean $allowed
	 * @return self    $this
	 */
	public function set_duplicates_allowed( $allowed ) {
		$this->duplicates_allowed = $allowed;
		return $this;
	}

	/**
	 * Specify whether to allow each entry to be selected multiple times.
	 * Backwards-compatibility alias.
	 *
	 * @param  boolean $allow
	 * @return self    $this
	 */
	public function allow_duplicates( $allow = true ) {
		return $this->set_duplicates_allowed( $allow );
	}

	/**
	 * Converts the field values into a usable associative array.
	 *
	 * The association data is saved in the database in the following format:
	 * 	array (
	 *		0 => 'post:page:4',
	 *		1 => 'term:category:2',
	 *		2 => 'user:user:1',
	 * 	)
	 * where the value of each array item contains:
	 * 	- Type of data (post, term, user or comment)
	 * 	- Subtype of data (the particular post type or taxonomy)
	 * 	- ID of the item (the database ID of the item)
	 */
	protected function value_to_json() {
		$value_set = $this->get_value();
		$value = array();
		foreach ( $value_set as $entry ) {
			$item = array(
				'type' => $entry['type'],
				'subtype' => $entry['subtype'],
				'id' => intval( $entry['id'] ),
				'title' => $this->get_title_by_type( $entry['id'], $entry['type'], $entry['subtype'] ),
				'label' => $this->get_item_label( $entry['id'], $entry['type'], $entry['subtype'] ),
				'is_trashed' => ( $entry['type'] == 'post' && get_post_status( $entry['id'] ) === 'trash' ),
			);
			$value[] = $item;
		}
		return $value;
	}

	/**
	 * Convert the field data into JSON representation.
	 * @param  bool $load Whether to load data from the datastore.
	 * @return mixed      The JSON field data.
	 */
	public function to_json( $load ) {

		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'value' => $this->value_to_json(),
			'options' => array(),
			'min' => $this->get_min(),
			'max' => $this->get_max(),
			'duplicates_allowed' => $this->duplicates_allowed,
		) );

		return $field_data;
	}
}
