<?php

namespace Carbon_Fields\Field;

/**
 * Gravity Form selection field class
 */
class Gravity_Form_Field extends Select_Field {

	/**
	 * Whether the Gravity Forms plugin is installed and activated.
	 *
	 * @return bool
	 */
	public function is_plugin_active() {
		if ( class_exists( '\RGFormsModel' ) && method_exists( '\RGFormsModel', 'get_forms' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * {@inheritDoc}
	 */
	protected function load_options() {
		return $this->get_gravity_form_options();
	}

	/**
	 * Set the available forms as field options
	 *
	 * @return array
	 */
	protected function get_gravity_form_options() {
		if ( ! $this->is_plugin_active() ) {
			return array();
		}

		$forms = \RGFormsModel::get_forms( null, 'title' );

		if ( ! is_array( $forms ) || empty( $forms ) ) {
			return array();
		}

		$options = array(
			'' => __( 'No form', 'carbon-fields' ),
		);

		foreach ( $forms as $form ) {
			$options[ $form->id ] = $form->title;
		}

		return apply_filters( 'carbon_fields_gravity_form_options', $options );
	}

	/**
	 * {@inheritDoc}
	 */
	public function to_json( $load ) {
		$this->set_options( $this->get_options() );
		return parent::to_json( $load );
	}
}
