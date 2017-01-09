import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from 'reducers';

import App from 'App';
import Index from 'Index';


require('style!css!sass!style/app.scss');



const store = createStore(combineReducers({
    usersLists: reducers.usersLists,
    addingList: reducers.addingList,
    routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);



const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
    </Route>
);



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
    ,document.getElementById('app')
);
