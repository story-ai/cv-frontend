import "../css/style.scss";

import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppStarted } from "../core/actions";
import { StateType } from "../core/reducers";
import { App } from "./App";

export class RootComponent extends React.Component<{
  start: () => AppStarted;
}> {
  componentDidMount() {
    this.props.start();
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default connect((state: StateType) => ({}), {
  start: () => new AppStarted()
})(RootComponent);
