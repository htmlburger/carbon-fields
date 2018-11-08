/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Panel } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

class ComplexField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<Panel header={ field.label }>

			</Panel>
		);
	}
}

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( { field, value } ) => {
				return (
					<ComplexField field={ field } value={ value } />
				);
			} }
		</OriginalComplexField>
	);
} );
