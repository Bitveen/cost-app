const defaultState = [
    {
        id: 1,
        title: 'First list'
    },
    {
        id: 2,
        title: 'Second list'
    }
];


export const usersLists = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: +new Date,
                    title: action.data.title
                }
            ];
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
