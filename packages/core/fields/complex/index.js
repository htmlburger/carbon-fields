/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import {
	cloneDeep,
	assign,
	find,
	get,
	zipObject,
	map
} from 'lodash';

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
	handleChildChange = ( childIndex, value ) => {
		const valueClone = cloneDeep( this.props.value );
		const child = get( valueClone, childIndex, null );

		if ( ! child ) {
			return;
		}

		assign( child, value );

		this.handleChange( this.props.field.base_name, valueClone );
	}

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
	 * @param  {string} groupId The id of the fields group which should be added
	 * @return {void}
	 */
	handleAdd = ( groupId ) => {
		const { field, value } = this.props;

		const group = find( field.groups, ( groupItem ) => groupItem.group_id === groupId );

		this.handleChange( field.base_name, [ ...value, ...[ {
			_type: group.name,
			...zipObject(
				map( group.fields, 'base_name' ),
				map( group.fields, 'value' )
			)
		} ] ] );
	}

	/**
	 * Retrieve the fields associated to the provided group type
	 *
	 * @param  {string} type The type of the group for which the fields should be retrieved
	 * @return {Array}
	 */
	getGroupFields = ( type ) => {
		const group = find( this.props.field.groups, ( groupItem ) => groupItem.name === type );

		return get( group, 'fields', [] );
	}

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
			getGroupFields: this.getGroupFields
		} );
	}
}

export default Complex;
