<?php

namespace Carbon_Fields\Libraries\Plugin_Update_Warning;

/**
 * This class is responsible for displaying a plugin update warning when a major version is released.
 */
class Plugin_Update_Warning {

	public static function instance() {
		static $instance;
		if ( ! is_a( $instance, get_class() ) ) {
			$instance = new self();
		}
		return $instance;
	}

	public static function boot() {
		add_action( 'admin_head', array( static::instance(), 'setup' ) );
	}

	public function setup() {
		global $pagenow;

		if ( ! in_array( $pagenow, array( 'plugins.php', 'update-core.php' ) ) ) {
			return;
		}

		if ( ! $this->has_major_update() ) {
			return;
		}

		add_action( 'admin_footer', array( $this, 'enqueue_scripts' ) );

		ob_start();
		$this->template();
		$template = ob_get_clean();
		add_action( 'admin_footer', function() use ( $template ) {
			?>
			<script type="text/html" id="crb-tmpl-plugin-update-warning">
				<?php echo apply_filters( 'carbon_fields_plugin_update_warning_template', $template ); ?>
			</script>
			<?php
		} );
	}

	protected function has_major_update() {
		$all_updates = get_plugin_updates();
		$carbon_fields_data = isset( $all_updates[ \Carbon_Fields\RELATIVE_PLUGIN_FILE ] ) ? $all_updates[ \Carbon_Fields\RELATIVE_PLUGIN_FILE ] : null;
		if ( ! $carbon_fields_data ) {
			return false;
		}

		$plugin_data = (object) _get_plugin_data_markup_translate( \Carbon_Fields\RELATIVE_PLUGIN_FILE, (array) $carbon_fields_data, false, true );
		$current_version = implode( '.', array_slice( explode( '.', $plugin_data->Version ), 0, 1 ) );
		$update_version = implode( '.', array_slice( explode( '.', $plugin_data->update->new_version ), 0, 1 ) );
		return version_compare( $current_version, $update_version, '<' ); // compare only MAJOR part of SemVer
	}

	protected function get_json_data() {
		return array(
			'plugin_path' => \Carbon_Fields\RELATIVE_PLUGIN_FILE,
		);
	}

	protected function template() {
		?>
		<div class="update-message notice inline notice-error notice-alt">
			<p><?php echo nl2br( sprintf( __( 'The new version of Carbon Fields is a major update. Please make sure you have a full backup before updating and test any add-ons or custom functionality.' . "\n" . 'Developers should review the upgrade guide on %1$s.', 'carbon-fields' ), '<a href="https://carbonfields.net/" target="_blank">carbonfields.net</a>' ) ); ?></p>
		</div>
		<?php
	}

	public function enqueue_scripts() {
		wp_enqueue_style( 'carbon-plugin-update-warning', \Carbon_Fields\URL . '/core/Libraries/Plugin_Update_Warning/assets/css/app.css', array(), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-plugin-update-warning', \Carbon_Fields\URL . '/core/Libraries/Plugin_Update_Warning/assets/js/app.js', array( 'jquery', 'backbone' ), \Carbon_Fields\VERSION );
		wp_localize_script( 'carbon-plugin-update-warning', 'carbonFieldsPluginUpdateWarning', $this->get_json_data() );
	}
}
