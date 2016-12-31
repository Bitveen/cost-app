import React, { Component } from "react";

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="ui single line table selectable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Оплата</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot className="full-width">
                    <tr>
                        <th>
                            <div className="ui small primary labeled icon button">
                                <i className="user icon"></i>
                                    Добавить пользователя
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        );
    }

}
