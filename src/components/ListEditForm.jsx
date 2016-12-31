import React, { Component } from "react";

export default class ListEditForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui form large">
                <div className="inline field">
                    <label>Название списка:</label>
                    <input type="text" placeholder="Введите название списка..." />
                </div>
                <div className="inline field">
                    <label>Бюджет:</label>
                    <input type="text" placeholder="Введите бюджет..." />
                </div>
            </div>
        );
    }

}
