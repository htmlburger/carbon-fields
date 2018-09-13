import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

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

	handleChange(select) {
		let { setFieldValue, field } = this.props;
		this.fieldValue = select;

		setFieldValue(field.id, select.value);
	}

	getFieldValueForDisplay() {
		let { field } = this.props;

		return field.options.filter(option => option.value == field.value);
	}
}