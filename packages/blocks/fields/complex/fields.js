/**
 * The external dependencies.
 */
import { TabPanel } from '@wordpress/components';

/**
 * The internal dependencies.
 */
import renderFields from '../../utils/render-fields';

/**
 * Renders the complex entry fields.
 *
 * @param  {Object}   props
 * @param  {Array}    props.value
 * @param  {number}   props.depth
 * @param  {Object}   props.button
 * @param  {Function} props.onChange
 * @return {Object}
 */
const Fields = ( {
	value,
	depth,
	button,
	onChange
} ) => (
	<TabPanel className="my-tab-panel"
		activeClass="active-tab"
		tabs={ value }
	>
		{ ( tab ) => tab.fields && tab.fields.length > 0
			? renderFields(
				tab.fields,
				tab.attributes,
				( childValue ) => onChange( tab.index, childValue ),
				depth + 1
			)
			: button
		}
	</TabPanel>
);

export default Fields;
