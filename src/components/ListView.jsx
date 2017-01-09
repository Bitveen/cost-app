import React from 'react';
import { connect } from 'react-redux';
import { totalCostChange } from 'actions';
import TopBar from 'TopBar';
import UsersList from 'UsersList';


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



    handleTotalCostChange(e) {
        let val = parseInt(e.target.value, 10);
        let listId = parseInt(this.props.params.listId, 10);
        if (!isNaN(val)) {
            this.props.onTotalCostChange(val, listId);
        }


    }



    render() {
        let {totalCost, title, id} = this.props.list;
        let {users, children} = this.props;
        return (
            <div>
                {children}
                <div className="content-container">
                    <TopBar totalCost={totalCost} />
                    <div className="content">
                        <div className="ui stacked segment">
                            <h4>Название списка: {title}</h4>
                            <div className="ui form">
                                <div className="inline fields">
                                    <div className="five wide field">
                                        <label>Бюджет</label>
                                        <input type="text" placeholder="Бюджет..." defaultValue={totalCost} onChange={this.handleTotalCostChange}/>
                                    </div>
                                </div>
                            </div>
                            <UsersList users={users} listId={id} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }


};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
