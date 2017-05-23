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
	 * Enqueue scripts in the administration
	 */
	public static function admin_enqueue_scripts() {
		$api_key = apply_filters( 'carbon_map_api_key', false );
		$url = apply_filters( 'carbon_map_url', '//maps.googleapis.com/maps/api/js?' . ( $api_key ? 'key=' . $api_key : '' ), $api_key );

		wp_enqueue_script( 'carbon-google-maps', $url, array(), null );
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

		$field_data = array_merge( $field_data, array(
			'lat' => is_float( $this->lat ) ? $this->lat : $this->default_lat,
			'lng' => is_float( $this->lng ) ? $this->lng : $this->default_lng,
			'zoom' => is_int( $this->zoom ) ? $this->zoom : $this->default_zoom,
			'address' => $this->address,
		) );

		return $field_data;
	}

	/**
	 * Underscore template of this field.
	 */
	public function template() {
		?>
		<div class="carbon-map-search">
			<p><?php _e( 'Locate Address on the map', 'carbon-fields' ); ?>: </p>

			<div class="carbon-map-search-row">
				<input type="text" name="{{{ name }}}[address]" value="{{{ address }}}" class="regular-text address carbon-map-search-address" placeholder="Search..." />
				<span class="carbon-map-search-button dashicons-before dashicons-search">
					<?php _e( 'Find', 'carbon-fields' ); ?>
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

	/**
	 * Load data from the datastore.
	 * Manually set the map field data fragments.
	 **/
	public function load() {
		$this->get_datastore()->load( $this );

		$name = $this->get_name();

		// Set the "lat"
		$this->set_name( $name . '-lat' );
		$this->get_datastore()->load( $this );
		if ( $this->get_value() ) {
			$this->lat = (float) $this->get_value();
		}

		// Set the "lng"
		$this->set_name( $name . '-lng' );
		$this->get_datastore()->load( $this );
		if ( $this->get_value() ) {
			$this->lng = (float) $this->get_value();
		}

		// Set the "address"
		$this->set_name( $name . '-address' );
		$this->get_datastore()->load( $this );
		if ( $this->get_value() ) {
			$this->address = $this->get_value();
		}

		// Set the "zoom"
		$this->set_name( $name . '-zoom' );
		$this->get_datastore()->load( $this );
		if ( $this->get_value() || $this->get_value() === '0' ) {
			$this->zoom = (int) $this->get_value();
		}

		// Set the field value
		$this->set_name( $name );
		$value = $this->lat && $this->lng ? $this->lat . ',' . $this->lng : '';
		$this->set_value( $value );
	}

	/**
	 * Save data to the datastore.
	 * Manually save the map field data fragments.
	 **/
	public function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Add the "lat" meta in the database
		$this->set_name( $name . '-lat' );
		$this->set_value( $value['lat'] );
		$this->get_datastore()->save( $this );

		// Add the "lng" meta in the database
		$this->set_name( $name . '-lng' );
		$this->set_value( $value['lng'] );
		$this->get_datastore()->save( $this );

		// Add the "zoom" meta in the database
		$this->set_name( $name . '-zoom' );
		$this->set_value( $value['zoom'] );
		$this->get_datastore()->save( $this );

		// Add the "address" meta in the database
		$this->set_name( $name . '-address' );
		$this->set_value( $value['address'] );
		$this->get_datastore()->save( $this );

		// Set the value for the field
		$this->set_name( $name );
		$field_value = ! empty( $value['lat'] ) && ! empty( $value['lng'] ) ? $value['lat'] . ',' . $value['lng'] : '';
		$this->set_value( $field_value );

		parent::save();
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

		if ( ! isset( $input[ $this->name ] ) ) {
			$this->set_value( null );
		} else {
			$value = stripslashes_deep( $input[ $this->name ] );

			if ( isset( $input[ $this->name . '_-lat' ] ) ) {
				$this->lat = (float) $input[ $this->name . '_-lat' ];
			}

			if ( isset( $input[ $this->name . '_-lng' ] ) ) {
				$this->lng = (float) $input[ $this->name . '_-lng' ];
			}

			if ( isset( $input[ $this->name . '_-zoom' ] ) ) {
				$this->zoom = (int) $input[ $this->name . '_-zoom' ];
			}

			if ( isset( $input[ $this->name . '_-address' ] ) ) {
				$this->address = $input[ $this->name . '_-address' ];
			}

			$this->set_value( $value );
		}
	}
}
