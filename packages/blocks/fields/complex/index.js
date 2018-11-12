/**
 * External dependencies.
 */
import cx from 'classnames';
import produce from 'immer';
import nanoid from 'nanoid';
import { Component } from '@wordpress/element';
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
	findIndex,
	get,
	set,
	cloneDeep,
	without
} from 'lodash';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';
import ComplexInserter from './inserter';
import ComplexTabs from './tabs';
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
			onChange,
			onTabsChange
		} = this.props;
		const data = {};

		data._id = nanoid();
		data._type = group.name;

		group.fields.reduce( ( accumulator, field ) => {
			accumulator[ field.base_name ] = field.default_value;

			return accumulator;
		}, data );

		onChange( name, value.concat( data ) );
		onTabsChange( data._id );
	}

	/**
	 * Handles cloning of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleCloneGroup = ( groupId ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		onChange( name, produce( value, ( draft ) => {
			const group = find( draft, [ '_id', groupId ] );
			const index = draft.indexOf( group );
			const clonedGroup = cloneDeep( group );

			clonedGroup._id = nanoid();

			draft.splice( index, 0, clonedGroup );
		} ) );
	}

	/**
	 * Handles removing of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleRemoveGroup = ( groupId ) => {
		const {
			name,
			value,
			onChange
		} = this.props;

		const groupIndex = findIndex( value, [ '_id', groupId ] );

		onChange( name, produce( value, ( draft ) => {
			draft.splice( groupIndex, 1 );
		} ) );

		this.setState( ( { collapsedGroups } ) => ( {
			collapsedGroups: without( collapsedGroups, groupId )
		} ) );
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
				collapsedGroups = value.map( ( group ) => group._id );
			} else {
				collapsedGroups = [];
			}

			return { collapsedGroups };
		} );
	}

	/**
	 * Handles expanding/collapsing of group.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleToggleGroup = ( groupId ) => {
		this.setState( ( { collapsedGroups } ) => {
			if ( collapsedGroups.indexOf( groupId ) > -1 ) {
				collapsedGroups = without( collapsedGroups, groupId );
			} else {
				collapsedGroups = [ ...collapsedGroups, groupId ];
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
			isTabbed,
			currentTab,
			isMaximumReached,
			inserterButtonText,
			onTabsChange
		} = this.props;

		const classes = cx(
			`cf-blocks-complex--${ field.layout }`,
			{
				'cf-blocks-complex--multiple-groups': field.groups.length > 1
			}
		);

		const tabs = value.map( ( { _id, _type } ) => {
			const group = find( field.groups, [ 'name', _type ] );
			const label = get( group, 'label', '' );

			return {
				id: _id,
				label
			};
		} );

		return (
			<FieldBase className={ classes } field={ field }>
				<BaseControl label={ field.label } />

				<Panel>
					{ isTabbed && (
						<ComplexTabs
							items={ tabs }
							current={ currentTab }
							onChange={ onTabsChange }
						>
							{ ! isMaximumReached && (
								<ComplexInserter
									buttonText="+"
									groups={ field.groups }
									onSelect={ this.handleAddGroup }
								/>
							) }
						</ComplexTabs>
					) }

					<PanelBody>
						{ value.map( ( {
							_id,
							_type,
							...values
						}, index ) => {
							const group = find( field.groups, [ 'name', _type ] );

							return (
								<ComplexGroup
									key={ _id }
									id={ _id }
									index={ index }
									group={ group }
									values={ values }
									hidden={ isTabbed && currentTab !== _id }
									collapsed={ collapsedGroups.indexOf( _id ) > -1 }
									onChildChange={ this.handleChildFieldChange }
									onToggle={ this.handleToggleGroup }
									onClone={ this.handleCloneGroup }
									onRemove={ this.handleRemoveGroup }
								/>
							);
						} ) }
					</PanelBody>

					<PanelHeader>
						{ ! isMaximumReached && (
							<ComplexInserter
								buttonText={ inserterButtonText }
								groups={ field.groups }
								onSelect={ this.handleAddGroup }
							/>
						) }

						<Button isDefault onClick={ this.handleToggleAllGroups }>
							{
								collapsedGroups.length === value.length
									? 'Expand All'
									: 'Collapse All'
							}
						</Button>
					</PanelHeader>
				</Panel>
			</FieldBase>
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
				isTabbed,
				currentTab,
				isMaximumReached,
				inserterButtonText,
				handleChange,
				handleTabsChange
			} ) => {
				return (
					<ComplexField
						field={ field }
						name={ name }
						value={ value }
						isTabbed={ isTabbed }
						currentTab={ currentTab }
						isMaximumReached={ isMaximumReached }
						inserterButtonText={ inserterButtonText }
						onChange={ handleChange }
						onTabsChange={ handleTabsChange }
					/>
				);
			} }
		</OriginalComplexField>
	);
} );
