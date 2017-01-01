import React from "react";
import { render } from "react-dom";
import App from "App";
import { Provider } from "react-redux";
import { configure } from "store";


const store = configure();


store.subscribe(() => {
    console.log(store.getState());
});

require("style!css!sass!style/app.scss");


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("app"));
