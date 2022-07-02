import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./reducers/index";

const logger = function ({ dispatch, getState }: any) {
  return function (next: any) {
    return function (action: any) {
      //middleware code
      if (typeof action !== "function")
        console.log("ACTION_TYPE=", action.type);
      next(action);
    };
  };
};

const thunk =
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (typeof action === "function") {
      action(dispatch);
      return;
    }
    next(action);
  };
const store = createStore(combinedReducers, applyMiddleware(logger, thunk));
/*console.log("BEFORE DISPATCH:", store.getState());
store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "SUPERMAN" }],------------------for store testing purpose
});
console.log("AFTER DISPATCH:", store.getState());*/
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
