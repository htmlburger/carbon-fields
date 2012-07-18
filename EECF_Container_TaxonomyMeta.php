<?php

class EECF_Container_TaxonomyMeta extends EECF_Container {
	protected $term_id;

	public $settings = array(
		'taxonomy' => 'category'
	);

	function init() {
		if ( !$this->get_datastore() ) {
			$this->set_datastore(new EECF_DataStore_TaxonomyMeta());
		}

		add_action('admin_init', array($this, 'attach'));

		add_action( 'edited_' . $this->settings['taxonomy'], array(&$this, '_save'), 10, 2);
		add_action( 'created_' . $this->settings['taxonomy'], array(&$this, '_save'), 10, 2);
	}

	function save($term_id) {
		$this->set_term_id($term_id);

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
		add_action( $this->settings['taxonomy'] . '_edit_form_fields', array(&$this, 'render'), 10, 2);
	}

	function render($term=null) {
		if ( is_null($term) ) {
			return;
		}

		$this->set_term_id( $term->term_id );

		$container_tag_class_name = get_class($this);
		include dirname(__FILE__) . '/admin-templates/container-taxonomy-meta.php';
	}

	function set_term_id($term_id) {
		$this->term_id = $term_id;
		$this->store->set_term_id($term_id);
	}
}

