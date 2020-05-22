import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {createSelector} from "reselect";
import {AppState} from "./store";
import {PriceType, ViewState} from "./store/view/types";
import {changePrice} from "./store/view/actions";

export interface ICmeAppProperties {

}

const viewSelector = createSelector((state: AppState) => state.view, res => res);

export const MyApp = (props: ICmeAppProperties) => {
    return (
        <div>
            <h1>Hello</h1>
            <PriceSwitcher/>
        </div>
    );
}

const priceSelector = createSelector(viewSelector, state => state.price)
const countSelector = createSelector(viewSelector, state => state.count)
const func = (priceType: PriceType): PriceType => {
    const pop = Object.values(priceType).pop();
    if (pop === undefined) return priceType;

    if (Number(pop) === 0) return PriceType.premium
    return PriceType.volatility;
}
const exctract = (obj: any, prop:string) : any => {
    return obj?.[prop]
}

export const PriceSwitcher = () => {
    const dispatch = useDispatch();
    const price = useSelector(priceSelector);
    const count = useSelector(countSelector);

    const volatilityHandler = (checked: boolean) => {
        if (checked) {
            dispatch(changePrice(PriceType.volatility))
        }
    }
    const premiumHandler = (checked: boolean) => {
        if (checked) {
            dispatch(changePrice(PriceType.premium))
        }
    }

    console.log("count: "+ count);
    console.log("price: "+ price);
    Object.entries(price).map(t => console.log(t));

    const priceType = func(price);

    return (
        <>
            <div>{priceType}</div>
            <form>
                <div className="radio">
                    <label>
                        <input type="radio"
                               checked={priceType === PriceType.premium}
                               onChange={e => premiumHandler(!!e.currentTarget.value)}
                        />
                        Premium
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio"
                               checked={priceType === PriceType.volatility}
                               onChange={e => volatilityHandler(!!e.currentTarget.value)}
                        />
                        Volatility
                    </label>
                </div>
            </form>
        </>
    );
}