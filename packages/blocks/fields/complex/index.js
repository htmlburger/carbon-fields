/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Panel, PanelHeader } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import ComplexInserter from './inserter';

class ComplexField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, inserterButtonText } = this.props;

		return (
			<Panel>
				<PanelHeader label={ field.label }>
					<ComplexInserter
						buttonText={ inserterButtonText }
						groups={ field.groups }
					/>
				</PanelHeader>
			</Panel>
		);
	}
}

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				value,
				inserterButtonText
			} ) => {
				return (
					<ComplexField
						field={ field }
						value={ value }
						inserterButtonText={ inserterButtonText }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
