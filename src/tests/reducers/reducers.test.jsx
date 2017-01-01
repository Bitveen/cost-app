import expect from "expect";
import * as reducers from "reducers";
import * as ActionTypes from "ActionTypes";


describe("Reducers", () => {
    describe("listFormVisibilityReducer", () => {
        it("should return the initial state", () => {
            expect(reducers.listFormVisibilityReducer(undefined, {})).toEqual(false);
        });

        it("should toggle state when TOGGLE_CREATE_LIST_FORM action is provided", () => {
            expect(reducers.listFormVisibilityReducer(false, {
                type: ActionTypes.TOGGLE_CREATE_LIST_FORM
            })).toEqual(true);
        });
    });


    describe("listsReducer", () => {
        it("should return the initial state", () => {
            expect(reducers.listsReducer(undefined, {})).toEqual([]);
        });

        it("should handle add list", () => {
            expect(reducers.listsReducer([], {
                type: ActionTypes.CREATE_LIST,
                list: {
                    id: 1,
                    title: "New list"
                }
            })).toEqual([
                {
                    id: 1,
                    title: "New list"
                }
            ]);

        });


    });



});