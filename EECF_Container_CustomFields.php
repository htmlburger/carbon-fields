<?php

class EECF_Container_CustomFields extends EECF_Container {
	static protected $registered_field_names;
	protected $post_id;

	public $settings = array(
		'post_type'=>'post',
		'panel_context'=>'normal',
		'panel_priority'=>'high',
		'show_on' => array(
				'template_names' => array(),
				'post_formats' => array(),
			),
	);


	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_CustomField());
		}

		if ( isset($_GET['post']) ) {
			$this->set_post_id($_GET['post']);
		}

	    add_action('admin_init', array($this, '_attach'));
		add_action('save_post', array($this, '_save'));
	}

	function save($post_id) {
		// Unhook action to garantee single save
		remove_action('save_post', array($this, 'save'));

		$this->set_post_id($post_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}
	}

	function is_valid_save() {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if (!isset($_REQUEST[$this->get_nonce_name()]) || !wp_verify_nonce($_REQUEST[$this->get_nonce_name()], $this->get_nonce_name())) {
			return false;
		}

		return true;
	}

	function attach() {
		add_meta_box(
	    	$this->id, 
	    	$this->title, 
	    	array($this, 'render'), 
	    	$this->settings['post_type'], 
	    	$this->settings['panel_context'],
	    	$this->settings['panel_priority']
	    );
	}

	function is_valid_attach() {
		$valid = true;

		// Check show on conditions
		foreach ($this->settings['show_on'] as $condition => $value) {
			switch ($condition) {
				case 'page_id':
					if ( $value < 1 || $this->post_id != $value ) {
						$valid = false;
						break 2;
					}
					break;
				case 'parent_page_id':
					// Check if such page exists
					if ( $value < 1 ) {
						$valid = false;
						break 2;
					}
					break;
			}
		}

		return $valid;
	}
	
	function detach() {
		parent::detach();

	    remove_action('admin_init', array($this, '_attach'));
		remove_action('save_post', array($this, '_save'));

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_id($field->get_name());
		}
	}

	function render() {
		$container_tag_class_name = get_class($this);
		$container_type = 'CustomFields';
		$container_options = array('show_on' => $this->settings['show_on'], 'post_type' => $this->settings['post_type']);

		include dirname(__FILE__) . '/admin-templates/container-custom-fields.php';
	}

	function set_post_id($post_id) {
		$this->post_id = $post_id;
		$this->store->set_post_id($post_id);
	}

	function verify_unique_field_name($name) {
		if ( empty($this->settings['post_type']) ) {
			throw new EECF_Exception ('Panel instance is not setup correctly (missing post type)');
		}

		if ( !isset(self::$registered_field_names[$this->settings['post_type']]) ) {
			self::$registered_field_names[$this->settings['post_type']] = array();
		}

		if ( in_array($name, self::$registered_field_names[$this->settings['post_type']]) ) {
			throw new EECF_Exception ('Field name "' . $name . '" already registered');
		}

		self::$registered_field_names[$this->settings['post_type']][] = $name;
	}

	function drop_unique_field_id($name) {
		$index = array_search($name, self::$registered_field_names[$this->settings['post_type']]);
		if ( $index !== false ) {
			unset(self::$registered_field_names[$this->settings['post_type']][$index]);
		}
	}

	/* Display context filters */
	function show_on_page_children($parent_page_path) {
	    $page = get_page_by_path($parent_page_path);

	    if ( $page ) {
	    	$this->settings['show_on']['parent_page_id'] = $page->ID;
	    } else {
	    	$this->settings['show_on']['parent_page_id'] = -1;
	    }

		return $this;
	}
	
	function show_on_page($page_path) {
	    $page = get_page_by_path($page_path);

	    if ( $page ) {
	    	$this->settings['show_on']['page_id'] = $page->ID;
	    } else {
	    	$this->settings['show_on']['page_id'] = -1;
	    }

		return $this;
	}
	
	function show_on_category($category_slug) {
		return $this->show_on_taxonomy_term('category', $category_slug);
	}
	
	// template file name
	function show_on_template($template_path) {
		if ( is_array($template_path) ) {
			foreach ($template_path as $path) {
				$this->show_on_template($path);
			}
			return;
		}

		$this->settings['show_on']['template_names'][] = $template_path;

		return $this;
	}
	
	/* Levels start from 1 (toplevel page) */
	function show_on_level($level) {
		if ($level < 0 ) {
			throw new EECF_Exception('Invalid level limitation (' . $level . ')');
		}

		$this->settings['show_on']['level_limit'] = $level;

		return $this;
	}
	
	function show_on_taxonomy_term($taxonomy_slug, $term_slug) {
		$term = get_term_by('slug', $term_slug, $taxonomy_slug);

		if ( !$term ) {
			return $this;
		}

		$this->settings['show_on']['tax_slug'] = $taxonomy_slug;
		$this->settings['show_on']['tax_term'] = $term_slug;
		$this->settings['show_on']['tax_term_id'] = $term->term_id;

		return $this;
	}
	
	function show_on_post_format($post_format) {
		if ( is_array($post_format) ) {
			foreach ($post_format as $format) {
				$this->show_on_post_format($format);
			}
			return;
		}

		$this->settings['show_on']['post_formats'][] = strtolower($post_format);

		return $this;
	}
}

