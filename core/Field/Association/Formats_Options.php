<?php

namespace Carbon_Fields\Field\Association;

use WP_Query;

trait Formats_Options {
	/**
	 * Used to get the thumbnail of an item.
	 *
	 * Can be overriden or extended by the `carbon_fields_association_field_option_thumbnail` filter.
	 *
	 * @param int $id The database ID of the item.
	 * @param string $type Item type (post, term, user, comment, or a custom one).
	 * @param string $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	public function get_thumbnail_by_type( $id, $type, $subtype = '' ) {
		$thumbnail_url = '';

		if ( $type === 'post' ) {
			$thumbnail_url = get_the_post_thumbnail_url( $id, 'thumbnail' );
		}

		return apply_filters( 'carbon_fields_association_field_option_thumbnail', $thumbnail_url, $id, $type, $subtype );
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
	public function get_title_by_type( $id, $type, $subtype = '' ) {
		$title = '';

		$method = 'get_' . $type . '_title';
		$callable = array( $this->wp_toolset, $method );
		if ( is_callable( $callable ) ) {
			$title = call_user_func( $callable, $id, $subtype );
		}

		if ( $type === 'comment' ) {
			$max = apply_filters( 'carbon_fields_association_field_comment_length', 30, $this->get_base_name() );
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
		$title = apply_filters( 'carbon_fields_association_field_title', $title, $this->get_base_name(), $id, $type, $subtype );

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
		 * Filter the label of the association item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the association field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_fields_association_field_item_label', $label, $this->get_base_name(), $id, $type, $subtype );
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
				$edit_link = get_edit_term_link( $id, '', $type['type'] );
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
	 * Prepares an option of type 'post' for JS usage.
	 *
	 * @param  array  $data
	 * @return array
	 */
	public function format_post_option( $data ) {
		return array(
			'id'         => intval( $data->ID ),
			'title'      => $this->get_title_by_type( $data->ID, $data->type, $data->subtype ),
			'thumbnail'  => get_the_post_thumbnail_url( $data->ID, 'thumbnail' ),
			'type'       => $data->type,
			'subtype'    => $data->subtype,
			'label'      => $this->get_item_label( $data->ID, $data->type, $data->subtype ),
			'is_trashed' => ( get_post_status( $data->ID ) == 'trash' ),
			'edit_link'  => $this->get_object_edit_link( get_object_vars( $data ), $data->ID ),
		);
	}

	/**
	 * Prepares an option of type 'term' for JS usage.
	 *
	 * @param  array  $data
	 * @return array
	 */
	public function format_term_option( $data ) {
		return array(
			'id'         => intval( $data->ID ),
			'title'      => $data->title,
			'thumbnail'  => '',
			'type'       => $data->type,
			'subtype'    => $data->subtype,
			'label'      => $this->get_item_label( $data, $data->type, $data->subtype ),
			'is_trashed' => false,
			'edit_link'  => $this->get_object_edit_link( get_object_vars( $data ), $data->ID ),
		);
	}

	/**
	 * Prepares an option of type 'comment' for JS usage.
	 *
	 * @param  array  $data
	 * @return array
	 */
	public function format_comment_option( $data ) {
		return array(
			'id'         => intval( $data->ID ),
			'title'      => $this->get_title_by_type( $data->ID, 'comment' ),
			'thumbnail'  => '',
			'type'       => 'comment',
			'subtype'    => 'comment',
			'label'      => $this->get_item_label( $data->ID, 'comment' ),
			'is_trashed' => false,
			'edit_link'  => $this->get_object_edit_link( get_object_vars( $data ), $data->ID ),
		);
	}

	/**
	 * Prepares an option of type 'user' for JS usage.
	 *
	 * @param  array  $data
	 * @return array
	 */
	public function format_user_option( $data ) {
		return array(
			'id'         => intval( $data->ID ),
			'title'      => $this->get_title_by_type( $data->ID, 'user' ),
			'thumbnail'  => get_avatar_url( $data->ID, array( 'size' => 150 ) ),
			'type'       => 'user',
			'subtype'    => 'user',
			'label'      => $this->get_item_label( $data->ID, 'user' ),
			'is_trashed' => false,
			'edit_link'  => $this->get_object_edit_link( get_object_vars( $data ), $data->ID ),
		);
	}
}
