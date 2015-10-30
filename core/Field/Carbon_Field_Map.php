<?php 

class Carbon_Field_Map extends Carbon_Field {
	protected $lazyload = true;
	protected $default_lat = 40.346544;
	protected $default_lng = -101.645507;
	protected $default_zoom = 10;
	protected $lat = null;
	protected $lng = null;
	protected $zoom = null;
	protected $address = '';

	function admin_enqueue_scripts() {
		wp_enqueue_script('carbon-google-maps', '//maps.googleapis.com/maps/api/js?sensor=false');
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'lat' => is_float($this->lat) ? $this->lat : $this->default_lat,
			'lng' => is_float($this->lng) ? $this->lng : $this->default_lng,
			'zoom' => is_int($this->zoom) ? $this->zoom : $this->default_zoom,
			'address' => $this->address,
		));

		return $field_data;
	}

	function template() {
		?>
		<div class="carbon-map-search">
			<p><?php _e('Locate Address on the map', 'crb'); ?>: </p>
			
			<div class="input-with-button">
				<input type="text" name="{{{ name }}}[address]" value="{{{ address }}}" class="regular-text address" />
				<span class="address-search-btn button icon-button">
					<?php _e('Find', 'crb'); ?>
				</span>
			</div>
				
			<input type="hidden" name="{{{ name }}}[lat]" value="{{{ lat }}}" />
			<input type="hidden" name="{{{ name }}}[lng]" value="{{{ lng }}}" />
			<input type="hidden" name="{{{ name }}}[zoom]" value="{{{ zoom }}}" />
		</div>
		<div class="carbon-map-canvas">&nbsp;</div>
		<?php
	}

	function set_position($lat, $lng, $zoom) {
		$this->default_lat = $lat;
		$this->default_lng = $lng;
		$this->default_zoom = $zoom;

		return $this;
	}

	function load() {
		$this->store->load($this);

		$name = $this->get_name();

		// Set the "lat"
		$this->set_name($name . '-lat');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->lat = (float) $this->get_value();
		}

		// Set the "lng"
		$this->set_name($name . '-lng');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->lng = (float) $this->get_value();
		}

		// Set the "address"
		$this->set_name($name . '-address');
		$this->store->load($this);
		if ($this->get_value()) {
			$this->address = $this->get_value();
		}

		// Set the "zoom"
		$this->set_name($name . '-zoom');
		$this->store->load($this);
		if ($this->get_value() || $this->get_value() === '0') {
			$this->zoom = (int) $this->get_value();
		}

		// Set the field value
		$this->set_name($name);
		$value = $this->lat && $this->lng ? $this->lat . ',' . $this->lng : '';
		$this->set_value($value);
	}

	function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Add the "lat" meta in the database
		$this->set_name($name . '-lat');
		$this->set_value($value['lat']);
		$this->store->save($this);

		// Add the "lng" meta in the database
		$this->set_name($name . '-lng');
		$this->set_value($value['lng']);
		$this->store->save($this);

		// Add the "zoom" meta in the database
		$this->set_name($name . '-zoom');
		$this->set_value($value['zoom']);
		$this->store->save($this);

		// Add the "address" meta in the database
		$this->set_name($name . '-address');
		$this->set_value($value['address']);
		$this->store->save($this);

		// Set the value for the field
		$this->set_name($name);
		$field_value = !empty($value['lat']) && !empty($value['lng']) ? $value['lat'] . ',' . $value['lng'] : '';
		$this->set_value($field_value);

		parent::save();
	}

	function set_value_from_input($input = null) {
		if ( is_null($input) ) {
			$input = $_POST;
		}

		if ( !isset($input[$this->name]) ) {
			$this->set_value(null);
		} else {
			$value = stripslashes_deep($input[$this->name]);

			if (isset($input[$this->name . '_-lat'])) {
				$this->lat = (float) $input[$this->name . '_-lat'];
			}

			if (isset($input[$this->name . '_-lng'])) {
				$this->lng = (float) $input[$this->name . '_-lng'];
			}

			if (isset($input[$this->name . '_-zoom'])) {
				$this->zoom = (int) $input[$this->name . '_-zoom'];
			}

			if (isset($input[$this->name . '_-address'])) {
				$this->address = $input[$this->name . '_-address'];
			}

			$this->set_value( $value );
		}
	}
}
