/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';

/**
 * The internal dependencies.
 */
import fieldFactory from 'fields/factory';

/**
 * The base component used to render the containers.
 *
 * @abstract
 * @param  {Object}        props
 * @param  {String}        props.id
 * @param  {Object}        props.container
 * @return {React.Element}
 */
const Container = ({ id, container }) => {
	return <div className={cx('carbon-container', `carbon-container-${id}`)}>
		{
			container.fields.map(({ id, type }) => fieldFactory(type, { id }))
		}
	</div>;
};

export default Container;
