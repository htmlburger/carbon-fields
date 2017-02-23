<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Field\Group_Field;
use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Complex field class.
 * Allows nested repeaters with multiple field groups to be created.
 */
class Complex_Field extends Field {

	/**
	 * Visual layout type constants
	 */
	const LAYOUT_GRID = 'grid'; // default

	const LAYOUT_TABBED_HORIZONTAL = 'tabbed-horizontal';

	const LAYOUT_TABBED_VERTICAL = 'tabbed-vertical';

	/**
	 * Key which defines what a group's type/name is
	 */
	const GROUP_TYPE_KEY = '_type';

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Complex field layout
	 * 
	 * @var string static::LAYOUT_* constant
	 */
	protected $layout = self::LAYOUT_GRID;

	/**
	 * Value tree describing the complex values ( ['value_set'] ) and all groups with their child fields ( ['groups'] )
	 * 
	 * @var array
	 */
	protected $value_tree = array(
		'value_set' => array(),
		'groups' => array(),
	);

	/**
	 * Array of groups registered for this complex field
	 * 
	 * @var array
	 */
	protected $groups = array();

	/**
	 * Minimum number of entries. -1 for no limit
	 * 
	 * @var integer
	 */
	protected $values_min = -1;

	/**
	 * Maximum number of entries. -1 for no limit
	 * 
	 * @var integer
	 */
	protected $values_max = -1;

	/**
	 * Default entry state - collapsed or not
	 * 
	 * @var boolean
	 */
	protected $collapsed = false;

	/**
	 * Entry labels
	 * These are translated in init()
	 * 
	 * @var array
	 */
	public $labels = array(
		'singular_name' => 'Entry',
		'plural_name' => 'Entries',
	);

	/**
	 * Create a field from a certain type with the specified label.
	 * 
	 * @param string $type  Field type
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	protected function __construct( $type, $name, $label ) {
		$this->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES ) );
		parent::__construct( $type, $name, $label );
	}

	/**
	 * Initialization tasks.
	 */
	public function init() {
		$this->labels = array(
			'singular_name' => __( $this->labels['singular_name'], \Carbon_Fields\TEXT_DOMAIN ),
			'plural_name' => __( $this->labels['plural_name'], \Carbon_Fields\TEXT_DOMAIN ),
		);

		// Include the complex group Underscore templates
		$this->add_template( 'Complex-Group', array( $this, 'template_group' ) );
		$this->add_template( 'Complex-Group-Tab-Item', array( $this, 'template_group_tab_item' ) );

		parent::init();
	}

	/**
	 * Set array of hierarchy field names
	 */
	public function set_hierarchy( $hierarchy ) {
		parent::set_hierarchy( $hierarchy );
		$this->update_child_hierarchy();
	}
	
	/**
	 * Propagate hierarchy to child fields
	 */
	public function update_child_hierarchy() {
		$hierarchy = array_merge( $this->get_hierarchy(), array( $this->get_base_name() ) );
		$fields = $this->get_fields();
		foreach ( $fields as $field ) {
			$field->set_hierarchy( $hierarchy );
		}
	}

	/**
	 * Activate the field once the container is attached.
	 */
	public function activate() {
		parent::activate();
		$fields = $this->get_fields();
		foreach ( $fields as $field ) {
			$field->activate();
		}
	}

