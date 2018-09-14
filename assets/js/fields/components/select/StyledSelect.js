import React from 'react';
import PropTypes from 'prop-types';

import Select, { components } from 'react-select';

export default class extends React.Component {
	render() {
		let { field, name } = this.props;

		return <Select
				name={name}
				value={this.getFieldValueForDisplay()}
				options={field.options}
				disabled={!field.ui.is_visible}
				onChange={this.handleChange.bind(this)}
				classNamePrefix='carbon-select'
			/>
	}

	componentWillMount() {
		this.flattenedOptions = [];
		this.flattenOptionsArray(this.props.field.options);
	}

	/**
	 * Flattens the options array
	 *
	 * @param      {object}  options  The options
	 */
	flattenOptionsArray(options) {
		options.forEach(option => {
			if (option.options) {
				this.flattenOptionsArray(option.options);
			} else {
				this.flattenedOptions.push(option);
			}
		})
	}

	handleChange(select) {
		let { setFieldValue, field } = this.props;
		setFieldValue(field.id, select.value);
	}

	getFieldValueForDisplay() {
		let { field } = this.props;
		return this.flattenedOptions.filter(option => {
			return option.value == field.value;
		});
	}
}