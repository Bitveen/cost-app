import React, { Component } from "react";

export default class Empty extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <div className="ui piled segment">
                        <h4 className="centered">Для начала работы выберите список или создайте новый.</h4>
                    </div>
                </div>
            </div>
        );
    }
}
