/**
 * External dependencies.
 */
import produce from 'immer';
import { Component } from '@wordpress/element';
import { Panel, PanelHeader, PanelBody } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { find, set } from 'lodash';

/**
 * Internal dependencies.
 */
import ComplexInserter from './inserter';
import ComplexGroup from './group';

class ComplexField extends Component {
	/**
	 * Handles the change of a child field.
	 *
	 * @param  {string} childName
	 * @param  {mixed}  childValue
	 * @return {void}
	 */
	handleChildFieldChange = ( childName, childValue ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		onChange( name, produce( value, ( draft ) => {
			const path = childName.split( '.' );
			const index = parseInt( path.shift(), 10 );
			const group = draft[ index ];

			set( group, path, childValue );
		} ) );
	}

	/**
	 * Handles adding of a group.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleAddGroup = ( group ) => {
		const {
			field,
			value,
			onChange
		} = this.props;
		const data = {};

		data._type = group.name;

		group.fields.reduce( ( accumulator, groupfield ) => {
			accumulator[ groupfield.base_name ] = groupfield.default_value;

			return accumulator;
		}, data );

		onChange( field.base_name, value.concat( data ) );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			inserterButtonText
		} = this.props;

		return (
			<Panel>
				<PanelHeader label={ field.label }>
					<ComplexInserter
						buttonText={ inserterButtonText }
						groups={ field.groups }
						onSelect={ this.handleAddGroup }
					/>
				</PanelHeader>

				<PanelBody>
					{ value.map( ( { _type, ...values }, index ) => {
						const group = find( field.groups, [ 'name', _type ] );

						return (
							<ComplexGroup
								key={ index }
								index={ index }
								group={ group }
								values={ values }
								onChildChange={ this.handleChildFieldChange }
							/>
						);
					} ) }
				</PanelBody>
			</Panel>
		);
	}
}

addFilter( 'carbon-fields.complex-field.block', 'carbon-fields/blocks', ( OriginalComplexField ) => ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				name,
				value,
				inserterButtonText,
				handleChange
			} ) => {
				return (
					<ComplexField
						field={ field }
						name={ name }
						value={ value }
						inserterButtonText={ inserterButtonText }
						onChange={ handleChange }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
