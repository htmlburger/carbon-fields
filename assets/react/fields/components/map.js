/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose'; 

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import GoogleMap from 'fields/components/google-map';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 * @return {React.Element}
 *
 * TODO: Fix the translation.
 */
const MapField = ({ name, field, handleChange }) => {
	return <Field field={field}>
		<div className="carbon-map-search">
			<p>Locate address on the map:</p>

			<input type="hidden" name={`${name}[lat]`} value={field.lat} readOnly />
			<input type="hidden" name={`${name}[lng]`} value={field.lng} readOnly />
			<input type="hidden" name={`${name}[zoom]`} value={field.zoom} readOnly />
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
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * Sync the values with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => data => updateField(field.id, data);

export default compose(
	withStore(),
	withSetup(),
	withHandlers({ handleChange })
)(MapField);

