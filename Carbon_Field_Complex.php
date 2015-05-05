<?php 
class Carbon_Field_Complex extends Carbon_Field {
	const LAYOUT_TABLE = 'table';
	const LAYOUT_LIST = 'list';

	protected $fields = array();
	protected $values = array();
	protected $groups = array();

	protected $layout = self::LAYOUT_TABLE;
	protected $values_min = -1;
	protected $values_max = -1;

	public $labels = array(
		'singular_name'=>'Entry',
		'plural_name'=>'Entries',
	);

	function init() {
		$this->labels = array(
			'singular_name'=>__('Entry', 'crb'),
			'plural_name'=>__('Entries', 'crb'),
		);

		// Include the complex group backbone template
		$this->add_template('Complex-Group', array($this, 'template_group'));

		Carbon_Field::init();
	}

	function add_fields() {
		$argv = func_get_args();
		$argc = count($argv);

		if ( $argc == 1 ) {
			$fields = $argv[0];
			$name = '';
			$label = null;
		} else if ($argc == 2) {
			if ( is_array($argv[0]) ) {
				list($fields, $name) = $argv;
			} else {
				list($name, $fields) = $argv;
			}
			$label = null;
		} else if ( $argc == 3 ) {
			if ( is_array($argv[0]) ) {
				list($fields, $name, $label) = $argv;
			} else {
				list($name, $label, $fields) = $argv;
			}
		}

		if ( array_key_exists('_' . $name, $this->groups) ) {
			throw new Carbon_Exception('Group with name "' . $name . '" in Complex Field "' . $this->get_label() . '" already exists.');
		} else {
			$group = new Carbon_Field_Group();
			$group->set_name( $name );
			
			$group->add_fields($fields);
			$group->set_label( $label );

			$this->groups[$group->get_name()] = $group;
			return $this;
		}
	}

	function get_fields() {
		$fields = array();

		foreach ($this->groups as $group) {
			$group_fields = $group->get_fields();

			$fields = array_merge($fields, $group_fields);
		}

		return $fields;
	}

	function setup_labels($labels) {
		$this->labels = array_merge($this->labels, $labels);
		return $this;
	}

	function set_datastore(Carbon_DataStore $store) {
		$this->store = $store;

		foreach ($this->groups as $group) {
			$group->set_datastore($this->store);
		}
	}

