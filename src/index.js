import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./variables.module.css";
import store from "./store";
import AppContainer from "./containers/AppContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
