<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Meta_Datastore;
use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Comment meta container class.
 */
class Comment_Meta_Container extends Container {
	protected $comment_id;

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'comment_meta' ), $this->has_default_datastore() );
		}
	}

	/**
	 * Perform instance initialization
	 */
	public function init() {
		if ( isset( $_GET['c'] ) && $comment_id = absint( $_GET['c'] ) ) { // Input var okay.
			$this->set_comment_id( $comment_id );
		}

		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'edit_comment', array( $this, '_save' ) );
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
	 * @param int $comment_id ID of the comment against which save() is ran
	 */
	public function save( $comment_id = null ) {
		// Unhook action to guarantee single save
		remove_action( 'edit_comment', array( $this, '_save' ) );

		$this->set_comment_id( $comment_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( stripslashes_deep( $_POST ) );
			$field->save();
		}
	}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		$input = stripslashes_deep( $_GET );

		$environment = array(
			'comment_id' => isset( $input['c'] ) ? intval( $input['c'] ) : 0,
		);
		return $environment;
	}

	/**
	 * Check container attachment rules against current page request (in admin)
	 *
	 * @return bool
	 */
	public function is_valid_attach_for_request() {
		global $pagenow;

		if ( $pagenow !== 'comment.php' ) {
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
		$environment = array(
			'comment_id' => intval( $object_id ),
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
		return $this->all_conditions_pass( intval( $object_id ) );
	}

	/**
	 * Add meta box to the comment
	 */
	public function attach() {
		add_meta_box(
			$this->get_id(),
			$this->title,
			array( $this, 'render' ),
			'comment',
			'normal',
			'high'
		);
	}

	/**
	 * Output the container markup
	 */
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/comment_meta.php';
	}

	/**
	 * Set the comment ID the container will operate with.
	 *
	 * @param int $comment_id
	 */
	protected function set_comment_id( $comment_id ) {
		$this->comment_id = $comment_id;
		$this->get_datastore()->set_object_id( $comment_id );

		foreach ( $this->fields as $field ) {
			$datastore = $field->get_datastore();
			if ( $datastore->get_object_id() === 0 ) {
				$datastore->set_object_id( $comment_id );
			}
		}
	}
}
