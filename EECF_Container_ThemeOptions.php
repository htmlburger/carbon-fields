<?php 

class EECF_Container_ThemeOptions extends EECF_Container {
	protected static $registered_pages = array();
	protected $registered_field_names = array();
	protected $notifications = array();
	protected $errors = array();

	public $settings = array(
		'parent'=>'theme-options.php',
		'file'=>'theme-options.php',
		'permissions'=>'edit_themes',
		'type' => 'sub'
	);

	function save() {
		try {
			parent::save();
			$this->notifications[] = 'Settings saved.';
		} catch (Exception $e) {
			$this->errors[] = $e->getMessage();
		}
	}

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_ThemeOptions());
		}

		$this->verify_unique_page($this);

	    add_action('admin_menu', array($this, 'attach'));
	}

	function is_valid_save() {
		if ( $_SERVER['REQUEST_METHOD'] != 'POST' ) {
			return false;
		} else if ( !isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name()) ) {
			return false;
		}

		return true;
	}

	function attach() {
		if ( $this->settings['type'] == 'main' || !$this->settings['parent'] || $this->settings['parent'] == 'self' ) {
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

	function render() {
		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-theme-options.php';
	}

	function verify_unique_page($file) {
		if ( !is_string($file) ) {
			// track only main pages
			if ( $file->settings['parent'] && $file->settings['parent'] != 'self' ) {
				return;
			}

			$file = $file->settings['parent'];
		}

		if ( in_array($file, self::$registered_pages) ) {
			throw new EECF_Exception ('Page "' . $file . '" already registered');
		}

		self::$registered_pages[] = $file;
	}

	function verify_unique_field_name($name) {
		if ( in_array($name, $this->registered_field_names) ) {
			throw new EECF_Exception ('Field name "' . $name . '" already registered');
		}

		$this->registered_field_names[] = $name;
	}
}

