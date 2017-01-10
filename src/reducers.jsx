const defaultState = [
    {
        id: 1,
        title: 'Премии 2016',
        totalCost: 0
    },
    {
        id: 2,
        title: 'Премии 2015',
        totalCost: 0
    }
];

const defaultStateUsers = [
    {
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        cost: 0,
        listId: 1
    },
    {
        id: 2,
        firstName: 'Петр',
        lastName: 'Петров',
        middleName: 'Петрович',
        cost: 0,
        listId: 1
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


export const users = (state = defaultStateUsers, action) => {
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
