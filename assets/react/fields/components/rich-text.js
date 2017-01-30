/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a field that supports the build-in WYSIWYG editor.
 *
 * @param  {Object} props
 * @param  {String} props.name
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const RichTextField = ({ name, field }) => {
	return <Field field={field}>
		<div id={`wp-${field.id}-wrap`} className="carbon-wysiwyg wp-editor-wrap tmce-active" data-toolbar="full">
			<div id={`wp-${field.id}-editor-container`} className="wp-editor-container">
				<textarea
					id={field.id}
					className="wp-editor-area"
					name={name}
					value={field.value} />
			</div>
		</div>
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(RichTextField);