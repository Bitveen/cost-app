import * as ActionTypes from "ActionTypes";
import * as actions from "actions";

import expect from "expect";


describe("Actions", () => {
    describe("toggleCreateListForm", () => {
        it("should create an action to toggle visibility of add list form", () => {

            const expectedAction = {
                type: ActionTypes.TOGGLE_CREATE_LIST_FORM
            };
            expect(actions.toggleCreateListForm()).toEqual(expectedAction);

        });
    });


    describe("createList", () => {
        it("should create an action to add new list", () => {

            const newList = {
                id: 1,
                title: "New list"
            };

            const expectedAction = {
                type: ActionTypes.CREATE_LIST,
                list: newList
            };

            expect(actions.createList(newList)).toEqual(expectedAction);


        });



    });




});

