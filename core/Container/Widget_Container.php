<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\App;

/**
 * Widget container class
 */
class Widget_Container extends Container {

	/**
	 * Create a new widget
	 *
	 * @param string $unique_id Unique ID of the widget
	 * @param string $title Ignored
	 * @param string $type Container type
	 **/
	public function __construct( $unique_id, $title, $type ) {
		$this->id = $unique_id;
		$this->title = '';
		$this->type = $type;

		$this->conditions_collection = App::resolve( 'container_condition_fulfillable_collection' );
		$this->conditions_collection->set_condition_type_list(
			array_merge( $this->get_static_conditions(), $this->get_dynamic_conditions() ),
			true
		);
	}

	/**
	 * Perform instance initialization
	 **/
	public function init() {
		$this->_attach();
		$this->render();

		return $this;
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach_for_request() {
		$screen = get_current_screen();
		$request_action = isset( $_REQUEST['action'] ) ? $_REQUEST['action'] : '';
		$is_widget_save = ( $request_action === 'save-widget' );

		return $screen && $screen->id === 'widgets' || $is_widget_save;
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 **/
	public function is_valid_attach_for_object( $object_id = null ) {
		return true;
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/widget.php';
	}

	/**
	 * Returns an array that holds the container data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		return parent::to_json( false );
	}
}

