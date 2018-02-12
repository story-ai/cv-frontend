import { StateType } from "../reducers/index";
import * as endorser from "../reducers/web3/endorser-service";

export const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: StateType) => {
  try {
    // remove sensitive stuff from storage
    const myState = JSON.parse(JSON.stringify(state));
    myState.endorser = endorser.initial;
    localStorage.setItem("state", JSON.stringify(myState));
  } catch (e) {
    // ignore errors
  }
};
