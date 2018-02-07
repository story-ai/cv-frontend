import "./index.scss";

import * as React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import { StateType } from "../../core/reducers";

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Story Digital CV</title>
  </Helmet>
);

export const AppComponent: React.StatelessComponent<{}> = props => {
  return (
    <div className="app-container">
      <Head />
      <Switch>
        <Route path="/">
          <div>App goes here.</div>
        </Route>
      </Switch>
    </div>
  );
};

export const App = connect((state: StateType) => ({}), {})(AppComponent);
