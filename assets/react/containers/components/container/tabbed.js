/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withProps, withHandlers, lifecycle } from 'recompose';
import { get, map, find, includes, kebabCase } from 'lodash';

/**
 * The internal dependencies.
 */
import ContainerTabsNav from 'containers/components/container/tabs-nav';
import ContainerTabs from 'containers/components/container/tabs';
import ContainerNonce from 'containers/components/container/nonce';

/**
 * Render a tabbed version of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.tabs
 * @param  {Function}      props.handleTabClick
 * @return {React.Element}
 */
const ContainerTabbed = ({ container, tabs, handleTabClick }) => {
	return <div className="carbon-tabs carbon-tabs-stacked">
		<ContainerNonce container={container} />

		<ContainerTabsNav
			tabs={tabs}
			onClick={handleTabClick} />

		<ContainerTabs
			container={container}
			tabs={tabs} />
	</div>;
};

/**
 * The props that will be passed to the component.
 *
 * @param  {Object} props
 * @param  {Object} props.container
 * @return {Object}
 */
const props = ({ container }) => {
	const tabs = map(container.settings.tabs, (tab, name) => {
		const id = kebabCase(name);
		const fields = container.fields.filter(({ name }) => tab.includes(name));
		const active = get(container, 'ui.current_tab', null) === id;

		return {
			id,
			name,
			active,
			fields,
		};
	});

	return {
		tabs,
	};
};

/**
 * The lifecycle hooks that will be passed to the component.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		const {
			container,
			ui,
			tabs,
			switchContainerTab
		} = this.props;

		if (!ui.current_tab) {
			let tabId;

			if (ui.tabs_in_url) {
				const hash = window.location.hash.replace(/^#!/, '');
				const tab = find(tabs, ['id', hash]);

				if (tab) {
					tabId = tab.id;
				}
			}

			if (!tabId) {
				tabId = tabs[0].id;
			}

			switchContainerTab(container.id, tabId);
		}
	}
};

/**
 * Handle the `click` event from the tabs navigation.
 *
 * @param  {Object}   props
 * @param  {Object}   props.container
 * @param  {Function} props.switchContainerTab
 * @return {Function}
 */
const handleTabClick = ({ container, switchContainerTab }) => tabId => switchContainerTab(container.id, tabId);

export default compose(
	withProps(props),
	lifecycle(hooks),
	withHandlers({ handleTabClick })
)(ContainerTabbed);
