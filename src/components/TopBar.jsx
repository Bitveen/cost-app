import React, { Component } from "react";

export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui top fixed menu huge top-bar-menu">
                <p className="item">Бюджет: 0 / 3750000 руб.</p>
            </div>
        );
    }
}
