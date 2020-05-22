export interface GridState {
    rows:string[],
    cols:string[],
    cells:string[]
}

// Describing the different ACTION NAMES available
export const GRID_TICK = "GRID_TICK";

interface GridTickAction {
    type: typeof GRID_TICK;
    payload: GridState;
}

export type GridTickTypes = GridTickAction;
