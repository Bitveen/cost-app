import React, { Component } from "react";
import { connect } from "react-redux";
import { createList, hideCreateListForm, toggleCreateListForm } from "actions";


class Menu extends Component {
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }

    createList(e) {
        let { dispatch } = this.props;
        let listTitle = this.refs.listTitle.value.trim();
        if (listTitle) {
            dispatch(hideCreateListForm());
            dispatch(createList({title: listTitle}));
        }
    }

    renderForm() {
        let { isVisibleCreateListForm } = this.props;

        if (isVisibleCreateListForm) {
            return (
                <div className="item">
                    <div className="ui input fluid action small">
                        <input type="text" placeholder="Название списка..." ref="listTitle" />
                        <button className="ui button" onClick={this.createList}>
                            Создать
                        </button>
                    </div>
                </div>
            );
        }
        return null;
    }

    renderList() {
        let { list } = this.props;

        if (!list.length) {
            return (
                <div className="item">
                    <h2 className="ui icon header">
                        <i className="list layout icon" />
                        <div className="content">Списки отсутствуют <div className="sub header">Для создания списка нажмите на кнопку выше.</div>
                        </div>
                    </h2>
                </div>
            );
        }

        return list.map((item) => {
            return (
                <a key={item.id} className="item">{item.title}</a>
            );
        });
    }


    render() {
        let { dispatch, isVisibleCreateListForm } = this.props;


        return (
            <div className="ui left fixed large vertical menu list-control-menu">

                <div className="item">
                    <button onClick={() => {
                        dispatch(toggleCreateListForm());
                    }} className={ isVisibleCreateListForm ? "ui basic button active fluid" : "ui basic button fluid"}><i className="icon write" /> Новый список </button>
                </div>


                { this.renderForm() }
                { this.renderList() }
            </div>
        );
    }
}

export default connect((state) => {
    return {
        isVisibleCreateListForm: state.isVisibleCreateListForm,
        list: state.list
    };
})(Menu);