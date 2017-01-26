<?php

namespace Carbon_Fields\Field;

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
	 * Current latitude.
	 *
	 * @var float|string
	 */
	protected $lat = null;

	/**
	 * Current longitude.
	 *
	 * @var float|string
	 */
	protected $lng = null;

	/**
	 * Current zoom.
	 *
	 * @var int
	 */
	protected $zoom = null;

	/**
	 * Current address.
	 *
	 * @var string
	 */
	protected $address = '';

	/**
	 * What value type this field is expecting to receive in set_value()
	 *
	 * @var string self::VALUE_TYPE_* value expected
	 */
	public $expected_value_type = self::VALUE_TYPE_MULTIPLE_KEYS;

	/**
	 * Enqueue scripts in the administration
	 */
	public static function admin_enqueue_scripts() {
		$api_key = apply_filters( 'carbon_map_api_key', false );
		$url = apply_filters( 'carbon_map_url', '//maps.googleapis.com/maps/api/js?' . ( $api_key ? 'key=' . $api_key : '' ), $api_key );

		wp_enqueue_script( 'carbon-google-maps', $url, array(), null );
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

		// $value = stripslashes_deep( $input[ $this->get_name() ] );

		if ( isset( $input[ $this->get_name() ][ 'lat' ] ) ) {
			$this->lat = (float) $input[ $this->get_name() ]['lat'];
		}

		if ( isset( $input[ $this->get_name() ][ 'lng' ] ) ) {
			$this->lng = (float) $input[ $this->get_name() ]['lng'];
		}

		if ( isset( $input[ $this->get_name() ][ 'zoom' ] ) ) {
			$this->zoom = (int) $input[ $this->get_name() ]['zoom'];
		}

		if ( isset( $input[ $this->get_name() ][ 'address' ] ) ) {
			$this->address = $input[ $this->get_name() ]['address'];
		}

		$this->set_value( array(
			'lat' => $this->lat,
			'lng' => $this->lng,
			'zoom' => $this->zoom,
			'address' => $this->address,
		) );
	}

	public function get_value_set() {
		$value = $this->get_value();

		$lat = ( !empty( $value['lat'] ) ? $value['lat'] : $this->default_lat );
		$lng = ( !empty( $value['lng'] ) ? $value['lng'] : $this->default_lng );
		$zoom = ( !empty( $value['zoom'] ) ? $value['zoom'] : $this->default_zoom );
		$address = ( !empty( $value['address'] ) ? $value['address'] : '' );
		$latlng = ( $lat && $lng ) ? $lat . ',' . $lng : '';

		return array(
			array(
				'value' => $latlng,
				'lat' => floatval( $lat ),
				'lng' => floatval( $lng ),
				'zoom' => intval( $zoom ),
				'address' => $address,
			),
		);
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

		$value_set = $this->get_value_set();
		$field_data = array_merge( $field_data, $value_set[0] );

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
