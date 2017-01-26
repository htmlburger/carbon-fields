<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Field\Group_Field;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Complex field class.
 * Allows nested repeaters with multiple field groups to be created.
 */
class Complex_Field extends Field {

	const LAYOUT_GRID = 'grid'; // default

	const LAYOUT_TABBED_HORIZONTAL = 'tabbed-horizontal';

	const LAYOUT_TABBED_VERTICAL = 'tabbed-vertical';

	protected $layout = self::LAYOUT_GRID;

	protected $default_value = array();

	protected $fields = array();

	protected $groups = array();

	protected $values_min = -1;

	protected $values_max = -1;

	protected $collapsed = false;

	public $labels = array(
		'singular_name' => 'Entry',
		'plural_name' => 'Entries',
	);

	/**
	 * Initialization tasks.
	 */
	public function init() {
		$this->labels = array(
			'singular_name' => __( 'Entry', \Carbon_Fields\TEXT_DOMAIN ),
			'plural_name' => __( 'Entries', \Carbon_Fields\TEXT_DOMAIN ),
		);

		// Include the complex group Underscore templates
		$this->add_template( 'Complex-Group', array( $this, 'template_group' ) );
		$this->add_template( 'Complex-Group-Tab-Item', array( $this, 'template_group_tab_item' ) );

		parent::init();
	}

	/**
	 * Add a set/group of fields.
	 *
	 * @return $this
	 */
	public function add_fields() {
		$argv = func_get_args();
		$argc = count( $argv );

		if ( $argc == 1 ) {
			$fields = $argv[0];
			$name = '';
			$label = null;
		} else if ( $argc == 2 ) {
			if ( is_array( $argv[0] ) ) {
				list( $fields, $name ) = $argv;
			} else {
				list( $name, $fields ) = $argv;
			}
			$label = null;
		} else if ( $argc == 3 ) {
			if ( is_array( $argv[0] ) ) {
				list( $fields, $name, $label ) = $argv;
			} else {
				list( $name, $label, $fields ) = $argv;
			}
		}

		if ( array_key_exists( '_' . $name, $this->groups ) ) {
			Incorrect_Syntax_Exception::raise( 'Group with name "' . $name . '" in Complex Field "' . $this->get_label() . '" already exists.' );
		}

		$group = new Group_Field( $name, $label, $fields );

		$this->groups[ $group->get_name() ] = $group;

		return $this;
	}

	/**
	 * Set the group label Underscore template.
	 *
	 * @param  string|callable $template
	 * @return $this
	 */
	public function set_header_template( $template ) {
		if ( count( $this->groups ) === 0 ) {
			Incorrect_Syntax_Exception::raise( "Can't set group label template. There are no present groups for Complex Field " . $this->get_label() . '.' );
		}

		$template = is_callable( $template ) ? call_user_func( $template ) : $template;

		// Assign the template to the group that was added last
		$values = array_values( $this->groups );
		$group = end( $values );
		$group->set_label_template( $template );

		// Include the group label Underscore template
		$this->add_template( $group->get_group_id(), array( $group, 'template_label' ) );

		$this->groups[ $group->get_name() ] = $group;

		return $this;
	}

	/**
	 * Retrieve all groups of fields.
	 *
	 * @return array $fields
	 */
	public function get_fields() {
		$fields = array();

		foreach ( $this->groups as $group ) {
			$group_fields = $group->get_fields();

			$fields = array_merge( $fields, $group_fields );
		}

		return $fields;
	}

	/**
	 * Set the field labels.
	 * Currently supported values:
	 *  - singular_name - the singular entry label
	 *  - plural_name - the plural entries label
	 *
	 * @param  array $labels Labels
	 */
	public function setup_labels( $labels ) {
		$this->labels = array_merge( $this->labels, $labels );
		return $this;
	}

	/**
	 * Set the datastore of this field.
	 *
	 * @param Datastore_Interface $datastore
	 */
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		if ( $set_as_default && !$this->has_default_datastore() ) {
			return $this; // datastore has been overriden with a custom one - abort changing to a default one
		}
		$this->datastore = $datastore;
		$this->has_default_datastore = $set_as_default;

