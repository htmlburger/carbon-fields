/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

export default function withProps( input ) {
	return createHigherOrderComponent( ( OriginalComponent ) => {
		return class WithPropsComponent extends Component {
			render() {
				return (
					<OriginalComponent
						{ ...this.props }
						{ ...input( this.props ) }
					/>
				);
			}
		};
	}, 'withProps' );
}
