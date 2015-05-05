<?php 

class Carbon_Container_Widget extends Carbon_Container {

	function __construct($id) {
		// Reset the registerd fields array, this is required so we can have fields with same names
		self::$registered_field_names = array();

		$this->id = $id;
	}

	function init() {
		$this->_attach();
		$this->render();

		return $this;
	}

	function to_json($load) {
		return parent::to_json(false);
	}

	function render() {
		include dirname(__FILE__) . '/admin-templates/container-widget.php';
	}

	function is_valid_attach() {
		$screen = get_current_screen();

		return $screen && $screen->id === 'widgets';
	}

	function template() {
		?>
		<# _.each(fields, function(field) { #>
			<div class="carbon-widget-field-wrapper {{{ field.classes }}}">
				<# if (field.label) { #>
					<label for="{{{ field.id }}}">
						{{ field.label }}

						<# if (field.required) { #>
							 <span class="carbon-required">*</span>
						<# } #>
					</label>
				<# } #>

				<div class="field-holder {{{ field.id }}}"></div>

				<# if (field.help_text) { #>
					<em class="help-text">
						{{{ field.help_text }}}
					</em>
				<# } #>
			</div>
		<# }); #>
		<?php
	}
}

