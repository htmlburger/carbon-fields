/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleOpenBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
export const MediaGalleryListItem = ({
	item,
	prefix,
	index,
	meta,
	buttonLabel,
	handleOpenBrowser,
	handleRemoveItem
}) => {
	return <div className="carbon-attachment" key={index} id={index}>
		<input
			type="hidden"
			id={item}
			name={`${prefix}[${index}]`}
			value={item}
			readOnly />

		<div className={cx('carbon-description', { 'hidden': !item })}>
			<div className={cx('carbon-attachment-preview', { 'hidden': !meta.thumb_url })}>
				<img src={meta.thumb_url} className="thumbnail-image" />

				<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={handleRemoveItem}></div>
			</div>

			<input
				type="text"
				className="carbon-attachment-file-name"
				value={meta.file_url}
				readOnly />
		</div>

		<span className="button c2_open_media" onClick={handleOpenBrowser}>
			{buttonLabel}
		</span>
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MediaGalleryListItem.propTypes = {
	name: PropTypes.string,
	item: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	meta: PropTypes.shape({
		thumb_url: PropTypes.string,
		default_thumb_url: PropTypes.string,
		file_ext: PropTypes.string,
		file_type: PropTypes.string,
		file_name: PropTypes.string,
		file_url: PropTypes.string,
	}),
	handleRemoveItem: PropTypes.func,
	handleOpenBrowser: PropTypes.func,
};

const enhance = withHandlers({
	handleRemoveItem: ({ index, onRemoveClick }) => preventDefault((e) => {
		onRemoveClick(index);
	}),

	handleOpenBrowser: ({ index, onOpenBrowserClick }) => preventDefault((e) => {
		onOpenBrowserClick(index);
	})
});

export default enhance(MediaGalleryListItem);