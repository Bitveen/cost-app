import * as ActionTypes from "ActionTypes";


export const createList = (list) => {
    return {
        type: ActionTypes.CREATE_LIST,
        list
    };
};

export const toggleCreateListForm = () => {
    return {
        type: ActionTypes.TOGGLE_CREATE_LIST_FORM
    };
};