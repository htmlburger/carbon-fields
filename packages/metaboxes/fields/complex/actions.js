/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

class ComplexActions extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		return (
			<div className="cf-complex__actions">
				<button type="button" className="cf-complex__action">
					Add entry
				</button>

				<button type="button" className="cf-complex__action">
					Toggle groups
				</button>
			</div>
		);
	}
}

export default ComplexActions;
