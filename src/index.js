import ReactDOM from 'react-dom';
import React from 'react';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/combine-reducers'
import {Provider} from 'react-redux';

const store = createStore(allReducers,composeWithDevTools(
    applyMiddleware(thunk),
  ));

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>, 
document.getElementById('root'));

serviceWorker.register();

