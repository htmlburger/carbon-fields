<?php 

namespace Carbon_Fields\Field;

class Date_Field extends Field {

	/**
	 * Datepicker options
	 */
	public $options = array();

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'options' => $this->options,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="input-with-button">
			<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-datepicker" />
			<span class="carbon-datepicker-trigger button icon-button hide-if-no-js"><?php _e('Date', 'crb'); ?></span>
		</div>
		<?php
	}

	function admin_enqueue_scripts() {
		wp_enqueue_script('jquery-ui-datepicker');

		wp_enqueue_style('jquery-ui', '//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.min.css');
		wp_enqueue_style('carbon-jquery-ui', CARBON_PLUGIN_URL . '/css/jquery-ui.css');
	}

	function set_options($options) {
		$this->options = $options;

		return $this;
	}
}
