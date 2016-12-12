/* @flow */

import React from 'react';
import cx from 'classnames';
import Field from 'fields/components/field';
import withConnectToStore from 'fields/decorators/with-connect-to-store';

/**
 * @param  {Object} props
 * @return {React.Element}
 */
const FileField = ({ field }: FieldProps): React$Element<*> => {
	return <Field id={field.uuid} field={field}>
		<div className="carbon-attachment">
			<input
				type="text"
				className="regular-text carbon-file-field"
				id={field.uuid}
				name={field.name}
				defaultValue={field.value}
				style={field.value_type === 'id' ? { display: 'none' } : {}}
			/>

			<div className={cx('carbon-description', { 'hidden': !field.value })}>
				<div className={cx('carbon-attachment-preview', { 'hidden': !field.thumb_url })}>
					<img src={field.thumb_url} className="thumbnail-image" />

					<div className="carbon-file-remove dashicons-before dashicons-no-alt"></div>
				</div>

				<div className="carbon-attachment-file-name">{field.file_name}</div>
			</div>

			<span id={`c2_open_media${field.id.replace('-', '_')}`} className="button c2_open_media">
				{field.button_label}
			</span>
		</div>
	</Field>;
};

export default withConnectToStore(FileField);
