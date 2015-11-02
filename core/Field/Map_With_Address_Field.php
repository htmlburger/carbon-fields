<?php 

namespace Carbon_Fields\Field;

class Map_With_Address_Field extends Map_Field {
	function get_type() {
		$class = get_parent_class($this); // setting the type to be the same as the map field

		return $this->clean_type($class);
	}
}
