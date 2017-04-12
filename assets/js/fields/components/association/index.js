/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withState,
	withProps,
	withHandlers,
	setStatic
} from 'recompose';
import {
	cloneDeep,
	without,
	isMatch,
	sortBy
} from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import SortableList from 'fields/components/sortable-list';
import AssociationList from 'fields/components/association/list';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_ASSOCIATION } from 'fields/constants';

/**
 * Render a field that allows to create links between posts, taxonomy terms,
 * users or comments.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {String}        props.term
 * @param  {Object}        props.sortableOptions
 * @param  {Object[]}      props.items
 * @param  {Function}      props.setTerm
 * @param  {Function}      props.handleAddItem
 * @param  {Function}      props.handleSortItems
 * @return {React.Element}
 *
 * TODO: Fix the translation of the labels.
 * TODO: Research more about `react-virtualized`.
 * 		 Probably can improve the performance on very long lists.
 */
export const AssociationField = ({
	name,
	field,
	items,
	term,
	sortableOptions,
	setTerm,
	handleAddItem,
	handleRemoveItem,
	handleSortItems
}) => {
	return <Field field={field}>
		<div className="carbon-association-container carbon-Association">
			<div className="selected-items-container">
				<strong>
					<span className="selected-counter">{field.value.length}</span>

					<span className="selected-label">
						{
							field.value.length !== 1
							? ' selected items'
							: ' selected item'
						}
					</span>

					{
						field.max !== -1
						? <span className="remaining"> out of {field.max}</span>
						: null
					}
				</strong>
			</div>

			<SearchInput
				term={term}
				onChange={setTerm} />

			<div className="carbon-association-body">
				<div className="carbon-association-left">
					<AssociationList
						items={items}
						onItemClick={handleAddItem} />
				</div>

				<div className="carbon-association-right">
					<label>Associated:</label>

					<SortableList options={sortableOptions} onSort={handleSortItems}>
						<AssociationList
							prefix={name}
							items={field.value}
							associated={true}
							visible={field.ui.is_visible}
							onItemClick={handleRemoveItem} />
					</SortableList>
				</div>
			</div>
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
AssociationField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		value: PropTypes.arrayOf(PropTypes.object),
		max: PropTypes.number,
	}),
	items: PropTypes.arrayOf(PropTypes.object),
	term: PropTypes.string,
	handleAddItem: PropTypes.func,
	handleRemoveItem: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(),

	/**
	 * Attach the setup hooks.
	 */
	withSetup(),

	/**
	 * Track current search term.
	 */
	withState('term', 'setTerm', ''),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field, term }) => {
		let items = field.options;

		if (term) {
			items = items.filter(({ title }) => title.toLowerCase().includes(term.toLowerCase()));
		}

		if (!field.allow_duplicates) {
			items = items.map(item => {
				item.disabled = !!field.value.find(selectedItem => isMatch(selectedItem, {
					id: item.id,
					type: item.type,
					subtype: item.subtype,
				}));

				return item;
			});
		}

		const sortableOptions = {
			axis: 'y',
			items: 'li',
			forceHelperSize: true,
			forcePlaceholderSize: true,
			scroll: true,
			handle: '.mobile-handle',
		};

		return {
			items,
			sortableOptions,
		};
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleAddItem: ({ field, updateField }) => item => {
			// Don't do anything if the duplicates aren't allowed and
			// the item is already selected.
			if (!field.allow_duplicates && item.disabled) {
				return;
			}

			// Don't do anything, because the maximum is reached.
			if (field.max > 0 && field.value.length >= field.max) {
				alert(carbonFieldsL10n.field.maxNumItemsReached.replace('%s', field.max));
				return;
			}

			// Create a safe copy and push it to the store.
			updateField(field.id, {
				value: [
					...field.value,
					cloneDeep(item),
				],
			});
		},

		handleSortItems: ({ field, updateField }) => newItems => {
			newItems = newItems.map(id => parseInt(id, 10));
			newItems = sortBy(field.value, item => newItems.indexOf(item.id));

			updateField(field.id, {
				value: newItems,
			});
		},

		handleRemoveItem: ({ field, updateField }) => item => updateField(field.id, { value: without(field.value, item) }),
	})
);

export default setStatic('type', [
	TYPE_ASSOCIATION,
])(enhance(AssociationField));
