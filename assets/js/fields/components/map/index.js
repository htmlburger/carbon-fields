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

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.handleSearchSubmit
 * @return {React.Element}
 */
const MapField = ({
	name,
	field,
	handleChange,
	handleSearchSubmit
}) => {
	return <Field field={field}>
		<div className="carbon-map-search">
			<p>{carbonFieldsL10n.field.mapLocateAddress}</p>

			<SearchInput
				name={`${name}[address]`}
				term={field.value.address}
				disabled={!field.ui.is_visible}
				onSubmit={handleSearchSubmit} />

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
		handleSearchSubmit: ({ field, geocodeAddress }) => address => geocodeAddress(field.id, address),
	}),
);

export default setStatic('type', [
	TYPE_MAP,
])(enhance(MapField));
