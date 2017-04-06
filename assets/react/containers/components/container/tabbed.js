/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withProps, withHandlers, lifecycle } from 'recompose';
import { get, map, find, filter, includes, kebabCase } from 'lodash';

/**
 * The internal dependencies.
 */
import ContainerTabsNav from 'containers/components/container/tabs-nav';
import ContainerTabs from 'containers/components/container/tabs';
import ContainerNonce from 'containers/components/container/nonce';

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * The props passed to the component.
	 */
	withProps(({ container }) => {
		const tabs = map(container.settings.tabs, (tab, name) => {
			const id = kebabCase(name);
			const fields = filter(container.fields, ({ name }) => tab.includes(name));
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
	}),

	/**
	 * The lifecycle hooks passed to the component.
	 */
	lifecycle({
		componentDidMount() {
			const {
				container,
				tabs,
				ui,
				switchContainerTab
			} = this.props;

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
		},
	}),

	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleTabClick: ({ container, switchContainerTab }) => tabId => switchContainerTab(container.id, tabId),
	})
);

/**
 * Render a tabbed version of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.tabs
 * @param  {Function}      props.handleTabClick
 * @return {React.Element}
 */
const ContainerTabbed = ({
	container,
	tabs,
	handleTabClick
}) => {
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

export default enhance(ContainerTabbed);
