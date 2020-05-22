// Describing the shape of the system's slice of state
export type NullableNumber = number | undefined;

export interface FilterState {
    simpleFilter: {
        min:NullableNumber,
        max:NullableNumber,
    } | undefined;
    // loggedIn: boolean;
    // session: string;
    // userName: string;
}

// Describing the different ACTION NAMES available
export const UPDATE_FILTER = "UPDATE_FILTER";

interface UpdateFilterAction {
    type: typeof UPDATE_FILTER;
    payload: FilterState;
}

export type FilterActionTypes = UpdateFilterAction;
