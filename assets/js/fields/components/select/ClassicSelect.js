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

			{
				field.options.map(({ value, label }, index) => {
					return <option key={index} value={value}>
						{label}
					</option>;
				})
			}
		</select>
	}

	handleChange(event) {
		let { setFieldValue, field } = this.props;
		setFieldValue(field.id, event.target.value);
	}
}