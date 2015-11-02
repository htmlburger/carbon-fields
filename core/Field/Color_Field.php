<?php 

namespace Carbon_Fields\Field;

class Color_Field extends Base_Field {
	function template() {
		?>
		<div class="carbon-color-row">
			<div class="input-with-button">
				<input id="{{{ id }}}" type="text" name="{{{ name }}}" value="{{ value }}" class="regular-text carbon-color" />
				<span class="pickcolor button icon-button hide-if-no-js"><?php _e('Select a Color', 'crb'); ?></span>
			</div>
			<div class="carbon-color-container hide-if-no-js"></div>
		</div>
		<?php
	}

	function admin_enqueue_scripts() {
		wp_enqueue_style('wp-color-picker');
		wp_enqueue_script('iris');
	}
}
