<?php

namespace Carbon_Fields\Loader;

use Carbon_Fields\App;
use Carbon_Fields\Pimple\Container as PimpleContainer;
use Carbon_Fields\Container\Repository as ContainerRepository;
use Carbon_Fields\Service\Legacy_Storage_Service_v_1_5;
use Carbon_Fields\Service\Meta_Query_Service;
use Carbon_Fields\Service\REST_API_Service;
use Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Loader and main initialization
 */
class Loader {

	protected $sidebar_manager;

	protected $container_repository;

	public function __construct( Sidebar_Manager $sidebar_manager, ContainerRepository $container_repository ) {
		$this->sidebar_manager = $sidebar_manager;
		$this->container_repository = $container_repository;
	}

	/**
	 * Hook the main Carbon Fields initialization functionality.
	 */
	public function boot() {
		if ( ! defined( 'ABSPATH' ) ) {
			throw new \Exception( 'Carbon Fields cannot be booted outside of a WordPress environment.' );
		}

		if ( did_action( 'init' ) ) {
			throw new \Exception( 'Carbon Fields must be booted before the "init" WordPress action has fired.' );
		}

		include_once( dirname( dirname( __DIR__ ) ) . '/config.php' );
		include_once( \Carbon_Fields\DIR . '/core/functions.php' );

		add_action( 'after_setup_theme', array( $this, 'load_textdomain' ), 9999 );
		add_action( 'init', array( $this, 'trigger_fields_register' ), 0 );
		add_action( 'carbon_after_register_fields', array( $this, 'initialize_containers' ) );
		add_action( 'admin_footer', array( $this, 'enqueue_scripts' ), 0 );
		add_action( 'admin_print_footer_scripts', array( $this, 'print_json_data_script' ), 9 );
		add_action( 'admin_print_footer_scripts', array( $this, 'print_bootstrap_js' ), 100 );

		# Enable the legacy storage service
		App::service( 'legacy_storage' )->enable();

		# Enable the meta query service
		App::service( 'meta_query' )->enable();

		# Enable the REST API service
		App::service( 'rest_api' )->enable();

		# Initialize sidebar manager
		$this->sidebar_manager->boot();
	}

	/**
	 * Load the plugin textdomain.
	 */
	public function load_textdomain() {
		$dir = \Carbon_Fields\DIR . '/languages/';
		$domain = \Carbon_Fields\TEXT_DOMAIN;
		$locale = get_locale();
		$path = $dir . $domain . '-' . $locale . '.mo';
		load_textdomain( $domain, $path );
	}

	/**
	 * Register containers and fields.
	 */
	public function trigger_fields_register() {
		try {
			do_action( 'carbon_register_fields' );
			do_action( 'carbon_after_register_fields' );
		} catch ( Incorrect_Syntax_Exception $e ) {
			$callback = '';
			foreach ( $e->getTrace() as $trace ) {
				$callback .= '<br/>' . ( isset( $trace['file'] ) ? $trace['file'] . ':' . $trace['line'] : $trace['function'] . '()' );
			}
			wp_die( '<h3>' . $e->getMessage() . '</h3><small>' . $callback . '</small>' );
		}
	}

	/**
	 * Initialize containers.
	 */
	public function initialize_containers() {
		$this->container_repository->initialize_containers();
	}

	/**
	 * Initialize main scripts
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'carbon-ext', \Carbon_Fields\URL . '/assets/js/ext.js', array( 'jquery' ), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-app', \Carbon_Fields\URL . '/assets/js/app.js', array( 'jquery', 'backbone', 'underscore', 'jquery-touch-punch', 'jquery-ui-sortable', 'carbon-ext' ), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-vendor', \Carbon_Fields\URL . '/assets/carbon.vendor.js', array( ) );
		wp_enqueue_script( 'carbon-core', \Carbon_Fields\URL . '/assets/carbon.core.js', array( 'carbon-vendor', 'jquery' ) );
		wp_enqueue_script( 'carbon-bootstrap', \Carbon_Fields\URL . '/assets/carbon.bootstrap.js', array( 'carbon-core' ) );
	}

	/**
	 * Retrieve containers and sidebars for use in the JS.
	 *
	 * @return array $carbon_data
	 */
	public function get_json_data() {
		global $wp_registered_sidebars;

		$carbon_data = array(
			'containers' => array(),
			'sidebars' => array(),
		);

		$containers = $this->container_repository->get_active_containers();

		foreach ( $containers as $container ) {
			$container_data = $container->to_json( true );

			$carbon_data['containers'][] = $container_data;
		}

		foreach ( $wp_registered_sidebars as $sidebar ) {
			// Check if we have inactive sidebars
			if ( isset( $sidebar['class'] ) && strpos( $sidebar['class'], 'inactive-sidebar' ) !== false ) {
				continue;
			}

			$carbon_data['sidebars'][] = array(
				'name' => $sidebar['name'],
				'id'   => $sidebar['id'],
			);
		}

		return $carbon_data;
	}

	/**
	 * Print the carbon JSON data script.
	 */
	public function print_json_data_script() {
		?>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var carbon_json = <?php echo wp_json_encode( $this->get_json_data() ); ?>;
//--><!]]>
</script>
		<?php
	}

	/**
	 * Print the bootstrap code for the fields.
	 */
	public function print_bootstrap_js() {
		?>
		<script type="text/javascript">
			if (typeof carbonFieldsBootstrap.default === 'function') {
				carbonFieldsBootstrap.default();
			}
		</script>
		<?php
	}
}
