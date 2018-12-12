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

	const TYPE_PROPERTY = '_type';

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
	 * Value tree describing the complex values and all groups with their child fields
	 *
	 * @var array
	 */
	protected $value_tree = array();

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
	 * Defines whether duplicate groups are allowed or not
	 *
	 * @var boolean
	 */
	protected $duplicate_groups_allowed = true;

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
	public function __construct( $type, $name, $label ) {
		$this->set_value_set( new Value_Set( Value_Set::TYPE_MULTIPLE_VALUES ) );
		parent::__construct( $type, $name, $label );
	}

	/**
	 * Initialization tasks.
	 */
	public function init() {
		$this->labels = array(
			'singular_name' => __( $this->labels['singular_name'], 'carbon-fields' ),
			'plural_name' => __( $this->labels['plural_name'], 'carbon-fields' ),
		);
		parent::init();
	}

	/**
	 * Set array of hierarchy field names
	 *
	 * @return self  $this
	 */
	public function set_hierarchy( $hierarchy ) {
		parent::set_hierarchy( $hierarchy );
		$this->update_child_hierarchy();
		return $this;
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
	 * @param  Datastore_Interface $datastore
	 * @param  boolean             $set_as_default
	 * @return self                $this
	 */
	public function set_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		if ( $set_as_default && ! $this->has_default_datastore() ) {
			return $this; // datastore has been overriden with a custom one - abort changing to a default one
		}
		$this->datastore = $datastore;
		$this->has_default_datastore = $set_as_default;

		$this->update_child_datastore( $this->get_datastore(), true );
		return $this;
	}

	/**
	 * Propagate the datastore down the hierarchy
	 *
	 * @param Datastore_Interface $datastore
	 * @param boolean             $set_as_default
	 */
	protected function update_child_datastore( Datastore_Interface $datastore, $set_as_default = false ) {
		foreach ( $this->groups as $group ) {
			$group->set_datastore( $datastore, $set_as_default );
		}
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
			return $this;
		}

		$reserved_names = array( Value_Set::VALUE_PROPERTY, static::TYPE_PROPERTY );
		foreach ( $fields as $field ) {
			if ( in_array( $field->get_base_name(), $reserved_names ) ) {
				Incorrect_Syntax_Exception::raise( '"' . $field->get_base_name() . '" is a reserved keyword for Complex fields and cannot be used for a field name.' );
				return $this;
			}
		}

		$group = new Group_Field( $name, $label, $fields );
		$this->groups[ $group->get_name() ] = $group;

		$this->update_child_hierarchy();
		if ( $this->get_datastore() !== null ) {
			$this->update_child_datastore( $this->get_datastore(), true );
		}

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
	 * @return self            $this
	 */
	public function set_header_template( $template ) {
		$template = is_callable( $template ) ? call_user_func( $template ) : $template;

		// Assign the template to the group that was added last
		$values = array_values( $this->groups );
		$group = end( $values );

		if ( $group ) {
			$group->set_label_template( $template );

			$this->groups[ $group->get_name() ] = $group;
		}

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

	protected function get_prefilled_group_fields( $group_fields, $group_values, $group_index ) {
		$fields = array();

		foreach ( $group_fields as $field ) {
			$clone = $this->get_clone_under_field_in_hierarchy( $field, $this, $group_index );
			if ( isset( $group_values[ $clone->get_base_name() ] ) ) {
				$clone->set_value( $group_values[ $clone->get_base_name() ] );
			}
			$fields[] = $clone;
		}

		return $fields;
	}

	protected function get_prefilled_groups( $groups, $value_tree ) {
		$fields = array();

		foreach ( $value_tree as $group_index => $value ) {
			$group_name = $groups[ $group_index ];
			$group = $this->get_group_by_name( $group_name );
			if ( ! $group ) {
				// Failed to find group - sombody has been messing with the database or group definitions
				continue;
			}
			$group_fields = $group->get_fields();
			$group_values = array();
			if ( isset( $value_tree[ $group_index ] ) ) {
				$group_values = $value_tree[ $group_index ];
			}
			$fields[ $group_index ] = array( Value_Set::VALUE_PROPERTY => $group->get_name() ) + $this->get_prefilled_group_fields( $group_fields, $group_values, $group_index );
		}

		return $fields;
	}

	/**
	 * Load the field value from an input array based on its name.
	 *
	 * @param  array $input Array of field names and values.
	 * @return self  $this
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->get_name() ] ) ) {
			return $this;
		}

		$value_tree = array();
		$input_groups = $input[ $this->get_name() ];
		$input_group_index = 0;
		foreach ( $input_groups as $values ) {
			if ( ! isset( $values[ Value_Set::VALUE_PROPERTY ] ) || ! isset( $this->groups[ $values[ Value_Set::VALUE_PROPERTY ] ] ) ) {
				continue;
			}

			$group = $this->get_group_by_name( $values[ Value_Set::VALUE_PROPERTY ] );
			$group_fields = $group->get_fields();
			$group_field_names = array_flip( $group->get_field_names() );

			$value_group = array( Value_Set::VALUE_PROPERTY => $values[ Value_Set::VALUE_PROPERTY ] );
			unset( $values[ Value_Set::VALUE_PROPERTY ] );

			// trim input values to those used by the field
			$values = array_intersect_key( $values, $group_field_names );

			foreach ( $group_fields as $field ) {
				$tmp_field = $this->get_clone_under_field_in_hierarchy( $field, $this, $input_group_index );

				$tmp_field->set_value_from_input( $values );
				if ( is_a( $tmp_field, get_class() ) ) {
					$value_group[ $tmp_field->get_base_name() ] = $tmp_field->get_value_tree();
				} else {
					$value_group[ $tmp_field->get_base_name() ] = $tmp_field->get_full_value();
				}
			}
			$value_tree[] = $value_group;
			$input_group_index++;
		}

		$this->set_value( $value_tree );
		return $this;
	}

	/**
	 * Save all contained groups of fields.
	 */
	public function save() {
		// Only delete root field values as nested field values should be deleted in a cascading manner by the datastore
		$hierarchy = $this->get_hierarchy();
		$delete_on_save = empty( $hierarchy );
		$delete_on_save = apply_filters( 'carbon_fields_should_delete_field_value_on_save', $delete_on_save, $this );
		if ( $delete_on_save ) {
			$this->delete();
		}

		$save = apply_filters( 'carbon_fields_should_save_field_value', true, $this->get_value(), $this );
		if ( $save ) {
			$this->get_datastore()->save( apply_filters( 'carbon_fields_before_complex_field_save', $this ) );
			$field_groups = $this->get_prefilled_groups( $this->get_value(), $this->get_value_tree() );
			foreach ( $field_groups as $group_index => $fields ) {
				foreach ( $fields as $field ) {
					if ( ! is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
						continue;
					}
					$field->save();
				}
			}
		}
	}

	/**
	 * {@inheritDoc}
	 */
	public function get_formatted_value() {
		$field_groups = $this->get_prefilled_groups( $this->get_value(), $this->get_value_tree() );

		$value = array();
		foreach ( $field_groups as $group_index => $field_group ) {
			$value[ $group_index ] = array();
			foreach ( $field_group as $key => $field ) {
				if ( is_a( $field, __NAMESPACE__ . '\\Field' ) ) {
					$value[ $group_index ][ $field->get_base_name() ] = $field->get_formatted_value();
				} else {
					if ( $key === Value_Set::VALUE_PROPERTY ) {
						$value[ $group_index ][ static::TYPE_PROPERTY ] = $field;
					} else {
						$value[ $group_index ][ $key ] = $field;
					}
				}
			}
		}
		return $value;
	}

	/**
	 * Convert an externally-keyed value array ('_type' => ...)
	 * to an internally-keyed one ('value' => ...)
	 *
	 * @param  mixed $value
	 * @return mixed
	 */
	protected function external_to_internal_value( $value ) {
		if ( ! is_array( $value ) ) {
			return $value;
		}
		if ( ! isset( $value[ static::TYPE_PROPERTY ] ) ) {
			return $value;
		}
		$value = array_map( array( $this, 'external_to_internal_value' ), $value );
		$value[ Value_Set::VALUE_PROPERTY ] = $value[ static::TYPE_PROPERTY ];
		unset( $value[ static::TYPE_PROPERTY ] );
		return $value;
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_value( $value ) {
		$value = array_map( array( $this, 'external_to_internal_value' ), $value );
		$groups = array();
		foreach ( $value as $values ) {
			$groups[] = isset( $values[ Value_Set::VALUE_PROPERTY ] ) ? $values[ Value_Set::VALUE_PROPERTY ] : Group_Field::DEFAULT_GROUP_NAME;
		}
		parent::set_value( $groups );
		$this->set_value_tree( $value );
		return $this;
	}

	/**
	 * {@inheritDoc}
	 */
	public function set_default_value( $default_value ) {
		foreach ( $default_value as $index => $group ) {
			if ( ! isset( $group[ static::TYPE_PROPERTY ] ) ) {
				$default_value[ $index ][ static::TYPE_PROPERTY ] = Group_Field::DEFAULT_GROUP_NAME;
			}
		}
		$this->default_value = $default_value;
		return $this;
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
	 * @see    Internal Glossary in DEVELOPMENT.MD
	 * @return self     $this
	 */
	public function set_value_tree( $value_tree ) {
		$this->value_tree = $value_tree;
		return $this;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$complex_data = parent::to_json( $load );

		$groups_data = array();
		foreach ( $this->groups as $group ) {
			$group_data = $group->to_json( false );
			$group_data['collapsed'] = $this->get_collapsed();

			$groups_data[] = $group_data;
		}

		$field_groups = $this->get_prefilled_groups( $this->get_value(), $this->get_value_tree() );
		$value_data = array();
		foreach ( $field_groups as $group_index => $fields ) {
			$group = $this->get_group_by_name( $fields[ Value_Set::VALUE_PROPERTY ] );

			$data = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
				'label_template' => $group->get_label_template(),
				'group_id' => $group->get_group_id(),
				'collapsed' => $this->get_collapsed(),
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

		$group_types = array();
		foreach ( $this->groups as $group ) {
			$group_types[] = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
			);
		}

		$complex_data = array_merge( $complex_data, array(
			'duplicate_groups_allowed' => $this->get_duplicate_groups_allowed(),
			'group_types' => $group_types,
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
	 * Modify the layout of this field.
	 *
	 * @param  string $layout
	 * @return self   $this
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
			return $this;
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
	 * @param  int   $min
	 * @return self  $this
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
	 * @param  int   $max
	 * @return self  $this
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
	 * @param  bool  $collapsed
	 * @return self  $this
	 */
	public function set_collapsed( $collapsed = true ) {
		$this->collapsed = $collapsed;
		return $this;
	}

	/**
	 * Get whether duplicate groups are allowed.
	 *
	 * @return bool
	 */
	public function get_duplicate_groups_allowed() {
		return $this->duplicate_groups_allowed;
	}

	/**
	 * Set whether duplicate groups are allowed.
	 *
	 * @param  bool  $allowed
	 * @return self  $this
	 */
	public function set_duplicate_groups_allowed( $allowed ) {
		$this->duplicate_groups_allowed = $allowed;
		return $this;
	}
}
