<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;

/**
 * Theme options container class.
 */
class Block_Container extends Container {
	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'empty' ), $this->has_default_datastore() );
		}
	}

	/**
	 * Attach container as a theme options page/subpage.
	 */
	public function init() {
		add_action( 'init', array( $this, '_attach' ) );
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		return true;
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param mixed $user_data
	 */
	public function save( $user_data = null ) {}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		return array();
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	public function is_valid_attach_for_request() {
		return true;
	}

	/**
	 * Get environment array for object id
	 *
	 * @return array
	 */
	protected function get_environment_for_object( $object_id ) {
		return array();
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		return true;
	}

	/**
	 * Add theme options container pages.
	 * Hook the container saving action.
	 */
	public function attach() {}

	/**
	 * Whether this container is currently viewed.
	 *
	 * @return boolean
	 */
	public function should_activate() {
		return true;
	}

	/**
	 * Output the container markup
	 */
	public function render() {}
}
