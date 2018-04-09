// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// REACT - REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';      
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS ADMIN
import term_index from './app/modules/term/reducers/index';
import post_index from './app/modules/post/reducers/index';

/* INCLUDE */
import AdminBootstrap from './app/modules/AdminBootstrap';

const rootReducer = combineReducers({
    term_index,
    post_index
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
            <Route component={AdminBootstrap} path="/"/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
