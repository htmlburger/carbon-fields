<?php 

namespace Carbon_Fields\Field;

class Sidebar_Field extends Select_Field {
	private $enable_add_new = true; // Whether to allow the user to add new sidebars
	private $excluded_sidebars = false; // Exclude these sidebars from the select menu 

	/**
	 * Disable adding new sidebars.
	 */
	public function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	/**
	 * Specify sidebars to be excluded.
	 * @param  array $sidebars
	 */
	public function exclude_sidebars( $sidebars ) {
		$this->excluded_sidebars = $sidebars;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		if ( $this->enable_add_new ) {
			$this->options['new'] = _x( 'Add New', 'sidebar', 'carbon_fields' );
		}

		$field_data = parent::to_json( $load );

		if ( $this->excluded_sidebars ) {
			if ( ! array( $this->excluded_sidebars ) ) {
				$this->excluded_sidebars = array( $this->excluded_sidebars );
			}

			$field_data = array_merge( $field_data, array(
				'excluded_sidebars' => $this->excluded_sidebars
			) );
		}

		return $field_data;
	}
}
