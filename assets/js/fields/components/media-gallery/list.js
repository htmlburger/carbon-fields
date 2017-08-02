/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * The internal dependencies.
 */
import MediaGalleryListItem from 'fields/components/media-gallery/list-item';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
export const MediaGalleryList = ({
	prefix,
	items,
	itemsMeta,
	buttonLabel,
	handleRemoveItem,
	handleOpenBrowser,
}) => {
	return <div className="carbon-media-gallery">
		{
			items.map((item, index) => {
				return <MediaGalleryListItem
					prefix={prefix}
					key={index}
					index={index}
					item={item}
					meta={itemsMeta[ item ]}
					name={name}
					onRemoveClick={handleRemoveItem}
					onOpenBrowserClick={handleOpenBrowser}
				/>
			})
		}

		<div className="carbon-attachment carbon-attachment-new">
			<span className="button c2_open_media" onClick={handleOpenBrowser}>
				{buttonLabel}
			</span>
		</div>
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MediaGalleryList.propTypes = {
	name: PropTypes.string,
	items: PropTypes.array,
	handleRemoveItem: PropTypes.func,
};

export default MediaGalleryList;