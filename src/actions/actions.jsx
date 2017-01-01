import {
    HIDE_CREATE_LIST_FORM,
    CREATE_LIST,
    TOGGLE_CREATE_LIST_FORM
} from "ActionTypes";


export const createList = (listData) => {
    return {
        type: CREATE_LIST,
        list: listData
    };
};

export const hideCreateListForm = () => {
    return {
        type: HIDE_CREATE_LIST_FORM
    };
};

export const toggleCreateListForm = () => {
    return {
        type: TOGGLE_CREATE_LIST_FORM
    };
};