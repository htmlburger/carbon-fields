<?php

namespace Carbon_Fields\Service;

abstract class Service {

	/**
	 * Service enabled state
	 *
	 * @var boolean
	 */
	protected $enabled = false;

	/**
	 * Check whether the service is enabled
	 */
	public function is_enabled() {
		return $this->enabled;
	}

	/**
	 * Enable the service
	 *
	 * @return bool
	 */
	public function enable() {
		if ( $this->is_enabled() ) {
			return false;
		}
		$this->enabled = true;

		$this->enabled();

		return true;
	}

	/**
	 * Enable actions for inheriting classes
	 */
	abstract protected function enabled();

	/**
	 * Disable the service
	 *
	 * @return bool
	 */
	public function disable() {
		if ( ! $this->is_enabled() ) {
			return false;
		}
		$this->enabled = false;

		$this->disabled();

		return true;
	}

	/**
	 * Disable actions for inheriting classes
	 */
	abstract protected function disabled();
}