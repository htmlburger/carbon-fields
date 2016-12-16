import { lifecycle } from 'recompose';

export default lifecycle({
	componentWillMount() {
		this.props.setupContainer(this.props.id, this.props.meta, this.props.ui);
		this.props.checkVisibility(this.props.id);
	}
});
