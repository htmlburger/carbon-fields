<?php

namespace Carbon_Fields\Libraries\Plugin_Update_Warning;

use Carbon_Fields\Templater\Templater;

/**
 * This class is responsible for handling custom sidebars.
 */
class Plugin_Update_Warning {

	/**
	 * Singleton implementation.
	 *
	 * @return Plugin_Update_Warning
	 */
	public static function instance() {
		static $instance;
		if ( ! is_a( $instance, get_class() ) ) {
			$instance = new self();
			$instance->setup();
		}
		return $instance;
	}

	/**
	 * Register actions, filters, etc...
	 */
	private function setup() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		ob_start();
		$this->template();
		$template = ob_get_clean();
		Templater::add_template( 'plugin-update-warning', $template );
	}

	/**
	 * Create the warning template
	 */
	private function template() {
		?>
		<div class="update-message notice inline notice-warning notice-alt">
			<p>There is a new version of Carbon Fields available.</p>
		</div>
		<?php
	}

	/**
	 * Enqueue assets
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'carbon-plugin-update-warning', \Carbon_Fields\URL . '/core/Libraries/Plugin_Update_Warning/assets/css/app.css', array(), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-plugin-update-warning', \Carbon_Fields\URL . '/core/Libraries/Plugin_Update_Warning/assets/js/app.js', array( 'jquery', 'backbone' ), \Carbon_Fields\VERSION );
		wp_localize_script( 'carbon-plugin-update-warning', 'crbPluginUpdateWarningL10n',
			array(
				
			)
		);
	}
}
