import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import expect from "expect";

import { AddList } from "AddList";


describe("AddList", () => {
    it("should exist", () => {
        expect(AddList).toExist();
    });

    it("should render itself", () => {
        const addList = TestUtils.renderIntoDocument(<AddList />);
        const elem = ReactDOM.findDOMNode(addList);
        expect(elem.classList.contains("addList")).toEqual(true);
    });



});