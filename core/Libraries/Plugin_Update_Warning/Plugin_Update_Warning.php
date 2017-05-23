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
			add_action( 'admin_init', array( $instance, 'setup' ) );
		}
		return $instance;
	}

	/**
	 * Register actions, filters, etc...
	 */
	public function setup() {
		global $pagenow;

		if ( !in_array( $pagenow, array( 'plugins.php', 'update-core.php' ) ) ) {
			return;
		}

		if ( !$this->has_major_update() ) {
			return;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_print_footer_scripts', array( $this, 'print_json_data' ), 9 );

		ob_start();
		$this->template();
		$template = ob_get_clean();
		Templater::add_template( 'plugin-update-warning', $template );
	}

	protected function has_major_update() {
		$all_updates = get_plugin_updates();
		$carbon_fields_data = isset( $all_updates[\Carbon_Fields\RELATIVE_PLUGIN_FILE] ) ? $all_updates[\Carbon_Fields\RELATIVE_PLUGIN_FILE] : null;
		if ( !$carbon_fields_data ) {
			return false;
		}

		$plugin_data = (object) _get_plugin_data_markup_translate( \Carbon_Fields\RELATIVE_PLUGIN_FILE, (array) $carbon_fields_data, false, true );
		$current_version = implode( '.', array_slice( explode( '.', $plugin_data->Version ), 0, 2 ) );
		$update_version = implode( '.', array_slice( explode( '.', $plugin_data->update->new_version ), 0, 2 ) );
		return version_compare( $current_version, $update_version, '<' ); // compare only MAJOR part of double-digit-major SemVer 
	}

	/**
	 * Return the JSON data.
	 */
	protected function get_json_data() {
		return array(
			'plugin_path' => \Carbon_Fields\RELATIVE_PLUGIN_FILE,
		);
	}

	/**
	 * Create the warning template
	 */
	protected function template() {
		?>
		<div class="update-message notice inline notice-error notice-alt">
			<p><?php echo nl2br( sprintf( __( 'The new version of Carbon Fields is a major update. Please make sure you have a full backup before updating and test any add-ons or custom functionality.' . "\n" . 'Developers should review the upgrade guide on %1$s.', 'carbon-fields' ), '<a href="https://carbonfields.net/" target="_blank">carbonfields.net</a>' ) ); ?></p>
		</div>
		<?php
	}

	/**
	 * Print the JSON data script.
	 */
	public function print_json_data() {
		?>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var carbonPluginUpdateWarningData = <?php echo wp_json_encode( $this->get_json_data() ); ?>;
//--><!]]>
</script>
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
