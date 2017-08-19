import { ADD_ITEM, REMOVE_ITEM, ADD_COMMENT, CHOSE_ACTIVE_ITEM } from '../actions/actions';
// STATE STRUCTURE
// const initialState = {
// 	items: 
// 		[{
// 			name: '',
// 			comments: [{ text: '' }]
// 		}],
// 	activeItem: -1 // index from items array. -1 - no selected item
// }

const initialState = {
	items: [],
	activeItem: -1
}

function itemsReducer(state, action){
	let newState = state;
	switch(action.type) {
		case ADD_ITEM: 
			let newItem = {
				name: action.name,
				comments: []
			}
			newState.push(newItem);
			return newState;

		case REMOVE_ITEM:
			newState.splice(action.id, 1);
			return newState;

		case ADD_COMMENT: 
			newState[action.itemID].comments.push( { text: action.text } );
			return newState;

		default: 
			return state;
	}
}

function activeItemReducer(state, action){
	if(action.type === CHOSE_ACTIVE_ITEM) return action.id;
	else if (action.type === REMOVE_ITEM && state === action.id) return -1;
	else if (action.type === REMOVE_ITEM && action.id < state) return state - 1;
	else return state;
}

export default function rootReducer(state = initialState, action){
	return {
		items: itemsReducer(state.items, action),
		activeItem: activeItemReducer(state.activeItem, action)
	}
}