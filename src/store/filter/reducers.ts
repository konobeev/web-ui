import {FilterActionTypes, FilterState, UPDATE_FILTER} from "./types";

const initialState: FilterState = {
    //loggedIn: false,
    //session: "",
    //userName: ""
    simpleFilter: undefined,
};

export function filterReducer(
    state = initialState,
    action: FilterActionTypes
): FilterState {
    switch (action.type) {
        case UPDATE_FILTER: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}
