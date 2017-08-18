/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { forEach } from 'lodash';
import { compose, withHandlers, setStatic, withProps, withState } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SearchInput from 'fields/components/search-input';
import OembedPreview from 'fields/components/oembed/preview';
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
	isLoading,
	error,
	handleSearchSubmit,
}) => {
	return <Field field={field}>
		<SearchInput
			name={`${name}[address]`}
			term={field.value}
			disabled={!field.ui.is_visible}
			onSubmit={handleSearchSubmit} />

		{
			isLoading
			? <div className="carbon-oembed-loader">
				<span className="spinner is-active" />
			</div>
			: null
		}

		{
			error
			? <div className="carbon-oembed-loader">
				<p>{error}</p>
			</div>
			: null
		}

		{
			embedCode
			? <OembedPreview
				html={embedCode}
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
	withState('isLoading', 'setIsLoading', false),
	withState('error', 'setError', null),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				ui,
				setupField,
			} = this.props;

			setupField(field.id, field.type, ui);
		},
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleSearchSubmit: ({ field, setEmbedCode, setIsLoading, setError }) => value => {
			let { embedCode } = field;

			setEmbedCode(null);
			setIsLoading(true);

			let postData = {
				url: value,
				_wpnonce: wpApiSettings.nonce,
			};

			let request = $.get(wpApiSettings.root + 'oembed/1.0/proxy', postData);

			request.done(({ html, type }) => {
				setEmbedCode(html);
			});

			request.fail(() => {
				setError('An error occured. Please try again later..')
			});

			request.always(() => {
				setIsLoading(false);
			});
		},
	}),
);

export default setStatic('type', [
	TYPE_OEMBED,
])(enhance(OembedField));
