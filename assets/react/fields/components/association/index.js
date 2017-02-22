/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withState, withProps, withHandlers, setStatic } from 'recompose';
import { cloneDeep, without, isMatch } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import AssociationList from 'fields/components/association/list';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_ASSOCIATION } from 'fields/constants';

/**
 * Render a field that allows to create links between posts, taxonomy terms,
 * users or comments.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {String}   props.term
 * @param  {Object[]} props.items
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

			<SearchInput
				term={term}
				onChange={setTerm} />

			<div className="carbon-relationship-body">
				<div className="carbon-relationship-left">
					<AssociationList
						items={items}
						onItemClick={handleAddItem} />
				</div>

				<div className="carbon-relationship-right">
					<label>Associated:</label>

					<AssociationList
						prefix={name}
						items={field.value}
						associated={true}
						visible={field.ui.is_visible}
						onItemClick={handleRemoveItem} />
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
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		value: PropTypes.arrayOf(PropTypes.object).isRequired,
		max: PropTypes.number.isRequired,
	}).isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	term: PropTypes.string.isRequired,
	handleAddItem: PropTypes.func.isRequired,
	handleRemoveItem: PropTypes.func.isRequired,
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

	return {
		items,
	};
};

/**
 * Add an item to the list of selected items.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleAddItem = ({ field, updateField }) => item => {
	// Don't do anything if the duplicates aren't allowed and
	// the item is already selected.
	if (!field.allow_duplicates && item.disabled) {
		return;
	}

	// Don't do anything, because the maximum is reached.
	if (field.max > 0 && field.value.length >= field.max) {
		alert(carbonFieldsL10n.maxNumItemsReached.replace('%s', field.max));
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

export default setStatic('type', [TYPE_ASSOCIATION])(
	compose(
		withStore(),
		withSetup(),
		withState('term', 'setTerm', ''),
		withProps(props),
		withHandlers({ handleAddItem, handleRemoveItem })
	)(AssociationField)
);
