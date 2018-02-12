import { Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";

import { AllActions, Web3AccountChanged } from "../../actions";
import {
  BalanceRequestFailed,
  BalanceRequestSucceeded
} from "../../actions/web3";
import { StateType } from "../../reducers";
import { defaultAccount$, web3$ } from "../../web3";

export const getEthAccount: Epic<AllActions, StateType> = (action$, state$) =>
  defaultAccount$.map(id => new Web3AccountChanged(id));

export const getEthBalance: Epic<AllActions, StateType> = (action$, state$) =>
  action$
    .ofType<Web3AccountChanged>(Web3AccountChanged.type)
    .withLatestFrom(web3$)
    .mergeMap(([action, web3]): Observable<AllActions> => {
      if (action.account === undefined)
        return Observable.of(
          new BalanceRequestFailed(action.account, "address is undefined")
        );
      const account = action.account;
      return Observable.bindNodeCallback(web3.eth.getBalance)(
        action.account,
        "latest"
      ).map(x => new BalanceRequestSucceeded(account, x));
    });
