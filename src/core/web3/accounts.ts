import "rxjs";

import * as _ from "lodash";
import { Observable } from "rxjs/Observable";

import { web3$ } from "./web3";

export const accounts$ = Observable.interval(500)
  .combineLatest(web3$)
  .flatMap(([_, web3]) => Observable.bindNodeCallback(web3.eth.getAccounts)())
  .distinctUntilChanged<string[]>(_.isEqual);

export const defaultAccount$ = accounts$.map(x => x[x.length - 1]);
