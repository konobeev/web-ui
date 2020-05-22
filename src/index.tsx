import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store";
import {Provider} from "react-redux";
import {MyApp} from "./MyApp";

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <MyApp />
    </Provider>
);

render(<Root />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
