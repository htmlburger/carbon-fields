/**
 * External dependencies.
 */
import { createRef, Component } from '@wordpress/element';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import Select from 'react-select';

/**
 * The internal dependencies.
 */
import './style.scss';
import NoOptions from '../../components/no-options';

class MultiselectField extends Component {
	/**
	 * Define the project base properties
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.wrapper = createRef();

		this.state = {
			cache: null
		};
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.setState( {
			cache: createCache( {
				key: 'cf-multiselect',
				container: this.wrapper.current.ownerDocument.head
			} )
		} );
	}

	/**
	 * Handles the change of the input.
	 *
	 * @param {Object} selected
	 * @return {void}
	 */
	handleChange = ( selected ) => {
		const {
			id,
			onChange
		} = this.props;

		onChange( id, selected?.map( ( item ) => item.value ) ?? [] );
	}

	/**
	 * Filter the field options which are contained as values
	 *
	 * @param {Array} values
	 * @return {Array}
	 */
	filterValues = ( values ) => {
		const { field } = this.props;

		return values.map( ( value ) => field.options.find( ( option ) => option.value === value ) );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		const { cache } = this.state;

		return (
			<div ref={ this.wrapper }>
				{ field.options.length > 0
					? cache && (
						<CacheProvider value={ cache }>
							<Select
								id={ id }
								name={ name }
								value={ this.filterValues( value ) }
								options={ field.options }
								delimiter={ field.valueDelimiter }
								onChange={ this.handleChange }
								className="cf-multiselect__select"
								classNamePrefix="cf-multiselect"
								isMulti
							/>
						</CacheProvider>
					)
					: <NoOptions />
				}
			</div>
		);
	}
}

export default MultiselectField;
