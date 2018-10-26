/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import {
	assign,
	find,
	get,
	zipObject,
	map
} from 'lodash';
import produce from 'immer';

class Complex extends Component {
	/**
	 * Handles the change of the child input.
	 *
	 * @param  {string}        fieldKey      Тhe field identifier used for the data update
	 * @param  {string}        childIndex    The index of the group of values in the main value array.
	 * @param  {string}        childFieldKey The field key of the child field being updated
	 * @param  {Object|string} childValue    The value of the child field being updated
	 * @return {void}
	 */
	handleChildChange = (
		fieldKey,
		childIndex,
		childFieldKey,
		childValue
	) => this.props.onChange(
		fieldKey,
		produce( this.props.value, ( draft ) => {
			const child = get( draft, childIndex, null );

			if ( ! child ) {
				return;
			}

			assign( child, { [ childFieldKey ]: childValue } );
		} )
	)

	/**
	 * Checks if the field has multiple groups.
	 *
	 * @return {boolean}
	 */
	hasGroups = () => this.props.field.groups.length > 1

	/**
	 * Checks if the field has multiple groups.
	 *
	 * @param  {string} label The value to be replaced in the add button template
	 * @return {string}
	 */
	getAddLabel = ( label = '' ) => carbonFieldsL10n.field.complexAddButton.replace( '%s', label )

	/**
	 * Handles the click of the click of the add buttons.
	 *
	 * @param  {string} fieldKey  Тhe field identifier used for the data update
	 * @param  {string} groupName The id of the fields group which should be added
	 * @return {void}
	 */
	handleAdd = ( fieldKey, groupName ) => {
		const { value } = this.props;

		const group = this.getGroupByName( groupName );

		this.props.onChange( fieldKey, produce( value, ( draft ) => {
			draft.push( {
				// Keep '_type' for backwards compatibility - legacy code might depend on it
				_type: groupName,
				...zipObject(
					map( group.fields, 'base_name' ),
					map( group.fields, 'value' )
				)
			} );
		} ) );
	}

	/**
	 * Retrieve the fields associated to the provided group name
	 *
	 * @param  {string} name The name of the group for which the fields should be retrieved
	 * @return {Array}
	 */
	getGroupFields = ( name ) => get( this.getGroupByName( name ), 'fields', [] )

	/**
	 * Retrieve the group label by name
	 *
	 * @param  {string}  name The name of the group for which the label should be retrieved
	 * @param  {boolean} add Returns the label with the localized 'Add', prefix
	 * @return {Array}
	 */
	getGroupLabel = ( name, add = false ) => {
		const group = this.getGroupByName( name );

		if ( ! group ) {
			return;
		}

		// Avoid use of '_.get' as 'label' is always set, but not always filled
		const label = group.label ? group.label : this.props.field.label;

		return add ? this.getAddLabel( label ) : label;
	}

	/**
	 * Retrieve the group by provided name
	 * @param  {string} name The name of the group
	 * @return {Object|Null}
	 */
	getGroupByName = ( name ) => find( this.props.field.groups, ( group ) => group.name === name )

	/**
	 * Handles the drop event of the drag-and-drop context
	 * @param  {string}        fieldKey
	 * @param  {string|number} dropIndex
	 * @param  {string|number} startIndex
	 * @return {void}
	 */
	handleSorting = ( fieldKey, dropIndex, startIndex ) => {
		// TODO
		return { fieldKey, dropIndex, startIndex };
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			field: this.props.field,
			value: this.props.value,
			depth: this.props.depth,
			handleChange: this.onChange,
			handleChildChange: this.handleChildChange,
			hasGroups: this.hasGroups,
			getAddLabel: this.getAddLabel,
			handleAdd: this.handleAdd,
			getGroupFields: this.getGroupFields,
			getGroupLabel: this.getGroupLabel,
			handleSorting: this.handleSorting
		} );
	}
}

export default Complex;
