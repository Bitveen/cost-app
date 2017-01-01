import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "App";
import appReducer from "reducers";


const store = createStore(appReducer);


store.subscribe(() => {
    console.log(store.getState());
});


require("style!css!sass!style/app.scss");


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("app"));
