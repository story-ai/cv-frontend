import { Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";

import { AllActions } from "../../actions";
import {
  GetNumberRequest,
  GetNumberRequestFailed,
  GetNumberRequestSucceeded,
  StoreNumberRequest,
  StoreNumberRequestFailed,
  StoreNumberRequestSucceeded
} from "../../actions/web3";
import { StateType } from "../../reducers";
import { defaultAccount$, storage$ } from "../../web3";

export const getStoredNumber: Epic<AllActions, StateType> = (action$, state$) =>
  action$
    .ofType<GetNumberRequest>(GetNumberRequest.type)
    .withLatestFrom(storage$)
    .mergeMap(async ([_, storage]) => storage.methods.get().call())
    .map(x => new GetNumberRequestSucceeded(x))
    .catch(e => Observable.of(new GetNumberRequestFailed(e)));

export const setStoredNumber: Epic<AllActions, StateType> = (action$, state$) =>
  action$
    .ofType<StoreNumberRequest>(StoreNumberRequest.type)
    .withLatestFrom(storage$)
    .withLatestFrom(defaultAccount$)
    .mergeMap(async ([[action, storage], account]) =>
      storage.methods.set(action.number).send({ from: account })
    )
    .map(x => new StoreNumberRequestSucceeded())
    .catch(e => Observable.of(new StoreNumberRequestFailed(e)));

export const reloadStoredNumber: Epic<AllActions, StateType> = (
  action$,
  state$
) =>
  action$
    .ofType<StoreNumberRequestSucceeded>(StoreNumberRequestSucceeded.type)
    .delay(1000)
    .map(() => new GetNumberRequest());
