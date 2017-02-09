<?php

namespace Carbon_Fields\Templater;

/**
 * Handles the underscore templates rendering
 *
 **/
class Templater {

	protected $templates = array();

	/**
	 * Hook all templates to the administration footer.
	 */
	public function boot() {
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
	 * Get a template by name.
	 *
	 * @param string $name Template name
	 * @return string
	 */
	public function get_template( $name ) {
		if ( ! isset( $this->templates[ $name ] ) ) {
			return null;
		}
		return $this->templates[ $name ];
	}

	/**
	 * Get all registered templaes.
	 *
	 * @return array
	 */
	public function get_templates() {
		return $this->templates;
	}

	/**
	 * Render all registered templates.
	 */
	public function render_templates() {
		$output = array();
		foreach ( $this->templates as $name => $html ) {
			$id = 'crb-tmpl-' . $name;
			$html = apply_filters( 'carbon_template_' . $name, $html );
			$html = apply_filters( 'carbon_template', $html, $name );

			$id_attr = esc_attr( $id );
			$output[] = <<<EOT
<script type="text/html" id="$id_attr">
	$html
</script>
EOT;
		}
		echo implode( PHP_EOL, $output );
	}
}
