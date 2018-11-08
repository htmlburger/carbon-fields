/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import cx from 'classnames';
import {
	map,
	pipe,
	merge,
	combine
} from 'callbag-basics';
import of from 'callbag-of';
import { withEffects, toProps } from 'refract-callbag';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

class FileField extends Component {
	/**
	 * Lifecycle hook
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.props.initMediaBrowser();
	}

	/**
	 * Lifecycle hook
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.props.destroyMediaBrowser();
	}

	/**
	 * Handles the clear action of the fiel field
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleClear = () => {
	}

	/**
	 * Handles the open action of the fiel field
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleOpen = () => {
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			buttonLabel,
			openMediaBrowser
		} = this.props;

		return (
			<FieldBase field={ field }>
				<div className="carbon-attachment">
					<input
						type="hidden"
						id={ field.id }
						name={ field.base_name }
						value={ field.value }
						readOnly />

					<div className={ cx( 'carbon-description', { hidden: ! field.value } ) }>
						<div className={ cx( 'carbon-attachment-preview', { hidden: ! field.value_meta.thumb_url } ) }>
							<img src={ field.value_meta.thumb_url } className="thumbnail-image" />

							<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={ this.handleClear }></div>
						</div>

						<input
							type="text"
							className="carbon-attachment-file-name"
							value={ field.value_meta.file_url ? field.value_meta.file_url : '' }
							readOnly />
					</div>

					<span className="button" onClick={ openMediaBrowser }>
						{ buttonLabel }
					</span>
				</div>
			</FieldBase>
		);
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const actions = [
			{ event: 'initMediaBrowserEvent', prop: 'initMediaBrowser', type: 'INIT_MEDIA_BROWSER' },
			{ event: 'openMediaBrowserEvent', prop: 'openMediaBrowser', type: 'OPEN_MEDIA_BROWSER' },
			{ event: 'destroyMediaBrowserEvent', prop: 'destroyMediaBrowser', type: 'DESTROY_MEDIA_BROWSER' }
		].map( ( actionData ) => {
			const [ actionChannel$, action ] = component.useEvent( actionData.event );

			return {
				...actionData,
				action,
				channel$: actionChannel$
			};
		} );

		const combined$ = pipe(
			combine( ...actions.map( ( { action, prop } ) => of( {
				action,
				prop
			} ) ) ),
			map( ( combinedActions ) => toProps(
				...combinedActions.map( ( { action, prop } ) => ( {
					[ prop ]: action
				} ) )
			) )
		);

		return merge(
			combined$,
			...actions.map( ( { channel$, type } ) => pipe(
				channel$,
				map( ( payload ) => ( {
					type,
					payload
				} ) )
			) )
		);
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler() {
	return function( effect ) {
		switch ( effect.type ) {
			case 'INIT_MEDIA_BROWSER':
				break;
			case 'OPEN_MEDIA_BROWSER':
				break;
			case 'DESTROY_MEDIA_BROWSER':
				break;
		}
	};
}

const applyWitEffects = withEffects( handler )( aperture );

addFilter( 'carbon-fields.file-field.metabox', 'carbon-fields/metaboxes', ( OriginalFileField ) => compose(
	withField,
	applyWitEffects
)( ( props ) => {
	return (
		<OriginalFileField { ...props }>
			{ ( { field, handleChange } ) => (
				<FileField
					field={ field }
					buttonLabel={ __( 'Select File' ) }
					onChange={ handleChange }
					initMediaBrowser={ props.initMediaBrowser }
					openMediaBrowser={ props.openMediaBrowser }
					destroyMediaBrowser={ props.destroyMediaBrowser }
				/>
			) }
		</OriginalFileField>
	);
} ) );
