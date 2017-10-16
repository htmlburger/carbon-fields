<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Datastore\Datastore;

/**
 * Term meta container class.
 */
class Term_Meta_Container extends Container {

	protected $term_id;

	public $settings = array();

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'term_meta' ), $this->has_default_datastore() );
		}
	}

	/**
	 * Bind attach() and save() to the appropriate WordPress actions.
	 */
	public function init() {
		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'init', array( $this, 'hook_to_taxonomies' ), 999999 );
	}

	/**
	 * Hook to relevant taxonomies
	 */
	public function hook_to_taxonomies() {
		$taxonomies = $this->get_taxonomy_visibility();

		foreach ( $taxonomies as $taxonomy ) {
			add_action( 'edited_' . $taxonomy, array( $this, '_save' ), 10, 2 );
			add_action( 'created_' . $taxonomy, array( $this, '_save' ), 10, 2 );
		}
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		if ( ! $this->verified_nonce_in_request() ) {
			return false;
		}

		$params = func_get_args();
		return $this->is_valid_attach_for_object( $params[0] );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $term_id ID of the term against which save() is ran
	 */
	public function save( $term_id = null ) {
		$this->set_term_id( $term_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( Helper::input() );
			$field->save();
		}

		do_action( 'carbon_fields_term_meta_container_saved', $term_id, $this );
	}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		$input = stripslashes_deep( $_GET );
		$request_term_id = isset( $input['tag_ID'] ) ? intval( $input['tag_ID'] ) : 0;
		$request_taxonomy = isset( $input['taxonomy'] ) ? $input['taxonomy'] : '';

		$term = get_term( $request_term_id );
		$term = ( $term && ! is_wp_error( $term ) ) ? $term : null;
		$environment = array(
			'term_id' => $term ? intval( $term->term_id ) : 0,
			'term' => $term,
			'taxonomy' => $term ? $term->taxonomy : $request_taxonomy,
		);
		return $environment;
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	public function is_valid_attach_for_request() {
		global $pagenow;

		if ( $pagenow !== 'edit-tags.php' && $pagenow !== 'term.php' ) {
			return false;
		}

		return $this->static_conditions_pass();
	}

	/**
	 * Get environment array for object id
	 *
	 * @return array
	 */
	protected function get_environment_for_object( $object_id ) {
		$term = get_term( intval( $object_id ) );
		$environment = array(
			'term_id' => intval( $term->term_id ),
			'term' => $term,
			'taxonomy' => $term->taxonomy,
		);
		return $environment;
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		$term = get_term( $object_id );
		$term = ( $term && ! is_wp_error( $term ) ) ? $term : null;

		if ( ! $term ) {
			return false;
		}

		return $this->all_conditions_pass( intval( $term->term_id ) );
	}

	/**
	 * Add term meta for each of the container taxonomies
	 */
	public function attach() {
		$taxonomies = $this->get_taxonomy_visibility();

		foreach ( $taxonomies as $taxonomy ) {
			add_action( $taxonomy . '_edit_form_fields', array( $this, 'render' ), 10, 2 );
			add_action( $taxonomy . '_add_form_fields', array( $this, 'render' ), 10, 2 );
		}
	}

	/**
	 * Output the container markup
	 */
	public function render( $term = null ) {
		if ( is_object( $term ) ) {
			$this->set_term_id( $term->term_id );
		}

		include \Carbon_Fields\DIR . '/templates/Container/term_meta.php';
	}

	/**
	 * Set the term ID the container will operate with.
	 *
	 * @param int $term_id
	 */
	protected function set_term_id( $term_id ) {
		$this->term_id = $term_id;
		$this->get_datastore()->set_object_id( $term_id );

		foreach ( $this->fields as $field ) {
			$datastore = $field->get_datastore();
			if ( $datastore->get_object_id() === 0 ) {
				$datastore->set_object_id( $term_id );
			}
		}
	}

	/**
	 * Get array of taxonomies this container can appear on conditionally
	 *
	 * @return array<string>
	 */
	public function get_taxonomy_visibility() {
		$all_taxonomies = get_taxonomies();
		$evaluated_collection = $this->condition_collection->evaluate( array( 'term_taxonomy' ), true, array(), true );

		$shown_on = array();
		foreach ( $all_taxonomies as $taxonomy ) {
			$environment = array(
				'taxonomy' => $taxonomy,
			);
			if ( $evaluated_collection->is_fulfilled( $environment ) ) {
				$shown_on[] = $taxonomy;
			}
		}
		return $shown_on;
	}

	/**
	 * Show the container only on terms from the specified taxonomies.
	 *
	 * @deprecated
	 * @param string|array $taxonomies
	 * @return object $this
	 */
	public function show_on_taxonomy( $taxonomies ) {
		$taxonomies = is_array( $taxonomies ) ? $taxonomies : array( $taxonomies );
		$this->where( 'term_taxonomy', 'IN', $taxonomies );
		return $this;
	}

	/**
	 * Show the container only on particular term level.
	 *
	 * @deprecated
	 * @param int $term_level
	 * @return object $this
	 */
	public function show_on_level( $term_level ) {
		$this->where( 'term_level', '=', intval( $term_level ) );
		return $this;
	}
}
