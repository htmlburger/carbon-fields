<?php

namespace Carbon_Fields\Event;

class Emitter {

	/**
	 * @var Listener[]
	 */
	protected $listeners = array();

	/**
	 * Broadcast an event
	 */
	public function emit() {
		$args = func_get_args();
		$event = $args[0];
		$args = array_slice( $args, 1 );

		$listeners = $this->get_listeners( $event );
		foreach ( $listeners as $listener ) {
			if ( $listener->is_valid() ) {
				call_user_func_array( array( $listener, 'notify' ), $args );
			}
		}

		$this->remove_invalid_listeners( $event );
	}

	/**
	 * Get array of events with registered listeners
	 *
	 * @return array<string>
	 */
	protected function get_events() {
		$events_with_listeners = array_filter( $this->listeners );
		$events = array_keys( $events_with_listeners );
		return $events;
	}

	/**
	 * Get array of listenrs for a specific event
	 *
	 * @param  string          $event Event to get listeners for
	 * @return array<Listener>
	 */
	protected function get_listeners( $event ) {
		$listeners = isset( $this->listeners[ $event ] ) ? $this->listeners[ $event ] : array();
		return $listeners;
	}

	/**
	 * Remove invalid listeners from an event
	 *
	 * @param string $event
	 */
	protected function remove_invalid_listeners( $event ) {
		$listeners = $this->get_listeners( $event );
		if ( empty( $listeners ) ) {
			return;
		}

		$this->listeners[ $event ] = array_filter( $listeners, function( $listener ) {
			/** @var Listener $listener */
			return $listener->is_valid();
		} );
	}

	/**
	 * Add a listener to an event
	 *
	 * @param string   $event
	 * @param Listener $listener
	 * @return Listener $listener
	 */
	public function add_listener( $event, $listener ) {
		if ( ! isset( $this->listeners[ $event ] ) ) {
			$this->listeners[ $event ] = array();
		}
		$this->listeners[ $event ][] = $listener;
		return $listener;
	}

	/**
	 * Remove a listener from any event
	 *
	 * @param Listener $removed_listener
	 */
	public function remove_listener( $removed_listener ) {
		$events = $this->get_events();
		foreach ( $events as $event ) {
			$listeners = $this->get_listeners( $event );
			$filtered_listeners = array_filter( $listeners, function( $listener ) use ( $removed_listener ) {
				return ( $listener !== $removed_listener );
			} );
			$this->listeners[ $event ] = $filtered_listeners;
		}
	}

	/**
	 * Add a persistent listener to an event
	 *
	 * @param  string   $event    The event to listen for
	 * @param  string   $callable The callable to call when the event is broadcasted
	 * @return Listener
	 */
	public function on( $event, $callable ) {
		$listener = \Carbon_Fields\Carbon_Fields::resolve( 'event_persistent_listener' );
		$listener->set_callable( $callable );
		return $this->add_listener( $event, $listener );
	}

	/**
	 * Add a one-time listener to an event
	 *
	 * @param  string   $event    The event to listen for
	 * @param  string   $callable The callable to call when the event is broadcasted
	 * @return Listener
	 */
	public function once( $event, $callable ) {
		$listener = \Carbon_Fields\Carbon_Fields::resolve( 'event_single_event_listener' );
		$listener->set_callable( $callable );
		return $this->add_listener( $event, $listener );
	}
}