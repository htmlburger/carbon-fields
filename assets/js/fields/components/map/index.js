/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic, withProps } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import GoogleMap from 'fields/components/map/google-map';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { geocodeAddress } from 'fields/actions';
import { TYPE_MAP } from 'fields/constants';

import PlacesAutocomplete from 'react-places-autocomplete';

import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.handleSearch
 * @param  {Function}      props.handleSearchSelect
 * @return {React.Element}
 */
const MapField = ({
	name,
	field,
	handleChange,
	handleSearch,
	handleSearchSelect
}) => {
	return <Field field={field}>
		<div className="carbon-map-search">
			<p>{carbonFieldsL10n.field.mapLocateAddress}</p>

			<PlacesAutocomplete value={field.value.address} onChange={handleSearch} onSelect={handleSearchSelect} >
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<div className="search-field carbon-association-search dashicons-before dashicons-search">
						<input name={`${name}[address]`} {...getInputProps({
							placeholder: carbonFieldsL10n.field.searchPlaceholder,
							className: 'carbon-map-search-autocomplete-search-field'
						})} />
					</div>

					<div className={"carbon-map-search-autocomplete " + (suggestions.length ? 'has-results' : '')}>
						<div className="carbon-map-search-autocomplete--results">
							{loading && <div className="carbon-map-search-autocomplete--loading">{carbonFieldsL10n.field.loading}</div>}

							{suggestions.map(suggestion => {
								const className = 'carbon-map-search-autocomplete--item ' + (suggestion.active ? 'is-active' : '');
								return (
									<div {...getSuggestionItemProps(suggestion, { className }) }>
										<span>{suggestion.description}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
			</PlacesAutocomplete>

			<input
				type="hidden"
				name={`${name}[lat]`}
				value={field.value.lat}
				disabled={!field.ui.is_visible}
				readOnly />

			<input
				type="hidden"
				name={`${name}[lng]`}
				value={field.value.lng}
				disabled={!field.ui.is_visible}
				readOnly />

			<input
				type="hidden"
				name={`${name}[zoom]`}
				value={field.value.zoom}
				disabled={!field.ui.is_visible}
				readOnly />
		</div>

		<GoogleMap
			className="carbon-map-canvas"
			lat={field.value.lat}
			lng={field.value.lng}
			address={field.value.address}
			search_detail_level={field.search_detail_level}
			zoom={field.value.zoom}
			onChange={handleChange} />
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MapField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		value: PropTypes.shape({
			value: PropTypes.string,
			lat: PropTypes.number,
			lng: PropTypes.number,
			zoom: PropTypes.number,
			address: PropTypes.string,
		}),
	}),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(undefined, {
		geocodeAddress,
	}),

	/**
	 * Attach the setup hooks.
	 */
	withSetup(),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => data => {
			if (data.lat && data.lng) {
				data.value = `${data.lat},${data.lng}`;
			}
			setFieldValue(field.id, data, 'assign');
		},

		handleSearch: ({ field, geocoeAddress, setFieldValue }) => (search) => {
			field.value.address = search;
			setFieldValue(field.id, field.value)
		},

		handleSearchSelect: ({ field, geocodeAddress }) => address => geocodeAddress(field.id, address),
	}),
);

export default setStatic('type', [
	TYPE_MAP,
])(enhance(MapField));
