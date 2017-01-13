<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Meta_Datastore;
use Carbon_Fields\Datastore\Nav_Menu_Datastore;
use Carbon_Fields\Walker\Nav_Menu_Edit_Walker;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Nav menu item fields container class.
 */
class Nav_Menu_Container extends Container {
	/**
	 * Array of container clones for every menu item
	 *
	 * @see init()
	 * @var int
	 */
	protected $menu_item_instances = array();

	/**
	 * Create a new nav menu item fields container
	 *
	 * @param string $id ID of the container
	 **/
	public function __construct( $title ) {
		parent::__construct( $title );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( new Nav_Menu_Datastore() );
		}

		// Register the custom edit walker only once
		$callable = array( get_class(), 'edit_walker' );
		if ( !has_filter( 'wp_edit_nav_menu_walker', $callable ) ) {
			add_filter( 'wp_edit_nav_menu_walker', $callable, 10, 2 );
		}
	}

	/**
	 * Perform instance initialization after calling setup()
	 *
	 * @param int $menu_id Used to pass the correct menu_item_id to the Container object
	 * @param bool $render Whether the container will render the fields.
	 */
	public function init( $menu_id = 0 ) {
		$this->set_menu_id( $menu_id );

		$this->load();
		$this->_attach();

		// Only the base container should register for updating/rendering
		if ( $menu_id === 0 ) {
			add_action( 'wp_update_nav_menu_item', array( $this, 'update' ), 10, 3 );
			add_action( 'crb_print_carbon_container_nav_menu_fields_html', array( $this, 'form' ), 10, 5 );
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
		$this->datastore->set_id( $menu_id );
	}

	/**
	 * Checks whether the current request is valid
	 *
	 * @return bool
	 **/
	public function is_valid_save() {
		// rely on wp_update_nav_menu_item action not being called unless WP's nonce is not valid
		return true;
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
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach() {
		global $pagenow;

		if ( $pagenow === 'nav-menus.php' ) {
			return true;
		} elseif ( defined( 'DOING_AJAX' ) && DOING_AJAX && $_REQUEST['action'] === 'add-menu-item' ) {
			return true;
		}

		return false;
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 **/
	public function save( $data = null ) {
		foreach ( $this->fields as $field ) {
			$field->set_value_from_input();
			$field->save();
		}

		do_action( 'carbon_after_save_nav_menu', $this );
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/nav_menu.php';
	}

	/**
	 * Trigger Save for all instances
	 */
	public function update( $menu_id, $current_menu_item_id ) {
		if ( !$this->is_valid_attach() ) {
			return;
		}
		
		$clone = $this->get_clone_for_menu_item( $current_menu_item_id );
		$clone->_save();
	}

	/**
	 * Render custom fields inside each Nav Menu entry
	 */
	public function form( $item ) {
		if ( !$this->is_valid_attach() ) {
			return;
		}

		$clone = $this->get_clone_for_menu_item( $item->ID );
		$clone->render();
	}

	/**
	 * Create a clone of this container with it's own datastore for every menu item
	 */
	protected function get_clone_for_menu_item( $menu_item_id ) {
		if ( !isset( $this->menu_item_instances[ $menu_item_id ] ) ) {
			$suffix = '-menu-item-' . $menu_item_id;
			$fields = $this->get_fields();
			$menu_item_datastore = new Nav_Menu_Datastore();
			$menu_item_datastore->set_id( $menu_item_id );
			$custom_fields = array();

			foreach ( $fields as $field ) {
				$tmp_field = clone $field;

				// Hacky: preserve the original field name as we append the menu item id to it to avoid field name collision in requests
				$tmp_field->nav_menu_datastore_field_name = $tmp_field->get_name();

				$tmp_field->set_id( $tmp_field->get_id() . $suffix );
				$tmp_field->set_name( $tmp_field->get_name() . $suffix );

				$tmp_field->set_datastore( $menu_item_datastore );

				$custom_fields[] = $tmp_field;
			}

			$this->menu_item_instances[ $menu_item_id ] = Container::factory( $this->type, $this->id . $suffix )
				->set_datastore( $menu_item_datastore )
				->add_fields( $custom_fields )
				->init( $menu_item_id );
			
		}

		return $this->menu_item_instances[ $menu_item_id ];
	}

	/**
	 * Setup custom walker for the Nav Menu entries
	 */
	public static function edit_walker() {
		return '\Carbon_Fields\Walker\Nav_Menu_Edit_Walker';
	}

	public function add_fields( $fields ) {
		foreach ( $fields as $field ) {
			if ( is_a( $field, 'Carbon_Fields\\Field\\Complex_Field' ) ) {
				Incorrect_Syntax_Exception::raise( get_class() . ' does not support Complex_Field, yet.' );
			}
		}

		return parent::add_fields( $fields );
	}
}
