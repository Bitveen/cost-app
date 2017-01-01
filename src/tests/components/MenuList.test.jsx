import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import expect from "expect";



import MenuList from "MenuList";


describe("MenuList", () => {
    it("should exist", () => {
        expect(MenuList).toExist();
    });


    it("should render self with provided lists props", () => {
        const testLists = [
            {
                id: 1,
                title: "New list"
            },
            {
                id: 2,
                title: "Another list"
            }
        ];

        const menuList = TestUtils.renderIntoDocument(<MenuList lists={testLists} />);

        const elem = ReactDOM.findDOMNode(menuList);

        expect(elem.querySelectorAll("a").length).toEqual(testLists.length);


    });
});