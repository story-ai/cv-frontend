import { combineReducers } from "redux";
import * as form from "redux-form";
import { FormStateMap } from "redux-form/lib/reducer";

import { AllActions } from "../actions";
import * as endorser from "./web3/endorser-service";
import * as web3 from "./web3/basic";
import { Web3AccountChanged } from "../actions/web3/basic";

export interface StateType {
  readonly form: FormStateMap;
  readonly endorser: endorser.StateType;
  readonly web3: web3.StateType;
}

export const initial: StateType = {
  form: {},
  endorser: endorser.initial,
  web3: web3.initial
};

export const mainReducer = combineReducers<StateType>({
  form: form.reducer,
  endorser: endorser.reducer,
  web3: web3.reducer
});

export const reducer = (
  state: StateType = initial,
  action: AllActions
): StateType => {
  return mainReducer(state, action);
};
