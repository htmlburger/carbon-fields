/**
 * External dependencies.
 */
import produce from 'immer';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import {
	get,
	set,
	find,
	omit,
	assign,
	mapKeys,
	without,
	cloneDeep,
	findIndex
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

class ComplexField extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		collapsedGroups: this.props.value.reduce( ( accumulator, { _id, _type } ) => {
			const group = find( this.props.field.groups, [ 'name', _type ] );

			if ( ! group.collapsed ) {
				return accumulator;
			}

			return accumulator.concat( _id );
		}, [] )
	};

	/**
	 * Returns a list of group values.
	 *
	 * @return {Array}
	 */
	getGroupValues() {
		return this.props.value.map( ( group ) => {
			const values = mapKeys( omit( group, [ '_id', '_type' ] ), ( value, key ) => key.replace( /\-/g, '_' ) );

			return [ group._type, values ];
		} );
	}

	/**
	 * Handles adding of group.
	 *
	 * @param  {Object}   group
	 * @param  {Function} callback
	 * @return {void}
	 */
	handleAddGroup = ( group, callback ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		const data = {};

		data._id = uniqueId();
		data._type = group.name;

		group.fields.reduce( ( accumulator, field ) => {
			accumulator[ field.base_name ] = field.default_value;

			return accumulator;
		}, data );

		onChange( id, value.concat( data ) );

		callback( data );
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
			onChange
		} = this.props;

		const index = value.indexOf( group );
		const clonedGroup = cloneDeep( group );

		clonedGroup._id = uniqueId();

		onChange( id, produce( value, ( draft ) => {
			draft.splice( index + 1, 0, clonedGroup );
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

		const groupIndex = findIndex( value, [ '_id', group._id ] );

		onChange( id, produce( value, ( draft ) => {
			draft.splice( groupIndex, 1 );
		} ) );

		this.setState( ( { collapsedGroups } ) => ( {
			collapsedGroups: without( collapsedGroups, group._id )
		} ) );
	}

	/**
	 * Handles expanding/collapsing of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleToggleGroup = ( groupId ) => {
		this.setState( ( { collapsedGroups } ) => {
			if ( collapsedGroups.indexOf( groupId ) > -1 ) {
				collapsedGroups = without( collapsedGroups, groupId );
			} else {
				collapsedGroups = [ ...collapsedGroups, groupId ];
			}

			return { collapsedGroups };
		} );
	}

	/**
	 * Handles expanding/collapsing of all groups.
	 *
	 * @return {void}
	 */
	handleToggleAllGroups = () => {
		const { value } = this.props;

		this.setState( ( { collapsedGroups } ) => {
			if ( collapsedGroups.length !== value.length ) {
				collapsedGroups = value.map( ( group ) => group._id );
			} else {
				collapsedGroups = [];
			}

			return { collapsedGroups };
		} );
	}

	/**
	 * Handles setuping of group.
	 *
	 * @param  {Object} group
	 * @param  {Object} props
	 * @return {Object}
	 */
	handleGroupSetup = ( group, props ) => {
		const fields = get( find( this.props.field.groups, [ 'name', group._type ] ), 'fields', [] );
		const values = omit( group, [ '_id', '_type' ] );

		return assign( {}, props, {
			id: group._id,
			fields: fields,
			collapsed: this.state.collapsedGroups.indexOf( group._id ) > -1,
			context: 'block',
			values
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
		const { blockId } = this.props;
		const id = `${ this.props.id }__${ groupProps.id }__${ field.base_name }`;
		const value = get( groupProps, `values.${ field.base_name }` );

		return [ Field, assign( {}, props, {
			key: id,
			id: id,
			name: field.base_name,
			containerId: this.props.containerId,
			blockId,
			field,
			value,
			onChange: this.handleGroupFieldChange
		} ) ];
	}

	/**
	 * Handles the change of group field.
	 *
	 * @param  {string} fieldId
	 * @param  {mixed}  fieldValue
	 * @return {void}
	 */
	handleGroupFieldChange = ( fieldId, fieldValue ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		onChange( id, produce( value, ( draft ) => {
			const path = fieldId.split( '__' );
			const fieldName = path.pop();
			const group = find( draft, [ '_id', path.pop() ] );

			set( group, fieldName, fieldValue );
		} ) );
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

		const groupValues = this.getGroupValues();
		const allGroupsAreCollapsed = this.state.collapsedGroups.length === value.length;

		return children( {
			groupValues,
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

addFilter( 'carbon-fields.complex.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( props ) => {
	const {
		id,
		name,
		value,
		error,
		field
	} = props;

	return (
		<ComplexField { ...props }>
			{ ( {
				groupValues,
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
					groupIdKey="_id"
					groupFilterKey="_type"
					id={ id }
					name={ name }
					value={ value }
					error={ error }
					field={ field }
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
} );
