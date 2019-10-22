/**
 * External dependencies.
 */
import produce from 'immer';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import {
	find,
	assign,
	without,
	cloneDeep
} from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { uniqueId } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import Field from '../../components/field';
import flattenField from '../../utils/flatten-field';

class ComplexField extends Component {
	/**
	 * Handles adding of group.
	 *
	 * @param  {Object}   group
	 * @param  {Function} callback
	 * @return {Object}
	 */
	handleAddGroup = ( group, callback ) => {
		const {
			id,
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

		group.id = uniqueId();
		group.container_id = field.container_id;
		group.fields = group.fields.map( ( groupField ) => flattenField( groupField, field.container_id, fields ) );

		// Make sure that the group is expanded even
		// `set_collapsed(true)` is used.
		group.collapsed = false;

		// Push the group to the field.
		addFields( fields );
		onChange( id, value.concat( group ) );

		callback( group );
	}

	/**
	 * Handles cloning of group.
	 *
	 * @param  {Object}   group
	 * @param  {Function} callback
	 * @return {void}
	 */
	handleCloneGroup = ( group, callback ) => {
		const {
			id,
			value,
			cloneFields,
			onChange
		} = this.props;

		const originFieldIds = group.fields.map( ( groupField ) => groupField.id );
		const cloneFieldIds = originFieldIds.map( () => uniqueId() );
		const clonedGroup = cloneDeep( group );

		clonedGroup.id = uniqueId();
		clonedGroup.fields.forEach( ( groupField, index ) => {
			groupField.id = cloneFieldIds[ index ];
		} );

		cloneFields( originFieldIds, cloneFieldIds );

		onChange( id, produce( value, ( draft ) => {
			draft.splice( value.indexOf( group ) + 1, 0, clonedGroup );
		} ) );

		callback( clonedGroup );
	}

	/**
	 * Handles removing of group.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleRemoveGroup = ( group ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		onChange(
			id,
			without( value, group ),
			group.fields.map( ( groupField ) => groupField.id )
		);
	}

	/**
	 * Handles expanding/collapsing of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleToggleGroup = ( groupId ) => {
		const {
			field,
			value,
			onChange
		} = this.props;

		onChange( field.id, produce( value, ( draft ) => {
			const group = find( draft, [ 'id', groupId ] );

			group.collapsed = ! group.collapsed;
		} ) );
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
	 * Handles setuping of group.
	 *
	 * @param  {Object} group
	 * @param  {Object} props
	 * @return {Object}
	 */
	handleGroupSetup = ( group, props ) => {
		return assign( {}, props, {
			id: group.id,
			name: group.name,
			prefix: `${ this.props.name }[${ props.index }]`,
			fields: group.fields,
			collapsed: group.collapsed,
			context: 'metabox'
		} );
	}

	/**
	 * Handles setuping of group's field.
	 *
	 * @param  {Object} field
	 * @param  {Object} props
	 * @param  {Object} groupProps
	 * @return {Array}
	 */
	handleGroupFieldSetup = ( field, props, groupProps ) => {
		return [ Field, assign( {}, props, {
			key: field.id,
			id: field.id,
			containerId: this.props.containerId,
			name: `${ groupProps.prefix }[${ field.name }]`
		} ) ];
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			handleGroupSetup,
			handleGroupFieldSetup,
			handleAddGroup,
			handleCloneGroup,
			handleRemoveGroup,
			handleToggleGroup,
			handleToggleAllGroups
		} = this;

		const { value, children } = this.props;

		const allGroupsAreCollapsed = value.every( ( { collapsed } ) => collapsed );

		return children( {
			allGroupsAreCollapsed,
			handleGroupSetup,
			handleGroupFieldSetup,
			handleAddGroup,
			handleCloneGroup,
			handleRemoveGroup,
			handleToggleGroup,
			handleToggleAllGroups
		} );
	}
}

const applyWithSelect = withSelect( ( select, props ) => {
	const { getComplexGroupValues } = select( 'carbon-fields/metaboxes' );
	const groupValues = props.value.map( ( group ) => {
		const fieldIds = group.fields.map( ( field ) => field.id );

		return [ group.name, getComplexGroupValues( fieldIds ) ];
	} );

	return {
		groupValues
	};
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { addFields, cloneFields } = dispatch( 'carbon-fields/metaboxes' );

	return {
		addFields,
		cloneFields
	};
} );

addFilter( 'carbon-fields.complex.metabox', 'carbon-fields/metaboxes', ( OriginalComplexField ) => compose(
	applyWithSelect,
	applyWithDispatch
)( ( props ) => {
	const {
		id,
		field,
		name,
		value,
		groupValues
	} = props;

	return (
		<ComplexField { ...props }>
			{ ( {
				allGroupsAreCollapsed,
				handleGroupSetup,
				handleGroupFieldSetup,
				handleAddGroup,
				handleCloneGroup,
				handleRemoveGroup,
				handleToggleGroup,
				handleToggleAllGroups
			} ) => (
				<OriginalComplexField
					groupIdKey="id"
					groupFilterKey="name"
					id={ id }
					field={ field }
					name={ name }
					value={ value }
					groupValues={ groupValues }
					allGroupsAreCollapsed={ allGroupsAreCollapsed }
					onGroupSetup={ handleGroupSetup }
					onGroupFieldSetup={ handleGroupFieldSetup }
					onAddGroup={ handleAddGroup }
					onCloneGroup={ handleCloneGroup }
					onRemoveGroup={ handleRemoveGroup }
					onToggleGroup={ handleToggleGroup }
					onToggleAllGroups={ handleToggleAllGroups }
					onChange={ props.onChange }
				/>
			) }
		</ComplexField>
	);
} ) );
