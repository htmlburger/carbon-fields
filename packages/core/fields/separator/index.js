/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';

class SeparatorField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ { ...field, label: null } } >
				<h3>{ field.label }</h3>
			</FieldBase>
		);
	}
}

export default SeparatorField;
