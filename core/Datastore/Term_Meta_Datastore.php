<?php 

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

/**
 * Term meta datastore class.
 */
class Term_Meta_Datastore extends Datastore {
	protected $term_id;

	/**
	 * Create term meta database table (for WP < 4.4)
	 **/
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
	 * Initialization tasks.
	 **/
	public function init() {
		global $wpdb;

		// Setup termmeta table and hooks only once
		if ( ! empty( $wpdb->termmeta ) ) {
			return;
		}

		$wpdb->termmeta = $wpdb->prefix . 'termmeta';

		self::create_table();

		// Delete all meta associated with the deleted term
		add_action( 'delete_term', array( __CLASS__, 'on_delete_term' ), 10, 3 );
	}

	/**
	 * Save the field value(s) into the database.
	 * 
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		if ( ! add_metadata( 'term', $this->term_id, $field->get_name(), $field->get_value(), true ) ) {
			update_metadata( 'term', $this->term_id, $field->get_name(), $field->get_value() );
		}
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		global $wpdb;

		$value = $wpdb->get_col( '
			SELECT `meta_value`
			FROM ' . $wpdb->termmeta . '
			WHERE `term_id`=' . intval( $this->term_id ) . '
			AND `meta_key`="' . $field->get_name() . '"
			LIMIT 1
		' );

		if ( ! is_array( $value ) || count( $value ) < 1 ) {
			$field->set_value( false );
			return;
		}

		$field->set_value( $value[0] );
	}

	/**
	 * Delete the field value(s) from the database.
	 * 
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		delete_metadata( 'term', $this->term_id, $field->get_name(), $field->get_value() );
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		global $wpdb;

		if ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) {
			$meta_key = $field->get_name();
		} else {
			$meta_key = $field;
		}

		return $wpdb->get_results( '
			SELECT meta_key AS field_key, meta_value AS field_value FROM ' . $wpdb->termmeta . '
			WHERE `meta_key` LIKE "' . addslashes( $meta_key ) . '_%" AND term_id="' . intval( $this->term_id ) . '"
		', ARRAY_A );
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( $field ) {
		global $wpdb;

		$group_names = $field->get_group_names();
		$field_name = $field->get_name();

		$meta_key_constraint = '`meta_key` LIKE "' . $field_name . implode( '-%" OR `meta_key` LIKE "' . $field_name, $group_names ) . '-%"';

		return $wpdb->query( '
			DELETE FROM ' . $wpdb->termmeta . '
			WHERE (' . $meta_key_constraint . ') AND term_id="' . intval( $this->term_id ) . '"
		' );
	}

	/**
	 * Set the term ID of the datastore.
	 * 
	 * @param int $term_id ID of the term.
	 */
	public function set_id( $term_id ) {
		$this->term_id = $term_id;
	}

	/**
	 * Delete term meta on term deletion. 
	 * Useful for WP < 4.4.
	 * 
	 * @param  int $term_id  Term ID.
	 * @param  int $tt_id    Term taxonomy ID
	 * @param  string $taxonomy Taxonomy.
	 * @return bool Result of the deletion operation.
	 */
	public static function on_delete_term( $term_id, $tt_id, $taxonomy ) {
		global $wpdb;

		return $wpdb->query( '
			DELETE FROM ' . $wpdb->termmeta . '
			WHERE `term_id` = "' . intval( $term_id ) . '"
		' );
	}
}
