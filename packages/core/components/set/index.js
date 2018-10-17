/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class SetField extends Component {
	isChecked = ( key, value ) => {
		return Array.isArray( value ) && value.indexOf( key ) > -1;
	}
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		return this.props.children( { isChecked: this.isChecked } );
	}
}

export default SetField;
