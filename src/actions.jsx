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

export const currentCostChange = (currentCost, listId) => {
    return {
        type: 'CURRENT_COST_CHANGE',
        data: {
            currentCost,
            listId
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

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        data: id
    };
};

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        data: user
    };
};



export const updateCurrentCost = (cost, listId) => {
    return {
        type: 'UPDATE_CURRENT_COST',
        data: {
            cost,
            listId
        }
    };
};
