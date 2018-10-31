/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

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

addFilter( 'carbon-fields.separator-field.metabox', 'carbon-fields/metaboxes', ( OriginalSeparatorField ) => withStore( ( props ) => {
	return (
		<OriginalSeparatorField { ...props }>
			{ ( { field } ) => (
				<SeparatorField field={ field } />
			) }
		</OriginalSeparatorField>
	);
} ) );
