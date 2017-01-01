import React, { Component } from "react";
import { connect } from "react-redux";
import AddList from "AddList";
import MenuList from "MenuList";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { lists } = this.props;
        return (
            <div className="ui left fixed large vertical menu list-control-menu">
                <AddList />
                <MenuList lists={lists} />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        lists: state.lists
    };
})(Menu);