import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// first step is to create the store hook
import { createStoreHook } from "react-redux";

// store -> globalized state

// action (increment, decrement etc)
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducer (describe how your actions transform the state into the next state. it checks your actions)

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStoreHook(counter);

// dispatch (execute the action)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
