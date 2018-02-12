import { AppStarted } from "./app";
import {
  AddEndorsementFileRequest,
  AddEndorsementRequest,
  AddEndorsementRequestFailed,
  AddEndorsementRequestSucceeded,
  BalanceRequested,
  BalanceRequestFailed,
  BalanceRequestSucceeded,
  GetEndorsementsFileRequest,
  GetEndorsementsRequest,
  GetEndorsementsRequestFailed,
  GetEndorsementsRequestSucceeded,
  GetNumberRequest,
  GetNumberRequestFailed,
  GetNumberRequestSucceeded,
  StoreNumberRequest,
  StoreNumberRequestFailed,
  StoreNumberRequestSucceeded,
  Web3AccountChanged,
  Web3Connected
} from "./web3";

export { AppStarted } from "./app";
export {
  Web3Connected,
  Web3AccountChanged,
  BalanceRequested,
  BalanceRequestFailed,
  BalanceRequestSucceeded,
  GetNumberRequest,
  GetNumberRequestFailed,
  GetNumberRequestSucceeded,
  StoreNumberRequest,
  StoreNumberRequestFailed,
  StoreNumberRequestSucceeded,
  AddEndorsementFileRequest,
  AddEndorsementRequest,
  AddEndorsementRequestFailed,
  AddEndorsementRequestSucceeded,
  GetEndorsementsRequest,
  GetEndorsementsRequestFailed,
  GetEndorsementsRequestSucceeded,
  GetEndorsementsFileRequest
} from "./web3";

export { MyAction } from "./MyAction";

export type AllActions =
  | AppStarted
  | Web3Connected
  | Web3AccountChanged
  | BalanceRequested
  | BalanceRequestFailed
  | BalanceRequestSucceeded
  | GetNumberRequest
  | GetNumberRequestFailed
  | GetNumberRequestSucceeded
  | GetEndorsementsFileRequest
  | StoreNumberRequest
  | StoreNumberRequestFailed
  | StoreNumberRequestSucceeded
  | AddEndorsementFileRequest
  | AddEndorsementRequest
  | AddEndorsementRequestFailed
  | AddEndorsementRequestSucceeded
  | GetEndorsementsRequest
  | GetEndorsementsRequestFailed
  | GetEndorsementsRequestSucceeded;
