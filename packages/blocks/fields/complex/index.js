/**
 * External dependencies.
 */
import produce from 'immer';
import { Fragment, Component } from '@wordpress/element';
import {
	BaseControl,
	Panel,
	PanelHeader,
	PanelBody
} from '@wordpress/components';
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
			name,
			value,
			onChange
		} = this.props;
		const data = {};

		data._type = group.name;

		group.fields.reduce( ( accumulator, field ) => {
			accumulator[ field.base_name ] = field.default_value;

			return accumulator;
		}, data );

		onChange( name, value.concat( data ) );
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
			<Fragment>
				<BaseControl label={ field.label } />

				<Panel>
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

					<PanelHeader>
						<ComplexInserter
							buttonText={ inserterButtonText }
							groups={ field.groups }
							onSelect={ this.handleAddGroup }
						/>
					</PanelHeader>
				</Panel>
			</Fragment>
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
