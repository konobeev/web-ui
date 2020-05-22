// Describing the shape of the view's slice of state
export const premium = 'premium' as const;
export const volatility = 'volatility' as const;

export enum PriceType { premium = "premium", volatility = "volatility"}

export enum GroupType {Otm, CallPut}

export interface ViewState {
    count: number;
    price: PriceType;
    cell: GroupType;
    filters: string;
}

// Describing the different ACTION NAMES available
export const CHANGE_PRICE = "CHANGE_PRICE";
export const CHANGE_GROUP = "CHANGE_GROUP";

interface ChangePriceAction {
    type: typeof CHANGE_PRICE;
    payload: PriceType;
}

interface ChangeGroupType {
    type: typeof CHANGE_GROUP;
    payload: GroupType;
}

export type ViewActionTypes = ChangePriceAction | ChangeGroupType;
