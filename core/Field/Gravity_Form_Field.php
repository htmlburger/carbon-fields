<?php

namespace Carbon_Fields\Field;

/**
 * Gravity Form Select
 */
class Gravity_Form_Field extends Select_Field {
	function admin_init() {
		// Setup Form Options
		add_action( 'carbon_after_register_fields', array($this, 'setup_gravity_form_options'), 20 );
	}

	/**
	 * Performs a check whether the Gravity Form is installed and activated
	 */
	function is_plugin_active() {
		if ( class_exists('RGFormsModel') && method_exists('RGFormsModel', 'get_forms') ) {
			return true;
		}

		return false;
	}

	/**
	 * Sets the Gravity Form Options
	 */
	function setup_gravity_form_options() {
		if ( !$this->is_plugin_active() ) {
			return;
		}

		$forms = RGFormsModel::get_forms(null, 'title');

		if ( !is_array($forms) || empty($forms) ) {
			return;
		}

		$options = array(
			'0' => __('No form', 'crb'),
		);

		foreach ($forms as $form) {
			$options[$form->id] = $form->title;
		}

		$this->set_options($options);
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$this->set_options( apply_filters( 'crb_gravity_form_options', $this->options ) );

		$field_data = array_merge($field_data, array(
			'options' => $this->parse_options($this->options),
		));

		return $field_data;
	}

	function template() {
		// Gravity Forms not installed
		if ( !$this->is_plugin_active() ) {
			?><em><?php _e('Please install Gravity Forms plugin', 'crb'); ?></em><?php
			return;
		}

		// No forms have been found
		if ( empty($this->options) ) {
			?><em><?php _e('No Gravity Forms have been found.', 'crb'); ?></em><?php
			return;
		}

		parent::template();
	}
}