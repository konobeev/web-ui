import {FilterState, UPDATE_FILTER} from "./types";

export function updateFilter(newFilter: FilterState) {
    return {
        type: UPDATE_FILTER,
        payload: newFilter
    };
}
