import React from 'react';
import Modal from 'Modal';
import { connect } from 'react-redux';
import { deleteUser, updateUser, updateCurrentCost } from 'actions';


const mapStateToProps = (state, { params: { listId, userId } }) => {
    return {
        user: state.users.filter((user) => {
            if (user.listId === parseInt(listId, 10) && user.id === parseInt(userId, 10)) {
                return true;
            }
            return false;
        })[0],
        currentCost: state.usersLists.filter(list => list.id === parseInt(listId, 10))[0].currentCost
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: id => dispatch(deleteUser(id)),
        updateUser: user => dispatch(updateUser(user)),
        updateCurrentCost: (newCost, listId) => dispatch(updateCurrentCost(newCost, listId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
