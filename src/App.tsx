import React, {useContext, useState} from 'react';
import './App.css';
import {FilterBar} from "./Filters/filter-bar";
import {createSelector} from "reselect";
import {AppState} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {GridState, GridTickTypes} from "./store/grid/types";

export const gridSelector = createSelector(
    (state: AppState) => state.grid,
    grid => grid ?? {rows:[],cols:[],cells:[]}
);
const rowSelector = createSelector(
    gridSelector,
    grid => grid.rows);
const colSelector = createSelector(
    gridSelector,
    grid => grid.cols    );
const cellSelector = createSelector(
    gridSelector,
    grid => grid.cells
);

function App() {
    const dispatch = useDispatch();
    useSelector(cellSelector)
    const [filter, setFilter] = useState(false);
    return (
        <div className="App">
            <div className={"top-bar"}>
            </div>
            <FilterBar show={filter}/>
            <div className={"bottom-bar"}></div>
        </div>
    );
}

export default App;
