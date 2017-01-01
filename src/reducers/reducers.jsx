import * as ActionTypes from "ActionTypes";
import { combineReducers } from "redux";



/*
* Для управления добавлением новых элементов списка
* */
export const listsReducer = (state = [], action) => {
    switch(action.type) {
        case ActionTypes.CREATE_LIST:
            return [
                ...state,
                {
                    id: action.list.id,
                    title: action.list.title
                }
            ];
            break;
        default:
            return state;
    }
};



/*
* Для управления скрытием и показом формы добавления нового списка
* */
export const listFormVisibilityReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_CREATE_LIST_FORM:
            return !state;
            break;
        default:
            return state;
    }
};


const appReducer = combineReducers({
    lists: listsReducer,
    listFormVisible: listFormVisibilityReducer
});






export default appReducer;
