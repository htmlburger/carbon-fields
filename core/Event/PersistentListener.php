<?php

namespace Carbon_Fields\Event;

class PersistentListener implements Listener {

	/**
	 * Callable to call when the event is broadcasted
	 * 
	 * @var callable
	 */
	protected $callable;

	/**
     * @inheritdoc
     */
	public function get_callable() {
		return $this->callable;
	}

	/**
     * @inheritdoc
     */
	public function set_callable( $callable ) {
		$this->callable = $callable;
	}

	/**
     * @inheritdoc
     */
	public function is_valid() {
		return true;
	}

	/**
     * @inheritdoc
     */
	public function notify() {
		return call_user_func_array( $this->callable , func_get_args() );
	}
}