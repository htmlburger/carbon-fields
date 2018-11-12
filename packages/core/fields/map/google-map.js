/**
 * External dependencies.
 */
import observeResize from 'observe-resize';
import { Component } from '@wordpress/element';

class GoogleMap extends Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		// eslint-disable-next-line
		this.node = ReactDOM.findDOMNode( this );

		const interval = setInterval( () => {
			if ( typeof window.google !== 'undefined' ) {
				clearInterval( interval );

				this.initMap();
				this.setupMapEvents();
				this.redrawMap( this.props );

				this.cancelResizeObserver = observeResize( this.node, () => {
					this.redrawMap( this.props );
				} );
			}
		}, 50 );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentDidUpdate( nextProps ) {
		const { lat, lng, zoom } = nextProps;

		if ( this.marker ) {
			const markerLat = this.marker.getPosition().lat();
			const markerLng = this.marker.getPosition().lng();
			const mapZoom = this.map.getZoom();

			if ( lat !== markerLat || lng !== markerLng ) {
				const location = new window.google.maps.LatLng( lat, lng );

				this.marker.setPosition( location );
				this.map.setCenter( location );
			}

			if ( zoom !== mapZoom ) {
				this.map.setZoom( zoom );
			}
		}

		this.redrawMap( nextProps );
	}

	/**
	 * Render the placeholder for the map.
	 *
	 * @return {React.Element}
	 */
	render() {
		return <div className={ this.props.className } />;
	}

	/**
	 * Initialize the map into placeholder element.
	 *
	 * @return {void}
	 */
	initMap() {
		const { lat, lng, zoom } = this.props;
		const position = new window.google.maps.LatLng( lat, lng );

		this.map = new window.google.maps.Map( this.node, {
			zoom,
			center: position,
			mapTypeId: window.google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		} );

		this.marker = new window.google.maps.Marker( {
			position,
			map: this.map,
			draggable: true
		} );
	}

	/**
	 * Add the listeners for the map's events.
	 *
	 * @return {void}
	 */
	setupMapEvents() {
		// Enable the zoom with scrollwheel when the user interacts with the map.
		const enableScrollZoom = () => {
			this.map.setOptions( {
				scrollwheel: true,
				zoomControlOptions: {
					style: window.google.maps.ZoomControlStyle.LARGE
				}
			} );
		};

		window.google.maps.event.addListenerOnce( this.map, 'click', enableScrollZoom );
		window.google.maps.event.addListenerOnce( this.map, 'dragend', enableScrollZoom );

		// Update the zoom when the map is changed.
		const handleZoomChange = () => {
			this.props.onChange( {
				zoom: this.map.getZoom()
			} );
		};

		window.google.maps.event.addListener( this.map, 'zoom_changed', handleZoomChange );

		// Update the position when the marker is moved.
		const handleDragEnd = () => {
			this.props.onChange( {
				lat: this.marker.getPosition().lat(),
				lng: this.marker.getPosition().lng()
			} );
		};

		window.google.maps.event.addListener( this.marker, 'dragend', handleDragEnd );
	}

	/**
	 * Re-center when the map becomes visible.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	redrawMap( props ) {
		const { lat, lng } = props;
		const location = new window.google.maps.LatLng( lat, lng );

		setTimeout( () => {
			window.google.maps.event.trigger( this.map, 'resize' );
			this.map.setCenter( location );
		}, 10 );
	}
}

export default GoogleMap;
