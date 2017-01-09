import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from 'reducers';

import App from 'App';
import Index from 'Index';
import ListView from 'ListView';

require('style!css!sass!style/app.scss');



const store = createStore(combineReducers({
    usersLists: reducers.usersLists,
    addingList: reducers.addingList,
    routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);


store.subscribe(() => {
    console.log(store.getState());
});


const routes = (
    <Route path='/' component={App}>
        <Route path='/list/:listId' component={ListView} />
        <IndexRoute component={Index} />
    </Route>
);

function run() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
        ,document.getElementById('app')
    );
}

run();
store.subscribe(run);
