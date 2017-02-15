<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\App;
use Carbon_Fields\Value_Set\Value_Set;

/**
 * Association field class.
 * Allows selecting and manually sorting entries from various types:
 *  - Posts
 *  - Terms
 *  - Users
 *  - Comments
 */
class Association_Field extends Relationship_Field {
	
	/**
	 * WP_Toolset instance
	 * @var Carbon_Fields\Toolset\WP_Toolset
	 */
	protected $wp_toolset;

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
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	protected function __construct( $name, $label ) {
		$this->wp_toolset = App::resolve( 'wp_toolset' );
		$this->value = new Value_Set( Value_Set::TYPE_VALUE_SET, array( 'type' => '', 'subtype' => '', 'object_id' => 0 ) );
		Field::__construct( $name, $label );
	}

	/**
	 * Alias for $this->value()->set( $value );
	 **/
	public function set_value( $value ) {
		$value = $this->value_string_array_to_value_set( $value );
		parent::set_value( $value );
	}

	/**
	 * Convert a colo:separated:string into it's expected components
	 * Used for backwards compatibility to CF 1.5
	 * 
	 * @param string $value_string
	 * @return array
	 */
	protected function value_string_to_property_array( $value_string ) {
		$value_pieces = explode( ':', $value_string );
		$property_array = array(
			Value_Set::VALUE_PROPERTY => $value_string,
			'type' => $value_pieces[0],
			'subtype' => $value_pieces[1],
			'object_id' => $value_pieces[2],
		);
		return $property_array;
	}

