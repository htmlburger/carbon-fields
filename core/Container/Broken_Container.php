<?php

namespace Carbon_Fields\Container;

/**
 * Broken container class.
 * Used when a container gets misconfigured.
 **/
class Broken_Container extends Container {
	public function add_template( $name, $callback ) {}

	public function add_fields( $fields ) {}

	public function init() {}
}

