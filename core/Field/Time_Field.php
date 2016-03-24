<?php 

namespace Carbon_Fields\Field;

/**
 * Time picker field class.
 */
class Time_Field extends Field {
	/**
	 * Timepicker type.
	 * 
	 * @var string
	 */
	protected $timepicker_type = 'timepicker';

	/**
	 * Time format.
	 *
	 * @var string
	 */
	public $time_format = 'hh:mm tt';

	/**
	 * Interval step for hours, minutes and seconds.
	 *
	 * @var array
	 */
	public $interval_step = array();

	/**
	 * Restraints for hours, minutes, seconds and dates.
	 *
	 * @var array
	 */
	public $restraints = array();

	/**
	 * Timepicker options.
	 *
	 * @var array
	 */
	public $timepicker_options = array(
		'dateFormat' => 'yy-mm-dd',
		'timeFormat' => 'HH:mm:ss',
	);

	/**
	 * You can use this method to modify the field properties that are added to the JSON object.
	 * The JSON object is used by the Backbone Model and the Underscore template.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'timepicker_type' => $this->timepicker_type,
			'time_format' => $this->get_time_format(),
			'interval_step' => $this->get_interval_step(),
			'restraints' => $this->get_restraints(),
			'timepicker_options' => $this->get_timepicker_options(),
		) );

		return $field_data;
	}

	/**
	 * Prints the main Underscore template.
	 **/
	public function template() {
		?>
		<div class="input-with-button">
			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-timepicker" />
			<span class="carbon-timepicker-trigger button icon-button dashicons-clock hide-if-no-js"><?php _e( 'Timepicker', 'crb' ); ?></span>
		</div>
		<?php
	}

	/**
	 * This method is called in the admin_enqueue_scripts action. It is called once per field type.
	 * Enqueues field scripts and styles.
	 */
	public function admin_enqueue_scripts() {
		# Enqueue JS
		wp_enqueue_script( 'carbon-jquery-timepicker', \Carbon_Fields\URL . '/assets/js/lib/jquery-ui-timepicker.js', array( 'jquery-ui-datepicker', 'jquery-ui-slider' ) );

		# Enqueue CSS
		wp_enqueue_style( 'jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css' );
		wp_enqueue_style( 'carbon-jquery-ui', \Carbon_Fields\URL . '/assets/css/jquery-ui.css' );
	}

	/**
	 * Sets the time format.
	 */
	public function set_time_format( $time_format ) {
		$this->time_format = $time_format;

		return $this;
	}

	/**
	 * Returns the time format.
	 */
	public function get_time_format() {
		return $this->time_format;
	}

	/**
	 * Sets the interval step.
	 */
	public function set_interval_step( $interval_steps ) {
		$output = array();

		foreach ( $interval_steps as $step_name => $step_value ) {
			$name = 'step' . ucwords( $step_name );
			$output[ $name ] = (int) $step_value;
		}

		$this->interval_step = $output;

		return $this;
	}

	/**
	 * Returns the interval step.
	 */
	public function get_interval_step() {
		return $this->interval_step;
	}

	/**
	 * Sets the restraints.
	 */
	public function set_restraints( $restraints ) {
		$this->restraints = array_map( 'intval', $restraints );

		return $this;
	}

	/**
	 * Returns the restraints.
	 */
	public function get_restraints() {
		return $this->restraints;
	}

	/**
	 * Sets other timepicker options.
	 */
	public function set_timepicker_options( $timepicker_options ) {
		$this->timepicker_options = $timepicker_options;

		return $this;
	}

	/**
	 * Returns the timepicker options.
	 */
	public function get_timepicker_options() {
		return $this->timepicker_options;
	}
}
