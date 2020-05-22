import {GRID_TICK, GridState, GridTickTypes} from "./types";

const initialState: GridState = {
    rows:[],
    cols:[],
    cells:[]
};

export function gridReducer(
    state = initialState,
    action: GridTickTypes
): GridState {
    switch (action.type) {
        case GRID_TICK: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}
