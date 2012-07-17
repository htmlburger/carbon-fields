<?php 

class EECF_Container_ThemeOptions extends EECF_Container {
	protected $post_id;
	static $registered_field_names;

	public $settings = array(
		'parent'=>'theme-options.php',
		'file'=>'theme-options.php',
		'page_name'=>'Theme Options',
		'permissions'=>'edit_themes',
	);

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_ThemeOptions());
		}
	}

	function save($post_id) {
		if ( !$this->is_valid_save() ) {
			return;
		}

		throw new Exception('TBD');
	}

	function is_valid_save() {
		if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return false;
		}

		return true;
	}

	function attach() {
	    add_submenu_page(
	    	$this->settings->parent,
	    	$this->settings->title, 
	    	$this->settings->title, 
	    	$this->settings->permissions, 
		    $this->settings->file,
	    	array($this, 'render')
		);
	}
}

