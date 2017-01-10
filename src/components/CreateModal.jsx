import React from 'react';
import Modal from 'Modal';
import { connect } from 'react-redux';
import { addUser } from 'actions';


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user, listId) => dispatch(addUser(user, listId))
    };
};


export default connect(null, mapDispatchToProps)(Modal);
