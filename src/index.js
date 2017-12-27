import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Route, Router} from "react-router";
import app from "./components/app";
import page404 from "./components/page404";
import store from "./store";

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/speller' component={app}/>
        <Route path='*' component={page404}/>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