	function set_value_from_input($input = null) {
		$this->values = array();

		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->get_name()]) ) {
			return;
		}

		$input_groups = $input[$this->get_name()];
		$index = 0;

		foreach ($input_groups as $values) {
			$value_group = array();
			if ( !isset($values['group']) || !isset($this->groups[$values['group']]) ) {
				continue;
			}

			$group = $this->groups[$values['group']];
			unset($values['group']);

			$group_fields = $group->get_fields();

			// trim input values to those used by the field
			$group_field_names = array_flip($group->get_field_names());
			$values = array_intersect_key($values, $group_field_names);

			// check if group is empty
			if ( count( array_filter( $values, array($this, 'array_filter_remove_empty_values') ) ) == 0 && !in_array('0', $values) ) {
				continue;
			}

			foreach ($group_fields as $field) {
				// set value from the group
				$tmp_field = clone $field;
				if ( is_a($tmp_field, 'Carbon_Field_Complex') ) {
					$new_name = $this->get_name() . $group->get_name() . '-' . $field->get_name() . '_' . $index;
					$new_values = array( $new_name => $values[$tmp_field->get_name()] );

					$tmp_field->set_name( $new_name );
					$tmp_field->set_value_from_input($new_values);
				} else {
					$tmp_field->set_value_from_input($values);
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
	function array_filter_remove_empty_values($value) {
		if ( is_array($value) ) {
			return array_filter($value, array($this, 'array_filter_remove_empty_values'));
		}

		if ( !empty($value) ) {
			return true;
		}
	}

	function load() {
		// load existing groups
		$this->load_values();
	}

	function save() {
		$this->delete();

		foreach ($this->values as $value) {
			foreach ($value as $field) {
				$field->save();
			}
		}
	}

	function delete() {
		return $this->store->delete_values($this);
	}

	function load_values() {
		return $this->load_values_from_db();
	}

	function load_values_from_db() {
		$this->values = array();

		$group_rows = $this->store->load_values($this);

		return $this->process_loaded_values($group_rows);
	}

	function load_values_from_array($values) {
		$this->values = array();

		$group_rows = array();

		$meta_key = $this->get_name();

		foreach ($values as $key => $value) {
			if ( strpos($key, $meta_key) !== 0 ) {
				continue;
			}

			$group_rows[] = array(
				'field_key' => preg_replace('~^(' . preg_quote($this->name, '~') . ')_\d+_~', '$1_', $key),
				'field_value' => $value
			);
		}

		return $this->process_loaded_values($group_rows);
	}

	function process_loaded_values($group_rows) {
		$input_groups = array();

		// Set default values
		$field_names = array();
		foreach ($this->groups as $group) {
			$group_fields = $group->get_fields();
			foreach ($group_fields as $field) {
				$field_names[] = $field->get_name();
				$field->set_value($field->get_default_value());
			}
		}

		if ( empty($group_rows) ) {
			return;
		}

		// quote group names for use in regex
		$group_names = array_map('preg_quote', array_keys($this->groups), array('~'));
		$group_names = implode('|', $group_names);

		$field_names = array_map('preg_quote', $field_names, array('~'));
		$field_names = implode('|', $field_names);

		// load and parse values and group type
		foreach ($group_rows as $row) {
			if ( !preg_match('~^' . preg_quote($this->name, '~') . '(?P<group>' . $group_names . ')-(?P<key>' . $field_names . ')_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~', $row['field_key'], $field_name) ) {
				continue;
			}

			$row['field_value'] = maybe_unserialize($row['field_value']);

			if ( !empty($field_name['trailing']) ) {
				$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
				$input_groups[ $field_name['index'] ][$field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing']] = $row['field_value'];
			} else if ( !empty($field_name['sub']) ) {
				$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][$field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ]['type'] = $field_name['group'];
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		ksort($input_groups);
		
		foreach ($input_groups as $index => $values) {
			$value_group = array('type' => $values['type']);
			$group_fields = $this->groups[$values['type']]->get_fields();
			unset($values['type']);

			foreach ($group_fields as $field) {
				// set value from the group
				$tmp_field = clone $field;

				if ( is_a($field, 'Carbon_Field_Complex') ) {
					$tmp_field->load_values_from_array($values);
				} else {
					$tmp_field->set_value_from_input($values);
				}

				$value_group[] = $tmp_field;
			}

			$this->values[] = $value_group;
		}
	}

	function get_values() {
		return $this->values;
	}

	function set_prefix($prefix) {
		$this->name = preg_replace('~^' . preg_quote($this->name_prefix, '~') . '~', '', $this->name);
		$this->name_prefix = $prefix;
		$this->name = $this->name_prefix . $this->name;

		foreach ($this->groups as $group) {
			$group->set_prefix($prefix);
		}
	}

	function to_json($load) {
		$complex_data = parent::to_json($load);

		$groups_data = array();
		$values_data = array();

		foreach ($this->groups as $group) {
			$groups_data[] = $group->to_json(false);
		}

		foreach ($this->values as $fields) {
			$group = $this->get_group_by_name($fields['type']);
			unset($fields['type']);

			$data = array(
				'name' => $group->get_name(),
				'label' => $group->get_label(),
				'fields' => array(),
			);

			foreach ($fields as $index => $field) {
				$data['fields'][] = $field->to_json(false);
			}

			$values_data[] = $data;
		}

		$complex_data = array_merge($complex_data, array(
			'layout' => $this->layout,
			'labels' => $this->labels,
			'min' => $this->get_min(),
			'max' => $this->get_max(),
			'multiple_groups' => count($groups_data) > 1,
			'groups' => $groups_data,
			'value' => $values_data,
		));

		return $complex_data;
	}

	function template() {
		?>
		<table class="carbon-subcontainer layout-{{ layout }} {{ multiple_groups ? 'multiple-groups' : '' }}">
	
			<tr class="carbon-row carbon-empty-row">
				<td colspan="2">
					{{{ crbl10n.complex_no_rows.replace('%s', labels.plural_name) }}}
				</td>
			</tr>

			<tr class="carbon-row carbon-holder">
				<td>
					<table class="carbon-groups-holder"><tbody></tbody></table>
				</td>
			</tr>

			<tr class="carbon-actions">
				<td colspan="{{ layout === 'table' ? 2 : 3 }}">
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
				</td>
			</tr>
		</table>
		<?php
	}

	function template_group() {
		?>
		<tr id="carbon-{{{ complex_name }}}-complex-container" class="carbon-row carbon-group-row" data-group-id="{{ id }}">
			<td class="carbon-drag-handle">
				<span class="group-number">{{{ order + 1 }}}</span><span class="group-name">{{{ label }}}</span>
				<div class="carbon-complex-action">
					<a class="carbon-btn-collapse" href="#" title="<?php esc_attr_e('Collapse/Expand', 'crb'); ?>"><?php _e('Collapse/Expand', 'crb'); ?></a>
					<a class="carbon-btn-duplicate" href="#" title="<?php esc_attr_e('Clone', 'crb'); ?>"><?php _e('Clone', 'crb'); ?></a>
					<a class="carbon-btn-remove" href="#" title="<?php esc_attr_e('Remove', 'crb'); ?>"><?php _e('Remove', 'crb'); ?></a>
				</div>
			</td>
			<td class="carbon-complex-entry-content">
				<input type="hidden" name="{{{ complex_name + '[' + index + ']' }}}[group]" value="{{ name }}" />

				<table class="fixed layout layout-{{{ layout }}}">
					<# _.each(fields, function(field) { #>
						<tr class="carbon-row carbon-subrow subrow-{{{ field.type }}} {{{ field.classes }}}">
							<# if (!field.wide) { #>
								<th scope="row">
									<# if (field.label || field.required) { #>
										<label for="{{{ complex_id + '-' + field.id + '-' + index }}}">
											{{ field.label }}

											<# if (field.required) { #>
												 <span class="carbon-required">*</span>
											<# } #>
										</label>
									<# } #>
									
									<# if (field.help_text) { #>
										<em class="help-text">
											{{{ field.help_text }}}
										</em>
									<# } #>
								</th>
							<# } #>

							<td {{{ field.wide ? 'colspan="2"' : '' }}}>
								<div class="field-holder {{{ complex_id + '-' + field.id + '-' + index }}}"></div>
							</td>
						</tr>
					<# }) #>
				</table>
			</td>
		</tr>
		<?php
	}

	function set_layout($layout) {
		if ( !in_array($layout, array(self::LAYOUT_TABLE, self::LAYOUT_LIST)) ) {
			throw new Carbon_Exception('Incorrect layout specifier. Available values are "<code>' . self::LAYOUT_TABLE . '</code>" and "<code>' . self::LAYOUT_LIST . '</code>"');
		}

		$this->layout = $layout;

		return $this;
	}

	function set_min($min) {
		$this->values_min = intval($min);
		return $this;
	}

	function get_min() {
		return $this->values_min;
	}

	function set_max($max) {
		$this->values_max = intval($max);
		return $this;
	}

	function get_max() {
		return $this->values_max;
	}

	function get_group_names() {
		return array_keys($this->groups);
	}

	function get_group_by_name($group_name) {
		$group_object = null;

		foreach ($this->groups as $group) {
			if ($group->get_name() == $group_name) {
				$group_object = $group;
			}
		}

		return $group_object;
	}

	function set_required($required) {
		$this->required = false;
		return $this;
	}
}


class Carbon_Field_Group {
	protected $name;
	protected $label;
	protected $fields = array();

	/**
	 * List of registered unique field names
	 *
	 * @see verify_unique_field_name()
	 * @var array
	 */
	protected $registered_field_names = array();

	function add_fields($fields) {
		foreach ($fields as $field) {
			if ( !is_a($field, 'Carbon_Field') ) {
				throw new Carbon_Exception('Object must be of type Carbon_Field');
			}

			// verify name validity
			if ( preg_match('~_\d+~', $field->get_name()) ) {
				throw new Carbon_Exception ('Subfield names cannot contain underscore followed by a digit(s). Replace "' . ltrim($field->get_name(), '_') . '" with "' . ltrim(preg_replace('~_+(\d+)~', '$1', $field->get_name()), '_') . '"');
			}

			$this->verify_unique_field_name($field->get_name());
		}

		$this->fields = array_merge($this->fields, $fields);
	}

	function get_fields() {
		return $this->fields;
	}

	function get_field_names() {
		$names = array();

		foreach ($this->fields as $field) {
			$names[] = $field->get_name();
		}

		return $names;
	}

	function to_json($load) {
		$fields_data = array();

		foreach ($this->get_fields() as $field) {
			// The field default value should be set manually if the field is not loaded
			if (!$load) {
				if ($field->get_value() === null) {
					$field->set_value( $field->get_default_value() );
				}
			}

			$fields_data[] = $field->to_json($load);
		}

		$group_data = array(
			'name' => $this->get_name(),
			'label' => $this->get_label(),
			'fields' => $fields_data,
		);

		return $group_data;
	}

	function set_label($label) {
		// Try to guess field label from it's name
		if (is_null($label)) {
			// remove the leading underscore(if it's there)
			$label = preg_replace('~^_~', '', $this->name);

			// remove the leading "crb_"(if it's there)
			$label = preg_replace('~^crb_~', '', $label);

			// split the name into words and make them capitalized
			$label = ucwords(str_replace('_', ' ', $label));
		}

		$this->label = $label;
	}

	function get_label() {
		return $this->label;
	}

	function set_name($name) {
		$name = preg_replace('~\s+~', '_', strtolower($name));
		if (substr($name, 0, 1) != '_') {
			// add underscore to custom field name -- this will remove it from
			// custom fields list in administration
			$name = '_' . $name;
		}

		$this->name = $name;
	}

	function get_name() {
		return $this->name;
	}

	function set_datastore(Carbon_DataStore $store) {
		foreach ($this->fields as $field) {
			if ( !$field->get_datastore() ) {
				$field->set_datastore($store);
			}
		}
	}

	function set_prefix($prefix) {
		foreach ($this->fields as $field) {
			$field->set_prefix($prefix);
		}
	}

	/**
	 * Perform checks whether there is a field registered with the name $name.
	 * If not, the field name is recorded.
	 *
	 * @param string $name
	 * @return void
	 **/
	function verify_unique_field_name($name) {
		if ( in_array($name, $this->registered_field_names) ) {
			throw new Carbon_Exception ('Field name "' . $name . '" already registered');
		}

		$this->registered_field_names[] = $name;
	}
}

