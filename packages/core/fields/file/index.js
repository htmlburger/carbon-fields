/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
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
import './style.scss';
import FieldBase from '../../components/field-base';

class FileField extends Component {
	/**
	 * Lifecycle hook
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.props.initMediaBrowser( this.handleSelect );
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
	 * Handles the clear action of the file field
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleClear = () => {
		const { id, onChange } = this.props;

		onChange( id, null );
	}

	/**
	 * Handles the file selection.
	 *
	 * @param  {Object} file
	 * @return {void}
	 */
	handleSelect = ( file ) => {
		const { id, onChange } = this.props;

		onChange( id, file );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			field,
			value,
			name,
			buttonLabel,
			openMediaBrowser,
			fileData
		} = this.props;

		return (
			<FieldBase id={ id } field={ field }>
				<div className="cf-file__inner">
					<input
						type="hidden"
						name={ name }
						value={ value }
						readOnly
					/>

					{ value && (
						<div className="cf-file__content">
							<div className="cf-file__preview" >
								<img src={ fileData.url } className="cf-file__image" />

								<button type="button" className="cf-file__remove dashicons-before dashicons-no-alt" onClick={ this.handleClear }></button>
							</div>

							<span className="cf-file__name" title={ fileData.filename }>
								{ fileData.filename }
							</span>
						</div>
					) }

					<button type="button" className="button cf-file__browse" onClick={ openMediaBrowser }>
						{ buttonLabel }
					</button>
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
			map( ( combinedActions ) => toProps( combinedActions.reduce(
				( acc, curr ) => ( {
					...acc,
					[ curr.prop ]: curr.action
				} ), {}
			) ) )
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
 * @return {Function}
 */
function handler() {
	let mediaBrowser = null;

	return function( effect ) {
		switch ( effect.type ) {
			case 'INIT_MEDIA_BROWSER':
				const onSelect = effect.payload;

				if ( ! onSelect ) {
					return;
				}

				mediaBrowser = wp.media( {
					title: __( 'Select or Upload file of your choice' ),
					button: {
						text: __( 'Use this File' )
					},
					multiple: false
				} );

				mediaBrowser.on( 'select', () => {
					const file = mediaBrowser.state()
						.get( 'selection' )
						.first()
						.toJSON();

					onSelect( file );
				} );

				break;
			case 'OPEN_MEDIA_BROWSER':
				if ( mediaBrowser ) {
					mediaBrowser.open();
				}

				break;
			case 'DESTROY_MEDIA_BROWSER':
				mediaBrowser = null;

				break;
		}
	};
}

const applyWitEffects = withEffects( handler )( aperture );

export default applyWitEffects( FileField );
