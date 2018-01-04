import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import app from "./components/app";
import page404 from "./components/page404";
import store from "./store";

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/speller' component={app}/>
          <Route path='*' component={page404}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
