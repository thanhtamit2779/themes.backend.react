// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';

/*  CSS */

import App from './App';

// REACT - REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';      
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS
import term_index from './app/term/reducers/index';
import term_add from './app/term/reducers/add';

const rootReducer = combineReducers({
    term_index,
    term_add,
    // term_edit
});

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            thunk,
            loggerMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
