/**
 * The external dependencies.
 */
import {
	get,
	find,
	kebabCase,
	snakeCase
} from 'lodash';
import { applyMiddleware } from 'redux';

// {
// 	cf: {
// 		<BlockId>: {
// 			<FieldName>: {
// 				<Id>: String,
// 				<Type>: String,
// 				<BaseName>: String,
// 				<Name>: String,
// 				<Label>: String,
// 				<Value>: mixed
// 			}
// 		}
// 	}
// }

// const store = registry.registerStore( reducerKey, options );

// 			if ( options.controls ) {
// 				const middleware = createMiddleware( options.controls );
// 				const enhancer = applyMiddleware( middleware );
// 				const createStore = () => store;

// 				Object.assign(
// 					store,
// 					enhancer( createStore )( options.reducer )
// 				);

// 				registry.namespaces[ reducerKey ].supportControls = true;
// 			}

// 			return store;

// wp.reduxRoutine

class Text extends React.Component {
	render() {
		return <input type="text" value={this.props.value} onChange={this.props.onChange} />
	}
}

const fieldTypes = {
	'text': Text
};

function getFieldType(type) {
	return fieldTypes[type] || null;
}

/**
 * Define the components used to render the block.
 */
class ContainerEdit extends React.Component {
	constructor() {
		super(...arguments);
		console.log('remounted', this.props.edits);
	}

	render() {
		console.log('render', this.props.edits);
		return (
			<>
				{this.props.fields.map((field, index) => {
					const Field = getFieldType(field.type);

					return <Field key={index} value={this.props.edits[field.name] || field.value} onChange={e => this.props.editPost({ [field.name]: e.target.value })} />
				})}
			</>
		);
	}
}

const EnhancedContainerEdit = wp.compose.compose(
	wp.data.withSelect((select, ownProps) => {
		// TODO: This should live in our store that will keep track of field defitions.
		const container = find(window.carbon_json.containers, ['id', snakeCase(ownProps.name.replace('carbon-fields/', ''))]);
		const fields = get(container, 'fields', []);
		const edits = select('core/editor').getPostEdits();

		return { fields, edits };
	}),
	wp.data.withDispatch((dispatch) => {
		const { editPost } = dispatch('core/editor');

		return { editPost };
	})
)(ContainerEdit);

class ContainerSave extends React.Component {
	render() {
		return null;
	}
}

// var withDataAlign = wp.compose.createHigherOrderComponent( function( BlockListBlock ) {
//     return function( props ) {
//         console.log(props);

//         return wp.element.createElement(
//             BlockListBlock,
//             props
//         );
//     };
// }, 'withAlign' );

// wp.hooks.addFilter( 'editor.BlockListBlock', 'my-plugin/with-data-align', withDataAlign );

/**
 * Lift off registration of blocks.
 */
const { registerBlockType } = wp.blocks;

window.carbon_json.containers.forEach((container) => {

	registerBlockType(`carbon-fields/${kebabCase(container.id)}`, {
		title: container.title,
		category: 'layout',
		edit: EnhancedContainerEdit,
		save: ContainerSave
	});
});
