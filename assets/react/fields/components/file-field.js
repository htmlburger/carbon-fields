import React from 'react';
import cx from 'classnames';
import { compose, withHandlers } from 'recompose';

import { setupMediaBrowser, openMediaBrowser } from 'fields/actions';
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.openBrowser
 * @param  {Function} props.clearSelection
 * @return {React.Element}
 *
 * @todo   Replace the inline `style` with a class.
 */
export const FileField = ({ field, openBrowser, clearSelection }) => {
	return <Field field={field}>
		<div className="carbon-attachment">
			<input
				type="text"
				className="regular-text carbon-file-field"
				id={field.id}
				name={field.name}
				defaultValue={field.value}
				style={field.value_type === 'id' ? { display: 'none' } : {}}
			/>

			<div className={cx('carbon-description', { 'hidden': !field.value })}>
				<div className={cx('carbon-attachment-preview', { 'hidden': !field.thumb_url })}>
					<img src={field.thumb_url} className="thumbnail-image" />

					<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={clearSelection}></div>
				</div>

				<div className="carbon-attachment-file-name">{field.file_name}</div>
			</div>

			<span className="button c2_open_media" onClick={openBrowser}>
				{field.button_label}
			</span>
		</div>
	</Field>;
};

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		this.props.setupField(this.props.id, this.props.type);
		this.props.setupMediaBrowser(this.props.id);
		this.props.setUI(this.props.id, this.props.ui);
	}
};

/**
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	setupMediaBrowser,
	openMediaBrowser,
};

/**
 * Show WordPress's media browser.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.openMediaBrowser
 * @return {Function}
 */
const openBrowser = ({ field, openMediaBrowser }) => () => openMediaBrowser(field.id);

/**
 * Remove the attachment that is selected.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const clearSelection = ({ field, updateField }) => () => {
	updateField(field.id, {
		value: '',
		file_name: '',
		thumb_url: ''
	});
};

export default compose(
	withStore(undefined, mapDispatchToProps),
	withSetup(hooks),
	withHandlers({ openBrowser, clearSelection })
)(FileField);
