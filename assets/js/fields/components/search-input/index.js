/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
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
 * @param  {Boolean} 	   props.disabled
 * @param  {Function} 	   props.handleChange
 * @param  {Function} 	   props.handleSubmit
 * @return {React.Element}
 */
export const SearchInput = ({
	name,
	term,
	disabled,
	handleChange,
	handleSubmit
}) => {
	return <div className="search-field carbon-association-search dashicons-before dashicons-search">
		<input
			type="text"
			name={name}
			className="search-field"
			placeholder={carbonFieldsL10n.field.searchPlaceholder}
			disabled={disabled}
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
	term: PropTypes.string,
	disabled: PropTypes.bool,
	handleChange: PropTypes.func,
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
		disabled: false,
		onChange: () => {},
		onSubmit: () => {},
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		debouncedOnChange: ({ onChange }) => debounce(v => onChange(v), 200),
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ debouncedOnChange }) => ({ target: { value }}) => debouncedOnChange(value),
		handleSubmit: ({ onSubmit }) => e => {
			if (e.keyCode === KEY_ENTER) {
				e.preventDefault();

				onSubmit(e.target.value);
			}
		},
	})
);

export default enhance(SearchInput);
