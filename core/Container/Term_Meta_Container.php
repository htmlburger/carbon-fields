<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;

/**
 * Term meta container class.
 */
class Term_Meta_Container extends Container {
	protected $term_id;

	public $settings = array(
		'taxonomy' => array( 'category' ),
		'show_on_level' => false,
	);

	/**
	 * Create a new container
	 *
	 * @param string $unique_id Unique id of the container
	 * @param string $title title of the container
	 * @param string $type Type of the container
	 **/
	public function __construct( $unique_id, $title, $type ) {
		parent::__construct( $unique_id, $title, $type );
		$this->fulfillable_collection->set_condition_type_list( array(
			'term', 'term_taxonomy', 'term_level'
		), true );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'term_meta' ), $this->has_default_datastore() );
		}
	}

	/**
	 * Bind attach() and save() to the appropriate WordPress actions.
	 **/
	public function init() {
		// force taxonomy to be array
		if ( ! is_array( $this->settings['taxonomy'] ) ) {
			$this->settings['taxonomy'] = array( $this->settings['taxonomy'] );
		}

		add_action( 'admin_init', array( $this, '_attach' ) );

		foreach ( $this->settings['taxonomy'] as $taxonomy ) {
			add_action( 'edited_' . $taxonomy, array( $this, '_save' ), 10, 2 );
			add_action( 'created_' . $taxonomy, array( $this, '_save' ), 10, 2 );
		}
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @param int $term_id ID of the term against which save() is ran
	 * @return bool
	 **/
	public function is_valid_save( $term_id = null ) {
		if ( ! $this->verified_nonce_in_request() ) {
			return false;
		}

		return $this->is_valid_attach_for_object( $term_id );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $term_id ID of the term against which save() is ran
	 **/
	public function save( $term_id = null ) {
		$this->set_term_id( $term_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( stripslashes_deep( $_POST ) );
			$field->save();
		}

		do_action( 'carbon_after_save_term_meta', $term_id );
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach_for_request() {
		global $pagenow;

		if ( $pagenow !== 'edit-tags.php' && $pagenow !== 'term.php' ) {
			return false;
		}

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

		if ( ! $this->fulfillable_collection->is_fulfilled( $environment ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 **/
	public function is_valid_attach_for_object( $object_id = null ) {
		return ( $object_id > 0 );
	}

	/**
	 * Add term meta for each of the container taxonomies
	 **/
	public function attach() {
		foreach ( $this->settings['taxonomy'] as $taxonomy ) {
			add_action( $taxonomy . '_edit_form_fields', array( $this, 'render' ), 10, 2 );
			add_action( $taxonomy . '_add_form_fields', array( $this, 'render' ), 10, 2 );
		}
	}

	/**
	 * Output the container markup
	 **/
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
	 **/
	public function set_term_id( $term_id ) {
		$this->term_id = $term_id;
		$this->get_datastore()->set_id( $term_id );
	}

	/**
	 * COMMON USAGE METHODS
	 */

	/**
	 * Show the container only on terms from the specified taxonomies.
	 *
	 * @param string|array $taxonomies
	 * @return object $this
	 **/
	public function show_on_taxonomy( $taxonomies ) {
		$taxonomies = (array) $taxonomies;

		$this->settings['taxonomy'] = $taxonomies;

		return $this;
	}

	/**
	 * Show the container only on particular term level.
	 *
	 * @param int $term_level
	 * @return object $this
	 */
	public function show_on_level( $term_level ) {
		$this->settings['show_on_level'] = $term_level;
		return $this;
	}
}
