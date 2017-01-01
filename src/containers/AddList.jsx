import React, { Component } from "react";
import { toggleCreateListForm, createList } from "actions";
import uuid from "uuid";
import { connect } from "react-redux";

class AddList extends Component {

    constructor(props) {
        super(props);
        this.handleNewListClick = this.handleNewListClick.bind(this);
        this.addList = this.addList.bind(this);
    }


    /*
    * Показать/скрыть форму для добавления нового списка
    * */
    handleNewListClick(e) {
        this.props.dispatch(toggleCreateListForm());
    }


    /*
    * Создать новый список
    * */
    addList(e) {

        let listTitle = this.refs.listTitle.value.trim();

        if (listTitle) {
            this.refs.listTitle.value = "";
            this.props.dispatch(createList({
                id: uuid(),
                title: listTitle
            }));
            this.props.dispatch(toggleCreateListForm());
        }

    }


    renderForm() {
        let { listFormVisible } = this.props;
        if (listFormVisible) {
            return (
                <div className="item">
                    <div className="ui input fluid action small">
                        <input type="text" placeholder="Название списка..." ref="listTitle"/>
                        <button className="ui button" onClick={this.addList}>
                            Создать
                        </button>
                    </div>
                </div>
            );
        }
        return null;
    }


    render() {
        let { listFormVisible } = this.props;
        return (
            <div>
                <div className="item">
                    <button onClick={this.handleNewListClick} className={ listFormVisible ? "ui basic button active fluid" : "ui basic button fluid"}><i className="icon write" /> Новый список </button>
                </div>
                { this.renderForm() }
            </div>
        );
    }
}


export default connect((state) => {
    return {
        listFormVisible: state.listFormVisible
    };
})(AddList);