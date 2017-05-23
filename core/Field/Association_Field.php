<?php

namespace Carbon_Fields\Field;

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
	 * Modify the types.
	 * @param array $types New types
	 */
	public function set_types( $types ) {
		$this->types = $types;
		return $this;
	}

	/**
	 * Deprecated way to set the types.
	 * Works only for post types.
	 *
	 * @deprecated
	 * @see set_types()
	 *
	 * @param string $post_type Post type
	 */
	public function set_post_type( $post_type ) {
		$this->set_types( array(
			array(
				'type' => 'post',
				'post_type' => $post_type,
			),
		) );

		return $this;
	}

	/**
	 * Converts the database values into a usable associative array.
	 *
	 * The relationship data is saved in the database in the following format:
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
	public function process_value() {
		$raw_value = maybe_unserialize( $this->get_value() );
		if ( ! $raw_value ) {
			$raw_value = array();
		}

		$value = array();
		foreach ( $raw_value as $raw_value_entry ) {
			if ( is_string( $raw_value_entry ) ) {
				$value_pieces = explode( ':', $raw_value_entry );
			} else {
				$value_pieces = array_values( $raw_value_entry );
			}

			$item = array(
				'type' => $value_pieces[0],
				'subtype' => $value_pieces[1],
				'id' => $value_pieces[2],
				'title' => $this->get_title_by_type( $value_pieces[2], $value_pieces[0], $value_pieces[1] ),
				'label' => $this->get_item_label( $value_pieces[2], $value_pieces[0], $value_pieces[1] ),
				'is_trashed' => ( $value_pieces[0] == 'post' && get_post_status( $value_pieces[2] ) == 'trash' ),
			);
			$value[] = $item;
		}

		$this->set_value( $value );
	}

	/**
	 * Used to get the title of an item.
	 *
	 * Can be overriden or extended by the `carbon_relationship_title` filter.
	 *
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	public function get_title_by_type( $id, $type, $subtype = '' ) {
		$title = '';

		if ( $type === 'post' ) {
			$title = get_the_title( $id );
		} elseif ( $type === 'term' ) {
			$term = get_term_by( 'id', $id, $subtype );
			if ( $term ) {
				$title = $term->name;
			}
		} elseif ( $type === 'user' ) {
			$title = get_the_author_meta( 'user_login', $id );
		} elseif ( $type === 'comment' ) {
			$title = get_comment_text( $id );
			$max = apply_filters( 'carbon_relationship_comment_length', 30, $this->get_name() );
			if ( strlen( $title ) > $max ) {
				$title = substr( $title, 0, $max ) . '...';
			}
		}

		if ( ! $title ) {
			$title = '(no title) - ID: ' . $id;
		}

		/**
		 * Filter the title of the relationship item.
		 *
		 * @param string $title   The unfiltered item title.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_relationship_title', $title, $this->get_name(), $id, $type, $subtype );
	}

	/**
	 * Used to get the label of an item.
	 *
	 * Can be overriden or extended by the `carbon_relationship_item_label` filter.
	 *
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype Subtype - "page", "post", "category", etc.
	 * @return string $label The label of the item.
	 */
	public function get_item_label( $id, $type, $subtype = '' ) {
		$label = $subtype ? $subtype : $type;

		if ( $type === 'post' ) {
			$post_type_object = get_post_type_object( $subtype );
			$label = $post_type_object->labels->singular_name;
		} elseif ( $type === 'term' ) {
			$taxonomy_object = get_taxonomy( $subtype );
			$label = $taxonomy_object->labels->singular_name;
		}

		/**
		 * Filter the label of the relationship item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_relationship_item_label', $label, $this->get_name(), $id, $type, $subtype );
	}

	/**
	 * Generate the item options for the relationship field.
	 *
	 * @return array $options The selectable options of the relationship field.
	 */
	public function get_options() {
		$options = array();

		foreach ( $this->types as $type ) {

			if ( $type['type'] === 'post' ) { // populate posts

				/**
				 * Filter the default query when fetching posts for a particular field.
				 *
				 * @param array $args The parameters, passed to get_posts().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['post_type'];
				$args = apply_filters( $filter_name, array(
					'post_type' => $type['post_type'],
					'posts_per_page' => -1,
					'fields' => 'ids',
					'suppress_filters' => false,
				) );

				// fetch and prepare posts as relationship items
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
				$options = array_merge( $options, $posts );

			} elseif ( $type['type'] === 'term' ) { // populate taxonomy terms

				/**
				 * Filter the default parameters when fetching terms for a particular field.
				 *
				 * @param array $args The parameters, passed to get_terms().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'] . '_' . $type['taxonomy'];
				$args = apply_filters( $filter_name, array(
					'hide_empty' => 0,
					'fields' => 'id=>name',
				) );

				// fetch and prepare terms as relationship items
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
				$options = array_merge( $options, $terms );

			} elseif ( $type['type'] === 'user' ) { // populate users

				/**
				 * Filter the default parameters when fetching users for a particular field.
				 *
				 * @param array $args The parameters, passed to get_users().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'];
				$args = apply_filters( $filter_name, array(
					'fields' => 'ID',
				) );

				// fetch and prepare users as relationship items
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
				$options = array_merge( $options, $users );

			} elseif ( $type['type'] === 'comment' ) { // populate comments

				/**
				 * Filter the default parameters when fetching comments for a particular field.
				 *
				 * @param array $args The parameters, passed to get_comments().
				 */
				$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_' . $type['type'];
				$args = apply_filters( $filter_name, array(
					'fields' => 'ids',
				) );

				// fetch and prepare comments as relationship items
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
				$options = array_merge( $options, $comments );

			}
		}

		/**
		 * Filter the final list of options, available to a certain relationship field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the relationship field.
		 */
		$options = apply_filters( 'carbon_relationship_options', $options, $this->get_name() );

		return $options;
	}

	/**
	 * Retrieve the edit link of a particular object.
	 *
	 * @param  string $type Object type.
	 * @param  int $id      ID of the object.
	 * @return string       URL of the edit link.
	 */
	public function get_object_edit_link( $type, $id ) {
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
	 * Convert the field data into JSON representation.
	 * @param  bool $load Whether to load data from the datastore.
	 * @return mixed      The JSON field data.
	 */
	public function to_json( $load ) {
		$field_data = Field::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'options' => $this->get_options(),
			'max' => $this->max,
			'allow_duplicates' => $this->allow_duplicates,
		) );

		$i = 0;
		foreach ( $field_data['value'] as $key => $value ) {
			$field_data['value'][$key]['fieldIndex'] = $i;
			$i++;
		}
		$field_data['nextfieldIndex'] = $i;

		return $field_data;
	}

	/**
	 * Serves as a backbone template for the relationship items.
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
					<em class="edit-link dashicons-before dashicons-edit" data-href="{{{ item.edit_link }}}"><?php _e( 'Edit', 'carbon-fields' ); ?></em>
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
