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
import term_index from './app/modules/admin/term/reducers/index';
import post_index from './app/modules/admin/post/reducers/index';
import home_banner from './app/modules/frontend/homepage/reducers/home_banner';

/* INCLUDE */
import AdminBootstrap from './app/modules/admin/AdminBootstrap';
import FrontendBootstrap from './app/modules/frontend/FrontendBootstrap';

const rootReducer = combineReducers({
    term_index,
    post_index,
    home_banner
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
            {/* <Route component={AdminBootstrap} path="/admin"/> */}
            <Route component={FrontendBootstrap} path="/"/>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
