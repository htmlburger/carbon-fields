/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { debounce } from 'lodash';

/**
 * The internal dependencies.
 */
import { KEY_ENTER } from 'lib/constants';

/**
 * Render the field used to filter the available options
 * inside the association field.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.term
 * @param  {Function} 	   props.handleChange
 * @param  {Function} 	   props.handleEnterKey
 * @return {React.Element}
 */
export const AssociationSearch = ({ term, handleChange, handleEnterKey }) => {
	return <div className="search-field carbon-relationship-search dashicons-before dashicons-search">
		<input
			type="text"
			className="search-field"
			placeholder="Search..."
			defaultValue={term}
			onChange={handleChange}
			onKeyDown={handleEnterKey} />
	</div>;
};

/**
 * Improve the performance by wrapping the `onChange` handler in a debounced function.
 *
 * @param  {Object}   props
 * @param  {Function} props.onChange
 * @return {Function}
 */
const debouncedOnChange = ({ onChange }) => debounce(v => onChange(v), 200);

/**
 * Handle the `change` event of the input.
 *
 * @param  {Object}   props
 * @param  {Function} props.onChange
 * @return {Function}
 */
const handleChange = ({ debouncedOnChange, setValue }) => ({ target: { value }}) => debouncedOnChange(value);

/**
 * Prevent the submission of the form.
 *
 * @return {Function}
 */
const handleEnterKey = () => e => e.keyCode === KEY_ENTER && e.preventDefault();

export default compose(
	withHandlers({ debouncedOnChange }),
	withHandlers({ handleChange, handleEnterKey })
)(AssociationSearch);
