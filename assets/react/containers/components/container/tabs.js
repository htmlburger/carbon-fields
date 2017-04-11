/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * The internal dependencies.
 */
import ContainerBase from 'containers/components/container/base';

/**
 * Render the tabs of the container.
 *
 * @param  {Object}        props
 * @param  {Object}        prop.container
 * @param  {Array}         prop.tabs
 * @return {React.Element}
 */
const ContainerTabs = ({ container, tabs }) => {
	return <div className="carbon-tabs-body">
		{
			tabs.map(({ id, active, fields }) => (
				<div key={id} className={cx('carbon-fields-collection', 'carbon-tab', { active })}>
					<ContainerBase
						container={container}
						fields={fields} />
				</div>
			))
		}
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerTabs.propTypes = {
	container: PropTypes.object,
	tabs: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		active: PropTypes.bool,
		fields: PropTypes.array,
	})),
};

export default ContainerTabs;
