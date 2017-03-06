<?php

namespace Carbon_Fields\Field;

/**
 * Time picker field class.
 */
class Time_Field extends Field {
	
	/**
	 * Picker type.
	 *
	 * @var string
	 */
	protected $picker_type = 'timepicker';

	/**
	 * Picker options.
	 *
	 * @var array
	 */
	public $picker_options = array(
		'dateFormat' => 'yy-mm-dd',
		'timeFormat' => 'hh:mm tt',
		'altFormat' => 'yy-mm-dd',
		'altTimeFormat' => 'HH:mm:ss',
		'altFieldTimeOnly' => false,
	);

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
	 * The storage format in variant that can be used by JavaScript.
	 *
	 * @var string
	 */
	protected $storage_format = 'HH:mm:ss';

	/**
	 * You can use this method to modify the field properties that are added to the JSON object.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, array(
			'storage_format' => $this->storage_format,
			'interval_step' => $this->get_interval_step(),
			'restraints' => $this->get_restraints(),
			'picker_type' => $this->picker_type,
			'picker_options' => $this->get_picker_options(),
		) );

		return $field_data;
	}

	/**
	 * This method is called in the admin_enqueue_scripts action. It is called once per field type.
	 * Enqueues field scripts and styles.
	 */
	public static function admin_enqueue_scripts() {
		# Enqueue CSS
		wp_enqueue_style( 'jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css', array(), \Carbon_Fields\VERSION );

		# Enqueue JS
		wp_enqueue_script( 'carbon-jquery-timepicker', \Carbon_Fields\URL . '/assets/js/lib/jquery-ui-timepicker.js', array( 'jquery-ui-datepicker', 'jquery-ui-slider' ), \Carbon_Fields\VERSION );
	}

	/**
	 * Sets the time format.
	 */
	public function set_time_format( $time_format ) {
		$this->picker_options['timeFormat'] = $time_format;
		return $this;
	}

	/**
	 * Returns the time format.
	 */
	public function get_time_format() {
		return isset( $this->picker_options['timeFormat'] ) ? $this->picker_options['timeFormat'] : null;
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
	 * Sets other picker options.
	 */
	public function set_picker_options( $options ) {
		$this->picker_options = array_replace( $this->picker_options, $options );
		return $this;
	}

	/**
	 * Returns the picker options.
	 */
	public function get_picker_options() {
		return $this->picker_options;
	}
}
