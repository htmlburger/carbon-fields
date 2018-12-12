/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import './style.scss';

class SeparatorField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<h3>{ this.props.field.label }</h3>
		);
	}
}

export default SeparatorField;
