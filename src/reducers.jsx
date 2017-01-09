const defaultState = [
    {
        id: 1,
        title: 'First list',
        totalCost: 0
    },
    {
        id: 2,
        title: 'Second list',
        totalCost: 0
    }
];


export const usersLists = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: +new Date,
                    title: action.data.title,
                    totalCost: 0
                }
            ];
        case 'TOTAL_COST_CHANGE':
            return state.map((list) => {
                if (list.id == action.data.id) {
                    list.totalCost = action.data.totalCost;
                }
                return list;
            });
            break;
        default:
            return state;
    }
};





export const addingList = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ADD_LIST':
            return true;
        case 'HIDE_ADD_LIST':
            return false;
        default:
            return state;
    }
};
