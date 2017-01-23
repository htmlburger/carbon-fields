<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Field\Field;
use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Datastore\Datastore_Holder_Interface;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Base container class.
 * Defines the key container methods and their default implementations.
 */
abstract class Container implements Datastore_Holder_Interface {
	/**
	 * Where to put a particular tab -- at the head or the tail. Tail by default
	 */
	const TABS_TAIL = 1;
	const TABS_HEAD = 2;

	/**
	 * List of registered unique panel identificators
	 *
	 * @see get_unique_panel_id()
	 * @var array
	 */
	public static $registered_panel_ids = array();

	/**
	 * List of containers created via factory that
	 * should be initialized
	 *
	 * @var array
	 */
	protected static $init_containers = array();

	/**
	 * List of containers attached to the current page view
	 *
	 * @see _attach()
	 * @var array
	 */
	public static $active_containers = array();

	/**
	 * List of fields attached to the current page view
	 *
	 * @see _attach()
	 * @var array
	 */
	protected static $active_fields = array();

	/**
	 * List of registered unique field names for this container instance
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	protected $registered_field_names = array();

	/**
	 * Stores all the container Backbone templates
	 *
	 * @see factory()
	 * @see add_template()
	 * @var array
	 */
	protected $templates = array();

	/**
	 * Tabs available
	 */
	protected $tabs = array();

	/**
	 * List of default container settings
	 *
	 * @see init()
	 * @var array
	 */
	public $settings = array();

	/**
	 * Title of the container
	 *
	 * @var string
	 */
	public $title = '';

	/**
	 * Whether the container was setup
	 *
	 * @var bool
	 */
	public $setup_ready = false;

	/**
	 * List of notification messages to be displayed on the front-end
	 *
	 * @var array
	 */
	protected $notifications = array();

	/**
	 * List of error messages to be displayed on the front-end
	 *
	 * @var array
	 */
	protected $errors = array();

	/**
	 * List of container fields
	 *
	 * @see add_fields()
	 * @var array
	 */
	protected $fields = array();

	/**
	 * Container datastores. Propagated to all container fields
	 *
	 * @see set_datastore()
	 * @see get_datastore()
	 * @var object
	 */
	protected $datastore;

	/**
	 * Flag whether the datastore is the default one or replaced with a custom one
	 *
	 * @see set_datastore()
	 * @see get_datastore()
	 * @var object
	 */
	protected $has_default_datastore = true;

