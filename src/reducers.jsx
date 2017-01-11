const defaultState = [
    {
        id: 1,
        title: 'Премии 2016',
        totalCost: 20000,
        currentCost: 0
    },
    {
        id: 2,
        title: 'Премии 2015',
        totalCost: 30000,
        currentCost: 0
    }
];
//
// const defaultStateUsers = [
//     {
//         id: 1,
//         firstName: 'Иван',
//         lastName: 'Иванов',
//         middleName: 'Иванович',
//         cost: 0,
//         listId: 1
//     },
//     {
//         id: 2,
//         firstName: 'Петр',
//         lastName: 'Петров',
//         middleName: 'Петрович',
//         cost: 0,
//         listId: 1
//     }
// ];

export const usersLists = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: +new Date,
                    title: action.data.title,
                    totalCost: 0,
                    currentCost: 0
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
        case 'UPDATE_CURRENT_COST':
            return state.map((list) => {
                if (list.id === action.data.listId) {
                    list.currentCost = parseInt(action.data.cost, 10);
                }
                return list;
            });
        default:
            return state;
    }
};


export const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            let newUser = {
                id: +new Date,
                firstName: action.data.user.firstName,
                lastName: action.data.user.lastName,
                middleName: action.data.user.middleName,
                cost: action.data.user.cost,
                listId: action.data.listId
            };
            return state.concat([newUser]);
        case 'DELETE_USER':
            return state.filter(user => user.id !== action.data);
        case 'UPDATE_USER':
            return state.map((user) => {
                if (user.id === action.data.id) {
                    user = action.data;
                }
                return user;
            });
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
