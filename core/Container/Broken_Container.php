<?php 

namespace Carbon_Fields\Container;

/**
 * Broken container class. 
 * Used when a container is gets misconfigured.
 **/
class Broken_Container extends Container {
	public function add_template() {}

	public function add_fields() {}
	
	public function init() {}
}

