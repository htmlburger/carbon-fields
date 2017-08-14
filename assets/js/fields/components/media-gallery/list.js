/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * The internal dependencies.
 */
import SortableList from 'fields/components/sortable-list';
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
	field,
	prefix,
	items,
	itemsMeta,
	buttonLabel,
	handleRemoveItem,
	handleEditItem,
	openBrowser,
	sortableOptions,
	onSort,
}) => {
	return <div className="carbon-media-gallery-list">
		<SortableList options={sortableOptions} onSort={onSort}>
			<ul className="carbon-media-gallery-list-items">
				{
					items.map((item, index) => {
						return <MediaGalleryListItem
							prefix={prefix}
							key={index}
							index={index}
							item={item}
							meta={itemsMeta[ item ]}
							name={name}
							buttonLabel={buttonLabel}
							onRemoveClick={handleRemoveItem}
							onEditClick={handleEditItem}
							isSelected={field.selected == item}
						/>
					})
				}
			</ul>
		</SortableList>

		<div className="carbon-media-gallery-actions">
			<button type="button" className="button button-secondary" onClick={openBrowser}>
				{buttonLabel}
			</button>
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