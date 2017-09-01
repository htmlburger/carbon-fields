/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
	compose,
	withState,
	withHandlers,
} from 'recompose';
import { isUndefined } from 'lodash';

/**
 * The internal dependencies.
 */
import withSetup from 'fields/decorators/with-setup';
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
	handleRemoveItem,
	handleEditItem,
	openBrowser,
	sortableOptions,
	onSort,
}) => {
	return <div className="carbon-media-gallery-list">
		<SortableList options={sortableOptions} onSort={onSort}>
			{
				items.length > 0 ?
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
								onRemoveClick={handleRemoveItem}
								onEditClick={handleEditItem}
								isSelected={field.selected == item}
							/>
						})
					}
				</ul> :
				<div className="carbon-media-gallery-no-files">
					<p>{carbonFieldsL10n.field.mediaGalleryNoFiles}</p>
				</div>
			}
		</SortableList>

		<div className="carbon-media-gallery-actions">
			<button type="button" className="button button-secondary" onClick={openBrowser}>
				{carbonFieldsL10n.field.mediaGalleryButtonLabel}
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

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Track current search term.
	 */
	withState('node', 'setNode', null),

	withHandlers({
		handleComponentResize: ({ field, node }) => () => {
			const nodeWidth = node.offsetWidth;

			if (nodeWidth < 200) {
				node.dataset.itemsPerRow = 1;
			} else if (nodeWidth < 300) {
				node.dataset.itemsPerRow = 2;
			} else if (nodeWidth < 500) {
				node.dataset.itemsPerRow = 3;
			} else if (nodeWidth < 600) {
				node.dataset.itemsPerRow = 4;
			} else if (nodeWidth < 700) {
				node.dataset.itemsPerRow = 5;
			} else if (nodeWidth < 800) {
				node.dataset.itemsPerRow = 6;
			} else if (nodeWidth < 900) {
				node.dataset.itemsPerRow = 7;
			} else if (nodeWidth < 1000) {
				node.dataset.itemsPerRow = 8;
			} else if (nodeWidth < 1200) {
				node.dataset.itemsPerRow = 9;
			} else if (nodeWidth < 1900) {
				node.dataset.itemsPerRow = 10;
			}
		}
	}),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				setNode,
				handleComponentResize,
			} = this.props;

			setNode( ReactDOM.findDOMNode(this) );
			$(window).on('resize', handleComponentResize)
		},

		componentDidUpdate({ handleComponentResize }) {
			handleComponentResize();
		}
	}),
);

export default enhance(MediaGalleryList);