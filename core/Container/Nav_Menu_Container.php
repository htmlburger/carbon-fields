<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Nav_Menu_Datastore;
use Carbon_Fields\Walker\Nav_Menu_Edit_Walker;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Nav menu item fields container class. 
 */
class Nav_Menu_Container extends Container {

	public static $instances = array();
	public static $active_containers = false;
	public static $initialized = false;

	/**
	 * Create a new nav menu item fields container
	 *
	 * @param string $id ID of the container
	 **/
	public function __construct( $id ) {
		// Reset the registered fields array, this is required so we can have fields with same names
		self::$registered_field_names = array();

		$id = str_replace( ' ', '', ucwords( str_replace( '_', ' ', $id ) ) );

		$this->id = $id;

		$this->store = new Nav_Menu_Datastore();

		self::initialize_filters();
	}

	/**
	 * Perform instance initialization after calling setup()
	 * 
	 * @param int $menu_id Used to pass the correct menu_item_id to the Container object
	 * @param bool $render Whether the container will render the fields.
	 */
	public function init( $menu_id = 0, $render = true ) {
		$this->set_menu_id( $menu_id );

		$this->load();
		$this->_attach();

		if ( ! empty( $menu_id ) && $render === true ) {
			$this->render();
		}

		return $this;
	}

	/**
	 * Set the menu item ID the container will operate with.
	 *
	 * @param int $menu_id
	 **/
	public function set_menu_id( $menu_id ) {
		$this->menu_id = $menu_id;
		$this->store->set_id( $menu_id );
	}

	/**
	 * Checks whether the current request is valid
	 * 
	 * @return bool
	 **/
	public function is_valid_save() {
		return true;
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 **/
	public function save() {
		foreach ( $this->fields as $field ) {
			$field->set_value_from_input();
			$field->save();
		}

		do_action( 'carbon_after_save_nav_menu', $this );
	}

	/**
	 * Returns an array that holds the container data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$carbon_data = parent::to_json( false );

		// Sends the menu_id to javascript
		$carbon_data = array_merge( $carbon_data, array(
			'menu_id' => $this->menu_id,
		) );

		return $carbon_data;
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/nav_menu.php';
	}

	/**
	 * TODO: make sure the containers for nav menus are not printed everywhere
	 */
	public function is_valid_attach() {
		return true;
	}

	/**
	 * Initialize filters. This will be executed only once
	 */
	public static function initialize_filters() {
		if ( self::$initialized ) {
			return;
		}

		$self = 'Carbon_Fields\Container\Nav_Menu_Container';
		add_action( 'crb_print_carbon_container_nav_menu_fields_html', array( $self, 'form' ), 10, 5 );
		add_filter( 'wp_edit_nav_menu_walker', array( $self, 'edit_walker' ), 10, 2 );
		add_action( 'wp_update_nav_menu_item', array( $self, 'update' ), 10, 3 );
	}

	/**
	 * Get containers only once, and store in instance memory.
	 */
	public static function get_containers() {
		if ( empty( self::$active_containers ) ) {
			self::$active_containers = Container::get_active_containers();
		}

		return self::$active_containers;
	}

	/**
	 * Render custom fields inside each Nav Menu entry
	 */
	public static function form( $output, $item, $depth, $args, $id ) {
		$current_menu_item_id = $item->ID;

		self::set_instance_for_id( $current_menu_item_id, true );
	}

	/**
	 * Setup custom walker for the Nav Menu entries
	 */
	public static function edit_walker( $walker, $menu_id ) {
		return 'Carbon_Fields\Walker\Nav_Menu_Edit_Walker';
	}

	/**
	 * Trigger Save for all instances
	 */
	public static function update( $menu_id, $current_menu_item_id, $args ) {
		$instance = self::set_instance_for_id( $current_menu_item_id, false );
		$instance->_save();

		return $instance;
	}

	/**
	 * Render attribute prevents field containers showing on menu save
	 */
	public static function set_instance_for_id( $current_menu_item_id, $render = true ) {
		$active_containers = self::get_containers();
		$suffix = '-' . $current_menu_item_id;

		foreach ( $active_containers as $container ) {
			if ( $container->type != 'Nav_Menu' ) {
				continue;
			}

			$custom_fields = array();
			$fields = $container->get_fields();

			foreach ( $fields as $field ) {
				$tmp_field = clone $field;

				// Setup Public properties
				$tmp_field->current_menu_item_id = $current_menu_item_id;
				$tmp_field->initial_name = $tmp_field->get_name();

				// Setup Field ID and Name
				$tmp_field->set_id( $tmp_field->get_id() . $suffix );
				$tmp_field->set_name( $tmp_field->get_name() . $suffix );

				// Update Datastore instance
				$new_datastore = new Nav_Menu_Datastore();
				$new_datastore->set_id( $current_menu_item_id );
				$tmp_field->set_datastore( $new_datastore );

				$custom_fields[] = $tmp_field;
			}

			self::$instances[ $current_menu_item_id ] = Container::factory( 'nav_menu', $container->id . $suffix )
				->add_fields( $custom_fields )
				->init( $current_menu_item_id, $render );
		}

		return self::$instances[ $current_menu_item_id ];
	}
}