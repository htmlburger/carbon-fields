<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Term meta datastore class.
 */
class Term_Meta_Datastore extends Meta_Datastore {

	/**
	 * Initialization tasks.
	 */
	public function init() {
		global $wpdb;

		// Setup termmeta table and hooks only once
		if ( ! empty( $wpdb->termmeta ) ) {
			return;
		}

		$wpdb->termmeta = $wpdb->prefix . 'termmeta';

		static::create_table();

		// Delete all meta associated with the deleted term
		add_action( 'delete_term', array( __CLASS__, 'on_delete_term' ), 10, 3 );
	}

	/**
	 * Create term meta database table (for WP < 4.4)
	 */
	public static function create_table() {
		global $wpdb;

		$tables = $wpdb->get_results( 'SHOW TABLES LIKE "' . $wpdb->prefix . 'termmeta"' );

		if ( ! empty( $tables ) ) {
			return;
		}

		$charset_collate = '';
		if ( ! empty( $wpdb->charset ) ) {
			$charset_collate = 'DEFAULT CHARACTER SET ' . $wpdb->charset;
		}

		if ( ! empty( $wpdb->collate ) ) {
			$charset_collate .= ' COLLATE ' . $wpdb->collate;
		}

		$wpdb->query( 'CREATE TABLE ' . $wpdb->prefix . 'termmeta (
			meta_id bigint(20) unsigned NOT NULL auto_increment,
			term_id bigint(20) unsigned NOT NULL default "0",
			meta_key varchar(255) default NULL,
			meta_value longtext,
			PRIMARY KEY	(meta_id),
			KEY term_id (term_id),
			KEY meta_key (meta_key)
		) ' . $charset_collate . ';' );
	}

	/**
	 * Delete term meta on term deletion.
	 * Useful for WP < 4.4.
	 *
	 * @param  int $term_id  Term ID.
	 * @return bool Result of the deletion operation.
	 */
	public static function on_delete_term( $term_id ) {
		global $wpdb;

		return $wpdb->query( '
			DELETE FROM ' . $wpdb->termmeta . '
			WHERE `term_id` = "' . intval( $term_id ) . '"
		' );
	}

	/**
	 * Retrieve the type of meta data.
	 *
	 * @return string
	 */
	public function get_meta_type() {
		return 'term';
	}

	/**
	 * Retrieve the meta table name to query.
	 *
	 * @return string
	 */
	public function get_table_name() {
		global $wpdb;
		return $wpdb->termmeta;
	}

	/**
	 * Retrieve the meta table field name to query by.
	 *
	 * @return string
	 */
	public function get_table_field_name() {
		return 'term_id';
	}
}
