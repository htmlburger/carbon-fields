/**
 * The internal dependencies.
 */
import optionPage from 'containers/sagas/common/option-page';
import { TYPE_NETWORK } from 'containers/constants';

/**
 * Start to work.
 *
 * @param  {Object} store
 * @return {void}
 */
export default function* foreman(store) {
	yield optionPage(store, TYPE_NETWORK, 'network-form');
}