	/**
	 * Create a new container of type $type and name $name and label $label.
	 *
	 * @param string $type
	 * @param string $name Human-readable name of the container
	 * @return object $container
	 **/
	public static function factory( $type, $name ) {
		// backward compatibility: post_meta container used to be called custom_fields
		if ( $type === 'custom_fields' ) {
			$type = 'post_meta';
		}

		$type = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $type ) ) );

		$class = __NAMESPACE__ . '\\' . $type . '_Container';

		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown container "' . $type . '".' );
			$class = __NAMESPACE__ . '\\Broken_Container';
		}

		$container = new $class( $name );
		$container->type = $type;

		self::$init_containers[] = $container;

		return $container;
	}

	/**
	 * An alias of factory().
	 *
	 * @see Container::factory()
	 **/
	public static function make( $type, $name ) {
		return self::factory( $type, $name );
	}

	/**
	 * Initialize containers created via factory
	 *
	 * @return object
	 **/
	public static function init_containers() {
		while ( ( $container = array_shift( self::$init_containers ) ) ) {
			$container->init();
		}

		return $container;
	}

	/**
	 * Returns all the active containers created via factory
	 *
	 * @return array
	 **/
	public static function get_active_containers() {
		return self::$active_containers;
	}

	/**
	 * Adds a container to the active containers array and triggers an action
	 **/
	public static function activate_container( $container ) {
		self::$active_containers[] = $container;

		$container->boot();

		do_action( 'crb_container_activated', $container );
	}

	/**
	 * Returns all the active fields created via factory
	 *
	 * @return array
	 **/
	public static function get_active_fields() {
		return self::$active_fields;
	}

	/**
	 * Adds a field to the active fields array and triggers an action
	 **/
	public static function activate_field( $field ) {
		self::$active_fields[] = $field;

		if ( method_exists( $field, 'get_fields' ) ) {
			$fields = $field->get_fields();

			foreach ( $fields as $inner_field ) {
				self::activate_field( $inner_field );
			}
		}

		$field->boot();

		do_action( 'crb_field_activated', $field );
	}

	/**
	 * Perform instance initialization after calling setup()
	 **/
	abstract public function init();

	/**
	 * Prints the container Underscore template
	 **/
	public function template() {
		?>
		<div class="{{{ classes.join(' ') }}}">
			<# _.each(fields, function(field) { #>
				<div class="{{{ field.classes.join(' ') }}}">
					<label for="{{{ field.id }}}">
						{{ field.label }}

						<# if (field.required) { #>
							 <span class="carbon-required">*</span>
						<# } #>
					</label>

					<div class="field-holder {{{ field.id }}}"></div>

					<# if (field.help_text) { #>
						<em class="help-text">
							{{{ field.help_text }}}
						</em>
					<# } #>

					<em class="carbon-error"></em>
				</div>
			<# }); #>
		</div>
		<?php
	}

	/**
	 * Create a new container
	 *
	 * @param string $title Unique title of the container
	 **/
	public function __construct( $title ) {
		if ( empty( $title ) ) {
			Incorrect_Syntax_Exception::raise( 'Empty container title is not supported' );
		}

		$this->title = $title;
		$this->id = preg_replace( '~\W~u', '', remove_accents( $title ) );
		$this->id = self::get_unique_panel_id( $this->id );

		self::$registered_panel_ids[] = $this->id;
	}

	/**
	 * Boot the container once it's attached.
	 **/
	public function boot() {
		$this->add_template( $this->type, array( $this, 'template' ) );

		add_action( 'admin_footer', array( get_class(), 'admin_hook_scripts' ), 5 );
		add_action( 'admin_footer', array( get_class(), 'admin_hook_styles' ), 5 );
	}

	/**
	 * Update container settings and begin initialization
	 *
	 * @see init()
	 * @param array $settings
	 * @return object $this
	 **/
	public function setup( $settings = array() ) {
		if ( $this->setup_ready ) {
			Incorrect_Syntax_Exception::raise( 'Panel "' . $this->title . '" already setup' );
		}

		$this->check_setup_settings( $settings );

		$this->settings = array_merge( $this->settings, $settings );

		foreach ( $this->settings as $key => $value ) {
			if ( is_null( $value ) ) {
				unset( $this->settings[ $key ] );
			}
		}

		$this->setup_ready = true;

		return $this;
	}

	/**
	 * Check if all required container settings have been specified
	 *
	 * @param array $settings Container settings
	 **/
	public function check_setup_settings( &$settings = array() ) {
		$invalid_settings = array_diff_key( $settings, $this->settings );
		if ( ! empty( $invalid_settings ) ) {
			Incorrect_Syntax_Exception::raise( 'Invalid settings supplied to setup(): "' . implode( '", "', array_keys( $invalid_settings ) ) . '"' );
		}
	}

	/**
	 * Called first as part of the container save procedure.
	 * Responsible for checking the request validity and
	 * calling the container-specific save() method
	 *
	 * @see save()
	 * @see is_valid_save()
	 **/
	public function _save() {
		$param = func_get_args();
		if ( call_user_func_array( array( $this, 'is_valid_save' ), $param ) ) {
			call_user_func_array( array( $this, 'save' ), $param );
		}
	}

	/**
	 * Load submitted data and save each field in the container
	 *
	 * @see is_valid_save()
	 **/
	public function save( $data ) {
		foreach ( $this->fields as $field ) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	public function is_valid_save() {
		return false;
	}

	/**
	 * Load the value for each field in the container.
	 * Could be used internally during container rendering
	 **/
	public function load() {
		foreach ( $this->fields as $field ) {
			$field->load();
		}
	}


	/**
	 * Called first as part of the container attachment procedure.
	 * Responsible for checking it's OK to attach the container
	 * and if it is, calling the container-specific attach() method
	 *
	 * @see attach()
	 * @see is_valid_attach()
	 **/
	public function _attach() {
		$param = func_get_args();
		if ( call_user_func_array( array( $this, 'is_valid_attach' ), $param ) ) {
			call_user_func_array( array( $this, 'attach' ), $param );

			if ( call_user_func_array( array( $this, 'is_active' ), $param ) ) {
				self::activate_container( $this );

				$fields = $this->get_fields();
				foreach ( $fields as $field ) {
					self::activate_field( $field );
				}
			}
		}
	}

	/**
	 * Returns all the Backbone templates
	 *
	 * @return array
	 **/
	public function get_templates() {
		return $this->templates;
	}

	/**
	 * Adds a new Backbone template
	 **/
	public function add_template( $name, $callback ) {
		$this->templates[ $name ] = $callback;
	}

	/**
	 * Attach the container rendering and helping methods
	 * to concrete WordPress Action hooks
	 **/
	public function attach() {}

	/**
	 * Perform checks whether the container is active for current request
	 *
	 * @return bool True if the container is active
	 **/
	public function is_active() {
		return $this->is_valid_attach();
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach() {
		return true;
	}

	/**
	 * Revert the result of attach()
	 **/
	public function detach() {
		self::drop_unique_panel_id( $this->id );

		// unregister field names
		foreach ( $this->fields as $field ) {
			$this->drop_unique_field_name( $field->get_name() );
		}
	}

	/**
	 * Append array of fields to the current fields set. All items of the array
	 * must be instances of Field and their names should be unique for all
	 * Carbon containers.
	 * If a field does not have DataStore already, the container datastore is
	 * assigned to them instead.
	 *
	 * @param array $fields
	 * @return object $this
	 **/
	public function add_fields( $fields ) {
		foreach ( $fields as $field ) {
			if ( ! is_a( $field, 'Carbon_Fields\\Field\\Field' ) ) {
				Incorrect_Syntax_Exception::raise( 'Object must be of type Carbon_Fields\\Field\\Field' );
			}

			$this->verify_unique_field_name( $field->get_name() );

			$field->set_context( $this->type );
			if ( ! $field->get_datastore() ) {
				$field->set_datastore( $this->get_datastore(), $this->has_default_datastore() );
			}
		}

		$this->fields = array_merge( $this->fields, $fields );

		return $this;
	}

	/**
	 * Configuration function for adding tab with fields
	 *
	 * @param string $tab_name
	 * @param array $fields
	 * @return object $this
	 */
	public function add_tab( $tab_name, $fields ) {
		$this->add_template( 'tabs', array( $this, 'template_tabs' ) );

		$this->add_fields( $fields );
		$this->create_tab( $tab_name, $fields );

		return $this;
	}

	/**
	 * Internal function that creates the tab and associates it with particular field set
	 *
	 * @param string $tab_name
	 * @param array $fields
	 * @param int $queue_end
	 * @return object $this
	 */
	private function create_tab( $tab_name, $fields, $queue_end = self::TABS_TAIL ) {
		if ( isset( $this->tabs[ $tab_name ] ) ) {
			Incorrect_Syntax_Exception::raise( "Tab name duplication for $tab_name" );
		}

		if ( $queue_end === self::TABS_TAIL ) {
			$this->tabs[ $tab_name ] = array();
		} else if ( $queue_end === self::TABS_HEAD ) {
			$this->tabs = array_merge(
				array( $tab_name => array() ),
				$this->tabs
			);
		}

		foreach ( $fields as $field ) {
			$field_name = $field->get_name();
			$this->tabs[ $tab_name ][ $field_name ] = $field;
		}

		$this->settings['tabs'] = $this->get_tabs_json();
	}

	/**
	 * Whether the container is tabbed or not
	 *
	 * @return bool
	 */
	public function is_tabbed() {
		return (bool) $this->tabs;
	}

	/**
	 * Retrieve all fields that are not defined under a specific tab
	 *
	 * @return array
	 */
	public function get_untabbed_fields() {
		$tabbed_fields_names = array();
		foreach ( $this->tabs as $tab_fields ) {
			$tabbed_fields_names = array_merge( $tabbed_fields_names, array_keys( $tab_fields ) );
		}

		$all_fields_names = array();
		foreach ( $this->fields as $field ) {
			$all_fields_names[] = $field->get_name();
		}

		$fields_not_in_tabs = array_diff( $all_fields_names, $tabbed_fields_names );

		$untabbed_fields = array();
		foreach ( $this->fields as $field ) {
			if ( in_array( $field->get_name(), $fields_not_in_tabs ) ) {
				$untabbed_fields[] = $field;
			}
		}

		return $untabbed_fields;
	}

	/**
	 * Retrieve all tabs.
	 * Create a default tab if there are any untabbed fields.
	 *
	 * @return array
	 */
	public function get_tabs() {
		$untabbed_fields = $this->get_untabbed_fields();

		if ( ! empty( $untabbed_fields ) ) {
			$this->create_tab( __( 'General', 'carbon-fields' ), $untabbed_fields, self::TABS_HEAD );
		}

		return $this->tabs;
	}

	/**
	 * Build the tabs JSON
	 *
	 * @return array
	 */
	public function get_tabs_json() {
		$tabs_json = array();
		$tabs = $this->get_tabs();

		foreach ( $tabs as $tab_name => $fields ) {
			foreach ( $fields as $field_name => $field ) {
				$tabs_json[ $tab_name ][] = $field_name;
			}
		}

		return $tabs_json;
	}

	/**
	 * Returns the private container array of fields.
	 * Use only if you are completely aware of what you are doing.
	 *
	 * @return array
	 **/
	public function get_fields() {
		return $this->fields;
	}

	/**
	 * Perform a check whether the current container has fields
	 *
	 * @return bool
	 **/
	public function has_fields() {
		return (bool) $this->fields;
	}

	/**
	 * Perform checks whether there is a container registered with identificator $id
	 */
	public static function get_unique_panel_id( $id ) {
		$base = $id;
		$suffix = 0;

		while ( in_array( $id, self::$registered_panel_ids ) ) {
			$suffix++;
			$id = $base . strval( $suffix );
		}

		return $id;
	}


	/**
	 * Remove container identificator $id from the list of unique container ids
	 *
	 * @param string $id
	 **/
	public static function drop_unique_panel_id( $id ) {
		if ( in_array( $id, self::$registered_panel_ids ) ) {
			unset( self::$registered_panel_ids[ array_search( $id, self::$registered_panel_ids ) ] );
		}
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 **/
	public function verify_unique_field_name( $name ) {
		if ( in_array( $name, $this->registered_field_names ) ) {
			Incorrect_Syntax_Exception::raise( 'Field name "' . $name . '" already registered' );
		}

		$this->registered_field_names[] = $name;
	}

	/**
	 * Remove field name $name from the list of unique field names
	 *
	 * @param string $name
	 **/
	public function drop_unique_field_name( $name ) {
		$index = array_search( $name, $this->registered_field_names );

		if ( $index !== false ) {
			unset( $this->registered_field_names[ $index ] );
		}
	}

	/**
	 * Return whether the datastore instance is the default one or has been overriden
	 *
	 * @return Datastore_Interface $datastore
	 **/
	public function has_default_datastore() {
		return $this->has_default_datastore;
	}

	/**
	 * Assign datastore instance for use by the container fields
	 *
	 * @param Datastore_Interface $datastore
	 * @return object $this
	 **/
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		if ( $set_as_default && !$this->has_default_datastore() ) {
			return $this; // datastore has been overriden with a custom one - abort changing to a default one
		}
		$this->datastore = $datastore;
		$this->has_default_datastore = $set_as_default;

		foreach ( $this->fields as $field ) {
			$field->set_datastore( $this->get_datastore(), true );
		}
		return $this;
	}

	/**
	 * Return the DataStore instance used by container fields
	 *
	 * @return Datastore_Interface $datastore
	 **/
	public function get_datastore() {
		return $this->datastore;
	}

	/**
	 * Return WordPress nonce name used to identify the current container instance
	 *
	 * @return string
	 **/
	public function get_nonce_name() {
		return 'carbon_panel_' . $this->id . '_nonce';
	}

	/**
	 * Return WordPress nonce field
	 *
	 * @return string
	 **/
	public function get_nonce_field() {
		return wp_nonce_field( $this->get_nonce_name(), $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ false );
	}

	/**
	 * Returns an array that holds the container data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$container_data = array(
			'id' => $this->id,
			'type' => $this->type,
			'title' => $this->title,
			'settings' => $this->settings,
			'fields' => array(),
		);

		$fields = $this->get_fields();
		foreach ( $fields as $field ) {
			$field_data = $field->to_json( $load );
			$container_data['fields'][] = $field_data;
		}

		return $container_data;
	}

	/**
	 * Underscore template for tabs
	 */
	public function template_tabs() {
		?>
		<div class="carbon-tabs">
			<ul class="carbon-tabs-nav">
				<# _.each(tabs, function (tab, tabName) { #>
					<li><a href="#" data-id="{{{ tab.id }}}">{{{ tabName }}}</a></li>
				<# }); #>
			</ul>

			<div class="carbon-tabs-body">
				<# _.each(tabs, function (tab) { #>
					<div class="carbon-fields-collection carbon-tab">
						{{{ tab.html }}}
					</div>
				<# }); #>
			</div>
		</div>
		<?php
	}

	/**
	 * Enqueue admin scripts
	 */
	public static function admin_hook_scripts() {
		wp_enqueue_script( 'carbon-containers', \Carbon_Fields\URL . '/assets/js/containers.js', array( 'carbon-app' ), \Carbon_Fields\VERSION );

		wp_localize_script( 'carbon-containers', 'carbon_containers_l10n',
			array(
				'please_fill_the_required_fields' => __( 'Please fill out all required fields highlighted below.', 'carbon-fields' ),
				'changes_made_save_alert' => __( 'The changes you made will be lost if you navigate away from this page.', 'carbon-fields' ),
			)
		);
	}

	/**
	 * Enqueue admin styles
	 */
	public static function admin_hook_styles() {
		wp_enqueue_style( 'carbon-main', \Carbon_Fields\URL . '/assets/bundle.css', array(), \Carbon_Fields\VERSION );
	}
} // END Container

