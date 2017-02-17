/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.node = ReactDOM.findDOMNode(this);

		this.initMap();
		this.setupMapEvents();
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (this.marker) {
			const { lat, lng, zoom } = nextProps;
			const markerLat = this.marker.getPosition().lat();
			const markerLng = this.marker.getPosition().lng();
			const mapZoom = this.map.getZoom();

			if (lat !== markerLat|| lng !== markerLng) {
				const location = new google.maps.LatLng(lat, lng);

				this.marker.setPosition(location);
				this.map.setCenter(location);
			}

			if (zoom !== mapZoom) {
				this.map.setZoom(zoom);
			}
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {Boolean}
	 */
	shouldComponentUpdate() {
		// The component is a wrapper around Google Maps instance
		// and we don't need to re-render it, because the map is updated
		// manually.
		return false;
	}

	/**
	 * Render the placeholder for the map.
	 *
	 * @return {React.Element}
	 */
	render() {
		return <div className={this.props.className} />;
	}

	/**
	 * Initialize the map into placeholder element.
	 *
	 * @return {void}
	 */
	initMap() {
		const { lat, lng, zoom } = this.props;
		const position = new google.maps.LatLng(lat, lng);

		this.map = new google.maps.Map(this.node, {
			zoom,
			center: position,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
		});

		this.marker = new google.maps.Marker({
			position,
			map: this.map,
			draggable: true
		});
	}

	/**
	 * Add the listeners for the map's events.
	 *
	 * @return {void}
	 */
	setupMapEvents() {
		// Enable the zoom with scrollwheel when the user interacts with the map.
		const enableScrollZoom = () => {
			this.map.setOptions({
				scrollwheel: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE
				},
			});
		};

		google.maps.event.addListenerOnce(this.map, 'click', enableScrollZoom);
		google.maps.event.addListenerOnce(this.map, 'dragend', enableScrollZoom);

		// Update the zoom when the map is changed.
		const handleZoomChange = () => {
			this.props.onChange({
				zoom: this.map.getZoom(),
			});
		}

		google.maps.event.addListener(this.map, 'zoom_changed', handleZoomChange);

		// Update the position when the marker is moved.
		const handleDragEnd = () => {
			this.props.onChange({
				lat: this.marker.getPosition().lat(),
				lng: this.marker.getPosition().lng(),
			});
		};

		google.maps.event.addListener(this.marker, 'dragend', handleDragEnd);
	}
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
GoogleMap.propTypes = {
	className: PropTypes.string,
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	zoom: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default GoogleMap;
