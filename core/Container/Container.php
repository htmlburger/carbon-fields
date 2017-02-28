<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\App;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Field\Group_Field;
use Carbon_Fields\Container\Condition\Fulfillable_Collection;
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
	 * Separator signifying field hierarchy relation
	 * Used when searching for fields in a specific complex field
	 */
	const HIERARCHY_FIELD_SEPARATOR = '/';

	/**
	 * Separator signifying complex_field->group relation
	 * Used when searching for fields in a specific complex field group
	 */
	const HIERARCHY_GROUP_SEPARATOR = ':';

	/**
	 * Stores if the container is active on the current page
	 *
	 * @see activate()
	 * @var bool
	 */
	protected $active = false;

	/**
	 * List of registered unique field names for this container instance
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	protected $registered_field_names = array();

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
	 * @var boolean
	 */
	protected $has_default_datastore = true;

	/**
	 * Fulfillable_Collection to use when checking attachment/saving conditions
	 *
	 * @var Fulfillable_Collection
	 */
	protected $conditions_collection;

	/**
	 * Array of current user condition types that are checked during all requests
	 *
	 * @var array<string>
	 */
	protected $current_user_conditions = array( 'current_user_id', 'current_user_role', 'current_user_capability' );

	/**
	 * Array of condition types that are checked during save requests
	 *
	 * @var array<string>
	 */
	protected $static_conditions = array();

	/**
	 * Array of condition types that are checked during edit requests
	 *
	 * @var array<string>
	 */
	protected $dynamic_conditions = array();

	/**
	 * Get array of all static condition types
	 * 
	 * @return array<string>
	 */
	protected function get_static_conditions() {
		return array_merge( $this->current_user_conditions, $this->static_conditions );
	}

	/**
	 * Get array of all dynamic condition types
	 * 
	 * @return array<string>
	 */
	protected function get_dynamic_conditions() {
		return $this->dynamic_conditions;
	}

	/**
	 * Normalizes a container type string to an expected format
	 *
	 * @param string $type
	 * @return string $normalized_type
	 */
	protected static function normalize_container_type( $type ) {
		// backward compatibility: post_meta container used to be called custom_fields
		if ( $type === 'custom_fields' ) {
			$type = 'post_meta';
		}

		$normalized_type = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $type ) ) );
		return $normalized_type;
	}

	/**
	 * Resolves a string-based type to a fully qualified container class name
	 *
	 * @param string $type
	 * @return string $class_name
	 */
	protected static function container_type_to_class( $type ) {
		$class = __NAMESPACE__ . '\\' . $type . '_Container';
		if ( ! class_exists( $class ) ) {
			Incorrect_Syntax_Exception::raise( 'Unknown container "' . $type . '".' );
			$class = __NAMESPACE__ . '\\Broken_Container';
		}
		return $class;
	}

	/**
	 * Create a new container of type $type and name $name.
	 *
	 * @param string $type
	 * @param string $name Human-readable name of the container
	 * @return object $container
	 */
	public static function factory( $type, $name ) {
		$repository = App::resolve( 'container_repository' );
		$unique_id = $repository->get_unique_panel_id( $name );
		
		$normalized_type = static::normalize_container_type( $type );
		$class = static::container_type_to_class( $normalized_type );
		$container = new $class( $unique_id, $name, $normalized_type );
		$repository->register_container( $container );

		return $container;
	}

	/**
	 * An alias of factory().
	 *
	 * @see Container::factory()
	 */
	public static function make( $type, $name ) {
		return static::factory( $type, $name );
	}

	/**
	 * Create a new container
	 *
	 * @param string $unique_id Unique id of the container
	 * @param string $title title of the container
	 * @param string $type Type of the container
	 */
	public function __construct( $unique_id, $title, $type ) {
		App::verify_boot();

		if ( empty( $title ) ) {
			Incorrect_Syntax_Exception::raise( 'Empty container title is not supported' );
		}

		$this->id = $unique_id;
		$this->title = $title;
		$this->type = $type;
		$this->conditions_collection = App::resolve( 'container_condition_fulfillable_collection' );
		$this->conditions_collection->set_condition_type_list(
			array_merge( $this->get_static_conditions(), $this->get_dynamic_conditions() ),
			true
		);
	}

	/**
	 * Return whether the container is active
	 */
	public function active() {
		return $this->active;
	}

	/**
	 * Activate the container and trigger an action
	 */
	protected function activate() {
		$this->active = true;
		$this->boot();
		do_action( 'crb_container_activated', $this );

		$fields = $this->get_fields();
		foreach ( $fields as $field ) {
			$field->activate();
		}
	}

	/**
	 * Perform instance initialization
	 */
	abstract public function init();

	/**
	 * Boot the container once it's attached.
	 */
	protected function boot() {
		add_action( 'admin_footer', array( get_class(), 'admin_hook_styles' ), 5 );
	}

	/**
	 * Load the value for each field in the container.
	 * Could be used internally during container rendering
	 */
	public function load() {
		foreach ( $this->fields as $field ) {
			$field->load();
		}
	}

	/**
	 * Called first as part of the container save procedure.
	 * Responsible for checking the request validity and
	 * calling the container-specific save() method
	 *
	 * @see save()
	 * @see is_valid_save()
	 */
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
	 */
	public function save( $data = null ) {
		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( stripslashes_deep( $_POST ) );
			$field->save();
		}
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		return false;
	}

	/**
	 * Called first as part of the container attachment procedure.
	 * Responsible for checking it's OK to attach the container
	 * and if it is, calling the container-specific attach() method
	 *
	 * @see attach()
	 * @see is_valid_attach()
	 */
	public function _attach() {
		$param = func_get_args();
		if ( call_user_func_array( array( $this, 'is_valid_attach' ), $param ) ) {
			call_user_func_array( array( $this, 'attach' ), $param );

			// Allow containers to activate but not load (useful in cases such as theme options)
			if ( $this->should_activate() ) {
				$this->activate();
			}
		}
	}

	/**
	 * Attach the container rendering and helping methods
	 * to concrete WordPress Action hooks
	 */
	public function attach() {}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	final public function is_valid_attach() {
		$is_valid_attach = $this->is_valid_attach_for_request();
		return apply_filters( 'carbon_fields_container_is_valid_attach', $is_valid_attach, $this );
	}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	abstract protected function get_environment_for_request();

	/**
	 * Check container attachment rules against current page request (in admin)
	 *
	 * @return bool
	 */
	abstract protected function is_valid_attach_for_request();

	/**
	 * Get environment array for object id
	 *
	 * @param integer $object_id
	 * @return array
	 */
	abstract protected function get_environment_for_object( $object_id );

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	abstract public function is_valid_attach_for_object( $object_id );

	/**
	 * Whether this container is currently viewed.
	 */
	public function should_activate() {
		return $this->is_valid_attach();
	}

	/**
	 * Perform a check whether the current container has fields
	 *
	 * @return bool
	 */
	public function has_fields() {
		return (bool) $this->fields;
	}

	/**
	 * Returns the private container array of fields.
	 * Use only if you are completely aware of what you are doing.
	 *
	 * @return array
	 */
	public function get_fields() {
		return $this->fields;
	}

	/**
	 * Return root field from container with specified name
	 * 
	 * @example crb_complex
	 * 
	 * @param string $field_name
	 * @return Field
	 */
	public function get_root_field_by_name( $field_name ) {
		$fields = $this->get_fields();
		foreach ( $fields as $field ) {
			if ( $field->get_base_name() === $field_name ) {
				return $field;
			}
		}
		return null;
	}

	/**
	 * Get a regex to match field name patterns used to fetch specific fields
	 * 
	 * @return string
	 */
	protected function get_field_pattern_regex() {
		// matches:
		// field_name
		// field_name[0]
		// field_name[0]:group_name
		// field_name:group_name
		$regex = '/
			\A
			(?P<field_name>[a-z0-9_]+)
			(?:\[(?P<group_index>\d+)\])?
			(?:' .  preg_quote( static::HIERARCHY_GROUP_SEPARATOR, '/' ). '(?P<group_name>[a-z0-9_]+))?
			\z
		/x';
		return $regex;
	}

	/**
	 * Return field from container with specified name
	 * 
	 * @example crb_complex/text_field
	 * @example crb_complex/complex_2
	 * @example crb_complex/complex_2:text_group/text_field
	 * 
	 * @param string $field_name Can specify a field inside a complex with a / (slash) separator
	 * @return Field
	 */
	public function get_field_by_name( $field_name ) {
		$hierarchy = array_filter( explode( static::HIERARCHY_FIELD_SEPARATOR, $field_name ) );
		$field = null;

		$field_group = $this->get_fields();
		$hierarchy_left = $hierarchy;
		$field_pattern_regex = $this->get_field_pattern_regex();
		$hierarchy_index = array();

		while ( ! empty( $hierarchy_left ) ) {
			$segment = array_shift( $hierarchy_left );
			$segment_pieces = array();
			if ( ! preg_match( $field_pattern_regex, $segment, $segment_pieces ) ) {
				Incorrect_Syntax_Exception::raise( 'Invalid field name pattern used: ' . $field_name );
			}
			
			$segment_field_name = $segment_pieces['field_name'];
			$segment_group_index = isset( $segment_pieces['group_index'] ) ? $segment_pieces['group_index'] : 0;
			$segment_group_name = isset( $segment_pieces['group_name'] ) ? $segment_pieces['group_name'] : Group_Field::DEFAULT_GROUP_NAME;

			foreach ( $field_group as $f ) {
				if ( $f->get_base_name() === $segment_field_name ) {
					if ( empty( $hierarchy_left ) ) {
						$field = clone $f;
						$field->set_hierarchy_index( $hierarchy_index );
					} else {
						if ( is_a( $f, 'Carbon_Fields\\Field\\Complex_Field' ) ) {
							$group = $f->get_group_by_name( $segment_group_name );
							if ( ! $group ) {
								Incorrect_Syntax_Exception::raise( 'Unknown group name specified when fetching a value inside a complex field: "' . $segment_group_name . '".' );
							}
							$field_group = $group->get_fields();
							$hierarchy_index[] = $segment_group_index;
						} else {
							Incorrect_Syntax_Exception::raise( 'Attempted to look for a nested field inside a non-complex field.' );
						}
					}
					break;
				}
			}
		}

		return $field;
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 */
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
	 */
	public function drop_unique_field_name( $name ) {
		$index = array_search( $name, $this->registered_field_names );

		if ( $index !== false ) {
			unset( $this->registered_field_names[ $index ] );
		}
	}

	/**
	 * Return whether the datastore instance is the default one or has been overriden
	 *
	 * @return boolean
	 */
	public function has_default_datastore() {
		return $this->has_default_datastore;
	}

	/**
	 * Set datastore instance
	 *
	 * @param Datastore_Interface $datastore
	 * @return object $this
	 */
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		if ( $set_as_default && ! $this->has_default_datastore() ) {
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
	 * Get the DataStore instance
	 *
	 * @return Datastore_Interface $datastore
	 */
	public function get_datastore() {
		return $this->datastore;
	}

	/**
	 * Return WordPress nonce name used to identify the current container instance
	 *
	 * @return string
	 */
	public function get_nonce_name() {
		return 'carbon_panel_' . $this->id . '_nonce';
	}

	/**
	 * Return WordPress nonce field
	 *
	 * @return string
	 */
	public function get_nonce_field() {
		return wp_nonce_field( $this->get_nonce_name(), $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ false );
	}

	/**
	 * Check if the nonce is present in the request and that it is verified
	 *
	 * @return bool
	 */
	protected function verified_nonce_in_request() {
		$nonce_name = $this->get_nonce_name();
		$nonce_value = isset( $_REQUEST[ $nonce_name ] ) ? $_REQUEST[ $nonce_name ] : '';
		return wp_verify_nonce( $nonce_value, $nonce_name );
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

		if ( $queue_end === static::TABS_TAIL ) {
			$this->tabs[ $tab_name ] = array();
		} else if ( $queue_end === static::TABS_HEAD ) {
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
	protected function get_untabbed_fields() {
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
	protected function get_tabs() {
		$untabbed_fields = $this->get_untabbed_fields();

		if ( ! empty( $untabbed_fields ) ) {
			$this->create_tab( __( 'General', \Carbon_Fields\TEXT_DOMAIN ), $untabbed_fields, static::TABS_HEAD );
		}

		return $this->tabs;
	}

	/**
	 * Build the tabs JSON
	 *
	 * @return array
	 */
	protected function get_tabs_json() {
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
	 * Returns an array that holds the container data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$array_translator = App::resolve( 'container_condition_translator_array' );
		$dynamic_conditions = $this->conditions_collection->evaluate( $this->get_static_conditions(), $this->get_environment_for_request() );
		$dynamic_conditions = $array_translator->fulfillable_to_foreign( $dynamic_conditions );

		$container_data = array(
			'id' => $this->id,
			'type' => $this->type,
			'title' => $this->title,
			'settings' => $this->settings,
			'dynamic_conditions' => $dynamic_conditions,
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
	 * Enqueue admin styles
	 */
	public static function admin_hook_styles() {
		wp_enqueue_style( 'carbon-main', \Carbon_Fields\URL . '/assets/bundle.css', array(), \Carbon_Fields\VERSION );
	}

	/**
	 * COMMON USAGE METHODS
	 */

	/**
	 * Append array of fields to the current fields set. All items of the array
	 * must be instances of Field and their names should be unique for all
	 * Carbon containers.
	 * If a field does not have DataStore already, the container datastore is
	 * assigned to them instead.
	 *
	 * @param array $fields
	 * @return object $this
	 */
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
		$this->add_fields( $fields );
		$this->create_tab( $tab_name, $fields );
		return $this;
	}

	/**
	 * Proxy function to set attachment conditions
	 * 
	 * @see    Fulfillable_Collection::when()
	 * @return Container $this
	 */
	public function when() {
		call_user_func_array( array( $this->conditions_collection, 'when' ), func_get_args() );
		return $this;
	}

	/**
	 * Proxy function to set attachment conditions
	 * 
	 * @see    Fulfillable_Collection::and_when()
	 * @return Container $this
	 */
	public function and_when() {
		call_user_func_array( array( $this->conditions_collection, 'and_when' ), func_get_args() );
		return $this;
	}

	/**
	 * Proxy function to set attachment conditions
	 * 
	 * @see    Fulfillable_Collection::or_when()
	 * @return Container $this
	 */
	public function or_when() {
		call_user_func_array( array( $this->conditions_collection, 'or_when' ), func_get_args() );
		return $this;
	}
}
