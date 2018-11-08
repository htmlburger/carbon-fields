/**
 * External dependencies.
 */
import cx from 'classnames';
import produce from 'immer';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import {
	get,
	cloneDeep,
	uniqueId,
	without
} from 'lodash';

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
	state = {
		currentTab: get( this.props.value, '0.id', null )
	};

	/**
	 * Returns true if the field is using tabs for the layout.
	 *
	 * @return {boolean}
	 */
	get isTabbed() {
		return this.props.field.layout.indexOf( 'tabbed' ) > -1;
	}

	/**
	 * Returns a list of groups that can be added if the field
	 * doesn't allow duplicating of groups.
	 *
	 * @return {Object[]}
	 */
	get availableGroups() {
		const { field, value } = this.props;

		if ( field.duplicate_groups_allowed ) {
			return field.groups;
		}

		const existingGroupNames = value.map( ( { name } ) => name );

		return field.groups.filter( ( { name } ) => existingGroupNames.indexOf( name ) === -1 );
	}

	/**
	 * Handles changing of tabs.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleTabsChange = ( groupId ) => {
		this.setState( {
			currentTab: groupId
		} );
	}

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

		group.id = uniqueId( 'carbon-fields-' );
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
		const cloneFieldIds = originFieldIds.map( () => uniqueId( 'carbon-fields-' ) );
		const cloneGroup = cloneDeep( group );

		cloneGroup.id = uniqueId( 'carbon-fields-' );
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
		const { currentTab } = this.state;

		const {
			field,
			name,
			value
		} = this.props;

		const classes = cx(
			`cf-complex--${ field.layout }`,
			{
				'cf-complex--multiple-groups': field.groups.length > 1
			}
		);

		return (
			<FieldBase className={ classes } field={ field }>
				{ this.isTabbed && (
					<ComplexTabs
						current={ currentTab }
						groups={ value }
						onChange={ this.handleTabsChange }
					>
						{ this.availableGroups.length && (
							<ComplexInserter
								buttonText="+"
								groups={ this.availableGroups }
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
							hidden={ this.isTabbed && group.id !== currentTab }
							allowClone={ field.duplicate_groups_allowed }
							onToggle={ this.handleToggleGroup }
							onClone={ this.handleCloneGroup }
							onRemove={ this.handleRemoveGroup }
						/>
					) ) }
				</div>

				{ ! this.isTabbed && (
					<div className="cf-complex__actions">
						{ this.availableGroups.length && (
							<ComplexInserter
								buttonText="Add Entry"
								groups={ this.availableGroups }
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
				handleChange
			} ) => (
				<ComplexField
					field={ field }
					name={ name }
					value={ value }
					addFields={ props.addFields }
					cloneFields={ props.cloneFields }
					removeFields={ props.removeFields }
					onChange={ handleChange }
				/>
			) }
		</OriginalComplexField>
	);
} ) );
