/**
 * The external dependencies.
 */
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

export default function renderFields(
	fields,
	attributes,
	onChange,
	depth = 0,
) {
	return fields.map( ( field, index ) => {
		const Field = getFieldType( field.type, 'block' );

		if ( ! Field ) {
			return null;
		}

		const value = get( attributes, field.base_name );

		return (
			<Field
				depth={ depth }
				key={ index }
				field={ field }
				value={ value }
				onChange={ onChange }
			/>
		);
	} );
}
