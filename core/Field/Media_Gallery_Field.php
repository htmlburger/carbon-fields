<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Value_Set\Value_Set;
use Carbon_Fields\Helper\Helper;

/**
 * Set field class.
 *
 * Allows selecting multiple attachments and stores
 * their IDs in the Database.
 */
class Media_Gallery_Field extends Field {

	/**
	 * File type filter. Leave a blank string for any file type.
	 * Available types: audio, video, image and all WordPress-recognized mime types
	 *
	 * @var string|array
	 */
	protected $file_type = '';

	/**
	 * What value to store
	 *
	 * @var string
	 */
	protected $value_type = 'id';

	/**
	 * Default field value
	 *
	 * @var array
	 */
	protected $default_value = array();

	/**
	 * Allow items to be added multiple times
	 *
	 * @var boolean
	 */
	protected $duplicates_allowed = true;

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
	 * Change the type of the field
	 *
	 * @param string $type
	 */
	public function set_type( $type ) {
		$this->file_type = $type;
		return $this;
	}

	/**
	 * Get whether entry duplicates are allowed.
	 *
	 * @return boolean
	 */
	public function get_duplicates_allowed() {
		return $this->duplicates_allowed;
	}

	/**
	 * Set whether entry duplicates are allowed.
	 *
	 * @param  boolean $allowed
	 * @return Field   $this
	 */
	public function set_duplicates_allowed( $allowed ) {
		$this->duplicates_allowed = $allowed;
		return $this;
	}

	/**
	 * Load the field value from an input array based on its name
	 *
	 * @param  array $input Array of field names and values.
	 * @return Field $this
	 */
	public function set_value_from_input( $input ) {
		if ( ! isset( $input[ $this->name ] ) ) {
			$this->set_value( array() );
		} else {
			$value = stripslashes_deep( $input[ $this->name ] );
			if ( is_array( $value ) ) {
				$value = array_values( $value );
			}
			$this->set_value( $value );
		}
		return $this;
	}

	/**
	 * Converts the field values into a usable associative array.
	 *
	 * @access protected
	 * @return array
	 */
	protected function value_to_json() {
		$value_set  = $this->get_value();
		$value_meta = array();

		foreach ( $value_set as $attachment_id ) {
			$attachment_id     = absint( $attachment_id );
			$attachment_metata = Helper::get_attachment_metadata( $attachment_id, $this->value_type );

			$value_meta[ $attachment_id ] = $attachment_metata;
		}

		return array(
			'value'      => array_map( 'absint', $value_set ),
			'value_meta' => $value_meta,
		);
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$field_data = array_merge( $field_data, $this->value_to_json(), array(
			'value_type'          => $this->value_type,
			'type_filter'         => $this->file_type,
			'duplicates_allowed'  => $this->get_duplicates_allowed(),
		) );

		return $field_data;
	}
}
