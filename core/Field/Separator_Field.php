<?php 

namespace Carbon_Fields\Field;

/**
 * Separator field class.
 * Used for presentation purposes to create sections between fields.
 */
class Separator_Field extends Field {
	/**
	 * Underscore template of this field.
	 */
	function template() {
		?>
		<h3>{{{ label }}}</h3>
		<?php
	}

	/**
	 * Load the field value.
	 * Skipped, no value to be loaded.
	 */
	function load() {
		// skip;
	}

	/**
	 * Save the field value.
	 * Skipped, no value to be saved.
	 */
	function save() {
		// skip;
	}

	/**
	 * Delete the field value.
	 * Skipped, no value to be deleted.
	 */
	function delete() {
		// skip;
	}

	/**
	 * Whether this field is required.
	 * The Separator field is non-required by design.
	 * 
	 * @return false
	 */
	function is_required() {
		return false;
	}
}
