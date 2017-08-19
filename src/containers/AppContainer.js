import App from '../components/App';
import {connect} from 'react-redux';
import { choseActiveItem, addItem, removeItem, addComment, } from '../actions/actions';

const mapStateToProps = (state) => {
	return {
		store: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem: (id) => dispatch(removeItem(id)),
		addItem: (name) => dispatch(addItem(name)),
		addComment: (text, itemID) => dispatch(addComment(text, itemID)),
		choseActiveItem: (id) => dispatch(choseActiveItem(id))
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;