	/**
	 * Convert a colon:separated:string into it's expected components
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

			$property_array = $this->value_string_to_property_array( $value_string );
			$value_set[] = $property_array;
		}
		return $value_set;
	}

	/**
	 * Used to get the title of an item.
	 *
	 * Can be overriden or extended by the `carbon_association_title` filter.
	 *
	 * @param int $id The database ID of the item.
	 * @param string $type Item type (post, term, user, comment, or a custom one).
	 * @param string $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	protected function get_title_by_type( $id, $type, $subtype = '' ) {
		$title = '';

		$method = 'get_' . $type . '_title';
		$callable = array( $this->wp_toolset, $method );
		if ( is_callable( $callable ) ) {
			$title = call_user_func( $callable, $id, $subtype );
		}

		if ( $type === 'comment' ) {
			$max = apply_filters( 'carbon_association_comment_length', 30, $this->get_name() );
			if ( strlen( $title ) > $max ) {
				$title = substr( $title, 0, $max ) . '...';
			}
		}

		/**
		 * Filter the title of the association item.
		 *
		 * @param string $title   The unfiltered item title.
		 * @param string $name    Name of the association field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		$title = apply_filters( 'carbon_association_title', $title, $this->get_name(), $id, $type, $subtype );

		if ( ! $title ) {
			$title = '(no title) - ID: ' . $id;
		}

		return $title;
	}

	/**
	 * Used to get the label of an item.
	 *
	 * Can be overriden or extended by the `carbon_association_item_label` filter.
	 *
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype Subtype - "page", "post", "category", etc.
	 * @return string $label The label of the item.
	 */
	protected function get_item_label( $id, $type, $subtype = '' ) {
		$label = $subtype ? $subtype : $type;

		if ( $type === 'post' ) {
			$post_type_object = get_post_type_object( $subtype );
			$label = $post_type_object->labels->singular_name;
		} elseif ( $type === 'term' ) {
			$taxonomy_object = get_taxonomy( $subtype );
			$label = $taxonomy_object->labels->singular_name;
		}

		/**
		 * Filter the label of the association item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the association field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_association_item_label', $label, $this->get_name(), $id, $type, $subtype );
	}

	/**
	 * Get post options
	 *
	 * @return array $options
	 */
	protected function get_post_options( $type ) {
		/**
		 * Filter the default query when fetching posts for a particular field.
		 *
		 * @param array $args The parameters, passed to get_posts().
		 */
		$filter_name = 'carbon_association_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['post_type'];
		$args = apply_filters( $filter_name, array(
			'post_type' => $type['post_type'],
			'posts_per_page' => -1,
			'fields' => 'ids',
			'suppress_filters' => false,
		) );

		// fetch and prepare posts as association items
		$posts = get_posts( $args );
		foreach ( $posts as &$p ) {
			$p = array(
				'id' => $p,
				'title' => $this->get_title_by_type( $p, $type['type'], $type['post_type'] ),
				'type' => $type['type'],
				'subtype' => $type['post_type'],
				'label' => $this->get_item_label( $p, $type['type'], $type['post_type'] ),
				'is_trashed' => ( get_post_status( $p ) == 'trash' ),
				'edit_link' => $this->get_object_edit_link( $type, $p ),
			);
		}
		return $posts;
	}

	/**
	 * Get term options
	 *
	 * @return array $options
	 */
	protected function get_term_options( $type ) {
		/**
		 * Filter the default parameters when fetching terms for a particular field.
		 *
		 * @param array $args The parameters, passed to get_terms().
		 */
		$filter_name = 'carbon_association_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['taxonomy'];
		$args = apply_filters( $filter_name, array(
			'hide_empty' => 0,
			'fields' => 'id=>name',
		) );

		// fetch and prepare terms as association items
		$terms = get_terms( $type['taxonomy'], $args );
		foreach ( $terms as $term_id => &$term ) {
			$term = array(
				'id' => $term_id,
				'title' => $term,
				'type' => $type['type'],
				'subtype' => $type['taxonomy'],
				'label' => $this->get_item_label( $term_id, $type['type'], $type['taxonomy'] ),
				'is_trashed' => false,
				'edit_link' => $this->get_object_edit_link( $type, $term_id ),
			);
		}
		return $terms;
	}

	/**
	 * Get user options
	 *
	 * @return array $options
	 */
	protected function get_user_options( $type ) {
		/**
		 * Filter the default parameters when fetching users for a particular field.
		 *
		 * @param array $args The parameters, passed to get_users().
		 */
		$filter_name = 'carbon_association_options_' . $this->get_name() . '_' . $type['type'];
		$args = apply_filters( $filter_name, array(
			'fields' => 'ID',
		) );

		// fetch and prepare users as association items
		$users = get_users( $args );
		foreach ( $users as &$u ) {
			$u = array(
				'id' => $u,
				'title' => $this->get_title_by_type( $u, $type['type'] ),
				'type' => $type['type'],
				'subtype' => 'user',
				'label' => $this->get_item_label( $u, $type['type'] ),
				'is_trashed' => false,
				'edit_link' => $this->get_object_edit_link( $type, $u ),
			);
		}
		return $users;
	}

	/**
	 * Get comment options
	 *
	 * @return array $options
	 */
	protected function get_comment_options( $type ) {
		/**
		 * Filter the default parameters when fetching comments for a particular field.
		 *
		 * @param array $args The parameters, passed to get_comments().
		 */
		$filter_name = 'carbon_association_options_' . $this->get_name() . '_' . $type['type'];
		$args = apply_filters( $filter_name, array(
			'fields' => 'ids',
		) );

		// fetch and prepare comments as association items
		$comments = get_comments( $args );
		foreach ( $comments as &$c ) {
			$c = array(
				'id' => $c,
				'title' => $this->get_title_by_type( $c, $type['type'] ),
				'type' => $type['type'],
				'subtype' => 'comment',
				'label' => $this->get_item_label( $c, $type['type'] ),
				'is_trashed' => false,
				'edit_link' => $this->get_object_edit_link( $type, $c ),
			);
		}
		return $comments;
	}

	/**
	 * Generate the item options.
	 *
	 * @return array $options The selectable options of the association field.
	 */
	public function get_options() {
		$options = array();

		foreach ( $this->types as $type ) {
			$method = 'get_' . $type['type'] . '_options';
			$callable = array( $this, $method );
			if ( is_callable( $callable ) ) {
				$options = array_merge( $options, call_user_func( $callable, $type ) );
			}
		}

		/**
		 * Filter the final list of options, available to a certain association field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the association field.
		 */
		$options = apply_filters( 'carbon_association_options', $options, $this->get_name() );

		return $options;
	}

	/**
	 * Retrieve the edit link of a particular object.
	 *
	 * @param  string $type Object type.
	 * @param  int $id      ID of the object.
	 * @return string       URL of the edit link.
	 */
	protected function get_object_edit_link( $type, $id ) {
		switch ( $type['type'] ) {

			case 'post':
				$edit_link = get_edit_post_link( $id );
				break;

			case 'term':
				$edit_link = get_edit_term_link( $id, $type['taxonomy'], $type['type'] );
				break;

			case 'comment':
				$edit_link = get_edit_comment_link( $id );
				break;

			case 'user':
				$edit_link = get_edit_user_link( $id );
				break;

			default:
				$edit_link = false;

		}

		return $edit_link;
	}

	/**
	 * Modify the types.
	 * @param array $types New types
	 */
	public function set_types( $types ) {
		$this->types = $types;
		return $this;
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
		foreach ( $value_set as $value_set_entry ) {
			$item = array(
				'type' => $value_set_entry['type'],
				'subtype' => $value_set_entry['subtype'],
				'id' => $value_set_entry['object_id'],
				'title' => $this->get_title_by_type( $value_set_entry['object_id'], $value_set_entry['type'], $value_set_entry['subtype'] ),
				'label' => $this->get_item_label( $value_set_entry['object_id'], $value_set_entry['type'], $value_set_entry['subtype'] ),
				'is_trashed' => ( $value_set_entry['type'] == 'post' && get_post_status( $value_set_entry['object_id'] ) === 'trash' ),
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
		$field_data = Field::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'value' => $this->value_to_json(),
			'options' => $this->get_options(),
			'max' => $this->max,
			'allow_duplicates' => $this->allow_duplicates,
		) );

		$i = 0;
		foreach ( $field_data['value'] as $key => $value ) {
			$field_data['value'][ $key ]['fieldIndex'] = $i;
			$i++;
		}
		$field_data['nextfieldIndex'] = $i;

		return $field_data;
	}

	/**
	 * Serves as a backbone template for the association items.
	 * Used for both the selected and the selectable options.
	 *
	 * @param bool $display_input Whether to display the selected item input field.
	 */
	public function item_template( $display_input = true ) {
		?>
		<li>
			<span class="mobile-handle dashicons-before dashicons-menu"></span>
			<a href="#" data-item-id="{{{ item.id }}}" data-item-title="{{{ item.title }}}" data-item-type="{{{ item.type }}}" data-item-subtype="{{{ item.subtype }}}" data-item-label="{{{ item.label }}}" data-value="{{{ item.type }}}:{{{ item.subtype }}}:{{{ item.id }}}">
				<# if ( item.edit_link ) { #>
					<em class="edit-link dashicons-before dashicons-edit" data-href="{{{ item.edit_link }}}"><?php _e( 'Edit', \Carbon_Fields\TEXT_DOMAIN ); ?></em>
				<# } #>
				<em>{{{ item.label }}}</em>
				<span class="dashicons-before dashicons-plus-alt"></span>
				{{{ item.title }}}
				<# if (item.is_trashed) { #>
					<i class="trashed dashicons-before dashicons-trash"></i>
				<# } #>
			</a>
			<?php if ( $display_input ) :  ?>
				<input type="hidden" name="{{{ name }}}[{{{ item.fieldIndex }}}]" value="{{{ item.type }}}:{{{ item.subtype }}}:{{{ item.id }}}" />
			<?php endif; ?>
		</li>
		<?php
	}
}
