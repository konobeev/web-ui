import {GRID_TICK, GridState} from "./types";

export function gridTick(newTick: GridState) {
    return {
        type: GRID_TICK,
        payload: newTick
    };
}
