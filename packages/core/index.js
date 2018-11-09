/**
 * Exposes the public interface.
 */
export * from './registry/base';
export * from './registry/fields';
export { default as GoogleMap } from './fields/map/google-map';

/**
 * Internal dependencies.
 */
import './fields';
