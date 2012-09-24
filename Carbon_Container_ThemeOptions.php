<?php 

class Carbon_Container_ThemeOptions extends Carbon_Container {
	static protected $registered_pages = array();

	/**
	 * List of registered unique field names
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	static protected $registered_field_names;

	public $settings = array(
		'parent'=>'theme-options.php',
		'file'=>'theme-options.php',
		'permissions'=>'edit_themes'
	);

	function save() {
		try {
			parent::save();
		} catch (Exception $e) {
			$this->errors[] = $e->getMessage();
		}

		if ( !headers_sent() ) {
			wp_redirect(add_query_arg(array('settings-updated' => 'true')));
		}
	}

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new Carbon_DataStore_ThemeOptions());
		}

		if ( !$this->settings['parent'] || $this->settings['parent'] == 'self' ) {
			$this->settings['parent'] = '';
		}

		$this->verify_unique_page();

	    add_action('admin_menu', array($this, '_attach'));
	}

	function is_valid_save() {
		if ( !isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] != 'POST' ) {
			return false;
		} else if ( !isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name()) ) {
			return false;
		}

		return true;
	}

	function attach() {
		// Check file name setting
		if ( empty($this->settings['file']) ) {
			throw new Carbon_Exception('Unspecified file name');
		}

		// Add menu page
		if ( !$this->settings['parent'] ) {
		    add_menu_page(
		    	$this->title, 
		    	$this->title, 
		    	$this->settings['permissions'], 
			    $this->settings['file'],
		    	array($this, 'render')
			);
		} else {
			$this->attach_main_page();
		}

	    add_submenu_page(
	    	$this->settings['parent'],
	    	$this->title, 
	    	$this->title, 
	    	$this->settings['permissions'], 
		    $this->settings['file'],
	    	array($this, 'render')
		);

		$page_hook = get_plugin_page_hookname( $this->settings['file'], '' );
		add_action('load-' . $page_hook, array($this, '_save'));
	}

	function attach_main_page() {
		// check if already registered?
		if ( in_array('theme-options.php', self::$registered_pages) ) {
			return;
		}

		self::$registered_pages[] = 'theme-options.php';

		add_menu_page(
			'Theme Options',
			'Theme Options', 
			'edit_themes', 
			'theme-options.php',
			create_function('', '')
		);
	}

	/**
	 * Revert the result of attach()
	 *
	 * @return void
	 **/
	function detach() {
		parent::detach();

		$this->drop_unique_page();

		$page_hook = get_plugin_page_hookname( $this->settings['file'], '' );
		remove_action('load-' . $page_hook, array($this, '_save'));
	}

	function render() {
		if ( isset($_GET['settings-updated']) && $_GET['settings-updated'] == 'true' ) {
			$this->notifications[] = 'Settings saved.';
		}
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-theme-options.php';
	}

	function verify_unique_page() {
		$file = $this->settings['file'];
		$parent = $this->settings['parent'];

		// Register top level page
		if ( !$parent ) {
			if ( isset(self::$registered_pages[$file]) ) {
				throw new Carbon_Exception ('Page "' . $file . '" already registered');
			}

			self::$registered_pages[$file] = array();
			return;
		}

		// Register sub-page
		if ( !isset(self::$registered_pages[$parent]) ) {
			self::$registered_pages[$parent] = array($file);
		}  elseif ( in_array($file, self::$registered_pages[$parent]) ) {
			throw new Carbon_Exception ('Page "' . $file . '" with parent "' . $parent . '" is already registered. Please set a different file name using setup()');
		} else {
			self::$registered_pages[$parent][] = $file;
		}
	}

	function drop_unique_page() {
		$file = $this->settings['file'];
		$parent = $this->settings['parent'];

		// Register top level page
		if ( !$parent ) {
			if ( isset(self::$registered_pages[$file]) && empty( self::$registered_pages[$file] ) ) {
				unset( self::$registered_pages[$file] );
			}

			return;
		}

		// Register sub-page
		if ( isset(self::$registered_pages[$parent]) && in_array($file, self::$registered_pages[$parent]) ) {

			$index = array_search($file, self::$registered_pages[$parent]);
			if ( $index !== false ) {
				unset(self::$registered_pages[$parent][$index]);
			}
		}
	}

	function verify_unique_field_name($name) {
		$page_id = $this->settings['parent'] . '/' . $this->settings['file'];

		if ( !isset(self::$registered_field_names[$page_id]) ) {
			self::$registered_field_names[$page_id] = array();
		}

		if ( in_array($name, self::$registered_field_names[$page_id]) ) {
			throw new Carbon_Exception ('Field name "' . $name . '" already registered');
		}

		self::$registered_field_names[$page_id][] = $name;
	}

	/**
	 * Remove field name $name from the list of unique field names
	 *
	 * @param string $name
	 * @return void
	 **/
	function drop_unique_field_name($name) {
		$page_id = $this->settings['parent'] . '/' . $this->settings['file'];

		$index = array_search($name, self::$registered_field_names[$page_id]);
		if ( $index !== false ) {
			unset(self::$registered_field_names[$page_id][$index]);
		}
	}
}

