<?php

class Carbon_Container_TermMeta extends Carbon_Container {
	/**
	 * List of registered unique field names per taxonomy
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	static protected $registered_field_names;

	protected $term_id;

	public $settings = array(
		'taxonomy' => array('category')
	);

	function __construct($title) {
		parent::__construct($title);

		if ( !$this->get_datastore() ) {
			$this->set_datastore(new Carbon_DataStore_TermMeta());
		}
	}

	function init() {
		// force taxonomy to be array
		if ( !is_array($this->settings['taxonomy']) ) {
			$this->settings['taxonomy'] = array($this->settings['taxonomy']);
		}

		add_action('admin_init', array($this, '_attach'));

		foreach ($this->settings['taxonomy'] as $taxonomy) {
			add_action( 'edited_' . $taxonomy, array(&$this, '_save'), 10, 2);
			add_action( 'created_' . $taxonomy, array(&$this, '_save'), 10, 2);
		}
	}

	function save($term_id) {
		$this->set_term_id($term_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function is_valid_save($term_id = null) {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return false;
		} else if ($term_id < 1) {
			return false;
		}

		return true;
	}

	function attach() {
		foreach ($this->settings['taxonomy'] as $taxonomy) {
			add_action( $taxonomy . '_edit_form_fields', array(&$this, 'render'), 10, 2);
		}
	}
	
	/**
	 * Revert the result of attach()
	 *
	 * @return void
	 **/
	function detach() {
		parent::detach();

		remove_action('admin_init', array($this, '_attach'));

		foreach ($this->settings['taxonomy'] as $taxonomy) {
			remove_action( 'edited_' . $taxonomy, array(&$this, '_save'), 10, 2);
			remove_action( 'created_' . $taxonomy, array(&$this, '_save'), 10, 2);
		}

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_name($field->get_name());
		}
	}

	function render($term=null) {
		if ( is_null($term) ) {
			return;
		}

		$this->set_term_id( $term->term_id );

		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-term-meta.php';
	}

	function set_term_id($term_id) {
		$this->term_id = $term_id;
		$this->store->set_id($term_id);
	}


	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 * @return void
	 **/
	function verify_unique_field_name($name) {
		if ( empty($this->settings['taxonomy']) ) {
			throw new Carbon_Exception ('Panel instance is not setup correctly (missing taxonomy)');
		}

		foreach ($this->settings['taxonomy'] as $taxonomy) {
			if ( !isset(self::$registered_field_names[$taxonomy]) ) {
				self::$registered_field_names[$taxonomy] = array();
			}

			if ( in_array($name, self::$registered_field_names[$taxonomy]) ) {
				throw new Carbon_Exception ('Field name "' . $name . '" already registered');
			}

			self::$registered_field_names[$taxonomy][] = $name;
		}
	}

	/**
	 * Remove field name $name from the list of unique field names
	 *
	 * @param string $name
	 * @return void
	 **/
	function drop_unique_field_name($name) {
		foreach ($this->settings['taxonomy'] as $taxonomy) {
			$index = array_search($name, self::$registered_field_names[$taxonomy]);
			if ( $index !== false ) {
				unset(self::$registered_field_names[$taxonomy][$index]);
			}
		}
	}

	/**
	 * Show the container only on terms from the specified taxonomy(s).
	 *
	 * @param string|array $post_type
	 * @return object $this
	 **/
	function show_on_taxonomy($taxonomies) {
		$taxonomies = (array)$taxonomies;

		$this->settings['taxonomy'] = $taxonomies;

		return $this;
	}
}

