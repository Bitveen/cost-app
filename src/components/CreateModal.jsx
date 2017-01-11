import React from 'react';
import Modal from 'Modal';
import { connect } from 'react-redux';
import { addUser, updateCurrentCost } from 'actions';


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user, listId) => dispatch(addUser(user, listId)),
        updateCurrentCost: (newCost, listId) => dispatch(updateCurrentCost(newCost, listId))
    };
};

const mapStateToProps = (state, { params: { listId }}) => {
    return {
        currentCost: state.usersLists.filter(list => list.id === parseInt(listId, 10))[0].currentCost
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
