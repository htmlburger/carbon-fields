<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Meta_Datastore;
use Carbon_Fields\Datastore\Comment_Meta_Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Comment meta container class.
 */
class Comment_Meta_Container extends Container {
	protected $comment_id;

	/**
	 * Create a new comment meta container
	 *
	 * @param string $title Unique title of the container
	 **/
	public function __construct( $title ) {
		parent::__construct( $title );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( new Comment_Meta_Datastore(), $this->has_default_datastore() );
		}
	}

	/**
	 * Perform instance initialization after calling setup()
	 **/
	public function init() {
		if ( isset( $_GET['c'] ) && $comment_id = absint( $_GET['c'] ) ) { // Input var okay.
			$this->set_comment_id( $comment_id );
		}

		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'edit_comment', array( $this, '_save' ) );
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	public function is_valid_save() {
		if ( ! isset( $_REQUEST[ $this->get_nonce_name() ] ) || ! wp_verify_nonce( $_REQUEST[ $this->get_nonce_name() ], $this->get_nonce_name() ) ) { // Input var okay.
			return false;
		}

		return true;
	}

	/**
	 * Add meta box to the comment
	 **/
	public function attach() {
		add_meta_box(
			$this->id,
			$this->title,
			array( $this, 'render' ),
			'comment',
			'normal',
			'high'
		);
	}

	/**
	 * Revert the result of attach()
	 **/
	public function detach() {
		parent::detach();

		remove_action( 'admin_init', array( $this, '_attach' ) );
		remove_action( 'edit_comment', array( $this, '_save' ) );

		// unregister field names
		foreach ( $this->fields as $field ) {
			$this->drop_unique_field_name( $field->get_name() );
		}
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/comment_meta.php';
	}

	/**
	 * Set the comment ID the container will operate with.
	 *
	 * @param int $comment_id
	 **/
	public function set_comment_id( $comment_id ) {
		$this->comment_id = $comment_id;
		$this->get_datastore()->set_id( $comment_id );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $comment_id ID of the comment against which save() is ran
	 **/
	public function save( $comment_id ) {

		// Unhook action to guarantee single save
		remove_action( 'edit_comment', array( $this, '_save' ) );

		$this->set_comment_id( $comment_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input();
			$field->save();
		}
	}
}
