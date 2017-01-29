<?php

namespace Carbon_Fields\Datastore;

use Carbon_Fields\Field\Field;

class Nav_Menu_Item_Datastore extends Post_Meta_Datastore {
	
	public function get_garbage_prefix() {
		if ( !$this->get_id() ) {
			return '';
		}
		return '_menu-item-' . $this->get_id() . '_';
	}

	public function get_clean_field_name( $field ) {
		$name = ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) ? $field->get_name() : $field;
		return substr( $name, strlen( $this->get_garbage_prefix() ) );
	}

	public function get_dirty_field_name( $field ) {
		$name = ( is_object( $field ) && is_subclass_of( $field, 'Carbon_Fields\\Field\\Field' ) ) ? $field->get_name() : $field;
		return $this->get_garbage_prefix() . $name;
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		if ( !$this->get_id() ) {
			return;
		}
		$clone = clone $field;
		$clone->set_name( $this->get_clean_field_name( $field ) );
		parent::load( $clone );
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		if ( !$this->get_id() ) {
			return;
		}
		$clone = clone $field;
		$clone->set_name( $this->get_clean_field_name( $field ) );
		parent::save( $clone );
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		$clone = clone $field;
		$clone->set_name( $this->get_clean_field_name( $field ) );
		parent::delete( $clone );
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( Field $field ) {
		$clone = clone $field;
		$clone->set_name( $this->get_clean_field_name( $field ) );
		parent::delete( $clone );
	}
}
