import React, { Component } from "react";
import TopBar from "TopBar";
import ListEditForm from "ListEditForm";
import UserList from "UserList";




export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // забрать всю инфу из store
    }

    render() {
        //console.log(this.props.params.listId);

        return (
            <div className="content-container">
                <TopBar />
                <div className="content">
                    <div className="ui piled segment">
                        <h4 className="ui header" />
                        <ListEditForm />
                        <h4 className="ui horizontal divider header"><i className="users icon" /> Пользователи </h4>
                        <UserList />
                    </div>
                </div>
            </div>
        );
    }
}

