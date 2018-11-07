/**
 * External dependencies.
 */
import of from 'callbag-of';
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { select, dispatch } from '@wordpress/data';
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
import ComplexGroup from './group';

class ComplexField extends Component {
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
			<FieldBase field={ field } >
				{ value.map( ( group, index ) => (
					<ComplexGroup
						key={ group.id }
						index={ index }
						group={ group }
						prefix={ `${ name }[${ index }]` }
						onRemove={ onRemoveGroup }
					/>
				) ) }
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

				dispatch( 'carbon-fields/metaboxes' ).removeFields( fieldIds );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );

addFilter( 'carbon-fields.complex-field.metabox', 'carbon-fields/metaboxes', ( OriginalComplexField ) => compose(
	withField,
	applyWithEffects
)( ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				name,
				value
			} ) => (
				<ComplexField
					field={ field }
					name={ name }
					value={ value }
					onRemoveGroup={ props.onRemoveGroup }
				/>
			) }
		</OriginalComplexField>
	);
} ) );
