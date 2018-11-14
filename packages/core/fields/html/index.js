/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';

class HtmlField extends Component {
	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ field } >
				<div dangerouslySetInnerHTML={ { __html: field.html } }></div>
			</FieldBase>
		);
	}
}

export default HtmlField;
