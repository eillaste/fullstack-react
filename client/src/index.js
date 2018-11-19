import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';
// imports combineReducers code from index.js



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

// our index.js is all about redux
// our App.js deals with the view of our app, incl routing