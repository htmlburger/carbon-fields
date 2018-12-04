/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';

/**
 * Carbon Fields dependencies.
 */
import { Field, withFilters } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import withField from '../../hocs/with-field';

export default compose(
	withField,
	withFilters( 'carbon-fields.field-wrapper.metabox' )
)( Field );
