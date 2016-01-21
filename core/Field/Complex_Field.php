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
	const LAYOUT_TABLE = 'table';
	const LAYOUT_LIST = 'list';

	protected $fields = array();
	protected $values = array();
	protected $groups = array();

	protected $layout = self::LAYOUT_TABLE;
	protected $values_min = -1;
	protected $values_max = -1;

	public $labels = array(
		'singular_name' => 'Entry',
		'plural_name' => 'Entries',
	);

	/**
	 * Initialization tasks
	 */
	public function init() {
		$this->labels = array(
			'singular_name' => __( 'Entry', 'carbon_fields' ),
			'plural_name' => __( 'Entries', 'carbon_fields' ),
		);

		// Include the complex group backbone template
		$this->add_template( 'Complex-Group', array( $this, 'template_group' ) );

		parent::init();
	}

	/**
	 * Add a set/group of fields.
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
		} else {
			$group = new Group_Field();
			$group->set_name( $name );
			
			$group->add_fields( $fields );
			$group->set_label( $label );

			$this->groups[ $group->get_name() ] = $group;
			return $this;
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
	 * @param Datastore_Interface $store
	 */
	public function set_datastore( Datastore_Interface $store ) {
		$this->store = $store;

		foreach ( $this->groups as $group ) {
			$group->set_datastore( $this->store );
		}
	}

	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 **/
	public function set_value_from_input( $input = null ) {
		$this->values = array();

		if ( is_null( $input ) ) {
			$input = $_POST;
		}

		if ( ! isset( $input[ $this->get_name() ] ) ) {
			return;
		}

		$input_groups = $input[ $this->get_name() ];
		$index = 0;

		foreach ( $input_groups as $values ) {
			$value_group = array();
			if ( ! isset( $values['group'] ) || ! isset( $this->groups[ $values['group'] ] ) ) {
				continue;
			}

			$group = $this->groups[ $values['group'] ];
			unset( $values['group'] );

			$group_fields = $group->get_fields();

			// trim input values to those used by the field
			$group_field_names = array_flip( $group->get_field_names() );
			$values = array_intersect_key( $values, $group_field_names );

			// check if group is empty
			if ( count( array_filter( $values, array( $this, 'array_filter_remove_empty_values' ) ) ) == 0 && ! in_array( '0', $values ) ) {
				continue;
			}

			foreach ( $group_fields as $field ) {
				// set value from the group
				$tmp_field = clone $field;
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

			$this->values[] = $value_group;
			$index++;
		}
	}

	/**
	 * Recursive callback function for array_filter()
	 * 
	 * Checks if the given value is an array and calls itself recursively
	 * Otherwise, works as usual
	 */
	public function array_filter_remove_empty_values( $value ) {
		if ( is_array( $value ) ) {
			return array_filter( $value, array( $this, 'array_filter_remove_empty_values' ) );
		}

		if ( ! empty( $value ) ) {
			return true;
		}
	}

	/**
	 * Load all groups of fields and their data.
	 */
	public function load() {
		// load existing groups
		$this->load_values();
	}

	/**
	 * Save all contained groups of fields.
	 */
	public function save() {
		$this->delete();

		foreach ( $this->values as $value ) {
			foreach ( $value as $field ) {
				$field->save();
			}
		}
	}

	/**
	 * Delete the values of all contained fields.
	 */
	public function delete() {
		return $this->store->delete_values( $this );
	}

	/**
	 * Load and parse the field data
	 */
	public function load_values() {
		return $this->load_values_from_db();
	}

	/**
	 * Load and parse the field data from the database.
	 */
	public function load_values_from_db() {
		$this->values = array();

		$group_rows = $this->store->load_values( $this );

		return $this->process_loaded_values( $group_rows );
	}

	/**
	 * Load and parse a raw set of field data.
	 * 
	 * @param  array $values Raw data entries
	 * @return array 		 Processed data entries
	 */
	public function load_values_from_array( $values ) {
		$this->values = array();

		$group_rows = array();

		$meta_key = $this->get_name();

		foreach ( $values as $key => $value ) {
			if ( strpos( $key, $meta_key ) !== 0 ) {
				continue;
			}

			$group_rows[] = array(
				'field_key' => preg_replace( '~^(' . preg_quote( $this->name, '~' ) . ')_\d+_~', '$1_', $key ),
				'field_value' => $value,
			);
		}

		return $this->process_loaded_values( $group_rows );
	}

	/**
	 * Parse groups of raw field data into the actual field hierarchy.
	 * 
	 * @param  array $group_rows Group rows
	 */
	public function process_loaded_values( $group_rows ) {
		$input_groups = array();

		// Set default values
		$field_names = array();
		foreach ( $this->groups as $group ) {
			$group_fields = $group->get_fields();
			foreach ( $group_fields as $field ) {
				$field_names[] = $field->get_name();
				$field->set_value( $field->get_default_value() );
			}
		}

		if ( empty( $group_rows ) ) {
			return;
		}

		// load and parse values and group type
		foreach ( $group_rows as $row ) {
			if ( ! preg_match( Helper::get_complex_field_regex( $this->name, array_keys( $this->groups ), $field_names ), $row['field_key'], $field_name ) ) {
				continue;
			}

			$row['field_value'] = maybe_unserialize( $row['field_value'] );
			$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];

			if ( ! empty( $field_name['trailing'] ) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'] ] = $row['field_value'];
			} else if ( ! empty( $field_name['sub'] ) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		ksort( $input_groups );
		
		foreach ( $input_groups as $index => $values ) {
			$value_group = array( 'type' => $values['type'] );
			$group_fields = $this->groups[ $values['type'] ]->get_fields();
			unset( $values['type'] );

			foreach ( $group_fields as $field ) {
				// set value from the group
				$tmp_field = clone $field;

				if ( is_a( $field, __NAMESPACE__ . '\\Complex_Field' ) ) {
					$tmp_field->load_values_from_array( $values );
				} else {
					$tmp_field->set_value_from_input( $values );
				}

				$value_group[] = $tmp_field;
			}

			$this->values[] = $value_group;
		}
	}

	/**
	 * Retrieve the field values
	 * @return array
	 */
	public function get_values() {
		return $this->values;
	}

	/**
	 * Generate and set the field prefix.
	 * @param string $prefix
	 */
	public function set_prefix($prefix) {
		$this->name = preg_replace( '~^' . preg_quote( $this->name_prefix, '~' ) . '~', '', $this->name );
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;

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

		$groups_data = array();
		$values_data = array();

		foreach ( $this->groups as $group ) {
			$groups_data[] = $group->to_json( false );
		}

		foreach ( $this->values as $fields ) {
			$group = $this->get_group_by_name( $fields['type'] );
			unset( $fields['type'] );

			$data = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
				'fields' => array(),
			);

			foreach ( $fields as $index => $field ) {
				$data['fields'][] = $field->to_json( false );
			}

			$values_data[] = $data;
		}

		$complex_data = array_merge( $complex_data, array(
			'layout' => $this->layout,
			'labels' => $this->labels,
			'min' => $this->get_min(),
			'max' => $this->get_max(),
			'multiple_groups' => count( $groups_data ) > 1,
			'groups' => $groups_data,
			'value' => $values_data,
		) );

		return $complex_data;
	}

	/**
	 * The main Underscore template
	 */
	public function template() {
		?>
		<div class="carbon-subcontainer carbon-grid {{ multiple_groups ? 'multiple-groups' : '' }}">
	
			<div class="carbon-empty-row">
				{{{ crbl10n.complex_no_rows.replace('%s', labels.plural_name) }}}
			</div>

			<div class="carbon-groups-holder layout-{{ layout }}"></div>

			<div class="carbon-actions">
				<div class="carbon-button">
					<a href="#" class="button" data-group="{{{ multiple_groups ? '' : groups[0].name }}}">
						{{{ crbl10n.complex_add_button.replace('%s', labels.singular_name) }}}
						{{{ multiple_groups ? '&#8681;' : '' }}}
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
	 * The Underscore template for a complex field group
	 */
	public function template_group() {
		?>
		<div id="carbon-{{{ complex_name }}}-complex-container" class="carbon-row carbon-group-row" data-group-id="{{ id }}">
			<input type="hidden" name="{{{ complex_name + '[' + index + ']' }}}[group]" value="{{ name }}" />

			<div class="carbon-drag-handle">
				<span class="group-number">{{{ order + 1 }}}</span><span class="group-name">{{{ label }}}</span>
			</div>
			<div class="carbon-group-actions">
				<a class="carbon-btn-collapse" href="#" title="<?php esc_attr_e( 'Collapse/Expand', 'carbon_fields' ); ?>"><?php _e( 'Collapse/Expand', 'carbon_fields' ); ?></a>
				<a class="carbon-btn-duplicate" href="#" title="<?php esc_attr_e( 'Clone', 'carbon_fields' ); ?>"><?php _e( 'Clone', 'carbon_fields' ); ?></a>
				<a class="carbon-btn-remove" href="#" title="<?php esc_attr_e( 'Remove', 'carbon_fields' ); ?>"><?php _e( 'Remove', 'carbon_fields' ); ?></a>
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
	 * Modify the layout of this field.
	 * Deprecated in favor of set_width().
	 *
	 * @deprecated
	 * 
	 * @param string $layout
	 */
	public function set_layout( $layout ) {
		_doing_it_wrong( __METHOD__, __( 'Complex field layouts are deprecated, please use <code>set_width()</code> instead.', 'carbon_fields' ), null );

		if ( ! in_array( $layout, array( self::LAYOUT_TABLE, self::LAYOUT_LIST ) ) ) {
			Incorrect_Syntax_Exception::raise( 'Incorrect layout specifier. Available values are "<code>' . self::LAYOUT_TABLE . '</code>" and "<code>' . self::LAYOUT_LIST . '</code>"' );
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
	 * Retrieve the groups of this field.
	 * 
	 * @return array 
	 */
	public function get_group_names() {
		return array_keys( $this->groups );
	}

	/**
	 * Retrieve a group by its name
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
