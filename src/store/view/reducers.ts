import {CHANGE_GROUP, CHANGE_PRICE, GroupType, PriceType, ViewActionTypes, ViewState} from "./types";

const initialState: ViewState = {
    count: 0,
    cell: GroupType.CallPut,
    price: PriceType.volatility,
    filters: ""
};

export function viewReducer(
    state = initialState,
    action: ViewActionTypes
): ViewState {
    switch (action.type) {
        case CHANGE_PRICE:
            return {
                ...state,
                count: state.count + 1,
                price: action.payload
            };
        case CHANGE_GROUP:
            return {
                ...state,
                cell: action.payload
            };
        default:
            return state;
    }
}
