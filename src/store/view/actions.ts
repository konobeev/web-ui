import {CHANGE_GROUP, CHANGE_PRICE, GroupType, PriceType} from "./types";

export function changePrice(price: PriceType) {
    return {
        type: CHANGE_PRICE,
        payload: {
            price
        }
    };
}
export function changeGroup(group: GroupType) {
    return {
        type: CHANGE_GROUP,
        payload: {
            group
        }
    };
}
