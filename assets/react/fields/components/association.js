/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withState, withProps, withHandlers } from 'recompose';
import { cloneDeep, without } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import AssociationSearch from 'fields/components/association-search';
import AssociationList from 'fields/components/association-list';

import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a field that allows to create links between posts, taxonomy terms,
 * users or comments.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {String}   props.term
 * @param  {Object[]} props.items
 * @param  {Number[]} props.selected
 * @param  {Function} props.setTerm
 * @param  {Function} props.handleAddItem
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
	selected,
	term,
	setTerm,
	handleAddItem,
	handleRemoveItem
}) => {
	return <Field field={field}>
		<div className="carbon-relationship-container carbon-Relationship">
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

			<AssociationSearch
				term={term}
				onChange={setTerm} />

			<div className="carbon-relationship-body">
				<div className="carbon-relationship-left">
					<AssociationList
						items={items}
						selected={selected}
						onItemClick={handleAddItem} />
				</div>

				<div className="carbon-relationship-right">
					<label>Associated:</label>

					<AssociationList
						prefix={field.name}
						items={field.value}
						associated={true}
						onItemClick={handleRemoveItem} />
				</div>
			</div>
		</div>
	</Field>;
};

/**
 * The additional props that will be passed to the component.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @param  {String} props.term
 * @return {Object}
 */
const props = ({ field, term }) => {
	let items = field.options;
	let selected = [];

	if (term) {
		items = items.filter(({ title }) => title.toLowerCase().includes(term.toLowerCase()));
	}

	if (!field.allow_duplicates) {
		selected = field.value.map(({ id }) => parseInt(id, 10));
	}

	return {
		items,
		selected,
	};
};

/**
 * Add an item to the list of selected items.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Number[]} props.selected
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleAddItem = ({ field, selected, updateField }) => (item) => {
	// Don't do anything if the duplicates aren't allowed and
	// the item is already selected.
	if (!field.allow_duplicates && selected.indexOf(item.id) > -1) {
		return;
	}

	// Don't do anything, because the maximum is reached.
	if (field.max > 0 && field.value.length >= field.max) {
		alert(crbl10n.max_num_items_reached.replace('%s', field.max));
		return;
	}

	// Create a safe copy and push it to the store.
	updateField(field.id, {
		value: [
			...field.value,
			cloneDeep(item),
		],
	});
};

/**
 * Remove an item from the list of selected items.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleRemoveItem = ({ field, updateField }) => item => updateField(field.id, { value: without(field.value, item) });

export default compose(
	withStore(),
	withSetup(),
	withState('term', 'setTerm', ''),
	withProps(props),
	withHandlers({ handleAddItem, handleRemoveItem })
)(AssociationField);
