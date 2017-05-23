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
		$this->setup_gravity_form_options();
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
			'0' => __( 'No form', 'carbon-fields' ),
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

		$this->set_options( apply_filters( 'crb_gravity_form_options', $this->get_options() ) );

		$field_data = array_merge( $field_data, array(
			'options' => $this->parse_options( $this->get_options() ),
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		// Gravity Forms not installed
		if ( ! $this->is_plugin_active() ) {
			?><em><?php _e( 'Please install Gravity Forms plugin', 'carbon-fields' ); ?></em><?php
			return;
		}

		// No forms have been found
		$options = $this->get_options();
		if ( empty( $options ) ) {
			?><em><?php _e( 'No Gravity Forms have been found.', 'carbon-fields' ); ?></em><?php
			return;
		}

		?>
		<div class="carbon-field-group">
			<select id="{{{ id }}}" name="{{{ name }}}" class="carbon-field-group-input">
				<# _.each(options, function(option) { #>
					<option value="{{ option.value }}" {{{ option.value == value ? 'selected="selected"' : '' }}}>
						{{{ option.name }}}
					</option>
				<# }) #>
			</select>

			<# if (parseInt(value) !== 0) { #>
				<div class="carbon-field-group-button">
					<a class="carbon-gravity-form-edit button hide-if-no-js" href="admin.php?page=gf_edit_forms&amp;id={{{ value }}}" target="_blank"><?php _e( 'Edit form', 'carbon-fields' ); ?></a>
				</div>
			<# } #>
		</div>
		<?php
	}
}
