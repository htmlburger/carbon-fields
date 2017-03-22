/**
 * The external dependencies.
 */
import $ from 'jquery';
import fecha from 'fecha';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class DateTimePicker extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			type,
			options,
			value,
			storageFormat
		} = this.props;

		this.node = ReactDOM.findDOMNode(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		// Initialize the plugin and setup the change listener.
		this.$input = $('input[type="text"]', this.node)
			[type]({
				changeMonth: true,
				changeYear: true,
				showOn: 'both',
				hideIfNoPrevNext: true,
				beforeShow() {
					$('#ui-datepicker-div', this.node).addClass('carbon-jquery-ui');
				},
				onSelect: this.handleInputChange,
				...options,
			})
			.on('change', this.handleInputChange);

		// Add our styles to the button.
		$('button', this.node).addClass('button');

		// Convert the initial value to the correct format.
		if (value) {
			this.$input[type]('setDate', fecha.parse(value, storageFormat));
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.$input.off('change', this.handleInputChange);
		this.$input[this.props.type]('destroy');

		this.node = null;
		this.$input = null;
	}

	/**
	 * Render an empty `div` that will act as a placeholder.
	 *
	 * @return {React.Element}
	 */
	render() {
		return React.Children.only(this.props.children);
	}

	/**
	 * We use this raw listener to avoid complex date parsing
	 * in the parent component.
	 *
	 * @return {void}
	 */
	handleInputChange() {
		// TODO: Debounce this function because `DateTime` & `Time` fields
		// will trigger up to 4 `change` events on initial render.
		this.props.onChange(this.$input.datepicker('getDate'));
	}
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
DateTimePicker.propTypes = {
	type: PropTypes.oneOf([
		'datepicker',
		'datetimepicker',
		'timepicker',
	]).isRequired,
	value: PropTypes.string,
	options: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default DateTimePicker;

