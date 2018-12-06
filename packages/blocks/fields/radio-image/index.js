/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import './style.scss';
import { withProps } from '@carbon-fields/core';

addFilter( 'carbon-fields.radio_image.block', 'carbon-fields/blocks', compose(
	withProps( ( props ) => {
		return {
			...props,
			field: {
				...props.field,
				options: props.field.options.map( ( option ) => ( {
					...option,
					label: ( <img className="cf-radio-image__image" src={ option.label } /> )
				} ) )
			}
		};
	} )
) );
