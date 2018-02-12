import { keccak256 } from "js-sha3";
import { Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";

import { AllActions } from "../../actions";
import {
  AddEndorsementFileRequest,
  AddEndorsementRequest,
  AddEndorsementRequestFailed,
  AddEndorsementRequestSucceeded,
  GetEndorsementsRequest,
  GetEndorsementsRequestFailed,
  GetEndorsementsRequestSucceeded,
  GetEndorsementsFileRequest
} from "../../actions/web3/endorser-service";
import { StateType } from "../../reducers";
import { defaultAccount$, endorser$ } from "../../web3";

export const getEndorsements: Epic<AllActions, StateType> = (action$, state$) =>
  action$
    .ofType<GetEndorsementsRequest>(GetEndorsementsRequest.type)
    .withLatestFrom(endorser$)
    .mergeMap(([action, endorser]) => {
      const prom = endorser.methods.getEndorsements(action.hash).call();

      const x = Observable.fromPromise(
        prom
          .then(
            (endorsements: string[]) =>
              new GetEndorsementsRequestSucceeded(action.hash, endorsements)
          )
          .catch(e => new GetEndorsementsRequestFailed(e, action.hash))
      );
      return x;
    });

export const addEndorsement: Epic<AllActions, StateType> = (action$, state$) =>
  action$
    .ofType<AddEndorsementRequest>(AddEndorsementRequest.type)
    .withLatestFrom(endorser$)
    .withLatestFrom(defaultAccount$)
    .mergeMap(([[action, endorser], account]) =>
      Observable.fromPromise(
        endorser.methods.endorse(action.hash).send({ from: account })
      )
        .map(x => new AddEndorsementRequestSucceeded(action.hash))
        .catch(e =>
          Observable.of(new AddEndorsementRequestFailed(e, action.hash))
        )
    );

export const reloadOnAddEndorsement: Epic<AllActions, StateType> = (
  action$,
  state$
) =>
  action$
    .ofType<AddEndorsementRequestSucceeded>(AddEndorsementRequestSucceeded.type)
    .map(x => new GetEndorsementsRequest(x.hash));
// .ignoreElements();

const hashThing = (action: { file: string | Blob }): Observable<string> => {
  let obs: Observable<string | ArrayBuffer>;
  if (typeof action.file === "string") {
    obs = Observable.of(action.file);
  } else {
    const fileReader = new FileReader();
    obs = Observable.fromEvent<{ target: { result: ArrayBuffer } }>(
      fileReader,
      "load"
    ).map(event => event.target.result);
    fileReader.readAsArrayBuffer(action.file);
  }

  return obs.map(x => `0x${keccak256(x)}`);
};

export const addEndorsementFile: Epic<AllActions, StateType> = (
  action$,
  state$
) =>
  action$
    .ofType<AddEndorsementFileRequest>(AddEndorsementFileRequest.type)
    .mergeMap(hashThing)
    .map(hash => new AddEndorsementRequest(hash));

export const getEndorsementsFile: Epic<AllActions, StateType> = (
  action$,
  state$
) =>
  action$
    .ofType<GetEndorsementsFileRequest>(GetEndorsementsFileRequest.type)
    // .debounceTime(500)
    .mergeMap(hashThing)
    .map(hash => new GetEndorsementsRequest(hash));
