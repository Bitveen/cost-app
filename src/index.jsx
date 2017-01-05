import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";


import App from "App";
import Empty from "Empty";
import Content from "Content";

import * as reducers from "reducers";



const appReducer = combineReducers({
    lists: reducers.listsReducer,
    listFormVisible: reducers.listFormVisibilityReducer,
    routing: routerReducer
});


const store = createStore(appReducer);

const history = syncHistoryWithStore(browserHistory, store);


store.subscribe(() => {
    console.log(store.getState());
});


require("style!css!sass!style/app.scss");


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Empty} />
                <Route component={Content} path="list/:listId" />
            </Route>
        </Router>
    </Provider>
    ,document.getElementById("app"));
