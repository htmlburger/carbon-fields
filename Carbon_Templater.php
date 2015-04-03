<?php

add_action('crb_field_activated', 'carbon_add_templates');
add_action('crb_container_activated', 'carbon_add_templates');
if (!function_exists('carbon_add_templates')) {
	/**
	 * Adds the field/container template(s) to the templates stack.
	 *
	 * @param object $object field or container object
	 * @return void
	 **/
	function carbon_add_templates($object) {
		$templates = $object->get_templates();

		if (!$templates) {
			return false;
		}

		foreach ($templates as $name => $callback) {
			ob_start();

			call_user_func($callback);

			$html = ob_get_clean();

			// Add the template to the stack
			Carbon_Templater::add_template($name, $html);
		}
	}
}

/**
 * Handles the underscore templates rendering
 *
 **/
class Carbon_Templater {
	static protected $templates = array();

	function __construct() {
		add_action('admin_footer', array($this, 'render_templates'), 999);
	}

	static function add_template($name, $html) {
		// Check if the template is already added
		if (isset(self::$templates[$name])) {
			return false;
		}

		// Add the template to the stack
		self::$templates[$name] = $html;
	}

	function render_templates() {
		foreach (self::$templates as $name => $html) {
			?>
			<script type="text/html" id="crb-tmpl-<?php echo $name; ?>">
				<?php echo apply_filters('carbon_template', apply_filters('carbon_template_' . $name, $html), $name); ?>
			</script>
			<?php
		}
	}
}

$carbon_templater = new Carbon_Templater();