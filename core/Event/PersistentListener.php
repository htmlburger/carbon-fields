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
	 * {@inheritDoc}
	 */
	public function get_callable() {
		return $this->callable;
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_callable( $callable ) {
		$this->callable = $callable;
	}

	/**
	 * {@inheritDoc}
	 */
	public function is_valid() {
		return true;
	}

	/**
	 * {@inheritDoc}
	 */
	public function notify() {
		return call_user_func_array( $this->callable, func_get_args() );
	}
}