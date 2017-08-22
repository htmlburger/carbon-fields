/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, defaultProps } from 'recompose';
import { debounce } from 'lodash';

/**
 * The internal dependencies.
 */
import { KEY_ENTER } from 'lib/constants';

/**
 * Render the field used to filter the available options
 * inside the oembed field.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   [props.name]
 * @param  {String} 	   props.term
 * @param  {Function} 	   props.handleKeyDown
 * @param  {Function} 	   props.handleChange
 * @return {React.Element}
 */
export const SearchInput = ({
	name,
	term,
	handleKeyDown,
	handleChange,
}) => {
	return <div className="search-field carbon-association-search dashicons-before dashicons-search">
		<input
			type="text"
			defaultValue={term}
			name={name}
			className="search-field"
			placeholder={carbonFieldsL10n.field.searchPlaceholder}
			onKeyDown={handleKeyDown}
			onChange={handleChange} />
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SearchInput.propTypes = {
	name: PropTypes.string,
	term: PropTypes.string,
	handleSubmit: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Setup the default props.
	 */
	defaultProps({
		onSubmit: () => {}
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		debouncedOnChange: ({ onSubmit }) => debounce(v => onSubmit(v), 200),
		handleSubmit: ({ onSubmit }) => e => {
			onSubmit(e.target.value);
		},
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ debouncedOnChange }) => ({ target: { value }}) => debouncedOnChange(value),
		handleKeyDown: ({ handleSubmit }) => e => {
			if (e.keyCode === KEY_ENTER) {
				e.preventDefault();

				handleSubmit(e);
			}
		},
	})
);

export default enhance(SearchInput);
