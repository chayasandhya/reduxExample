import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import { counterReducer } from "./reducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import logger from "redux-logger";
/* const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleWasre ran");
      return next(action);
    };
  };
}; */

const myLogger = (store) => (next) => (action) => {
  return next(action);
};
const secondMiddleware = (store) => (next) => (action) => {
  return next(action);
};
const capAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 5) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
