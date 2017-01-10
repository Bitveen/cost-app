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

export const totalCostChange = (newCost, listId) => {
    return {
        type: 'TOTAL_COST_CHANGE',
        data: {
            totalCost: newCost,
            id: listId
        }
    };
};


export const addUser = (user, listId) => {
    return {
        type: 'ADD_USER',
        data: {
            user,
            listId
        }
    };
};
