export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';
export const CHOSE_ACTIVE_ITEM = 'CHOSE_ACTIVE_ITEM';

export function choseActiveItem(id) {
	return { type: CHOSE_ACTIVE_ITEM, id }
}

export function addItem(name) {
	return { type: ADD_ITEM, name };
}

export function removeItem(id) {
	return { type: REMOVE_ITEM, id };
}

export function addComment(text, itemID) {
	return { type: ADD_COMMENT, text, itemID };
}