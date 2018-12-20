/**
 * External dependencies.
 */
import { setLocaleData } from '@wordpress/i18n';
import { doAction } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './store';
import './fields';

/**
 * Sets the locale data for the package type
 */
setLocaleData( window.cf.config.locale, 'carbon-fields-ui' );

/**
 * Public API.
 */
export { createRegistry } from './registry';
export { getFieldType, registerFieldType } from './registry/fields';
export { default as Field } from './components/field';
export { default as withFilters } from './hocs/with-filters';
export { default as withProps } from './hocs/with-props';
export { default as withValidation } from './hocs/with-validation';
export { default as withConditionalLogic } from './hocs/with-conditional-logic';
export { default as uniqueId } from './utils/unique-id';
export { default as fromSelector } from './utils/from-selector';

/**
 * Triggers the initialization of Carbon Fields.
 *
 * @return {void}
 */
export function initialize() {
	doAction( 'carbon-fields.init' );
}
