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
			add_action( 'edited_' . $taxonomy, array($this, '_save'), 10, 2);
			add_action( 'created_' . $taxonomy, array($this, '_save'), 10, 2);
		}
	}

	function save($term_id) {
		$this->set_term_id($term_id);

		foreach ($this->fields as $field) {
			$field->set_value_from_input();
			$field->save();
		}

		do_action('carbon_after_save_term_meta', $term_id);
	}

	function is_valid_attach() {
		if (isset($_GET['taxonomy']) && in_array($_GET['taxonomy'], $this->settings['taxonomy'])) {
			return true;
		}

		return false;
	}

	function is_valid_save($term_id = null) {
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) {
			return false;
		} else if ( !wp_verify_nonce( crb_request_param($this->get_nonce_name()), $this->get_nonce_name() ) ) {
			return false;
		} else if ($term_id < 1) {
			return false;
		}

		return true;
	}

	function attach() {
		foreach ($this->settings['taxonomy'] as $taxonomy) {
			add_action( $taxonomy . '_edit_form_fields', array($this, 'render'), 10, 2);
			add_action( $taxonomy . '_add_form_fields', array($this, 'render'), 10, 2);
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
			remove_action( 'edited_' . $taxonomy, array($this, '_save'), 10, 2);
			remove_action( 'created_' . $taxonomy, array($this, '_save'), 10, 2);
		}

		// unregister field names
		foreach ($this->fields as $field) {
			$this->drop_unique_field_name($field->get_name());
		}
	}

	function render($term=null) {
		if (is_object($term)) {
			$this->set_term_id( $term->term_id );
		}

		include dirname(__FILE__) . '/admin-templates/container-term-meta.php';
	}

	function template() {
		$edit = isset($_GET['action']) && $_GET['action'] === 'edit';

		if ($edit) {
			$this->template_edit();
		} else {
			$this->template_add();
		}
	}

	function template_add() {
		?>
		<div class="{{{ classes }}}">
			<# _.each(fields, function(field) { #>
				<div class="form-field {{{ field.classes }}}">
					<# if ( !field.wide && (field.label || field.required) ) { #>
						<label for="{{{ field.id }}}">
							{{ field.label }}

							<# if (field.required) { #>
								 <span class="carbon-required">*</span>
							<# } #>
						</label>
					<# } #>

					<div class="field-holder {{{ field.id }}}"></div>

					<# if (field.help_text) { #>
						<p class="description">
							{{{ field.help_text }}}
						</p>
					<# } #>
				</div>
			<# }); #>
		</div>
		<?php
	}

	function template_edit() {
		?>
		<table class="{{{ classes }}}">
			<# _.each(fields, function(field) { #>
				<tr class="form-field {{{ field.classes }}}">
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
							<p class="description">
								{{{ field.help_text }}}
							</p>
						<# } #>
					</td>
				</tr>
			<# }); #>
		</table>
		<?php
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

