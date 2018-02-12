import { combineEpics } from "redux-observable";

import { initialize } from "./app";
import {
  addEndorsement,
  addEndorsementFile,
  getEndorsements,
  getEndorsementsFile,
  getEthAccount,
  getEthBalance,
  getStoredNumber,
  setStoredNumber,
  reloadOnAddEndorsement
} from "./web3";

export const epic = combineEpics(
  getEthAccount,
  getEthBalance,
  initialize,
  getStoredNumber,
  setStoredNumber,
  addEndorsement,
  addEndorsementFile,
  getEndorsements,
  getEndorsementsFile,
  reloadOnAddEndorsement
);
