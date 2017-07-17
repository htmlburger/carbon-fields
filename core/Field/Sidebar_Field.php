<?php

namespace Carbon_Fields\Field;

class Sidebar_Field extends Select_Field {

	/**
	 * Allow the user to add new sidebars
	 *
	 * @var boolean
	 */
	private $enable_add_new = true;

	/**
	 * Array of sidebars to exclude from the select menu
	 *
	 * @var array
	 */
	private $excluded_sidebars = array();

	/**
	 * Disable adding new sidebars.
	 *
	 * @return Field $this
	 */
	public function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	/**
	 * Specify sidebars to be excluded.
	 *
	 * @param  array $sidebars
	 * @return Field $this
	 */
	public function set_excluded_sidebars( $sidebars ) {
		$this->excluded_sidebars = $sidebars;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		if ( $this->enable_add_new ) {
			$this->add_options( array( 'new' => _x( 'Add New', 'sidebar', 'carbon-fields' ) ) );
		}

		$field_data = parent::to_json( $load );

		// override default value assigning behavior since sidebars are
		// loaded separately and not as a part of the field options
		$field_data = array_merge( $field_data, array(
			'value' => $this->get_formatted_value(),
		) );

		if ( ! empty( $this->excluded_sidebars ) ) {
			if ( ! is_array( $this->excluded_sidebars ) ) {
				$this->excluded_sidebars = array( $this->excluded_sidebars );
			}

			$field_data = array_merge( $field_data, array(
				'excluded_sidebars' => $this->excluded_sidebars,
			) );
		}

		return $field_data;
	}
}
