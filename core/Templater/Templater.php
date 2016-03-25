<?php

namespace Carbon_Fields\Templater;

/**
 * Handles the underscore templates rendering
 *
 **/
class Templater {
	static protected $templates = array();

	/**
	 * Initialize a new templater.
	 * Hook all templates to the administration footer.
	 */
	public function __construct() {
		add_action( 'admin_footer', array( $this, 'render_templates' ), 999 );
	}

	/**
	 * Register a new template.
	 *
	 * @param string $name Template name
	 * @param string $html Template content
	 */
	public static function add_template( $name, $html ) {
		// Check if the template is already added
		if ( isset( self::$templates[ $name ] ) ) {
			return false;
		}

		// Add the template to the stack
		self::$templates[ $name ] = $html;
	}

	/**
	 * Render all registered templates.
	 */
	public function render_templates() {
		foreach ( self::$templates as $name => $html ) {
			?>
			<script type="text/html" id="crb-tmpl-<?php echo $name; ?>">
				<?php echo apply_filters( 'carbon_template', apply_filters( 'carbon_template_' . $name, $html ), $name ); ?>
			</script>
			<?php
		}
	}
}
