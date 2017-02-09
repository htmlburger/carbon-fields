/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import GoogleMap from 'fields/components/map/google-map';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { geocodeAddress } from 'fields/actions';

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @param  {Function} props.handleSearchSubmit
 * @return {React.Element}
 *
 * TODO: Fix the translation.
 */
const MapField = ({ name, field, handleChange, handleSearchSubmit }) => {
	return <Field field={field}>
		<div className="carbon-map-search">
			<p>Locate address on the map:</p>

			<SearchInput
				name={`${name}[address]`}
				term={field.address}
				disabled={field.ui.is_visible}
				onSubmit={handleSearchSubmit} />

			<input
				type="hidden"
				name={`${name}[lat]`}
				value={field.lat}
				disabled={!field.ui.is_visible}
				readOnly />

			<input
				type="hidden"
				name={`${name}[lng]`}
				value={field.lng}
				disabled={!field.ui.is_visible}
				readOnly />

			<input
				type="hidden"
				name={`${name}[zoom]`}
				value={field.zoom}
				disabled={!field.ui.is_visible}
				readOnly />
		</div>

		<GoogleMap
			className="carbon-map-canvas"
			lat={field.lat}
			lng={field.lng}
			zoom={field.zoom}
			onChange={handleChange} />
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MapField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
		zoom: PropTypes.number.isRequired,
		address: PropTypes.string.isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	geocodeAddress,
};

/**
 * Sync the values with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => data => {
	if (data.lat && data.lng) {
		data.value = `${data.lat},${data.lng}`;
	}

	updateField(field.id, data);
};

/**
 * Handle the submission of the search input.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.geocodeAddress
 * @return {Function}
 */
const handleSearchSubmit = ({ field, geocodeAddress }) => address => geocodeAddress(field.id, address);

export default compose(
	withStore(undefined, mapDispatchToProps),
	withSetup(),
	withHandlers({ handleChange, handleSearchSubmit })
)(MapField);
