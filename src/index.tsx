import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import combinedReducers from "./reducers/index";

const store = createStore(combinedReducers);
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