		foreach ( $this->groups as $group ) {
			$group->set_datastore( $this->get_datastore(), true );
		}
		return $this;
	}

	/**
	 * Load the field value from an input array based on it's name.
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 **/
	public function set_value_from_input( $input = null ) {
		$value = array();

		if ( is_null( $input ) ) {
			$input = $_POST;
		}

		if ( ! isset( $input[ $this->get_name() ] ) ) {
			return;
		}

		$input_groups = $input[ $this->get_name() ];
		$index = 0;

		foreach ( $input_groups as $values ) {
			if ( ! isset( $values['group'] ) || ! isset( $this->groups[ $values['group'] ] ) ) {
				continue;
			}

			$value_group = array( 'type' => $values['group'] );
			$group = $this->groups[ $values['group'] ];
			unset( $values['group'] );

			$group_fields = $group->get_fields();

			// trim input values to those used by the field
			$group_field_names = array_flip( $group->get_field_names() );
			$values = array_intersect_key( $values, $group_field_names );

			foreach ( $group_fields as $field ) {
				// set value from the group
				$tmp_field = $this->get_clone_under_field_in_hierarchy( $field, $index );

				if ( is_a( $tmp_field, __NAMESPACE__ . '\\Complex_Field' ) ) {
					if ( ! isset( $values[ $tmp_field->get_name() ] ) ) {
						continue; // bail if the complex field is empty
					}

					$new_name = $this->get_name() . $group->get_name() . '-' . $field->get_name() . '_' . $index;
					$new_values = array( $new_name => $values[ $tmp_field->get_name() ] );

					$tmp_field->set_name( $new_name );
					$tmp_field->set_value_from_input( $new_values );
				} else {
					$tmp_field->set_value_from_input( $values );
				}

				// update name to group name
				$tmp_field->set_name( $this->get_name() . $group->get_name() . '-' . $field->get_name() . '_' . $index );
				$value_group[] = $tmp_field;
			}

			$value[] = $value_group;
			$index++;
		}
		$this->set_value( $value );
	}

	/**
	 * Load all groups of fields and their data.
	 */
	public function load() {
		$this->set_value( $this->get_value_from_datastore() );
	}

	/**
	 * Save all contained groups of fields.
	 */
	public function save() {
		$this->delete();

		$this->get_datastore()->save( $this );

		foreach ( $this->values as $value ) {
			foreach ( $value as $field ) {
				if ( !is_a( $field, 'Carbon_Fields\\Field\\Field' ) ) {
					continue;
				}
				$field->save();
			}
		}
	}

	/**
	 * Delete the values of all contained fields.
	 */
	public function delete() {
		return $this->get_datastore()->delete_values( $this );
	}

	/**
	 * Load and parse the field data from the database.
	 */
	public function get_value_from_datastore() {
		$entries = $this->get_datastore()->get_values_for_field( $this );
		$values = array();

		foreach ( $entries as $entry_index => $entry ) {
			$group_name = $entry->field_value;

			$values[$entry_index] = array(
				'type'=>$group_name,
			);
			$group = $this->get_group_by_name( $group_name );
			$nested_fields = $group->get_fields();

			foreach ( $nested_fields as $nested_field ) {
				$clone = $this->get_clone_under_field_in_hierarchy( $nested_field, $entry_index );
				
				if ( is_a( $clone, get_class() ) ) {
					$value = $clone->get_value_from_datastore();
				} else {
					$value = $this->get_datastore()->get_value_for_field( $clone );
				}

				$values[$entry_index][$clone->get_hierarchy_name()] = $value;
			}
		}

		return $values;
	}

	public function get_value_set() {
		$value_groups = $this->get_value();
		$set = array();
		foreach ( $value_groups as $value_group ) {
			$set[] = array(
				'value' => $value_group['type'],
			);
		}
		return $set;
	}

	/**
	 * Generate and set the field prefix.
	 * @param string $prefix
	 */
	public function set_prefix( $prefix ) {
		parent::set_prefix( $prefix );

		foreach ( $this->groups as $group ) {
			$group->set_prefix( $prefix );
		}
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$complex_data = parent::to_json( $load );
		$my_value = $this->get_value();

		$groups_data = array();
		foreach ( $this->groups as $group ) {
			$groups_data[] = $group->to_json( false );
		}

		$value_data = array();
		foreach ( $my_value as $entry_index => $value_group ) {
			$group = $this->get_group_by_name( $value_group['type'] );
			$group_fields = $group->get_fields();

			$data = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
				'group_id' => $group->get_group_id(),
				'fields' => array(),
			);
			foreach ( $group_fields as $field ) {
				$value_set = isset( $value_group[ $field->get_name() ] ) ? $value_group[ $field->get_name() ] : '';
				if ( empty( $value_set ) && is_a( $field, get_class() ) ) {
					$value_set = array();
				}
				$clone = $this->get_clone_under_field_in_hierarchy( $field, $entry_index );
				$clone->set_value( $value_set );

				$data['fields'][] = $clone->to_json( false );
			}
			$value_data[] = $data;
		}

		$complex_data = array_merge( $complex_data, array(
			'layout' => $this->layout,
			'labels' => $this->labels,
			'min' => $this->get_min(),
			'max' => $this->get_max(),
			'multiple_groups' => count( $groups_data ) > 1,
			'groups' => $groups_data,
			'value' => $value_data,
			'collapsed' => $this->collapsed,
		) );
		return $complex_data;
	}

	/**
	 * The main Underscore template.
	 */
	public function template() {
		?>
		<div class="carbon-subcontainer carbon-grid {{ multiple_groups ? 'multiple-groups' : '' }}">
			<div class="carbon-empty-row carbon-empty-row-visible">
				{{{ crbl10n.complex_no_rows.replace('%s', labels.plural_name) }}}
			</div>

			<div class="groups-wrapper layout-{{ layout }}">
				<# if (layout === '<?php echo static::LAYOUT_TABBED_HORIZONTAL ?>' || layout === '<?php echo static::LAYOUT_TABBED_VERTICAL ?>' ) { #>
					<div class="group-tabs-nav-holder">
						<ul class="group-tabs-nav"></ul>

						<div class="carbon-actions">
							<div class="carbon-button">
								<a href="#" class="button" data-group="{{{ multiple_groups ? '' : groups[0].name }}}">
									+
								</a>

								<# if (multiple_groups) { #>
									<ul>
										<# _.each(groups, function(group) { #>
											<li><a href="#" data-group="{{{ group.name }}}">{{{ group.label }}}</a></li>
										<# }); #>
									</ul>
								<# } #>
							</div>
						</div>
					</div><!-- /.group-tabs-nav-holder -->
				<# } #>

				<div class="carbon-groups-holder"></div>
				<div class="clear"></div>
			</div>

			<div class="carbon-actions">
				<div class="carbon-button">
					<a href="#" class="button" data-group="{{{ multiple_groups ? '' : groups[0].name }}}">
						{{{ crbl10n.complex_add_button.replace('%s', labels.singular_name) }}}
					</a>

					<# if (multiple_groups) { #>
						<ul>
							<# _.each(groups, function(group) { #>
								<li><a href="#" data-group="{{{ group.name }}}">{{{ group.label }}}</a></li>
							<# }); #>
						</ul>
					<# } #>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * The Underscore template for the complex field group.
	 */
	public function template_group() {
		?>
		<div id="carbon-{{{ complex_name }}}-complex-container" class="carbon-row carbon-group-row" data-group-id="{{ id }}">
			<input type="hidden" name="{{{ complex_name + '[' + index + ']' }}}[group]" value="{{ name }}" />

			<div class="carbon-drag-handle">
				<span class="group-number">{{{ order + 1 }}}</span><span class="group-name">{{{ label_template || label }}}</span>
			</div>

			<div class="carbon-group-actions carbon-group-actions-{{ layout }}">
				<a class="carbon-btn-duplicate dashicons-before dashicons-admin-page" href="#" title="<?php esc_attr_e( 'Clone', \Carbon_Fields\TEXT_DOMAIN ); ?>">
					<?php _e( 'Clone', \Carbon_Fields\TEXT_DOMAIN ); ?>
				</a>

				<a class="carbon-btn-remove dashicons-before dashicons-trash" href="#" title="<?php esc_attr_e( 'Remove', \Carbon_Fields\TEXT_DOMAIN ); ?>">
					<?php _e( 'Remove', \Carbon_Fields\TEXT_DOMAIN ); ?>
				</a>

				<a class="carbon-btn-collapse dashicons-before dashicons-arrow-up" href="#" title="<?php esc_attr_e( 'Collapse/Expand', \Carbon_Fields\TEXT_DOMAIN ); ?>">
					<?php _e( 'Collapse/Expand', \Carbon_Fields\TEXT_DOMAIN ); ?>
				</a>
			</div>

			<div class="fields-container">
				<# _.each(fields, function(field) { #>
					<div class="carbon-row carbon-subrow subrow-{{{ field.type }}} {{{ field.classes.join(' ') }}}">
						<label for="{{{ complex_id + '-' + field.id + '-' + index }}}">
							{{ field.label }}

							<# if (field.required) { #>
								 <span class="carbon-required">*</span>
							<# } #>
						</label>

						<div class="field-holder {{{ complex_id + '-' + field.id + '-' + index }}}"></div>

						<# if (field.help_text) { #>
							<em class="help-text">
								{{{ field.help_text }}}
							</em>
						<# } #>

						<em class="carbon-error"></em>
					</div>
				<# }) #>
			</div>
		</div>
		<?php
	}

	 /**
	 * The Underscore template for the group item tab.
	 */
	public function template_group_tab_item() {
		?>
		<li class="group-tab-item" data-group-id="{{ id }}">
			<a href="#">
				<span class="group-handle"></span>

				<# if (label_template || label) { #>
					<span class="group-name">{{{ label_template || label }}}</span>
				<# } #>
				<span class="group-number">{{{ order + 1 }}}</span>
				<span class="dashicons dashicons-warning carbon-complex-group-error-badge" ></span>
			</a>
		</li>
		<?php
	}

	/**
	 * Modify the layout of this field.
	 *
	 * @param string $layout
	 */
	public function set_layout( $layout ) {
		$available_layouts = array(
			static::LAYOUT_GRID,
			static::LAYOUT_TABBED_HORIZONTAL,
			static::LAYOUT_TABBED_VERTICAL,
		);

		if ( ! in_array( $layout,  $available_layouts ) ) {
			$error_message = 'Incorrect layout ``' . $layout . '" specified. ' .
				'Available layouts: ' . implode( ', ', $available_layouts );

			Incorrect_Syntax_Exception::raise( $error_message );
		}

		$this->layout = $layout;

		return $this;
	}

	/**
	 * Set the minimum number of entries.
	 *
	 * @param int $min
	 */
	public function set_min( $min ) {
		$this->values_min = intval( $min );
		return $this;
	}

	/**
	 * Get the minimum number of entries.
	 *
	 * @return int $min
	 */
	public function get_min() {
		return $this->values_min;
	}

	/**
	 * Set the maximum number of entries.
	 *
	 * @param int $max
	 */
	public function set_max( $max ) {
		$this->values_max = intval( $max );
		return $this;
	}

	/**
	 * Get the maximum number of entries.
	 *
	 * @return int $max
	 */
	public function get_max() {
		return $this->values_max;
	}

	/**
	 * Change the groups initial collapse state.
	 * This state relates to the state of which the groups are rendered.
	 *
	 * @param bool $collapsed
	 */
	public function set_collapsed( $collapsed = true ) {
		$this->collapsed = $collapsed;

		return $this;
	}

	/**
	 * Retrieve the groups of this field.
	 *
	 * @return array
	 */
	public function get_group_names() {
		return array_keys( $this->groups );
	}

	/**
	 * Retrieve a group by its name.
	 *
	 * @param  string $group_name        Group name
	 * @return Group_Field $group_object Group object
	 */
	public function get_group_by_name( $group_name ) {
		$group_object = null;

		foreach ( $this->groups as $group ) {
			if ( $group->get_name() == $group_name ) {
				$group_object = $group;
			}
		}

		return $group_object;
	}
}
