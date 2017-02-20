<?php

namespace Carbon_Fields\Container;

/**
 * Broken container class.
 * Used when a container gets misconfigured.
 **/
class Broken_Container extends Container {
	public function add_fields( $fields ) {}

	public function init() {}

	public function is_valid_attach_for_request() { return false; }

	public function is_valid_attach_for_object( $object_id = null ) { return false; }
}
