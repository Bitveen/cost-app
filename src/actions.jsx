export const addList = (list) => {
    return {
        type: 'ADD_LIST',
        data: list
    };
};

export const showAddList = () => {
    return {
        type: 'SHOW_ADD_LIST'
    };
};

export const hideAddList = () => {
    return {
        type: 'HIDE_ADD_LIST'
    };
};