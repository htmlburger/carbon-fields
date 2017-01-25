/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { debounce } from 'lodash';

/**
 * Renders the field used to filter the available options
 * inside the association field.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.term
 * @return {React.Element}
 */
export const AssociationSearch = ({ term, handleChange }) => {
	return <div className="search-field carbon-relationship-search dashicons-before dashicons-search">
		<input
			type="text"
			className="search-field"
			placeholder="Search..."
			defaultValue={term}
			onChange={handleChange} />
	</div>;
};

/**
 * Improve the performance by wrapping the `onChange` handler in debounced function.
 *
 * @param  {Object}   props
 * @param  {Function} props.onChange
 * @return {Function}
 */
const debouncedOnChange = ({ onChange }) => debounce(v => onChange(v), 200);

/**
 * Handles the `change` event of the input.
 *
 * @param  {Object}   props
 * @param  {Function} props.onChange
 * @return {Function}
 */
const handleChange = ({ debouncedOnChange, setValue }) => ({ target: { value }}) => debouncedOnChange(value);

export default compose(
	withHandlers({ debouncedOnChange }),
	withHandlers({ handleChange })
)(AssociationSearch);
