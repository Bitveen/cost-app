import React, { Component } from "react";


export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui left fixed large vertical menu list-control-menu">
                <div className="item">
                    <button className="ui basic button fluid"><i className="icon write"></i> Новый список </button>
                </div>

                <div className="item">
                    <div className="ui input fluid action small">
                        <input type="text" placeholder="Название списка..." />
                        <button className="ui button">
                            Создать
                        </button>
                    </div>
                </div>
                <a className="item active">Список за декабрь 2016 года</a>
            </div>
        );
    }
}
