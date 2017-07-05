<?php

namespace Carbon_Fields\Field;

/**
 * Separator field class.
 * Used for presentation purposes to create sections between fields.
 */
class Separator_Field extends Field {

	/**
	 * Load the field value.
	 * Skipped, no value to be loaded.
	 */
	public function load() {
		// skip;
	}

	/**
	 * Save the field value.
	 * Skipped, no value to be saved.
	 */
	public function save() {
		// skip;
	}

	/**
	 * Delete the field value.
	 * Skipped, no value to be deleted.
	 */
	public function delete() {
		// skip;
	}

	/**
	 * Whether this field is required.
	 * The Separator field is non-required by design.
	 *
	 * @return false
	 */
	public function is_required() {
		return false;
	}
}
