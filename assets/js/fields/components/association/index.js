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
	withProps,
	withHandlers,
	setStatic
} from 'recompose';
import {
	cloneDeep,
	without,
	isMatch,
	sortBy,
	debounce,
	find
} from 'lodash';
import { vsprintf } from 'sprintf-js';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import SortableList from 'fields/components/sortable-list';
import AssociationList from 'fields/components/association/list';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { getFieldHierarchyById } from 'fields/selectors';
import { requestAssociationOptions } from 'fields/actions';
import { TYPE_ASSOCIATION, VALIDATION_ASSOCIATION } from 'fields/constants';

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
 * TODO: Research more about `react-virtualized`.
 * 		 Probably can improve the performance on very long lists.
 */
export const AssociationField = ({
	name,
	field,
	sortableOptions,
	onSearchTermChange,
	handleAddItem,
	handleRemoveItem,
	handleSortItems
}) => {
	let counterLabels = [carbonFieldsL10n.field.associationSelectedItem, carbonFieldsL10n.field.associationSelectedItems];
	let counterLabelArgs = [field.value.length];
	if (field.max !== -1) {
		counterLabels = [carbonFieldsL10n.field.associationSelectedItemOutOf, carbonFieldsL10n.field.associationSelectedItemsOutOf];
		counterLabelArgs.push(field.max);
	}

	const counterLabel = field.value.length === 1
		? vsprintf(counterLabels[0], counterLabelArgs)
		: vsprintf(counterLabels[1], counterLabelArgs);

	let isLoading = field.ui.isLoading || false;

	return <Field field={field}>
		<div className="carbon-association-container carbon-association">
			<div className="selected-items-container">
				<strong>
					<span className="selected-counter">{counterLabel}</span>
				</strong>
			</div>

			<SearchInput
				term={field.ui.term || ''}
				onChange={onSearchTermChange} />

			<div className="carbon-association-body">
				<div className="carbon-association-left">
					<div className={`carbon-association-left-spinner ${isLoading ? 'is-active' : ''}`}>
						<span className={`spinner ${isLoading ? 'is-active' : ''}`} />
					</div>

					<AssociationList
						items={field.options || []}
						onItemClick={handleAddItem} />
				</div>

				<div className="carbon-association-right">
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
		ui: PropTypes.shape({
			term: PropTypes.string,
			page: PropTypes.integer,
			isLoading: PropTypes.boolean,
		}),
	}),
	options: PropTypes.arrayOf(PropTypes.object),
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
	withStore(undefined, {
		requestAssociationOptions
	}),

	withHandlers({
		onSearchTermChange: ({
			field,
			setUI,
			requestAssociationOptions,
		}) => debounce(term => {
			setUI(field.id, {
				term: term,
				page: 1,
				isLoading: true,
			});

			requestAssociationOptions(field, {
				term: term,
				page: 1,
			});
		}, 200),

		onListScroll: ({
			field,
			setUI,
			requestAssociationOptions
		}) => event => {
			const $sourceList = $(event.target);

			if ($sourceList[0].scrollHeight - $sourceList.scrollTop() <= $sourceList.outerHeight()) {
				setUI(field.id, {
					page: field.ui.page + 1,
					isLoading: true,
				});

				// fetch next page data
				requestAssociationOptions(field, {
					term: field.ui.term,
					page: field.ui.page + 1,
				}, true);
			}
		}
	}),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				setupField,
				setupValidation,
				onListScroll,
				requestAssociationOptions
			} = this.props;

			let { ui } = this.props;

			ui = { ...ui, ...{
				isLoading: true
			} };

			requestAssociationOptions(field, {
				term: '',
				page: 1,
			});

			const $sourceList = $(ReactDOM.findDOMNode(this)).find('.carbon-association-left .carbon-association-list');

			$sourceList.on('scroll', onListScroll);

			setupField(field.id, field.type, ui);
			setupValidation(field.id, VALIDATION_ASSOCIATION);
		},
	}, {
		term: '',
		page: 1,
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field }) => {
		let options = field.options;

		if (!field.duplicates_allowed) {
			options = options.map(option => {
				option.disabled = !!find(field.value, selectedOption => isMatch(selectedOption, {
					id: option.id,
					type: option.type,
					subtype: option.subtype,
				}));

				return option;
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
			options,
			sortableOptions,
		};
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleAddItem: ({ field, setFieldValue }) => item => {
			// Don't do anything if the duplicates aren't allowed and
			// the item is already selected.
			if (!field.duplicates_allowed && item.disabled) {
				return;
			}

			// Don't do anything, because the maximum is reached.
			if (field.max > 0 && field.value.length >= field.max) {
				alert(carbonFieldsL10n.field.maxNumItemsReached.replace('%s', field.max));
				return;
			}

			// Create a safe copy and push it to the store.
			setFieldValue(field.id, [
				...field.value,
				cloneDeep(item)
			]);
		},

		handleSortItems: ({ field, setFieldValue }) => newItems => {
			newItems = newItems.map(id => parseInt(id, 10));
			newItems = sortBy(field.value, item => newItems.indexOf(item.id));

			setFieldValue(field.id, newItems);
		},

		handleRemoveItem: ({ field, setFieldValue }) => item => setFieldValue(field.id, without(field.value, item))
	})
);

export default setStatic('type', [
	TYPE_ASSOCIATION,
])(enhance(AssociationField));
