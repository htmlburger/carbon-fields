import React from 'react';
import cx from 'classnames';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import ComplexGroup from 'fields/components/complex-group';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const ComplexField = ({ field }) => {
	return <Field field={field}>
		<div className={cx('carbon-subcontainer', 'carbon-grid', { 'multiple-groups': field.multiple_groups })}>
			<div className={cx('groups-wrapper', `layout-${field.layout}`)}>
				<div className="carbon-groups-holder">
					{field.value.map((group, index) => <ComplexGroup key={index} complex={field} group={group} index={index} />)}
				</div>
				<div className="clear"></div>
			</div>
		</div>
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(ComplexField);

