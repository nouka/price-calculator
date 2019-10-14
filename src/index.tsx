import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { compose, createStore } from "redux";
import persistState from "redux-localstorage";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Settings from "./Settings";
import Title from "./shared/Title/";
import priceCalculator from "./modules/priceCalculator";
import * as serviceWorker from "./serviceWorker";

const store = createStore(priceCalculator, compose(persistState()));

const Root = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Title label="割引価格計算" />
      <Route path="/" exact component={App} />
      <Route path="/settings" component={Settings} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
