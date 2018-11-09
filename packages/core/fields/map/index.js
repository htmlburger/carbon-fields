/**
 * External dependencies.
 */
import { withEffects, toProps } from 'refract-callbag';
import {
	debounce
} from 'lodash';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';

class MapField extends Component {
	handleAddressChange = debounce( ( address ) => {
		const {
			onGeocodeAddress
		} = this.props;

		onGeocodeAddress( {
			address
		} );
	}, 200 )

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			children,
			onChange
		} = this.props;

		return children( {
			field,
			name,
			value,
			handleChange: onChange,
			handleAddressChange: this.handleAddressChange
		} );
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const [ geocodeAddress$, geocodeAddress ] = component.useEvent( 'geocodeAddress' );

		const geocodeAddressProps$ = pipe(
			of( {
				onGeocodeAddress: geocodeAddress
			} ),
			map( toProps )
		);

		const geocodeAddressEffect$ = pipe(
			geocodeAddress$,
			map( ( payload ) => ( {
				type: 'GEOCODE_ADDRESS',
				payload: payload
			} ) )
		);

		return merge( geocodeAddressProps$, geocodeAddressEffect$ );
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function( effect ) {
		const { payload, type } = effect;
		const {
			field,
			onChange,
			value
		} = props;

		switch ( type ) {
			case 'GEOCODE_ADDRESS':
				const geocode = ( address ) => {
					return new Promise( ( resolve, reject ) => {
						const geocoder = new window.google.maps.Geocoder();

						geocoder.geocode( { address }, ( results, status ) => {
							if ( status === window.google.maps.GeocoderStatus.OK ) {
								const { location } = results[ 0 ].geometry;

								resolve( {
									lat: location.lat(),
									lng: location.lng()
								} );
							} else if ( status === 'ZERO_RESULTS' ) {
								reject( carbonFieldsL10n.field.geocodeZeroResults );
							} else {
								reject( `${ carbonFieldsL10n.field.geocodeNotSuccessful } ${ status }` );
							}
						} );
					} );
				};

				geocode( payload.address )
					.then( ( { lat, lng } ) => {
						const newValue = {
							...value,
							...{
								address: payload.address,
								lat,
								lng,
								value: `${ lat },${ lng }`
							}
						};

						onChange( field.base_name, newValue );
					} )
					.catch( ( alert ) => {
						// eslint-disable-next-line
						console.log( 'Error alert' );

						// eslint-disable-next-line
						console.log( alert );
					} );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );

export default compose(
	// applyWithState,
	applyWithEffects
)( MapField );
