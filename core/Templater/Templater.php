<?php

namespace Carbon_Fields\Templater;

/**
 * Handles the underscore templates rendering
 *
 **/
class Templater {

	protected static $instance = null;

	protected $templates = array();

	public static function instance() {
		if ( static::$instance === null ) {
			static::$instance = new static();
			static::$instance->setup();
		}
		return static::$instance;
	}
	
	/**
	 * Pretty initialization alias
	 */
	public static function boot() {
		static::instance();
	}

	/**
	 * Hook all templates to the administration footer.
	 */
	public function setup() {
		add_action( 'admin_footer', array( $this, 'render_templates' ), 999 );
	}

	/**
	 * Register a new template.
	 *
	 * @param string $name Template name
	 * @param string $html Template content
	 */
	public function add_template( $name, $html ) {
		// Check if the template is already added
		if ( isset( $this->templates[ $name ] ) ) {
			return false;
		}

		// Add the template to the stack
		$this->templates[ $name ] = $html;
	}

	/**
	 * Render all registered templates.
	 */
	public function render_templates() {
		foreach ( $this->templates as $name => $html ) {
			?>
			<script type="text/html" id="crb-tmpl-<?php echo $name; ?>">
				<?php echo apply_filters( 'carbon_template', apply_filters( 'carbon_template_' . $name, $html ), $name ); ?>
			</script>
			<?php
		}
	}
}
