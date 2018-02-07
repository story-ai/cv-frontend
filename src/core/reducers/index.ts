import { combineReducers } from "redux";
import * as form from "redux-form";
import { FormStateMap } from "redux-form/lib/reducer";

import { AllActions } from "../actions";

export interface StateType {
  readonly form: FormStateMap;
}

export const initial: StateType = {
  form: {}
};

export const mainReducer = combineReducers<StateType>({
  form: form.reducer
});

export const reducer = (
  state: StateType = initial,
  action: AllActions
): StateType => {
  return mainReducer(state, action);
};
