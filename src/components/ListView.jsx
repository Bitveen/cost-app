import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, props) => {
    let list = state.usersLists.filter(list => list.id === parseInt(props.params.listId, 10))[0];
    return {
        list
    };
};




const ListView = (props) => {
    return (
        <div className="content-container">
            <div className="content">
                <div className="ui stacked segment">
                    <h1>List title: {props.list.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(ListView);
