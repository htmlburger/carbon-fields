<?php

namespace Carbon_Fields\Widget;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Widget datastore and container class.
 */
abstract class Widget extends \WP_Widget implements Datastore_Interface {
	public static $registered_widget_ids = array();

	protected $print_wrappers = true;
	protected $store_data;
	protected $form_options = array( 'width' => 295 );
	protected $custom_fields = array();
	protected $complex_field_names = array();

	/**
	 * Create the widget.
	 * A wrapper around the default WP widget constructor.
	 *
	 * @param  string $title       Widget name
	 * @param  string $description Widget description
	 * @param  array $fields       Array of fields
	 * @param  string $classname   String of CSS classes
	 */
	public function setup( $title, $description, $fields, $classname = '' ) {
		// require title
		if ( ! $title ) {
			Incorrect_Syntax_Exception::raise( 'Enter widget title' );
		}

		// add custom fields
		$this->add_fields( $fields );

		# Generate Widget ID
		$widget_ID = 'carbon_' . preg_replace( '~\s+~', '_', strtolower( trim( preg_replace( '/[^a-zA-Z0-9]+/u', '', remove_accents( $title ) ) ) ) );

		# Generate Classes
		if ( ! is_array( $classname ) ) {
			$classname = (array) $classname;
		}
		$classname[] = $widget_ID;
		$classname = implode( ' ', $classname );

		$widget_options = compact( 'description', 'classname', 'widget_ID' );

		$this->verify_unique_widget_id( $widget_ID );

		parent::__construct( $widget_ID, $title, $widget_options, $this->form_options );
	}

	/**
	 * Updates a particular instance of a widget.
	 *
	 * @param array $new_instance New settings for this instance as input by the user via
	 *                            WP_Widget::form().
	 * @param array $old_instance Old settings for this instance.
	 * @return array Settings to save or bool false to cancel saving.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = $old_instance;

		$this->store_data =& $instance;

		foreach ( $this->custom_fields as $field ) {
			$field->set_value_from_input( $new_instance );
			$field->save();
		}

		return $instance;
	}

	/**
	 * Outputs the settings update form.
	 *
	 * @param array $instance Current settings.
	 */
	public function form( $instance ) {
		$this->store_data = $instance;
		$custom_fields = array();

		foreach ( $this->custom_fields as $field ) {
			$tmp_field = clone $field;
			$tmp_field->load();

			$field_name = $this->get_field_name( $tmp_field->get_name() );
			$tmp_field->set_name( $field_name );

			$custom_fields[] = $tmp_field;
		}

		Container::factory( 'widget', $this->id )
			->add_fields( $custom_fields )
			->init();
	}

	/**
	 * Echoes the widget content.
	 * Sub-classes can over-ride this method to generate their widget code
	 * but it is best to override front_end().
	 *
	 * @param array $args     Display arguments including 'before_title', 'after_title',
	 *                        'before_widget', and 'after_widget'.
	 * @param array $instance The settings for the particular instance of the widget.
	 */
	public function widget( $args, $instance ) {
		// prepare $instance values for complex fields
		if ( ! empty( $this->complex_field_names ) ) {
			$instance = self::unwrap_complex_field_values( $instance, $this->complex_field_names );
		}

		// prepare $instance values for association fields
		foreach ( $instance as &$field_value ) {
			$field_value = Helper::parse_relationship_field( $field_value );
		}

		// output
		if ( $this->print_wrappers ) {
			echo $args['before_widget'];
		}

		$this->front_end( $args, $instance );

		if ( $this->print_wrappers ) {
			echo $args['after_widget'];
		}
	}

	/**
	 * The actual content of the widget.
	 * Generally should be overriden by the specific widget classes.
	 * @param array $args     Display arguments including 'before_title', 'after_title',
	 *                        'before_widget', and 'after_widget'.
	 * @param array $instance The settings for the particular instance of the widget.
	 */
	public function front_end( $args, $instance ) { }

