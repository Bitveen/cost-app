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
import EditModal from 'EditModal';
import CreateModal from 'CreateModal';


require('style!css!sass!style/app.scss');



const store = createStore(combineReducers({
    usersLists: reducers.usersLists,
    addingList: reducers.addingList,
    users: reducers.users,
    routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);



const routes = (
    <Route path='/' component={App}>
        <Route path='/list/:listId' component={ListView}>
            <Route path='/list/:listId/user/:userId/edit' component={EditModal} />
            <Route path='/list/:listId/user/new' component={CreateModal} />
        </Route>
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
