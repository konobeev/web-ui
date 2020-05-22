import {chatReducer} from "./chat/reducers";
import {systemReducer} from "./system/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {filterReducer} from "./filter/reducers";
import {gridReducer} from "./grid/reducers";
import {viewReducer} from "./view/reducers";

const rootReducer = combineReducers({
    system: systemReducer,
    filter: filterReducer,
    chat: chatReducer,
    view: viewReducer,
    grid: gridReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}
