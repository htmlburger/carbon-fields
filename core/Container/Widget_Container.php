<?php

namespace Carbon_Fields\Container;

/**
 * Widget container class
 */
class Widget_Container extends Container {

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		$this->title = '';
	}

	/**
	 * Perform instance initialization
	 */
	public function init() {
		$this->_attach();
		$this->render();

		return $this;
	}

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
		$screen = get_current_screen();
		$input = stripslashes_deep( $_REQUEST );
		$request_action = isset( $input['action'] ) ? $input['action'] : '';
		$is_widget_save = ( $request_action === 'save-widget' );

		if ( ( ! $screen || ! in_array( $screen->id, array( 'widgets', 'customize' ) ) ) && ! $is_widget_save ) {
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
		return array();
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		return $this->all_conditions_pass( intval( $object_id ) );
	}

	/* Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		if ( ! $this->is_valid_attach_for_request() ) {
			return false;
		}
		$params = func_get_args();
		return $this->is_valid_attach_for_object( $params[0] );
	}

	/**
	 * Output the container markup
	 */
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/widget.php';
	}

	/**
	 * Returns an array that holds the container data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		return parent::to_json( false );
	}
}

