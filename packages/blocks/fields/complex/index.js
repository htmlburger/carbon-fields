/**
 * External dependencies.
 */
import produce from 'immer';
import { Fragment, Component } from '@wordpress/element';
import {
	BaseControl,
	Button,
	Panel,
	PanelHeader,
	PanelBody
} from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import {
	find,
	set,
	cloneDeep,
	without
} from 'lodash';

/**
 * Internal dependencies.
 */
import ComplexInserter from './inserter';
import ComplexGroup from './group';

class ComplexField extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		collapsedGroups: []
	};

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
	 * Handles adding of group.
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
	 * Handles cloning of group.
	 *
	 * @param  {number} groupIndex
	 * @return {void}
	 */
	handleCloneGroup = ( groupIndex ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		onChange( name, produce( value, ( draft ) => {
			draft.splice( groupIndex, 0, cloneDeep( draft[ groupIndex ] ) );
		} ) );
	}

	/**
	 * Handles removing of group.
	 *
	 * @param  {number} groupIndex
	 * @return {void}
	 */
	handleRemoveGroup = ( groupIndex ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		onChange( name, produce( value, ( draft ) => {
			draft.splice( groupIndex, 1 );
		} ) );

		this.handleToggleGroup( groupIndex );
	}

	/**
	 * Handles expanding/collapsing of all groups.
	 *
	 * @return {void}
	 */
	handleToggleAllGroups = () => {
		const { value } = this.props;

		this.setState( ( { collapsedGroups } ) => {
			if ( collapsedGroups.length !== value.length ) {
				collapsedGroups = value.map( ( group, index ) => index );
			} else {
				collapsedGroups = [];
			}

			return { collapsedGroups };
		} );
	}

	/**
	 * Handles expanding/collapsing of group.
	 *
	 * @param  {number} groupIndex
	 * @return {void}
	 */
	handleToggleGroup = ( groupIndex ) => {
		this.setState( ( { collapsedGroups } ) => {
			if ( collapsedGroups.indexOf( groupIndex ) > -1 ) {
				collapsedGroups = without( collapsedGroups, groupIndex );
			} else {
				collapsedGroups = [ ...collapsedGroups, groupIndex ];
			}

			return { collapsedGroups };
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { collapsedGroups } = this.state;

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
									collapsed={ collapsedGroups.indexOf( index ) > -1 }
									onChildChange={ this.handleChildFieldChange }
									onToggle={ this.handleToggleGroup }
									onClone={ this.handleCloneGroup }
									onRemove={ this.handleRemoveGroup }
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

						<Button isDefault onClick={ this.handleToggleAllGroups }>
							{
								collapsedGroups.length === value.length
									? 'Expand All'
									: 'Collapse All'
							}
						</Button>
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
