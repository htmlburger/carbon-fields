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
			$this->set_datastore( new Nav_Menu_Datastore(), $this->has_default_datastore() );
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
	 * @param int $menu_item_id Used to pass the correct menu_item_id to the Container object
	 * @param bool $render Whether the container will render the fields.
	 */
	public function init( $menu_item_id = 0 ) {
		$this->get_datastore()->set_id( $menu_item_id );
		$this->load();
		$this->_attach();

		// Only the base container should register for updating/rendering
		if ( $menu_item_id === 0 ) {
			add_action( 'wp_update_nav_menu_item', array( $this, 'update' ), 10, 3 );
			add_action( 'crb_print_carbon_container_nav_menu_fields_html', array( $this, 'form' ), 10, 5 );
		}

		return $this;
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
			$menu_item_datastore = new Nav_Menu_Datastore();
			$menu_item_datastore->set_id( $menu_item_id );
			$menu_item_field_prefix = $menu_item_datastore->get_garbage_prefix();

			$custom_fields = array();
			$fields = $this->get_fields();
			foreach ( $fields as $field ) {
				$tmp_field = clone $field;

				$tmp_field->set_id( $menu_item_field_prefix . $tmp_field->get_id() );
				$tmp_field->set_name( $menu_item_field_prefix . $tmp_field->get_name() );
				$tmp_field->set_datastore( $menu_item_datastore, true );

				$custom_fields[] = $tmp_field;
			}

			$this->menu_item_instances[ $menu_item_id ] = Container::factory( $this->type, $menu_item_field_prefix . $this->id )
				->set_datastore( $menu_item_datastore, true )
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
}
