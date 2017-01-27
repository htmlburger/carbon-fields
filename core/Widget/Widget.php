<?php

namespace Carbon_Fields\Widget;

use Carbon_Fields\Helper\Helper;
use Carbon_Fields\Field\Field;
use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Datastore\Datastore_Interface;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Widget datastore and container class.
 */
abstract class Widget extends \WP_Widget implements Datastore_Interface {
	public static $registered_widget_ids = array();

	/**
	 * Determines if widget wrapper html should be printed
	 *
	 * @see widget()
	 * @var bool
	 */
	protected $print_wrappers = true;

	protected $store_data;

	/**
	 * Control options to pass to WordPress Widget constructor
	 *
	 * @see setup()
	 * @var array
	 */
	protected $widget_control_options = array( 'width' => 295 );

	/**
	 * Array of Carbon Fields for the widget
	 *
	 * @var array
	 */
	protected $custom_fields = array();

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
		if ( empty( $title ) ) {
			Incorrect_Syntax_Exception::raise( 'Empty widget title is not supported' );
		}

		$this->add_fields( $fields );

		# Generate Widget ID
		$widget_id = 'carbon_widget_' . preg_replace( '~\s+~', '_', strtolower( trim( preg_replace( '/[^a-zA-Z0-9]+/u', '', remove_accents( $title ) ) ) ) );

		$this->verify_unique_widget_id( $widget_id );

		# Generate Classes
		if ( ! is_array( $classname ) ) {
			$classname = (array) $classname;
		}
		$classname[] = $widget_id;
		$classname = array_filter( $classname );
		$classname = implode( ' ', $classname );

		$widget_options = array(
			'description'=>$description,
			'classname'=>$classname,
			'widget_ID'=>$widget_id,
		);

		parent::__construct( $widget_id, $title, $widget_options, $this->widget_control_options );
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
		exit('asdasdasda');

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

			$field->set_datastore( $this, true );
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
		if ( in_array( $id, static::$registered_widget_ids ) ) {
			Incorrect_Syntax_Exception::raise( 'Widget with ID "' . $id . '" already registered. Please change the widget title' );
		}

		static::$registered_widget_ids[] = $id;
	}

	/**
	 * Return a raw database query results array for a field
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	protected function get_storage_array_for_field( Field $field ) {
		global $wpdb;

		$storage_key = Datastore::get_storage_key_prefix_for_field( $field );
		$storage_key_length = strlen( $storage_key );

		$storage_array = array();
		foreach ( $this->store_data as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				$storage_array[] = (object) array( 'key'=>$key, 'value'=>$value);
			}
		}

		return $storage_array;
	}

	/**
	 * Save a single key-value pair to the database
	 *
	 * @param string $key
	 * @param string $value
	 */
	protected function save_key_value_pair( $key, $value ) {
		$this->store_data[ $key ] = $value;
	}

	/**
	 * Load the field value(s) from the database.
	 *
	 * @param Field $field The field to retrieve value for.
	 */
	public function load( Field $field ) {
		$storage_array = $this->get_storage_array_for_field( $field );
		$raw_value_set = Datastore::storage_array_to_raw_value_set( $storage_array );
		$field->set_value( $raw_value_set );

		if ( $field->get_name() === 'crb_text_level_1' ) {
			echo '<pre>';
			var_dump( $field->get_name() );
			var_dump( $raw_value_set );
			var_dump( $storage_array );
			print_r( $this->store_data );
			echo '</pre>';
		}
	}

	/**
	 * Save the field value(s) into the database.
	 *
	 * @param Field $field The field to save.
	 */
	public function save( Field $field ) {
		$value_set = $field->value()->get_set();
		if ( $value_set === null ) {
			return;
		}
		var_dump($field->get_name());
		if ( is_a($field, '\\Carbon_Fields\\Field\\Complex_Field') ) {
			echo '<pre>';
			var_dump( $field->get_name() );
			var_dump( $value_set );
			var_dump($field);

			$groups = $field->get_groups();
			foreach ( $groups as $g ) {
				print_r( $g->get_fields() );
			}
			echo '</pre>';
		}

		if ( empty( $value_set ) && $field->value()->keepalive() ) {
			$storage_key = Datastore::get_storage_key_for_field( $field, 0, Datastore::KEEPALIVE_KEY );
			$this->save_key_value_pair( $storage_key, '' );
		}
		foreach ( $value_set as $value_group_index => $values ) {
			foreach ( $values as $value_key => $value ) {
				$storage_key = Datastore::get_storage_key_for_field( $field, $value_group_index, $value_key );
				$this->save_key_value_pair( $storage_key, $value );
			}
		}
	}

	/**
	 * Delete the field value(s) from the database.
	 *
	 * @param Field $field The field to delete.
	 */
	public function delete( Field $field ) {
		$storage_key = Datastore::get_storage_key_prefix_for_field( $field );
		$storage_key_length = strlen( $storage_key );

		foreach ( $this->store_data as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				// unset( $this->store_data[ $key ] );
			}
		}
	}

	/**
	 * Delete complex field value(s) from the database.
	 *
	 * @param mixed $field The field to delete values for.
	 */
	public function delete_values( Field $field ) {
		$storage_key = Datastore::get_storage_key_root( $field );
		$storage_key_length = strlen( $storage_key );

		foreach ( $this->store_data as $key => $value ) {
			if ( substr( $key, 0, $storage_key_length ) === $storage_key ) {
				// unset( $this->store_data[ $key ] );
			}
		}
	}
}
