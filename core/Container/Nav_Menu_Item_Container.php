<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Nav menu item fields container class.
 */
class Nav_Menu_Item_Container extends Container {

	/**
	 * Array of container clones for every menu item
	 *
	 * @see init()
	 * @var int
	 */
	protected $menu_item_instances = array();

	/**
	 * The menu item id this container is for
	 *
	 * @var int
	 */
	protected $menu_item_id = 0;

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'nav_menu_item' ), $this->has_default_datastore() );
		}

		// Register the custom edit walker only once
		$callable = array( static::class, 'edit_walker' );
		if ( ! has_filter( 'wp_edit_nav_menu_walker', $callable ) ) {
			add_filter( 'wp_edit_nav_menu_walker', $callable, 10, 2 );
		}
	}

	/**
	 * Perform instance initialization
	 *
	 * @param int $menu_item_id Used to pass the correct menu_item_id to the Container object
	 */
	public function init( $menu_item_id = 0 ) {
		$this->menu_item_id = $menu_item_id;
		$this->get_datastore()->set_object_id( $this->menu_item_id );
		$this->_attach();

		// Only the base container should register for updating/rendering
		if ( $this->menu_item_id === 0 ) {
			add_action( 'wp_update_nav_menu_item', array( $this, 'update' ), 10, 3 );
			add_action( 'carbon_fields_print_nav_menu_item_container_fields', array( $this, 'form' ), 10, 5 );
		}

		return $this;
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		if ( ! $this->verified_nonce_in_request() ) {
			return false;
		}

		$params = func_get_args();
		return $this->is_valid_attach_for_object( $params[0] );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 */
	public function save( $data = null ) {
		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( Helper::input() );
			$field->save();
		}

		do_action( 'carbon_fields_nav_menu_item_container_saved', $this );
	}

	/**
	 * {@inheritDoc}
	 */
	public function is_active() {
		return ( $this->active && $this->menu_item_id !== 0 );
	}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		return array();
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	public function is_valid_attach_for_request() {
		global $pagenow;

		$input = Helper::input();
		$ajax = defined( 'DOING_AJAX' ) ? DOING_AJAX : false;
		$ajax_action = isset( $input['action'] ) ? $input['action'] : '';

		$is_on_menu_page = ( $pagenow === 'nav-menus.php' );
		$is_menu_ajax_request = ( $ajax && $ajax_action === 'add-menu-item' );
		if ( ! $is_on_menu_page && ! $is_menu_ajax_request ) {
			return false;
		}

		return $this->static_conditions_pass();
	}

	/**
	 * Get environment array for object id
	 *
	 * @return array
	 */
	protected function get_environment_for_object( $object_id ) {
		return array();
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		$post = get_post( $object_id );

		if ( ! $post ) {
			return false;
		}

		if ( $post->post_type !== 'nav_menu_item' ) {
			return false;
		}

		return $this->all_conditions_pass( intval( $post->ID ) );
	}

	/**
	 * Output the container markup
	 */
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/nav_menu_item.php';
	}

	/**
	 * Trigger Save for all instances
	 */
	public function update( $menu_id, $current_menu_item_id ) {
		if ( ! $this->is_valid_attach_for_request() ) {
			return;
		}

		$clone = $this->get_clone_for_menu_item( $current_menu_item_id, false );
		$clone->_save( $current_menu_item_id );
	}

	/**
	 * Render custom fields inside each Nav Menu entry
	 */
	public function form( $item ) {
		if ( ! $this->is_valid_attach_for_request() ) {
			return;
		}

		$clone = $this->get_clone_for_menu_item( $item->ID );
		$clone->render();
	}

	/**
	 * Create a clone of this container with its own datastore for every menu item
	 */
	protected function get_clone_for_menu_item( $menu_item_id, $load = true ) {
		if ( ! isset( $this->menu_item_instances[ $menu_item_id ] ) ) {
			$menu_item_datastore = Datastore::make( 'nav_menu_item' );
			$menu_item_datastore->set_object_id( $menu_item_id );
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

			$container = Container::factory( $this->type, $menu_item_field_prefix . $this->get_id() )
				->set_datastore( $menu_item_datastore, true )
				->add_fields( $custom_fields )
				->init( $menu_item_id );
			if ( $load ) {
				$container->load();
			}
			$this->menu_item_instances[ $menu_item_id ] = $container;
		}

		return $this->menu_item_instances[ $menu_item_id ];
	}

	/**
	 * Setup custom walker for the Nav Menu entries
	 */
	public static function edit_walker() {
		return 'Carbon_Fields\\Walker\\Nav_Menu_Item_Edit_Walker';
	}
}
