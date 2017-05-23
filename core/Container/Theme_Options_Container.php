<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Theme_Options_Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Theme options container class.
 */
class Theme_Options_Container extends Container {
	static protected $registered_pages = array();

	public $settings = array(
		'parent' => 'self',
		'file' => '',
		'permissions' => 'manage_options',
	);

	public $icon = '';

	/**
	 * Create a new theme options fields container
	 *
	 * @param string $title Unique title of the container
	 **/
	public function __construct( $title ) {
		parent::__construct( $title );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( new Theme_Options_Datastore(), $this->has_default_datastore() );
		}
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param mixed $user_data
	 **/
	public function save( $user_data = null ) {
		try {
			parent::save( $user_data );
		} catch ( Incorrect_Syntax_Exception $e ) {
			$this->errors[] = $e->getMessage();
		}

		do_action( 'carbon_after_save_theme_options', $user_data );

		if ( ! headers_sent() ) {
			wp_redirect( add_query_arg( array( 'settings-updated' => 'true' ) ) );
		}
	}
	

	/**
	 * Sanitize a title to a filename
	 *
	 * @param string $title
	 * @return string
	 */
	protected function title_to_filename( $title, $extension ) {
		$title = sanitize_file_name( $title );
		$title = strtolower( $title );
		$title = remove_accents( $title );
		$title = preg_replace( array(
			'~\s+~',
			'~[^\w\d-]+~u',
			'~-+~'
		), array(
			'-',
			'-',
			'-'
		), $title );
		return $title . $extension;
	}

	/**
	 * Attach container as a theme options page/subpage.
	 **/
	public function init() {
		if ( ! $this->settings['parent'] || $this->settings['parent'] == 'self' ) {
			$this->settings['parent'] = '';
		} else if ( strpos( $this->settings['parent'], '.php' ) === false ) {
			$this->settings['parent'] = $this->title_to_filename( 'crbn-' . $this->settings['parent'], '.php' );
		}

		if ( ! $this->settings['file'] ) {
			$this->settings['file'] = $this->title_to_filename( 'crbn-' . $this->title, '.php' );
		}

		$this->verify_unique_page();

		add_action( 'admin_menu', array( $this, '_attach' ) );
	}

	/**
	 * Perform checks whether the current save() request is valid.
	 *
	 * @return bool
	 **/
	public function is_valid_save() {
		if ( ! isset( $_POST[ $this->get_nonce_name() ] ) || ! wp_verify_nonce( $_POST[ $this->get_nonce_name() ], $this->get_nonce_name() ) ) { // Input var okay.
			return false;
		}

		return true;
	}

	/**
	 * Add theme options container pages.
	 * Hook the container saving action.
	 **/
	public function attach() {

		// Add menu page
		if ( ! $this->settings['parent'] ) {
			add_menu_page(
				$this->title,
				$this->title,
				$this->settings['permissions'],
				$this->settings['file'],
				array( $this, 'render' ),
				$this->icon
			);
		}

		add_submenu_page(
			$this->settings['parent'],
			$this->title,
			$this->title,
			$this->settings['permissions'],
			$this->settings['file'],
			array( $this, 'render' ),
			$this->icon
		);

		$page_hook = get_plugin_page_hookname( $this->settings['file'], '' );
		add_action( 'load-' . $page_hook, array( $this, '_save' ) );
	}

	/**
	 * Whether this container is currently viewed.
	 **/
	public function is_active() {
		if ( isset( $_GET['page'] ) && $_GET['page'] === $this->settings['file'] ) {
			return true;
		}

		return false;
	}

	/**
	 * Revert the result of attach()
	 **/
	public function detach() {
		parent::detach();

		$this->drop_unique_page();

		$page_hook = get_plugin_page_hookname( $this->settings['file'], '' );
		remove_action( 'load-' . $page_hook, array( $this, '_save' ) );
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		if ( isset( $_GET['settings-updated'] ) && $_GET['settings-updated'] == 'true' ) {
			$this->notifications[] = __( 'Settings saved.', 'carbon-fields' );
		}

		include \Carbon_Fields\DIR . '/templates/Container/theme_options.php';
	}

	/**
	 * Make sure that there are no duplicate containers with the same name.
	 **/
	public function verify_unique_page() {
		$file = $this->settings['file'];
		$parent = $this->settings['parent'];

		// Register top level page
		if ( ! $parent ) {
			if ( isset( self::$registered_pages[ $file ] ) ) {
				Incorrect_Syntax_Exception::raise( 'Page "' . $file . '" already registered' );
			}

			self::$registered_pages[ $file ] = array();
			return;
		}

		// Register sub-page
		if ( ! isset( self::$registered_pages[ $parent ] ) ) {
			self::$registered_pages[ $parent ] = array( $file );
		} elseif ( in_array( $file, self::$registered_pages[ $parent ] ) ) {
			Incorrect_Syntax_Exception::raise( 'Page "' . $file . '" with parent "' . $parent . '" is already registered. Please set a different file name using setup()' );
		} else {
			self::$registered_pages[ $parent ][] = $file;
		}
	}

	/**
	 * Unregister the container parent and child pages.
	 **/
	public function drop_unique_page() {
		$file = $this->settings['file'];
		$parent = $this->settings['parent'];

		// Register top level page
		if ( ! $parent ) {
			if ( isset( self::$registered_pages[ $file ] ) && empty( self::$registered_pages[ $file ] ) ) {
				unset( self::$registered_pages[ $file ] );
			}

			return;
		}

		// Register sub-page
		if ( isset( self::$registered_pages[ $parent ] ) && in_array( $file, self::$registered_pages[ $parent ] ) ) {

			$index = array_search( $file, self::$registered_pages[ $parent ] );
			if ( $index !== false ) {
				unset( self::$registered_pages[ $parent ][ $index ] );
			}
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
	 **/
	public function add_fields( $fields ) {
		parent::add_fields( $fields );

		foreach ( $this->fields as $field ) {
			$field->set_prefix( '' );
		}

		return $this;
	}

	/**
	 * Change the parent theme options page of this container
	 **/
	public function set_page_parent( $parent ) {
		if ( is_a( $parent, 'Carbon_Container' ) ) {
			$parent = $parent->title;
		}

		$this->settings['parent'] = $parent;
		return $this;
	}

	/**
	 * Set the icon of this theme options page.
	 * Applicable only for parent theme option pages.
	 **/
	public function set_icon( $icon ) {
		$this->icon = $icon;
		return $this;
	}

	/**
	 * Set the theme options file name of this container.
	 **/
	public function set_page_file( $file ) {
		$this->settings['file'] = $file;
		return $this;
	}

	/**
	 * Set the permissions necessary to view
	 * the corresponding theme options page
	 **/
	public function set_page_permissions( $permissions ) {
		$this->settings['permissions'] = $permissions;
		return $this;
	}

}