	/**
	 * Append array of fields to the current fields set. All items of the array
	 * must be instances of Field and their names should be unique for all
	 * Carbon containers.
	 *
	 * @param array $fields
	 **/
	public function add_fields( $fields ) {
		foreach ( $fields as $field ) {
			if ( ! is_a( $field, 'Carbon_Fields\\Field\\Field' ) ) {
				Incorrect_Syntax_Exception::raise( 'Object must be of type Carbon_Fields\\Field\\Field' );
			}

			$this->verify_unique_field_name( $field->get_name() );

			$field->set_prefix( '' );

			if ( ! $field->get_datastore() ) {
				$field->set_datastore( $this, true );
			}

			if ( is_a( $field, 'Carbon_Fields\\Field\\Complex_Field' ) ) {
				$this->complex_field_names[] = $field->get_name();
			}
		}

		$this->custom_fields = array_merge( $this->custom_fields, $fields );
	}

	/**
	 * Verify widget field names are unique.
	 *
	 * @param  string $name Field name
	 */
	public function verify_unique_field_name( $name ) {
		static $registered_field_names = array();

		if ( in_array( $name, $registered_field_names ) ) {
			Incorrect_Syntax_Exception::raise( 'Field name "' . $name . '" already registered' );
		}

		$registered_field_names[] = $name;
	}

	/**
	 * Verify widget IDs are unique.
	 *
	 * @param  string $id Widget ID
	 */
	public function verify_unique_widget_id( $id ) {
		if ( in_array( $id, self::$registered_widget_ids ) ) {
			Incorrect_Syntax_Exception::raise( 'Widget with ID "' . $id . '" already registered. Please change the widget title' );
		}

		self::$registered_widget_ids[] = $id;
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		if ( isset( $this->store_data[ $field->get_name() ] ) ) {
			$field->set_value( $this->store_data[ $field->get_name() ] );
		} else {
			$field->set_value( $field->get_default_value() );
		}
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$this->store_data[ $field->get_name() ] = $field->get_value();
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		if ( isset( $this->store_data[ $field->get_name() ] ) ) {
			unset( $this->store_data[ $field->get_name() ] );
		}
	}

	/**
	 * Load complex field value(s) from the database.
	 *
	 * @param mixed $field The field to load values for.
	 */
	public function load_values( $field ) {
		$field_name = $field->get_name();
		$result = array();

		foreach ( $this->store_data as $key => $value ) {
			if ( strpos( $key, $field_name ) === 0 ) {
				$result[] = array(
					'field_key' => $key,
					'field_value' => $value,
				);
			}
		}

		return $result;
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( $field ) {
		$field_name = $field->get_name();

		foreach ( $this->store_data as $key => $value ) {
			if ( strpos( $key, $field_name ) === 0 ) {
				unset( $this->store_data[ $key ] );
			}
		}
	}

	/**
	 * Expand complex fields from raw data.
	 */
	public static function unwrap_complex_field_values( $instance, $complex_field_names ) {
		foreach ( $complex_field_names as $name ) {
			foreach ( $instance as $key => $value ) {
				if ( ! preg_match( '~^' . preg_quote( $name, '~' ) . '(?P<group>\w*)-_?(?P<key>.*?)_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~', $key, $field_name ) ) {
					continue;
				}

				$value = maybe_unserialize( $value );

				$instance[ $name ][ $field_name['index'] ]['_type'] = $field_name['group'];
				if ( ! empty( $field_name['trailing'] ) ) {
					if ( ! preg_match( '~^' . preg_quote( $field_name['key'], '~' ) . '(?P<group>\w*)-_?(?P<key>.*)_(?P<index>\d+)_?(?P<sub>\w+)?$~', $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'], $subfield_name ) ) {
						continue;
					}

					$instance[ $name ][ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];
					if ( ! empty( $subfield_name['sub'] ) ) {
						$instance[ $name ][ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ][ $subfield_name['sub'] ] = $value;
					} else {
						$instance[ $name ][ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ] = $value;
					}
				} else if ( ! empty( $field_name['sub'] ) ) {
					$instance[ $name ][ $field_name['index'] ][ $field_name['key'] ][ $field_name['sub'] ] = $value;
				} else {
					$instance[ $name ][ $field_name['index'] ][ $field_name['key'] ] = $value;
				}

				unset( $instance[ $key ] );
			}
		}

		return $instance;
	}
}
