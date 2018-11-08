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
		const { field } = this.props;

		return (
			<Panel>
				<PanelHeader label={ field.label }>
					<ComplexInserter groups={ field.groups } />
				</PanelHeader>
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
