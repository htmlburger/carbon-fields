/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

class HiddenField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ { ...field, label: null } } >
				<input
					type="hidden"
					id={ field.id }
					name={ field.base_name }
					value={ field.value }
					className="hidden-text"
					{ ...field.attributes }
				/>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.hidden-field.metabox', 'carbon-fields/metaboxes', ( OriginalHiddenField ) => withField( ( props ) => {
	return (
		<OriginalHiddenField { ...props }>
			{ ( { field } ) => (
				<HiddenField field={ field } />
			) }
		</OriginalHiddenField>
	);
} ) );
