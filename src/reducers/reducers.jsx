import {
    TOGGLE_CREATE_LIST_FORM,
    HIDE_CREATE_LIST_FORM,
    CREATE_LIST
} from "ActionTypes";


export const listReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_LIST:
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.list.title
                }
            ];
            break;
        default:
            return state;
    }
};

export const createListReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_CREATE_LIST_FORM:
            return !state;
            break;
        case HIDE_CREATE_LIST_FORM:
            return false
        default:
            return state;
    }
};