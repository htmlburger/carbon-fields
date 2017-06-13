<?php

namespace Carbon_Fields\Field;

/**
 * Number field class.
 */
class Number_Field extends Field {
	
	/**
	 * Min value
	 *
	 * @see min_value()
	 * @var string
	 */
	protected $min_value = false;
	
	/**
	 * Max value
	 *
	 * @see max_value()
	 * @var string
	 */
	protected $max_value;
	
	/**
	 * Input value change step
	 *
	 * @see step()
	 * @var string
	 */
	protected $step;
	
	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<input id="{{{ id }}}" type="number" name="{{{ name }}}" value="{{ value }}"{{ min_value }}{{ max_value }}{{ step }} class="regular-text" />
		<?php
	}
	
	/**
	 * Set min value
	 *
	 * @return object $this
	 **/
	public function set_min_value( $min_value ) {
		$this->min_value = $min_value;
		return $this;
	}

	/**
	 * Alias for set_min_value()
	 *
	 * @see set_min_value()
	 * @return object $this
	 **/
	public function min_value( $min_value ) {
		return $this->set_min_value( $min_value );
	}

	/**
	 * Return the field min value
	 *
	 * @return object $this
	 **/
	public function get_min_value() {
		if ($this->min_value)
			return ' min='.$this->min_value;
	}
	
	/**
	 * Set max value
	 *
	 * @return object $this
	 **/
	public function set_max_value( $max_value ) {
		$this->max_value = $max_value;
		return $this;
	}

	/**
	 * Alias for set_max_value()
	 *
	 * @see set_max_value()
	 * @return object $this
	 **/
	public function max_value( $max_value ) {
		return $this->set_max_value( $max_value );
	}

	/**
	 * Return the field max value
	 *
	 * @return object $this
	 **/
	public function get_max_value() {
		if ($this->max_value)
			return ' max='.$this->max_value;
	}
	
	/**
	 * Set step
	 *
	 * @return object $this
	 **/
	public function set_step( $step ) {
		$this->step = $step;
		return $this;
	}

	/**
	 * Alias for set_step()
	 *
	 * @see set_step()
	 * @return object $this
	 **/
	public function step( $step ) {
		return $this->set_step( $step );
	}

	/**
	 * Return the field step
	 *
	 * @return object $this
	 **/
	public function get_step() {
		if ($this->step)
			return ' step='.$this->step;
	}
	
	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		if ( $load ) {
			$this->load();
		}

		$this->process_value();

		$field_data = array(
			'id' => $this->get_id(),
			'type' => $this->get_type(),
			'label' => $this->get_label(),
			'name' => $this->get_name(),
			'base_name' => $this->get_base_name(),
			'value' => $this->get_value(),
			'default_value' => $this->get_default_value(),
			'help_text' => $this->get_help_text(),
			'min_value' => $this->get_min_value(),
			'max_value' => $this->get_max_value(),
			'step' => $this->get_step(),
			'context' => $this->get_context(),
			'required' => $this->is_required(),
			'lazyload' => $this->get_lazyload(),
			'width' => $this->get_width(),
			'classes' => $this->get_classes(),
			'conditional_logic' => $this->get_conditional_logic(),
		);

		return $field_data;
	}
}
