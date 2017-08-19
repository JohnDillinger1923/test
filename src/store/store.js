import { createStore } from 'redux';
import rootReducer from '../reducers/reducer';

export default function configureStore(preloadedState) {
	return createStore(
			rootReducer, 
			preloadedState
		);
}