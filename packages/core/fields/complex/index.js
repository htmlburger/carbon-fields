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
	 * Handles the change of the input.
	 *
	 * @param  {string} fieldKey The name(Gutenberg) or the identifier(Classic Editor) of field.
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( fieldKey, value ) => {
		this.props.onChange( {
			[ fieldKey ]: value
		} );
	}

	/**
	 * Handles the change of the child input.
	 *
	 * @param  {string} childIndex The index of the group of values in the main value array.
	 * @param  {string} value      The { fieldKey: value } pair of the input
	 * @return {void}
	 */
	handleChildChange = ( childIndex, value ) => this.handleChange(
		this.props.field.base_name,
		produce( this.props.value, ( draft ) => {
			const child = get( draft, childIndex, null );

			if ( ! child ) {
				return;
			}

			assign( child, value );
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
	 * @param  {string} groupName The id of the fields group which should be added
	 * @return {void}
	 */
	handleAdd = ( groupName ) => {
		const { field, value } = this.props;

		const group = this.getGroupByName( groupName );

		this.handleChange( field.base_name, produce( value, ( draft ) => {
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
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( {
			depth: this.props.depth,
			handleChange: this.handleChange,
			handleChildChange: this.handleChildChange,
			hasGroups: this.hasGroups,
			getAddLabel: this.getAddLabel,
			handleAdd: this.handleAdd,
			getGroupFields: this.getGroupFields,
			getGroupLabel: this.getGroupLabel
		} );
	}
}

export default Complex;
