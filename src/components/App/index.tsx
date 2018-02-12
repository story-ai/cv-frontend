import "./index.scss";
import Dropzone from "react-dropzone";

import * as React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import {
  AddEndorsementFileRequest,
  GetNumberRequest
} from "../../core/actions/web3";
import { StateType } from "../../core/reducers";
import {
  GetEndorsementsRequest,
  GetEndorsementsFileRequest,
  AddEndorsementRequest
} from "../../core/actions/web3/endorser-service";

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Story Digital CV</title>
  </Helmet>
);

type PropTypes = {
  endorsements: StateType["endorser"]["endorsements"];
  reload: (file: string | File) => GetEndorsementsFileRequest;
  endorse: (file: string) => AddEndorsementRequest;
  address: string | undefined;
  search: StateType["endorser"]["search"];
};

const Endorsements: React.StatelessComponent<PropTypes> = props => {
  switch (props.endorsements.state) {
    case "LOADED":
      const hash = props.search.hash;
      return (
        <div className="endorsements">
          <h3>Endorsements for Document: {hash}</h3>
          <ul>
            {props.endorsements.value.map(e => (
              <li key={e}>{e === props.address ? `You (${e})` : e}</li>
            ))}
          </ul>
          {typeof hash === "string" && props.address !== undefined ? (
            <button
              onClick={() => props.endorse(hash)}
              disabled={props.endorsements.value.indexOf(props.address) >= 0}
            >
              Endorse
            </button>
          ) : null}
        </div>
      );
    case "PENDING":
      return <div className="endorsements">Loading Endorsements...</div>;
    case "ERROR":
      return (
        <div className="endorsements">
          An error occurred: {props.endorsements.error}
        </div>
      );
    case "INIT":
      return (
        <div className="endorsements">
          Enter a search term above to view endorsements
        </div>
      );
  }
};

const Uploader: React.StatelessComponent<PropTypes> = props => {
  if (props.search.item.type === "string") {
    return (
      <div className="uploader">
        <input
          type="text"
          onChange={e => props.reload(e.target.value)}
          value={props.search.item.value}
        />
      </div>
    );
  }

  let inner;
  if (props.search.item.type === "init") {
    inner = (
      <div className="uploader">
        <p>Try dropping a file here, or click to select a file to upload.</p>
      </div>
    );
  } else if (typeof props.search.item.previewUrl === "string") {
    inner = (
      <div className="uploader">
        <p>
          <img
            style={{ maxWidth: 100, maxHeight: 100 }}
            src={props.search.item.previewUrl}
            alt={props.search.item.title}
          />
        </p>
        <p>(drag another document here to view endorsements)</p>
      </div>
    );
  } else {
    inner = (
      <div className="uploader">
        <p>[{props.search.item.title}]</p>
        <p>(drag another document here to view endorsements)</p>
      </div>
    );
  }

  return (
    <div className="uploader">
      <Dropzone
        multiple={false}
        onDrop={e => (e.length > 0 ? props.reload(e[0]) : null)}
        style={{
          padding: 20,
          margin: 20,
          borderRadius: 10,
          border: "2px dashed grey",
          textAlign: "center"
        }}
      >
        {inner}
      </Dropzone>
    </div>
  );
};

export const AppComponent: React.StatelessComponent<PropTypes> = props => {
  let reloadButton = null;
  if (props.search.item.type !== "init") {
    const search = props.search.item.value;
    reloadButton = (
      <button onClick={() => props.reload(search)}>Re-check</button>
    );
  }
  return (
    <div className="app-container">
      <Head />
      <Switch>
        <Route path="/">
          <div className="contents">
            {/* <EndorseForm /> */}
            <Uploader {...props} />
            {reloadButton}

            <Endorsements {...props} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export const App = connect(
  (state: StateType) => ({
    search: state.endorser.search,
    endorsements: state.endorser.endorsements,
    address: state.web3.address
  }),
  {
    reload: (file: string | File) => new GetEndorsementsFileRequest(file),
    endorse: (file: string) => new AddEndorsementRequest(file)
  }
)(AppComponent);
