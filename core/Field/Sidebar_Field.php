<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Helper\Helper;

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
	 * {@inheritDoc}
	 */
	protected function load_options() {
		$sidebars = Helper::get_active_sidebars();
		$options = array();

		foreach ( $sidebars as $sidebar ) {
			if ( in_array( $sidebar[ 'id' ], $this->excluded_sidebars ) ) {
				continue;
			}

			$options[ $sidebar['id'] ] = $sidebar['name'];
		}

		return $options;
	}

	/**
	 * Disable adding new sidebars.
	 *
	 * @return self  $this
	 */
	public function disable_add_new() {
		$this->enable_add_new = false;
		return $this;
	}

	/**
	 * Specify sidebars to be excluded.
	 *
	 * @param  array $sidebars
	 * @return self  $this
	 */
	public function set_excluded_sidebars( $sidebars ) {
		$this->excluded_sidebars = is_array( $sidebars ) ? $sidebars : array( $sidebars );
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param  bool  $load Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$options = array();

		if ( $this->enable_add_new ) {
			$options[] = array(
				'value' => '__add_new',
				'label' => _x( 'Add New', 'sidebar', 'carbon-fields' ),
			);
		}

		$field_data = parent::to_json( $load );
		// override default value and options behavior since sidebars are
		// loaded separately and not as a part of the field options
		$field_data = array_merge( $field_data, array(
			'value' => $this->get_formatted_value(),
		) );

		$field_data['options'] = array_merge( $field_data['options'], $options );

		if ( ! empty( $this->excluded_sidebars ) ) {
			$field_data = array_merge( $field_data, array(
				'excluded_sidebars' => $this->excluded_sidebars,
			) );
		}

		return $field_data;
	}
}
