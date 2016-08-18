<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Post meta (custom fields) datastore class.
 */
class Post_Meta_Datastore extends Meta_Datastore {
	/**
	 * ID of the post.
	 *
	 * @var int
	 */
	protected $post_id;

	/**
	 * Retrieve the type of meta data.
	 *
	 * @return string
	 */
	public function get_meta_type() {
		return 'post';
	}

	/**
	 * Retrieve the meta table name to query.
	 *
	 * @return string
	 */
	public function get_table_name() {
		global $wpdb;
		return $wpdb->postmeta;
	}

	/**
	 * Retrieve the meta table field name to query by.
	 *
	 * @return string
	 */
	public function get_table_field_name() {
		return 'post_id';
	}

	/**
	 * Set the post ID of the datastore.
	 *
	 * @param int $id ID of the post.
	 */
	public function set_id( $id ) {
		$this->post_id = $id;
	}

	/**
	 * Retrieve the post ID of the datastore.
	 *
	 * @return int ID of the post.
	 */
	public function get_id() {
		return $this->post_id;
	}
}
