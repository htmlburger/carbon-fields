<?php

namespace Carbon_Fields\Field;

/**
 * Abstract scripts field class.
 * Intended only for use in theme options container.
 */
abstract class Scripts_Field extends Textarea_Field {

	/**
	 * Hook to putput scripts in
	 *
	 * @var string
	 */
	protected $hook_name = '';

	/**
	 * Hook priority to use
	 *
	 * @var integer
	 */
	protected $hook_priority = 10;

	/**
	 * Initialization actions
	 */
	public function init() {
		$this->set_help_text( $this->get_default_help_text() );

		add_action( 'wp', array( $this, 'attach_hook' ) );

		parent::init();
	}

	/**
	 * Attach the assigned hook
	 */
	public function attach_hook() {
		if ( strlen( $this->get_hook_name() ) > 0 ) {
			add_action( $this->get_hook_name(), array( $this, 'print_scripts' ), $this->get_hook_priority() );
		}
	}

	/**
	 * Display the field value in the front-end header.
	 */
	public function print_scripts() {
		if ( ! $this->get_datastore() || ! is_a( $this->get_datastore(), 'Carbon_Fields\\Datastore\\Theme_Options_Datastore' ) ) {
			return;
		}

		$this->load();
		echo $this->get_formatted_value();
	}

	/**
	 * Get the hook name
	 *
	 * @return string
	 */
	public function get_hook_name() {
		return $this->hook_name;
	}

	/**
	 * Set the hook name
	 *
	 * @param  string $hook_name
	 * @return self   $this
	 */
	public function set_hook_name( $hook_name ) {
		$this->hook_name = $hook_name;
		return $this;
	}

	/**
	 * Get the hook priority
	 *
	 * @return integer
	 */
	public function get_hook_priority() {
		return $this->hook_priority;
	}

	/**
	 * Set the hook priority
	 *
	 * @param  integer $hook_priority
	 * @return self    $this
	 */
	public function set_hook_priority( $hook_priority ) {
		$this->hook_priority = $hook_priority;
		return $this;
	}

	/**
	 * Set the hook name and priority
	 *
	 * @param  string  $hook_name
	 * @param  integer $hook_priority
	 * @return self    $this
	 */
	public function set_hook( $hook_name, $hook_priority = 10 ) {
		$this->set_hook_name( $hook_name );
		$this->set_hook_priority( $hook_priority );
		return $this;
	}

	/**
	 * Get the default help text to be displayed for this field type.
	 *
	 * @return string
	 */
	abstract protected function get_default_help_text();
}
