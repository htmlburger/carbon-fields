/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';
import MaskedInput from 'react-text-mask';


/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { VALIDATION_MASKED } from 'fields/constants';

/**
 * Render a text input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const MaskedTextField = ({
	name,
	field,
	handleChange
}) => {

	field.mask = field.mask.map( piece => {
		return piece[0] === '/' && piece[piece.length - 1] === '/' ?
			new RegExp(piece.slice(1, -1)) :
			piece;
	});

	return <Field field={field}>
		<MaskedInput
			type="text"
			id={field.id}
			name={name}
			mask={field.mask}
			placeholderChar={field.maskPlaceholder}
			value={field.value}
			disabled={!field.ui.is_visible}
			className="regular-text"
			onChange={handleChange}
			{...field.attributes}
		/>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MaskedTextField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		attributes: PropTypes.object,
		mask: PropTypes.array,
	}),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	withStore(),
	withSetup({
		componentDidMount() {
			const {
				field,
				ui,
				setupField,
				setupValidation
			} = this.props;

			setupField(field.id, field.type, ui);

			// Don't validate unless the field setup explicitly required valid format
			if (field.validateMaskFormat) {
				setupValidation(field.id, VALIDATION_MASKED);
			}
		},
	}),

	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => ({ target: { value } }) => setFieldValue(field.id, value),
	})
);

export default setStatic('type', [
	'masked_text',
])(enhance(MaskedTextField));
