import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent";

class Router extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login/" />
            <Route exact path="/login/" component={LoginComponent} />
            <Route path="/registration/" component={RegisterComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
