<?php

namespace Carbon_Fields\Field;

use Carbon_Fields\Value_Set\Value_Set;

/**
 * Google Maps with Address field class.
 * Allows to manually select a pin, or to position a pin based on a specified address.
 * Coords (lat, lng), address and zoom are saved in the database.
 */
class Map_Field extends Field {
	/**
	 * Whether to lazy load this field.
	 *
	 * @var bool
	 */
	protected $lazyload = true;

	/**
	 * Default latitude.
	 *
	 * @var float
	 */
	protected $default_lat = 40.346544;

	/**
	 * Default longitude.
	 *
	 * @var float
	 */
	protected $default_lng = -101.645507;

	/**
	 * Default zoom.
	 *
	 * @var int
	 */
	protected $default_zoom = 10;

	/**
	 * Create a field from a certain type with the specified label.
	 * @param string $name  Field name
	 * @param string $label Field label
	 */
	protected function __construct( $name, $label ) {
		$this->value = new Value_Set( Value_Set::TYPE_MULTIPLE_KEYS, array( 'lat'=>'', 'lng'=>'', 'zoom'=>'', 'address'=>'' ) );
		parent::__construct( $name, $label );
	}

	/**
	 * Enqueue scripts in the administration
	 */
	public static function admin_enqueue_scripts() {
		$api_key = apply_filters( 'carbon_map_api_key', false );
		$url = apply_filters( 'carbon_map_url', '//maps.googleapis.com/maps/api/js?' . ( $api_key ? 'key=' . $api_key : '' ), $api_key );

		wp_enqueue_script( 'carbon-google-maps', $url, array(), null );
	}

	/**
	 * Convert lat and lng to a comma-separated list
	 */
	protected function lat_lng_to_latlng( $lat, $lng ) {
		return ( ! empty( $lat ) && ! empty( $lng ) ) ? $lat . ',' . $lng : '';
	}

	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param array $input (optional) Array of field names and values. Defaults to $_POST
	 **/
	public function set_value_from_input( $input = null ) {
		if ( is_null( $input ) ) {
			$input = $_POST;
		}

		if ( ! isset( $input[ $this->get_name() ] ) ) {
			$this->set_value( null );
			return;
		}

		$value_set = array(
			'lat'=>'',
			'lng'=>'',
			'zoom'=>'',
			'address'=>'',
		);

		if ( isset( $input[ $this->get_name() ][ 'lat' ] ) ) {
			$value_set['lat'] = (float) $input[ $this->get_name() ]['lat'];
		}

		if ( isset( $input[ $this->get_name() ][ 'lng' ] ) ) {
			$value_set['lng'] = (float) $input[ $this->get_name() ]['lng'];
		}

		if ( isset( $input[ $this->get_name() ][ 'zoom' ] ) ) {
			$value_set['zoom'] = (int) $input[ $this->get_name() ]['zoom'];
		}

		if ( isset( $input[ $this->get_name() ][ 'address' ] ) ) {
			$value_set['address'] = $input[ $this->get_name() ]['address'];
		}

		$value_set['value'] = $this->lat_lng_to_latlng( $value_set['lat'], $value_set['lng'] );

		$this->set_value( $value_set );
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		$value_set = $this->get_value();
		if ( $value_set === null ) {
			$value_set = array(
				'lat'=>floatval($this->default_lat),
				'lng'=>floatval($this->default_lng),
				'zoom'=>intval($this->default_zoom),
				'address'=>'',
			);
			$value_set['value'] = $this->lat_lng_to_latlng( $value_set['lat'], $value_set['lng'] );
		}
		$field_data = array_merge( $field_data, array(
			'value'=>$value_set['value'],
			'lat'=>floatval($value_set['lat']),
			'lng'=>floatval($value_set['lng']),
			'zoom'=>intval($value_set['zoom']),
			'address'=>$value_set['address'],
		) );

		return $field_data;
	}

	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<div class="carbon-map-search">
			<p><?php _e( 'Locate Address on the map', \Carbon_Fields\TEXT_DOMAIN ); ?>: </p>

			<div class="carbon-map-search-row">
				<input type="text" name="{{{ name }}}[address]" value="{{{ address }}}" class="regular-text address carbon-map-search-address" placeholder="Search..." />
				<span class="carbon-map-search-button dashicons-before dashicons-search">
					<?php _e( 'Find', \Carbon_Fields\TEXT_DOMAIN ); ?>
				</span>
			</div>

			<input type="hidden" name="{{{ name }}}[lat]" value="{{{ lat }}}" />
			<input type="hidden" name="{{{ name }}}[lng]" value="{{{ lng }}}" />
			<input type="hidden" name="{{{ name }}}[zoom]" value="{{{ zoom }}}" />
		</div>
		<div class="carbon-map-canvas">&nbsp;</div>
		<?php
	}

	/**
	 * Set the coords and zoom of this field.
	 * @param string $lat  Latitude
	 * @param string $lng  Longitude
	 * @param int $zoom Zoom level
	 */
	public function set_position( $lat, $lng, $zoom ) {
		$this->default_lat = floatval( $lat );
		$this->default_lng = floatval( $lng );
		$this->default_zoom = $zoom;

		return $this;
	}
}
