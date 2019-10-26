import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { compose, createStore } from "redux";
import persistState from "redux-localstorage";
import App from "./App";
import reducer from "./modules/";
import Settings from "./Settings";
import Title from "./shared/Title/";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = createStore(reducer, compose(persistState()));

const Root = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Title label="Price Calculator" />
      <Route path="/" exact component={App} />
      <Route path="/settings" component={Settings} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
