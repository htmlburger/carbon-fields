/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';

class HiddenField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase field={ { ...field, label: null } } >
				<input
					type="hidden"
					name={ name }
					value={ value }
					className="hidden-text"
					{ ...field.attributes }
				/>
			</FieldBase>
		);
	}
}

export default HiddenField;
