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
		'parent' => 'self',
		'file' => '',
		'permissions' => 'manage_options'
	);

	public $icon = '';
	
	function __construct($title) {
		parent::__construct($title);

		if ( !$this->get_datastore() ) {
			$this->set_datastore(new Carbon_DataStore_ThemeOptions());
		}
	}

	function save($user_data = null) {
		try {
			parent::save($user_data);
		} catch (Exception $e) {
			$this->errors[] = $e->getMessage();
		}

		do_action('carbon_after_save_theme_options', $user_data);

		if ( !headers_sent() ) {
			wp_redirect(add_query_arg(array('settings-updated' => 'true')));
		}
	}

	function init() {
		if ( !$this->settings['parent'] || $this->settings['parent'] == 'self' ) {
			$this->settings['parent'] = '';
		} else if ( strpos($this->settings['parent'], '.php') === false ) {
			$clear_title = $this->clear_string($this->settings['parent']);
			$this->settings['parent'] = 'crbn-' . $clear_title . '.php';
		}

		if ( !$this->settings['file'] ) {
			$clear_title = $this->clear_string($this->title);
			$this->settings['file'] .= 'crbn-' . $clear_title . '.php';
		}

		$this->verify_unique_page();

		add_action('admin_menu', array($this, '_attach'));
	}

	function is_valid_save() {
		if ( !isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] != 'POST' ) {
			return false;
		} else if ( !wp_verify_nonce( crb_request_param($this->get_nonce_name()), $this->get_nonce_name() ) ) {
			return false;
		}

		return true;
	}

	function attach() {

		// Add menu page
		if ( !$this->settings['parent'] ) {
			add_menu_page(
				$this->title, 
				$this->title, 
				$this->settings['permissions'], 
				$this->settings['file'],
				array($this, 'render'),
				$this->icon
			);
		}

		add_submenu_page(
			$this->settings['parent'],
			$this->title, 
			$this->title, 
			$this->settings['permissions'], 
			$this->settings['file'],
			array($this, 'render'),
			$this->icon
		);

		$page_hook = get_plugin_page_hookname( $this->settings['file'], '' );
		add_action('load-' . $page_hook, array($this, '_save'));
	}

	function is_active() {
		if (isset($_GET['page']) && $_GET['page'] === $this->settings['file']) {
			return true;
		}

		return false;
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
			$this->notifications[] = __('Settings saved.', 'crb');
		}
		$container_tag_class_name = get_class($this);
		$container_type = 'ThemeOptions';
		include dirname(__FILE__) . '/admin-templates/container-theme-options.php';
	}

	function template() {
		?>
		<table border="0" cellspacing="0" cellpadding="0" class="form-table {{{ classes }}}">
			<# _.each(fields, function(field) { #>
				<tr class="{{{ field.classes }}}">
					<# if (!field.wide) { #>
						<th scope="row">
							<# if (field.label || field.required) { #>
								<label for="{{{ field.id }}}">
									{{ field.label }}

									<# if (field.required) { #>
										 <span class="carbon-required">*</span>
									<# } #>
								</label>
							<# } #>
						</th>
					<# } #>

					<td {{{ field.wide ? 'colspan="2"' : '' }}}>
						<div class="field-holder {{{ field.id }}}"></div>

						<# if (field.help_text) { #>
							<em class="help-text">
								{{{ field.help_text }}}
							</em>
						<# } #>
					</td>
				</tr>
			<# }); #>
		</table>
		<?php
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

	function add_fields($fields) {
		parent::add_fields($fields);

		foreach ($this->fields as $field) {
			$field->set_prefix('');
		}

		return $this;
	}

	function set_page_parent($parent) {
		if ( is_a($parent, 'Carbon_Container') ) {
			$parent = $parent->title;
		}
		
		$this->settings['parent'] = $parent;
		return $this;
	}

	function set_icon($icon) {
		$this->icon = $icon;
		return $this;
	}

	function set_page_file($file) {
		$this->settings['file'] = $file;
		return $this;
	}

	function set_page_permissions($permissions) {
		$this->settings['permissions'] = $permissions;
		return $this;
	}

	protected function clear_string($string) {
		return preg_replace(array('~ +~', '~[^\w\d-]+~u', '~-+~'), array('-', '-', '-'), strtolower(remove_accents($string)));
	}

}

