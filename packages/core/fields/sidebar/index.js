/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SidebarField extends Component {
	/**
	 * Defines the component state
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.state = {
			newSidebarName: ''
		};
	}

	/**
	 * Handles the change of the new sidebar input
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleNewSidebarNameChange = ( value ) => this.setState( { newSidebarName: value } )

	/**
	 * Checks if the sidebar has 'add new' selected
	 *
	 * @return {boolean}
	 */
	canAddNew = () => {
		const { field } = this.props;

		return field.value === '__add_new' || field.options.length === 1;
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			onChange,
			children
		} = this.props;

		if ( ! children ) {
			return null;
		}

		return children( {
			field: field,
			handleChange: onChange,
			canAddNew: this.canAddNew,
			handleNewSidebarNameChange: this.handleNewSidebarNameChange,
			newSidebarName: this.state.newSidebarName
		} );
	}
}

export default SidebarField;
