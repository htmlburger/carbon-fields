/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * The internal dependencies.
 */
import fieldFactory from 'fields/factory';

/**
 * The base component used to render the containers.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.fields
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
const ContainerBase = ({ container, fields, children }) => {
	const classes = [
		'carbon-container',
		`carbon-container-${container.id}`,
		`carbon-container-${container.type}`,
		...container.classes,
	];

	return <div className={cx(classes)}>
		{children}

		{
			fields.map(({ id, type }) => fieldFactory(type, { id }))
		}
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ContainerBase.propTypes = {
	container: PropTypes.shape({
		id: PropTypes.string,
		type: PropTypes.string,
		classes: PropTypes.arrayOf(PropTypes.string),
	}),

	fields: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		type: PropTypes.string,
	})),

	children: PropTypes.element,
};

export default ContainerBase;
