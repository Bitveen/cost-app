import React from 'react';
import { connect } from 'react-redux';
import { totalCostChange } from 'actions';
import TopBar from 'TopBar';
import UsersList from 'UsersList';
import CostForm from 'CostForm';

const mapStateToProps = (state, { params: { listId }}) => {
    let currentList = state.usersLists.filter(list => list.id === parseInt(listId, 10))[0];
    let users = state.users.filter(user => user.listId === parseInt(listId, 10));
    return {
        list: currentList,
        users
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onTotalCostChange: (newCost, listId) => dispatch(totalCostChange(newCost, listId))
    };
};

class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.handleTotalCostChange = this.handleTotalCostChange.bind(this);
    }



    handleTotalCostChange(newCost) {
        let listId = parseInt(this.props.params.listId, 10);

        if (!newCost) {
            newCost = 0;
        }

        if (!isNaN(newCost)) {
            this.props.onTotalCostChange(parseInt(newCost, 10), listId);
        }


    }



    render() {
        let {users, children, list} = this.props;
        return (
            <div>
                {children}
                <div className="content-container">
                    <TopBar totalCost={list.totalCost} currentCost={list.currentCost} />
                    <div className="content">
                        <div className="ui stacked segment">
                            <h4>Название списка: {list.title}</h4>
                            <CostForm totalCost={list.totalCost} onHandleChange={this.handleTotalCostChange} />
                            <UsersList users={users} listId={list.id} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