	/**
	 * Set the datastore of this field and propagate it to children
	 *
	 * @param Datastore_Interface $datastore
	 */
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		if ( $set_as_default && ! $this->has_default_datastore() ) {
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
	 * Add a set/group of fields.
	 *
	 * Accepted param variations:
	 *   - array<Field> $fields
	 *   - string $group_name, array<Field> $fields
	 *   - string $group_name, string $group_label, array<Field> $fields
	 * 
	 * @return $this
	 */
	public function add_fields() {
		$argv = func_get_args();
		$argc = count( $argv );
		$fields = $argv[ $argc - 1 ];
		$name = '';
		$label = null;

		if ( $argc >= 2 ) {
			$name = $argv[0];
		}
		
		if ( $argc >= 3 ) {
			$label = $argv[1];
		}

		$name = ! empty( $name ) ? $name : Group_Field::DEFAULT_GROUP_NAME;

		if ( array_key_exists( $name, $this->groups ) ) {
			Incorrect_Syntax_Exception::raise( 'Group with name "' . $name . '" in Complex Field "' . $this->get_label() . '" already exists.' );
		}

		foreach ( $fields as $field ) {
			if ( $field->get_base_name() === static::GROUP_TYPE_KEY ) {
				Incorrect_Syntax_Exception::raise( '"' . static::GROUP_TYPE_KEY . '" is a reserved keyword for Complex fields and cannot be used for a field name.' );
			}
		}

		$group = new Group_Field( $name, $label, $fields );

		$this->groups[ $group->get_name() ] = $group;
		$this->update_child_hierarchy();

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
	 * Return a clone of a field with hierarchy settings applied
	 *
	 * @param Field $field
	 * @param Field $parent_field
	 * @param int $group_index
	 * @return Field
	 */
	public function get_clone_under_field_in_hierarchy( $field, $parent_field, $group_index = 0 ) {
		$clone = clone $field;
		$clone->set_hierarchy( array_merge( $parent_field->get_hierarchy(), array( $parent_field->get_base_name() ) ) );
		$clone->set_hierarchy_index( array_merge( $parent_field->get_hierarchy_index(), array( $group_index ) ) );
		return $clone;
	}

	protected function get_prefilled_field_groups( $value_tree ) {
		$fields = array();

		if ( empty( $value_tree ) ) {
			return $fields;
		}

		foreach ( $value_tree['value_set'] as $group_index => $value ) {
			$group_name = $value[ Value_Set::VALUE_PROPERTY ];
			$group = $this->get_group_by_name( $group_name );
			$group_fields = $group->get_fields();
			$fields[ $group_index ] = array(
				static::GROUP_TYPE_KEY => $group->get_name(),
			);
			$group_values = array();
			if ( isset( $value_tree['groups'][ $group_index ] ) ) {
				$group_values = $value_tree['groups'][ $group_index ];
			}

			foreach ( $group_fields as $field ) {
				$clone = $this->get_clone_under_field_in_hierarchy( $field, $this, $group_index );
				if ( isset( $group_values[ $clone->get_base_name() ] ) ) {
					$group_value = $group_values[ $clone->get_base_name() ];
					
					if ( isset( $group_value['value_set'] ) ) {
						$clone->set_value( $group_value['value_set'] );
					}

					if ( is_a( $clone, get_class() ) ) {
						$clone->set_value_tree( $group_value );
					}
				}
				$fields[ $group_index ][] = $clone;
			}
		}

		return $fields;
	}

	/**
	 * Load the field value from an input array based on it's name.
	 *
	 * @param array $input Array of field names and values.
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->get_name() ] ) ) {
			return;
		}

		$value_tree = array(
			'value_set' => array(),
			'groups' => array(),
		);
		$input_groups = $input[ $this->get_name() ];
		$input_group_index = 0;
		foreach ( $input_groups as $values ) {
			if ( ! isset( $values[ static::GROUP_TYPE_KEY ] ) || ! isset( $this->groups[ $values[ static::GROUP_TYPE_KEY ] ] ) ) {
				continue;
			}

			$group = $this->get_group_by_name( $values[ static::GROUP_TYPE_KEY ] );
			$value_group = array( static::GROUP_TYPE_KEY => $values[ static::GROUP_TYPE_KEY ] );
			unset( $values[ static::GROUP_TYPE_KEY ] );

			$group_fields = $group->get_fields();

			// trim input values to those used by the field
			$group_field_names = array_flip( $group->get_field_names() );
			$values = array_intersect_key( $values, $group_field_names );
			
			foreach ( $group_fields as $field ) {
				$tmp_field = $this->get_clone_under_field_in_hierarchy( $field, $this, $input_group_index );

				$tmp_field->set_value_from_input( $values );
				if ( is_a( $tmp_field, get_class() ) ) {
					$value_group[ $tmp_field->get_base_name() ] = $tmp_field->get_value_tree();
				} else {
					$value_group[ $tmp_field->get_base_name() ] = array(
						'value_set' => $tmp_field->get_value_set()->get_set(),
					);
				}
			}

			$value_tree['value_set'][] = array(
				Value_Set::VALUE_PROPERTY => $group->get_name(),
			);
			$value_tree['groups'][] = $value_group;
			$input_group_index++;
		}

		$this->set_value( $value_tree['value_set'] );
		$this->set_value_tree( $value_tree );
	}

	/**
	 * Load all groups of fields and their data.
	 */
	public function load() {
		$value_tree = $this->get_datastore()->load( $this );
		$value = array();
		if ( isset( $value_tree['value_set'] ) ) {
			$value = $value_tree['value_set'];
		}
		$this->set_value( $value );

		if ( $this->get_value() ) {
			$this->set_value_tree( $value_tree );
		}
	}

	/**
	 * Save all contained groups of fields.
	 */
	public function save() {
		// Only delete root field values as nested field values should be deleted in a cascading manner by the datastore
		$hierarchy = $this->get_hierarchy();
		if ( empty( $hierarchy ) ) {
			$this->delete();
		}
		
		$this->get_datastore()->save( $this );

		$field_groups = $this->get_prefilled_field_groups( $this->get_value_tree() );

		foreach ( $field_groups as $group_index => $fields ) {
			foreach ( $fields as $field ) {
				if ( ! is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
					continue;
				}
				$field->save();
			}
		}
	}

	/**
	 * Return the full value tree of all groups and their fields
	 *
	 * @return mixed
	 */
	public function get_value_tree() {
		return (array) $this->value_tree;
	}

	/**
	 * Set the full value tree of all groups and their fields
	 *
	 * @see  Internal Glossary in DEVELOPMENT.MD
	 */
	public function set_value_tree( $value_tree ) {
		$this->value_tree = $value_tree;
	}

	/**
	 * Return a differently formatted value for end-users
	 *
	 * @return mixed
	 */
	public function get_formatted_value() {
		$field_groups = $this->get_prefilled_field_groups( $this->get_value_tree() );
		
		$value = array();
		foreach ( $field_groups as $group_index => $field_group ) {
			$value[ $group_index ] = array();
			foreach ( $field_group as $key => $field ) {
				if ( is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
					$value[ $group_index ][ $field->get_base_name() ] = $field->get_formatted_value(); 
				} else {
					$value[ $group_index ][ $key ] = $field;
				}
			}
		}
		return $value;
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

		$groups_data = array();
		foreach ( $this->groups as $group ) {
			$groups_data[] = $group->to_json( false );
		}

		$field_groups = $this->get_prefilled_field_groups( $this->get_value_tree() );
		$value_data = array();
		foreach ( $field_groups as $group_index => $fields ) {
			$group = $this->get_group_by_name( $fields[ static::GROUP_TYPE_KEY ] );

			$data = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
				'group_id' => $group->get_group_id(),
				'fields' => array(),
			);

			foreach ( $fields as $field ) {
				if ( ! is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
					continue;
				}
				$data['fields'][] = $field->to_json( false );
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
			'collapsed' => $this->get_collapsed(),
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
			<input type="hidden" name="{{{ complex_name + '[' + index + ']' }}}[_type]" value="{{ name }}" />

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
	 * Get the minimum number of entries.
	 *
	 * @return int $min
	 */
	public function get_min() {
		return $this->values_min;
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
	 * Get the maximum number of entries.
	 *
	 * @return int $max
	 */
	public function get_max() {
		return $this->values_max;
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
	 * Get collapsed state
	 *
	 * @return bool
	 */
	public function get_collapsed() {
		return $this->collapsed;
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
}
