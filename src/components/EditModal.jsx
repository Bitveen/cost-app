import React from 'react';
import Modal from 'Modal';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from 'actions';


const mapStateToProps = (state, { params: { listId, userId } }) => {
    return {
        user: state.users.filter((user) => {
            if (user.listId === parseInt(listId, 10) && user.id === parseInt(userId, 10)) {
                return true;
            }
            return false;
        })[0]
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: id => dispatch(deleteUser(id)),
        updateUser: user => dispatch(updateUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
