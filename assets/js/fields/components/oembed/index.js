/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty, debounce } from 'lodash';
import { compose, withHandlers, setStatic, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import OembedPreview from 'fields/components/oembed/preview';
import SearchInput from 'fields/components/oembed/search-input';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_OEMBED } from 'fields/constants';

/**
 * Render a Google-powered map with an address search field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.handleSearchSubmit
 * @return {React.Element}
 */
const OembedField = ({
	name,
	field,
	embedCode,
	embedType,
	isLoading,
	error,
	provider,
	handleSearchSubmit,
}) => {
	return <Field field={field}>
		<input
			type="hidden"
			id={field.id}
			name={name}
			value={field.value}
			readOnly />

		<SearchInput
			term={field.value}
			onSubmit={handleSearchSubmit} />

		{
			isLoading || error
			? <div className="carbon-oembed-loader">
				{ isLoading ? <span className="spinner is-active" /> : <p>{error}</p> }
			</div>
			: null
		}

		{
			embedCode
			? <OembedPreview
				html={embedCode}
				type={embedType}
				provider={provider}
			/> : null
		}
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
OembedField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		value: PropTypes.string,
	})
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(),

	/**
	 * Control the visibility of the colorpicker.
	 */
	withState('embedCode', 'setEmbedCode', null),
	withState('embedType', 'setEmbedType', null),
	withState('provider', 'setProvider', null),
	withState('isLoading', 'setIsLoading', false),
	withState('error', 'setError', null),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleSearchSubmit: ({ field, setEmbedCode, setEmbedType, setIsLoading, setError, setFieldValue, isLoading, setProvider }) => value => {
			if (isLoading) {
				return;
			}

			if (field.value !== value) {
				setFieldValue(field.id, value);
			}

			setEmbedCode(null);
			setError(null);

			if (isEmpty(value)) {
				return;
			}

			setIsLoading(true);

			let request = $.get(wpApiSettings.root + 'oembed/1.0/proxy', {
				url: value,
				_wpnonce: wpApiSettings.nonce,
			});

			request.done(({ html, type, provider_name }) => {
				setEmbedType(type);
				setProvider(provider_name);
				setEmbedCode(html);
				setIsLoading(false);
			});

			request.fail(() => {
				setError(carbonFieldsL10n.field.oembedNotFound);
				setIsLoading(false);
			});
		},
	}),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				ui,
				setupField,
				handleSearchSubmit,
			} = this.props;

			setupField(field.id, field.type, ui);

			const domNode = ReactDOM.findDOMNode(this);

			const i = setInterval(() => {
				if (domNode.getBoundingClientRect().width > 0) {
					clearInterval(i);
					handleSearchSubmit(field.value);
				}
			}, 100);
		}
	}),
);

export default setStatic('type', [
	TYPE_OEMBED,
])(enhance(OembedField));
