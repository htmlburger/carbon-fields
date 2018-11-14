/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import NotSupportedField from '../../components/not-supported-field';

addFilter( 'carbon-fields.sidebar-field.block', 'carbon-fields/blocks', () => ( props ) => <NotSupportedField type={ props.field.type } /> );
