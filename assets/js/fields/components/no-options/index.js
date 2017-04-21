/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @param  {Object}        props
 * @param  {Object}        props.field
 * @return {React.Element}
 */
export const NoOptions = ({ field }) => {
	return <Field field={field}>
		<em>{carbonFieldsL10n.field.noOptions}</em>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
NoOptions.propTypes ={
	field: PropTypes.object,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
const enhance = withSetup({
	componentDidMount() {
		const {
			field,
			ui,
			setUI,
		} = this.props;

		setUI(field.id, ui);
	},
});

export default enhance(NoOptions);
