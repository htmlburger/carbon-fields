/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a notice to inform the user that the field doesn't have
 * any options.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 *
 * TODO: Fix the translation.
 */
export const NoOptions = ({ field }) => {
	return <Field field={field}>
		<em>No options.</em>
	</Field>
}

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		const {
			field,
			ui,
			setUI,
		} = this.props;

		setUI(field.id, ui);
	}
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
NoOptions.propTypes ={
	field: PropTypes.object.isRequired,
};

export default withSetup(hooks)(NoOptions);
