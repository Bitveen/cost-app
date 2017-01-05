import React, { Component } from "react";
import Menu from "Menu";
import Content from "Content";

export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        );
    }
}
