/**
 * External dependencies.
 */
import cx from 'classnames';
import produce from 'immer';
import nanoid from 'nanoid';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { cloneDeep, without } from 'lodash';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import flattenField from '../../utils/flatten-field';
import ComplexTabs from './tabs';
import ComplexInserter from './inserter';
import ComplexToggler from './toggler';
import ComplexGroup from './group';

class ComplexField extends Component {
	/**
	 * Handles the selection of a group in the inserter.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleInserterSelect = ( group ) => {
		const {
			field,
			value,
			addFields,
			onChange
		} = this.props;

		// Create a copy of the group to prevent
		// incidentally modifications.
		group = cloneDeep( group );

		// Get a flat list of all fields for this group.
		const fields = [];

		group.id = nanoid();
		group.container_id = field.container_id;
		group.fields = group.fields.map( ( groupField ) => flattenField( groupField, field.container_id, fields ) );

		// Push the group to the field.
		addFields( fields );
		onChange( field.id, value.concat( group ) );
	}

	/**
	 * Handles expanding/collapsing of all groups.
	 *
	 * @param  {boolean} collapsed
	 * @return {void}
	 */
	handleToggleAllGroups = ( collapsed ) => {
		const {
			field,
			value,
			onChange
		} = this.props;

		onChange( field.id, produce( value, ( draft ) => {
			draft.forEach( ( group ) => {
				group.collapsed = collapsed;
			} );
		} ) );
	}

	/**
	 * Handles expanding/collapsing of a group.
	 *
	 * @param  {number} groupIndex
	 * @return {void}
	 */
	handleToggleGroup = ( groupIndex ) => {
		const {
			field,
			value,
			onChange
		} = this.props;

		onChange( field.id, produce( value, ( draft ) => {
			const group = draft[ groupIndex ];

			group.collapsed = ! group.collapsed;
		} ) );
	}

	/**
	 * Handles cloning of a group.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleCloneGroup = ( group ) => {
		const {
			field,
			value,
			cloneFields,
			onChange
		} = this.props;

		const originFieldIds = group.fields.map( ( groupField ) => groupField.id );
		const cloneFieldIds = originFieldIds.map( () => nanoid() );
		const cloneGroup = cloneDeep( group );

		cloneGroup.id = nanoid();
		cloneGroup.fields.forEach( ( groupField, index ) => {
			groupField.id = cloneFieldIds[ index ];
		} );

		cloneFields( originFieldIds, cloneFieldIds );
		onChange( field.id, value.concat( cloneGroup ) );
	}

	/**
	 * Handles the removal of a group.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleRemoveGroup = ( group ) => {
		const {
			field,
			value,
			removeFields,
			onChange
		} = this.props;

		onChange( field.id, without( value, group ) );

		// Delay removal of fields because React will complain
		// about missing objects.
		// TODO: Investigate why this is necessary.
		setTimeout( () => {
			const fieldIds = group.fields.map( ( groupField ) => groupField.id );

			removeFields( fieldIds );
		}, 1 );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			isTabbed,
			currentTab,
			isMaximumReached,
			inserterButtonText,
			getAvailableGroups,
			onTabsChange
		} = this.props;

		const classes = cx(
			`cf-complex--${ field.layout }`,
			{
				'cf-complex--multiple-groups': field.groups.length > 1
			}
		);

		const availableGroups = getAvailableGroups( 'name' );

		return (
			<FieldBase className={ classes } field={ field }>
				{ isTabbed && (
					<ComplexTabs
						current={ currentTab }
						groups={ value }
						onChange={ onTabsChange }
					>
						{ !! availableGroups.length && ! isMaximumReached && (
							<ComplexInserter
								buttonText="+"
								groups={ availableGroups }
								onSelect={ this.handleInserterSelect }
							/>
						) }
					</ComplexTabs>
				) }

				<div className="cf-complex__groups">
					{ value.map( ( group, index ) => (
						<ComplexGroup
							key={ group.id }
							index={ index }
							group={ group }
							prefix={ `${ name }[${ index }]` }
							hidden={ isTabbed && group.id !== currentTab }
							allowClone={ field.duplicate_groups_allowed && ! isMaximumReached }
							onToggle={ this.handleToggleGroup }
							onClone={ this.handleCloneGroup }
							onRemove={ this.handleRemoveGroup }
						/>
					) ) }
				</div>

				{ ! isTabbed && (
					<div className="cf-complex__actions">
						{ !! availableGroups.length && ! isMaximumReached && (
							<ComplexInserter
								buttonText={ inserterButtonText }
								groups={ availableGroups }
								onSelect={ this.handleInserterSelect }
							/>
						) }

						<ComplexToggler
							groups={ value }
							onToggle={ this.handleToggleAllGroups }
						/>
					</div>
				) }
			</FieldBase>
		);
	}
}

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const {
		addFields,
		cloneFields,
		removeFields
	} = dispatch( 'carbon-fields/metaboxes' );

	return {
		addFields,
		cloneFields,
		removeFields
	};
} );

addFilter( 'carbon-fields.complex-field.metabox', 'carbon-fields/metaboxes', ( OriginalComplexField ) => compose(
	withField,
	applyWithDispatch
)( ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				name,
				value,
				isTabbed,
				currentTab,
				isMaximumReached,
				inserterButtonText,
				getAvailableGroups,
				handleChange,
				handleTabsChange
			} ) => (
				<ComplexField
					field={ field }
					name={ name }
					value={ value }
					isTabbed={ isTabbed }
					currentTab={ currentTab }
					isMaximumReached={ isMaximumReached }
					inserterButtonText={ inserterButtonText }
					addFields={ props.addFields }
					cloneFields={ props.cloneFields }
					removeFields={ props.removeFields }
					getAvailableGroups={ getAvailableGroups }
					onChange={ handleChange }
					onTabsChange={ handleTabsChange }
				/>
			) }
		</OriginalComplexField>
	);
} ) );
