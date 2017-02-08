/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withState, withHandlers, defaultProps } from 'recompose';
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
 * @param  {String} 	   [props.name]
 * @param  {String} 	   props.term
 * @param  {Function} 	   props.handleChange
 * @param  {Function} 	   props.handleSubmit
 * @return {React.Element}
 */
export const SearchInput = ({ name, term, handleChange, handleSubmit }) => {
	return <div className="search-field carbon-relationship-search dashicons-before dashicons-search">
		<input
			type="text"
			name={name}
			className="search-field"
			placeholder="Search..."
			defaultValue={term}
			onChange={handleChange}
			onKeyDown={handleSubmit} />
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SearchInput.propTypes = {
	name: PropTypes.string,
	term: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
};

/**
 * The default props.
 *
 * @type {Object}
 */
const props = {
	onChange: () => {},
	onSubmit: () => {},
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
 * @param  {Function} props.debouncedOnChange
 * @return {Function}
 */
const handleChange = ({ debouncedOnChange }) => ({ target: { value }}) => debouncedOnChange(value);

/**
 * Prevent the submission of the form.
 *
 * @param  {Object}   props
 * @param  {Function} props.onSubmit
 * @return {Function}
 */
const handleSubmit = ({ onSubmit }) => e => {
	if (e.keyCode === KEY_ENTER) {
		e.preventDefault();

		onSubmit(e.target.value);
	}
};

export default compose(
	defaultProps(props),
	withHandlers({ debouncedOnChange }),
	withHandlers({ handleChange, handleSubmit })
)(SearchInput);
