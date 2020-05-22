import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {NullableNumber} from "../store/filter/types";
import {AppState} from "../store";
import {createSelector} from "reselect";
import {connect} from "react-redux";

interface ISimpleProperties {
    min: NullableNumber;
    max: NullableNumber;
    onChange: (min: NullableNumber, max: NullableNumber) => void;
}

function SimpleFilter(properties: ISimpleProperties) {
    const {onChange, min, max} = properties;
    const [minimum, setMin] = useState(min?.toString() || '');
    const [maximum, setMax] = useState(max?.toString() || '');

    //const abc =
    useEffect(() => {
        onChange(+minimum, +maximum);
    }, [minimum, maximum, onChange]);

    return <div className={"simple-test left"}>
        <label>Test</label>
        <input value={minimum} onChange={e => setMin(e.target.value.replace(/\D/,''))}/>
        <input value={maximum} onChange={e => setMax(e.target.value.replace(/\D/,''))}/>
    </div>;
}

interface IFilterProperties {
    show: boolean;
}

type SimpleSate = { min: NullableNumber, max: NullableNumber }
interface ISimpleStateProperties {
    name:string;
}
function SimpleState(props:ISimpleStateProperties){
    const [state, setState] = useState<SimpleSate>();
    const {name} = props;
    useEffect(()=>{console.log(`[${state?.min}, ${state?.max}] @ ${name}`)}, [state])
    const onSimpleChange = useCallback((min, max) => setState({min, max}), [setState])
    return {state, onSimpleChange};
}
const filterSelector = (state:AppState) => state.filter;
const getFilter = createSelector(filterSelector, res => {return res;});

export const FilterBar = (properties: IFilterProperties) => {
    const {show} = properties;
    const {state, onSimpleChange} = SimpleState({name:'one'});
    // const {state:state2, onSimpleChange:onSimpleChange2} = SimpleState({name:'two'});
    return (
        //show &&
        <div className={"filter-bar"}>
            <SimpleFilter min={undefined} max={undefined} onChange={onSimpleChange}/>
            <button className={"left"}>Apply</button>
            <button className={"left"}>Reset</button>
        </div>);
};

const newVar = connect(getFilter)(FilterBar);