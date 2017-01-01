import { createStore, combineReducers } from "redux";
import * as reducers from "reducers";

export function configure() {

    let appReducer = combineReducers({
        list: reducers.listReducer,
        isVisibleCreateListForm: reducers.createListReducer
    });

    return createStore(appReducer);
};