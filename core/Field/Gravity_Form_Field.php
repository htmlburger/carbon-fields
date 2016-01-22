<?php

namespace Carbon_Fields\Field;

/**
 * Gravity Form selection field class
 */
class Gravity_Form_Field extends Select_Field {
	/**
	 * Admin initialization actions
	 */
	public function admin_init() {
		// Setup form options
		add_action( 'carbon_after_register_fields', array( $this, 'setup_gravity_form_options' ), 20 );
	}

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
	 * Set the available forms as field options
	 */
	public function setup_gravity_form_options() {
		if ( ! $this->is_plugin_active() ) {
			return;
		}

		$forms = \RGFormsModel::get_forms( null, 'title' );

		if ( ! is_array( $forms ) || empty( $forms ) ) {
			return;
		}

		$options = array(
			'0' => __( 'No form', 'carbon_fields' ),
		);

		foreach ( $forms as $form ) {
			$options[ $form->id ] = $form->title;
		}

		$this->set_options( $options );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$this->set_options( apply_filters( 'crb_gravity_form_options', $this->options ) );

		$field_data = array_merge( $field_data, array(
			'options' => $this->parse_options( $this->options ),
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		// Gravity Forms not installed
		if ( ! $this->is_plugin_active() ) {
			?><em><?php _e( 'Please install Gravity Forms plugin', 'carbon_fields' ); ?></em><?php
			return;
		}

		// No forms have been found
		if ( empty( $this->options ) ) {
			?><em><?php _e( 'No Gravity Forms have been found.', 'carbon_fields' ); ?></em><?php
			return;
		}

		parent::template();
	}
}