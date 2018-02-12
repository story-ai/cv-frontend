import { AllActions, GetEndorsementsFileRequest } from "../../actions";
import {
  BalanceRequestSucceeded,
  Web3AccountChanged
} from "../../actions/web3/basic";

export interface StateType {
  address?: string;
  balance: number;
}

export const initial: StateType = {
  address: "",
  balance: 0
};

export const reducer = (state = initial, action: AllActions): StateType => {
  switch (action.type) {
    case BalanceRequestSucceeded.type:
      return {
        ...state,
        balance: action.balance
      };

    case Web3AccountChanged.type:
      return {
        ...state,
        address: action.account
      };
  }
  return state;
};
