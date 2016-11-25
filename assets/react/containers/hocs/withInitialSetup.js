/* @flow */

import { compose, lifecycle, withProps } from 'recompose';

const defaultUI = withProps(() => {
	return {
		ui: {}
	};
});

const bootSideEffects = lifecycle({
	componentWillMount() {
		this.props.setupDefaultUIMeta(this.props.id, this.props.ui);
		this.props.checkVisibility(this.props.id);
	}
});

export default compose(defaultUI, bootSideEffects);
