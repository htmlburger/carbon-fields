/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withHandlers, lifecycle } from 'recompose';
import { get, map, find, filter, includes, kebabCase } from 'lodash';

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
export const ContainerTabbed = ({
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

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerTabbed.propTypes = {
	container: PropTypes.object,
	tabs: PropTypes.array,
	handleTabClick: PropTypes.func,
};

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

			if (tabs.length) {
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
 * Enhance the component.
 *
 * @type {React.Component}
 */
const EnhancedContainerTabbed = enhance(ContainerTabbed);

/**
 * Validate the props.
 *
 * @type {Object}
 */
EnhancedContainerTabbed.propTypes = {
	container: PropTypes.shape({
		id: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
		})),
		settings: PropTypes.shape({
			tabs: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
		}),
	}),
	ui: PropTypes.shape({
		tabs_in_url: PropTypes.bool,
	}),
	switchContainerTab: PropTypes.func,
};

export default EnhancedContainerTabbed;
