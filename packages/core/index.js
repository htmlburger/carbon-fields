/**
 * Exposes the public interface.
 */
export * from './registry/base';
export * from './registry/fields';
export { default as GoogleMap } from './fields/map/google-map';
export { default as uniqueId } from './utils/unique-id';

/**
 * Internal dependencies.
 */
import './fields';
