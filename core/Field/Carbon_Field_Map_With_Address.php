<?php 

class Carbon_Field_Map_With_Address extends Carbon_Field_Map {
	function get_type() {
		$class = get_parent_class($this); // setting the type to be the same as the map field

		return $this->clean_type($class);
	}
}
