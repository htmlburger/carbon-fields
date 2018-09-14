import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
	render() {
		let {field, name} = this.props
		return <select
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			onChange={this.handleChange.bind(this)}
			{...field.attributes}>

			{this.renderOptions(field.options)}
		</select>
	}

	renderOptions(options) {
		return options.map((option, index) => {
			if (typeof option.value === 'object') {
				return <optgroup label={option.label} key={index}>
					{this.renderOptions(option.value)}
				</optgroup>;
			}

			return this.renderOption(option, index);
		})
	}

	renderOption(option, index) {
		return <option key={index} value={option.value}>
			{option.label}
		</option>;
	}

	handleChange(event) {
		let { setFieldValue, field } = this.props;
		setFieldValue(field.id, event.target.value);
	}
}