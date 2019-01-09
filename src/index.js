import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const routing = (
                <Router>
                    <div>
                    <Route path="/" component={App} />
                    </div>
                </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.register();
