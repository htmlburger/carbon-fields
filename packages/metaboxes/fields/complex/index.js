/**
 * External dependencies.
 */
import of from 'callbag-of';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { select, withDispatch } from '@wordpress/data';
import { cloneDeep, uniqueId } from 'lodash';
import { toProps, withEffects } from 'refract-callbag';
import {
	map,
	merge,
	pipe
} from 'callbag-basics';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import getFieldsFromComplexGroup from '../../utils/get-fields-from-complex-group';
import flattenField from '../../utils/flatten-field';
import ComplexInserter from './inserter';
import ComplexGroup from './group';
import ComplexActions from './actions';

class ComplexField extends Component {
	/**
	 * Handles the selection of a group in the inserter.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleInserterSelect = ( group ) => {
		const {
			field,
			value,
			addFields,
			onChange
		} = this.props;

		// Create a copy of the group to prevent
		// incidentally modifications.
		group = cloneDeep( group );

		// Get a flat list of all fields for this group.
		const fields = [];

		group.id = uniqueId( 'carbon-fields-' );
		group.container_id = field.container_id;
		group.fields = group.fields.map( ( groupField ) => flattenField( groupField, field.container_id, fields ) );

		// Push the group to the field.
		addFields( fields );
		onChange( field.id, value.concat( group ) );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			onRemoveGroup
		} = this.props;

		return (
			<FieldBase field={ field }>
				<ComplexInserter groups={ field.groups } onSelect={ this.handleInserterSelect } />

				{ value.map( ( group, index ) => (
					<ComplexGroup
						key={ group.id }
						index={ index }
						group={ group }
						prefix={ `${ name }[${ index }]` }
						onRemove={ onRemoveGroup }
					/>
				) ) }

				<ComplexActions />
			</FieldBase>
		);
	}
}

/**
 * The function that controls the stream of side effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const [ removeGroup$, removeGroup ] = component.useEvent( 'removeGroup' );

		return merge(
			pipe(
				of( {
					onRemoveGroup: removeGroup
				} ),
				map( toProps )
			),

			pipe(
				removeGroup$,
				map( ( group ) => ( {
					type: 'REMOVE_GROUP',
					payload: group
				} ) )
			)
		);
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function( effect ) {
		switch ( effect.type ) {
			case 'REMOVE_GROUP':
				const allFields = select( 'carbon-fields/metaboxes' ).getFields();
				const groupFields = getFieldsFromComplexGroup( effect.payload, allFields );
				const field = allFields[ props.id ];
				const value = field.value.filter( ( group ) => group.id !== effect.payload.id );
				const fieldIds = groupFields.map( ( groupField ) => groupField.id );

				props.onChange( field.id, value );
				props.removeFields( fieldIds );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );
const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { addFields, removeFields } = dispatch( 'carbon-fields/metaboxes' );

	return {
		addFields,
		removeFields
	};
} );

addFilter( 'carbon-fields.complex-field.metabox', 'carbon-fields/metaboxes', ( OriginalComplexField ) => compose(
	withField,
	applyWithDispatch,
	applyWithEffects
)( ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange
			} ) => (
				<ComplexField
					field={ field }
					name={ name }
					value={ value }
					addFields={ props.addFields }
					removeFields={ props.removeFields }
					onChange={ handleChange }
					onRemoveGroup={ props.onRemoveGroup }
				/>
			) }
		</OriginalComplexField>
	);
} ) );
