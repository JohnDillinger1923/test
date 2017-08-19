import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import AppContainer from './containers/AppContainer';

let store;
let localStore = JSON.parse( localStorage.getItem( '_localStore' ) );

if( localStore ) store = configureStore( JSON.parse( localStorage.getItem( '_localStore' ) ) )
else store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<AppContainer />
	</Provider>, 
	document.getElementById('root'));
