<?php

namespace Carbon_Fields\Container;

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
	function __construct($title) {
		parent::__construct($title);

		if ( !$this->get_datastore() ) {
			$this->set_datastore(new Comment_Meta_Datastore());
		}
	}

	/**
	 * Perform instance initialization after calling setup()
	 **/
	function init() {
		if ( isset($_GET['c']) ) {
			$this->set_comment_id($_GET['c']);
		}

		add_action('admin_init', array($this, '_attach'));
		add_action('edit_comment', array($this, '_save'));
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	function is_valid_save() {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if ( !wp_verify_nonce( crb_request_param($this->get_nonce_name()), $this->get_nonce_name() ) ) {
			return false;
		} 

		return true;
	}

	/**
	 * Add meta box to the comment
	 **/
	function attach() {
		add_meta_box(
			$this->id, 
			$this->title, 
			array($this, 'render'), 
			'comment', 
			'normal',
			'high'
		);
	}
	
	/**
	 * Revert the result of attach()
	 **/
	function detach() {
		parent::detach();

		remove_action('admin_init', array($this, '_attach'));
		remove_action('edit_comment', array($this, '_save'));

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_name($field->get_name());
		}
	}

	/**
	 * Output the container markup
	 **/
	function render() {
		include DIR . '/templates/Container/comment_meta.php';
	}

	/**
	 * Set the comment ID the container will operate with.
	 *
	 * @param int $comment_id
	 **/
	function set_comment_id($comment_id) {
		$this->comment_id = $comment_id;
		$this->store->set_id($comment_id);
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $comment_id ID of the comment against which save() is ran
	 **/
	function save($comment_id) {

		// Unhook action to guarantee single save
		remove_action('edit_comment', array($this, '_save'));

		$this->set_comment_id($comment_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 * @return void
	 **/
	function verify_unique_field_name($name) {
		if ( !isset(self::$registered_field_names['comment']) ) {
			self::$registered_field_names['comment'] = array();
		}

		if ( in_array($name, self::$registered_field_names['comment']) ) {
			throw new Incorrect_Syntax_Exception('Field name "' . $name . '" already registered');
		}

		self::$registered_field_names['comment'][] = $name;
	}

	/**
	 * Remove field name $name from the list of unique field names
	 *
	 * @param string $name
	 * @return void
	 **/
	function drop_unique_field_name($name) {		
		$index = array_search($name, self::$registered_field_names['comment']);
		if ( $index !== false ) {
			unset(self::$registered_field_names['comment'][$index]);
		}
	}

}