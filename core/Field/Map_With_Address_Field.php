<?php

namespace Carbon_Fields\Field;

/**
 * Map with Address field class.
 * No longer used, use Map field instead.
 *
 * @deprecated
 */
class Map_With_Address_Field extends Map_Field {
	/**
	 * Return field type.
	 *
	 * @return string
	 */
	public function get_type() {
		$class = get_parent_class( $this ); // setting the type to be the same as the map field

		return $this->clean_type( $class );
	}
}
