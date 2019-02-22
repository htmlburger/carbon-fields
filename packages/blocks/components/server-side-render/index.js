/**
 * External dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, RawHTML } from '@wordpress/element';
import { Placeholder, Spinner } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { serialize } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';
import { isEqual, debounce } from 'lodash';

/**
 * This component is slightly modified version of the `ServerSideRender` component
 * that comes by default with Gutenberg.
 *
 * @see https://github.com/WordPress/gutenberg/tree/master/packages/components/src/server-side-render
 */
class ServerSideRender extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		response: null
	};

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.isStillMounted = true;

		// Do the initial rendering.
		this.fetch( this.props );

		// Only debounce once the initial fetch occurs to ensure that the first
		// renders show data as soon as possible.
		this.fetch = debounce( this.fetch, 500 );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.isStillMounted = false;
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} prevProps
	 * @return {void}
	 */
	componentDidUpdate( prevProps ) {
		if ( ! isEqual( prevProps, this.props ) ) {
			this.fetch( this.props );
		}
	}

	/**
	 * Fetch the preview of the block.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	fetch( props ) {
		if ( ! this.isStillMounted ) {
			return;
		}

		if ( null !== this.state.response ) {
			this.setState( { response: null } );
		}

		const { block } = props;

		// Store the latest fetch request so that when we process it, we can
		// check if it is the current request, to avoid race conditions on slow networks.
		const fetchRequest = this.currentFetchRequest = apiFetch( {
			method: 'post',
			path: '/carbon-fields/v1/block-renderer',
			data: {
				name: block.name,
				content: serialize( [ block ] )
			}
		} )
			.then( ( response ) => {
				if ( this.isStillMounted && fetchRequest === this.currentFetchRequest && response && response.rendered ) {
					this.setState( {
						response: response.rendered
					} );
				}
			} )
			.catch( ( error ) => {
				if ( this.isStillMounted && fetchRequest === this.currentFetchRequest ) {
					this.setState( {
						response: {
							error: true,
							errorMsg: error.message
						}
					} );
				}
			} );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { response } = this.state;
		const { className } = this.props;

		if ( ! response ) {
			return (
				<Placeholder className={ className }>
					<Spinner />
				</Placeholder>
			);
		} else if ( response.error ) {
			return (
				<Placeholder className={ className }>
					{ sprintf( __( 'Error loading block: %s', 'carbon-fields-ui' ), response.errorMsg ) }
				</Placeholder>
			);
		} else if ( ! response.length ) {
			return (
				<Placeholder className={ className }>
					{ __( 'No results found.', 'carbon-fields-ui' ) }
				</Placeholder>
			);
		}

		return (
			<RawHTML key="html" className={ className }>
				{ response }
			</RawHTML>
		);
	}
}

export default withSelect( ( select, { clientId } ) => {
	const { getBlock } = select( 'core/editor' );

	return {
		block: getBlock( clientId )
	};
} )( ServerSideRender );
